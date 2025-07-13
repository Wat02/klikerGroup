"use client";

import * as React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  { artist: "Uros", art: "/ui.jpg" },
  { artist: "Dusan", art: "/ui.jpg" },
  { artist: "Dejan", art: "/ui.jpg" },
  { artist: "Nikola", art: "/ui.jpg" },
  { artist: "Nemanja", art: "/ui.jpg" },
  { artist: "Jovan", art: "/ui.jpg" },
  { artist: "Ilija", art: "/ui.jpg" },
];

const popUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md touch-pan-x overflow-x-auto">
      <div className="flex w-full space-x-4 pt-[1.5rem]">
        {works.map((artwork) => (
          <motion.figure
            key={artwork.artist}
            className="shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={popUpVariant}
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] object-cover rounded-md"
                width={300}
                height={400}
                sizes="(max-width: 640px) 150px, 300px"
                priority={false}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              klikergroup{" "}
              <span className="text-black text-[1rem] font-bold ml-[0.2rem]">
                {artwork.artist}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </ScrollArea>
  );
}
