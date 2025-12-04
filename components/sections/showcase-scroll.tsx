"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function ShowcaseScrollSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Explore My <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
          </>
        }
      >
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=75"
            alt="Portfolio Showcase"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
        </div>
      </ContainerScroll>
    </section>
  );
}

