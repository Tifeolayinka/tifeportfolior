import { PROJECTS } from "@/lib/projects";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LazyBookingCalendar } from "@/components/LazyBookingCalendar";

type CaseStudyImageProps = {
    src: string;
    alt: string;
    priority?: boolean;
    caption?: string;
};

function CaseStudyImage({ src, alt, priority = false, caption }: CaseStudyImageProps) {
    return (
        <figure className="my-10">
            <ProjectImage src={src} alt={alt} priority={priority} />
            {caption ? <figcaption className="mt-3 text-[11px] leading-5 text-zinc-500 dark:text-[#77736d]">{caption}</figcaption> : null}
        </figure>
    );
}

function Paragraphs({ content }: { content: string }) {
    return content.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mb-5 text-[15px] leading-[1.7] text-zinc-600 dark:text-[#99958e] md:text-[16px]">
            {paragraph}
        </p>
    ));
}

export default function CaseStudyClient({ slug }: { slug: string }) {
    const project = PROJECTS.find((item) => item.slug === slug);

    if (!project) notFound();

    const projectIndex = PROJECTS.findIndex((item) => item.slug === slug);
    const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
    const projectLinks = project.liveUrls?.length
        ? project.liveUrls
        : project.liveUrl && project.liveUrl !== "#"
            ? [{ label: "Visit link", url: project.liveUrl, platform: "web" as const }]
            : [];
    const details = [
        ...(project.metrics?.slice(0, 3) ?? []),
        { label: "Services", value: project.roles.join(", ") },
    ].slice(0, 4);
    const firstMockup = project.mockups?.[0];
    const remainingMockups = project.mockups?.slice(1) ?? [];

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-[#0d0d0d] dark:text-[#f2eee5] dark:selection:bg-[#f2eee5] dark:selection:text-[#0d0d0d]">
            <nav className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-white/[0.05] dark:bg-[#0d0d0d]/70">
                <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-5 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-[#817d76] md:px-6">
                    <Link href="/#work" className="flex items-center gap-2.5 transition-colors hover:text-zinc-950 dark:hover:text-[#f2eee5]">
                        <ArrowLeft size={18} strokeWidth={1.5} />
                        Home
                    </Link>
                    <Link href={`/work/${nextProject.slug}`} className="flex items-center gap-2.5 transition-colors hover:text-zinc-950 dark:hover:text-[#f2eee5]">
                        Next project
                        <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                </div>
            </nav>

            <main className="relative z-10 mx-auto w-full max-w-[720px] px-5 pb-[52px] pt-[52px] md:px-6 md:pb-[58px] md:pt-16">
                <header className="flex flex-col gap-5">
                    <h1 className="text-[26px] font-bold leading-[1.1] tracking-[-0.015em] text-zinc-950 dark:text-[#f2eee5] md:text-[32px]">
                        {project.title}
                    </h1>
                    <p className="text-[15px] leading-[1.6] text-zinc-600 dark:text-[#99958e] md:text-[16px]">
                        {project.description}
                    </p>
                    {projectLinks.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-2 flex w-fit items-center gap-1.5 text-[16px] text-zinc-950 dark:text-[#f2eee5]"
                        >
                            {link.label}
                            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ))}
                </header>

                <CaseStudyImage src={project.image} alt={`${project.title} hero`} priority />

                <dl className="mt-[52px]">
                    {details.map((detail) => (
                        <div key={detail.label} className="flex items-center justify-between gap-4 border-b border-zinc-200 py-3.5 text-[15px] dark:border-white/10 md:text-[16px]">
                            <dt className="text-zinc-500 dark:text-[#817d76]">{detail.label}</dt>
                            <dd className="max-w-[65%] text-right text-zinc-700 dark:text-[#c9c4ba]">{detail.value}</dd>
                        </div>
                    ))}
                </dl>

                <article className="mt-20">
                    <h2 className="mb-5 text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                        Client Background
                    </h2>
                    <Paragraphs content={project.challenge.summary} />

                    {firstMockup ? (
                        <CaseStudyImage src={firstMockup.url} alt={firstMockup.name} caption={firstMockup.name} />
                    ) : null}

                    <h2 className="mb-5 mt-[90px] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                        Designing {project.title}
                    </h2>
                    <Paragraphs content={project.process.content} />

                    {project.challenge.points.length ? (
                        <>
                            <h2 className="mb-5 mt-[90px] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                                What Needed to Change
                            </h2>
                            <ul className="mb-5 flex list-disc flex-col gap-3 pl-5 text-[15px] leading-[1.7] text-zinc-600 marker:text-zinc-400 dark:text-[#99958e] dark:marker:text-[#817d76] md:text-[16px]">
                                {project.challenge.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </>
                    ) : null}

                    {project.whatIWorkedOn?.length ? (
                        <>
                            <h2 className="mb-5 mt-[90px] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                                Scope of Work
                            </h2>
                            <ul className="mb-5 flex list-disc flex-col gap-3 pl-5 text-[15px] leading-[1.7] text-zinc-600 marker:text-zinc-400 dark:text-[#99958e] dark:marker:text-[#817d76] md:text-[16px]">
                                {project.whatIWorkedOn.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </>
                    ) : null}

                    {remainingMockups.length ? (
                        <>
                            <h2 className="mb-5 mt-[90px] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                                The Product
                            </h2>
                            <p className="mb-5 text-[15px] leading-[1.7] text-zinc-600 dark:text-[#99958e] md:text-[16px]">
                                {project.showcaseDescription}
                            </p>
                            {remainingMockups.map((mockup) => (
                                <CaseStudyImage key={mockup.url} src={mockup.url} alt={mockup.name} caption={mockup.name} />
                            ))}
                        </>
                    ) : null}

                    <h2 className="mb-5 mt-[90px] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px]">
                        {project.result.title}
                    </h2>
                    <Paragraphs content={project.result.content} />

                    {project.result.testimonial ? (
                        <blockquote className="my-12 border-l border-zinc-300 pl-6 dark:border-white/15">
                            <p className="text-[18px] italic leading-[1.6] text-zinc-700 dark:text-[#c9c4ba] md:text-[20px]">
                                “{project.result.testimonial.text}”
                            </p>
                            <footer className="mt-4 text-[12px] text-zinc-500 dark:text-[#817d76]">
                                {project.result.testimonial.author} — {project.result.testimonial.role}
                            </footer>
                        </blockquote>
                    ) : null}
                </article>

                {/* Booking CTA */}
                <section className="mt-24 pt-16 border-t border-zinc-200 dark:border-white/10">
                    <div className="mb-10 text-center">
                        <h2 className="text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-[#f2eee5] md:text-[26px] mb-3">
                            Want something like this?
                        </h2>
                        <p className="text-[15px] leading-[1.7] text-zinc-500 dark:text-[#99958e] max-w-md mx-auto">
                            Book a free 30-minute call and I'll show you exactly what a custom app would look like for your business.
                        </p>
                    </div>
                    <LazyBookingCalendar />
                </section>

                <footer className="mt-24 flex items-center justify-between border-t border-zinc-200 py-6 text-[12px] text-zinc-500 dark:border-white/10 dark:text-[#817d76]">
                    <span>© {new Date().getFullYear()} Tife Olayinka</span>
                    <div className="flex items-center gap-5">
                        <a href="mailto:hello@tifeolayinka.com" className="transition-colors hover:text-zinc-950 dark:hover:text-[#f2eee5]">Contact</a>
                        <Link href="/#work" className="transition-colors hover:text-zinc-950 dark:hover:text-[#f2eee5]">Selected work</Link>
                    </div>
                </footer>
            </main>
        </div>
    );
}
