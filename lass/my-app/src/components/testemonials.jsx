"use client";

import React from "react";
import { InfiniteMovingCards } from "./testemonialsHelper";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] w-screen rounded-md flex flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I really like the UI [user interface, AKA how it looks]. It's so easy to work with and extremely simple compared to competitors.",
    name: "Alejandro Garcia",
    title: "CS Teacher @ Bridgeland High",
  },
  {
    quote:
      "You either lock in or cock in. Either way, use Code Sprout.",
    name: "Adarsh Hegde",
    title: "CS Student @ Bridgeland High",
  },
  {
    quote: "This website changed the way I give assignments. It is the first truly functional platform that I can safely give coding tests on, and it has been integral for me to help students understand rather than just learn AI.",
    name: "Nikolaos V. Tsekos    ",
    title: "AI Professor @ University of Houston",
  },
  {
    quote:
      "LOVE this website. It's easy to use, has all the features you could want, and students find it hassle-free. Highly recommend!",
    name: "Andrea Arpaci-Dusseau",
    title: "CS Professor @ UW Madison",
  },
  {
    quote:
      "I find this a great testing platform. It's simple and reliable.",
    name: "Stacey Armstrong",
    title: "CS Teacher at Cypress Woods High",
  },
];
