"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const move = (direction) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) {
        return testimonials.length - 1;
      }

      if (next >= testimonials.length) {
        return 0;
      }

      return next;
    });
  };

  return (
    <div className="panel glow-border overflow-hidden rounded-[32px] p-8 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <div className="eyebrow mb-0">Customer proof</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.04em] text-white sm:text-4xl">
        “{active.quote}”
      </blockquote>

      <div className="mt-8">
        <div className="text-lg font-semibold text-white">{active.author}</div>
        <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
          {active.title}
        </div>
      </div>

      <div className="mt-10 flex gap-2">
        {testimonials.map((testimonial, testimonialIndex) => (
          <button
            key={testimonial.author}
            type="button"
            onClick={() => setIndex(testimonialIndex)}
            className={`h-1.5 rounded-full transition ${
              testimonialIndex === index ? "w-14 bg-[color:var(--color-primary)]" : "w-6 bg-white/12"
            }`}
            aria-label={`Show testimonial ${testimonialIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
