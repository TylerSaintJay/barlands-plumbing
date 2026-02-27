"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Star } from "lucide-react";

interface Testimonial {
    text: string;
    image?: string;
    name: string;
    location?: string;
    rating: number;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, location, rating }, i) => (
                                <div
                                    className="p-8 rounded-[2rem] border border-slate-200 bg-white/50 backdrop-blur-sm shadow-xl shadow-slate-200/50 max-w-xs w-full"
                                    key={i}
                                >
                                    <div className="flex items-center gap-1 text-orange-400 mb-4">
                                        {[...Array(rating)].map((_, starIndex) => (
                                            <Star key={starIndex} className="w-3 h-3 fill-current" />
                                        ))}
                                    </div>
                                    <div className="text-slate-700 text-sm italic leading-relaxed mb-6 font-medium">"{text}"</div>
                                    <div className="flex items-center gap-3">
                                        {image ? (
                                            <img
                                                width={40}
                                                height={40}
                                                src={image}
                                                alt={name}
                                                className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-50"
                                            />
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm">
                                                {name[0]}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <div className="font-bold text-slate-900 text-sm tracking-tight">{name}</div>
                                            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{location || 'Verified Client'}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

export const AnimatedTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
    const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 3));
    const secondColumn = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil(2 * testimonials.length / 3));
    const thirdColumn = testimonials.slice(Math.ceil(2 * testimonials.length / 3));

    return (
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
    );
};
