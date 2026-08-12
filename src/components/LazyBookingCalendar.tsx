"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Cal = dynamic(() => import("@calcom/embed-react"), {
    ssr: false,
    loading: () => <CalendarPlaceholder />,
});

function CalendarPlaceholder() {
    return (
        <div className="h-[700px] w-full animate-pulse rounded-[24px] border border-zinc-200 bg-zinc-100 dark:border-white/5 dark:bg-zinc-900" aria-hidden="true" />
    );
}

export function LazyBookingCalendar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShouldLoad(true);
                observer.disconnect();
            },
            { rootMargin: "500px 0px" },
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoad) return;

        void import("@calcom/embed-react").then(({ getCalApi }) =>
            getCalApi({ namespace: "free-app-consultation-business" }).then((cal) => {
                cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
            }),
        );
    }, [shouldLoad]);

    return (
        <div ref={containerRef} className="mb-0 min-h-[700px]">
            {shouldLoad ? (
                <Cal
                    namespace="free-app-consultation-business"
                    calLink="tifeolayinka/free-app-consultation-business"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
                />
            ) : (
                <CalendarPlaceholder />
            )}
        </div>
    );
}
