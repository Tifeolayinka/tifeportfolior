"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
    const [ready, setReady] = useState(false);

    useEffect(() => {
        void import("@calcom/embed-react").then(({ getCalApi }) =>
            getCalApi({ namespace: "free-app-consultation-business" }).then((cal) => {
                cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
                setReady(true);
            }),
        );
    }, []);

    return (
        <div className="mb-0 min-h-[700px]">
            {ready ? (
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
