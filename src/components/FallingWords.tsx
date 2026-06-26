"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const WORDS = [
    "Product Design",
    "UX Research",
    "0→1 Launches",
    "Design Systems",
    "Psychology-Led Design",
    "Figma",
    "AI Product",
    "Fintech",
    "B2B Tools",
    "Human-Centered",
];

export function FallingWords() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordElsRef = useRef<(HTMLDivElement | null)[]>([]);
    const cleanupRef = useRef<(() => void) | null>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;
        const container = containerRef.current;
        if (!container) return;

        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const engine = Engine.create({ gravity: { x: 0, y: 1.5 } });

        const floor = Bodies.rectangle(width / 2, height + 25, width + 200, 50, {
            isStatic: true,
            friction: 0.8,
        });
        const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, { isStatic: true });
        const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, { isStatic: true });

        Composite.add(engine.world, [floor, leftWall, rightWall]);

        const bodies: Matter.Body[] = [];

        wordElsRef.current.forEach((el, i) => {
            if (!el) return;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            const x = 60 + Math.random() * (width - 120);
            const y = -(40 + i * 70);

            const body = Bodies.rectangle(x, y, w, h, {
                restitution: 0.3,
                friction: 0.6,
                frictionAir: 0.015,
                density: 0.002,
                chamfer: { radius: h / 2 },
                label: `word-${i}`,
            });
            bodies.push(body);
        });

        Composite.add(engine.world, bodies);

        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });
        Composite.add(engine.world, mouseConstraint);

        container.removeEventListener("mousewheel", (mouse as any).mousewheel);
        container.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

        let isDragging = false;
        Events.on(mouseConstraint, "startdrag", () => { isDragging = true; });
        Events.on(mouseConstraint, "enddrag", () => { isDragging = false; });

        const runner = Runner.create();
        Runner.run(runner, engine);

        let raf = 0;
        const sync = () => {
            bodies.forEach((body, i) => {
                const el = wordElsRef.current[i];
                if (!el) return;
                const { x, y } = body.position;
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
                el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
                el.style.opacity = "1";
            });
            raf = requestAnimationFrame(sync);
        };
        raf = requestAnimationFrame(sync);

        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            Matter.Body.setPosition(floor, { x: newWidth / 2, y: newHeight + 25 });
            Matter.Body.setVertices(floor, Bodies.rectangle(newWidth / 2, newHeight + 25, newWidth + 200, 50).vertices);
            Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
        };
        window.addEventListener("resize", handleResize);

        cleanupRef.current = () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", handleResize);
            Runner.stop(runner);
            Composite.clear(engine.world, false);
            Engine.clear(engine);
        };

        return () => {
            cleanupRef.current?.();
        };
    }, [ready]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[420px] md:h-[500px] overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
        >
            {WORDS.map((word, i) => (
                <div
                    key={word}
                    ref={(el) => { wordElsRef.current[i] = el; }}
                    className="absolute px-5 py-2.5 md:px-6 md:py-3 rounded-full text-[13px] md:text-[15px] font-semibold whitespace-nowrap select-none pointer-events-none shadow-sm border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                    style={{ opacity: 0, left: 0, top: 0 }}
                >
                    {word}
                </div>
            ))}
        </div>
    );
}
