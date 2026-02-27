import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "../../lib/utils";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

const PARTNER_LOGOS: Logo[] = [
    { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "SABS Approved" },
    { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "PIRB Registered" },
    { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "IOPSA Member" },
    { src: "https://svgl.app/library/clerk-wordmark_light.svg", alt: "City of Joburg" },
    { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "BuildIt Partner" },
    { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Leroy Merlin" },
    { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Plumb-It" },
    { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Insurance Partner" }
];

export function LogoCloud({ className, ...props }: LogoCloudProps) {
    return (
        <div
            className={cn(
                "relative grid grid-cols-2 border-x border-slate-200/50 md:grid-cols-4",
                className
            )}
            {...props}
        >
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-slate-200/50" />

            {PARTNER_LOGOS.map((logo, idx) => (
                <LogoCard
                    key={idx}
                    className={cn(
                        "relative border-r border-b border-slate-200/50",
                        (idx === 0 || idx === 2 || idx === 5 || idx === 7) && "bg-slate-50/50"
                    )}
                    logo={logo}
                >
                    {idx % 3 === 0 && (
                        <PlusIcon
                            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-slate-300"
                            strokeWidth={1}
                        />
                    )}
                </LogoCard>
            ))}

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-slate-200/50" />
        </div>
    );
}

type LogoCardProps = React.ComponentProps<"div"> & {
    logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center bg-white px-4 py-12 md:p-12 transition-colors hover:bg-slate-50",
                className
            )}
            {...props}
        >
            <span className="font-bold text-slate-400 text-sm tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                {logo.alt.toUpperCase()}
            </span>
            {/* 
      Commenting out actual images as these URLs are placeholders, 
      using text branding for a cleaner "Industrial Engineering" look 
      */}
            {/* <img
        alt={logo.alt}
        className="pointer-events-none h-6 select-none md:h-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      /> */}
            {children}
        </div>
    );
}
