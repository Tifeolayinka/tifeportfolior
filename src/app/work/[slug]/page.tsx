import CaseStudyClient from "./CaseStudyClient";
import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: `${project.title} Case Study | Tife Olayinka`,
        description: project.description,
        alternates: {
            canonical: `/work/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} Case Study | Tife Olayinka`,
            description: project.description,
            url: `https://tifeolayinka.com/work/${project.slug}`,
            siteName: "Tife Olayinka Portfolio",
            locale: "en_US",
            type: "article",
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} Case Study | Tife Olayinka`,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyClient slug={slug} />;
}
