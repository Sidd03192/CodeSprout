import Image from "next/image";
import "./globals.css";

import {BG} from "./BG.mp4"
export default function Landing() {
  return (
    <section className="w-full inline-block text-center ">

      <h1 className="head_text text-center">
        <span className="mr-4 inline-block">Code Sprout</span>{" "}
        {/* Added margin-right */}
        <br className="max-md:hidden" />
        <span className="green_gradient fix-cut-off inline-block">
          Cultivate Your Coding Potential
        </span>
      </h1>
<<<<<<< Updated upstream:lass/src/app/page.jsx
      <p className="desc">
        LASS is a online ed-tech platform which helps students learn to code at lightning speeds.
      </p>
=======
      {/* ... rest of your component ... */}
>>>>>>> Stashed changes:lass/src/app/page.tsx
    </section>
  );
}
