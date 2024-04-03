

import Image from "next/image";
import { TypewriterEffectSmooth } from "./utils/typewriter";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./utils/wordOfTheDay"

export default function Landing() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Started",
    },
    {
      text: "Now",
      className: "text-blue-500 dark:text-blue-500 ",

      
    },
  ];
  return (
    <div className="h-screen w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <section className="w-full inline-block text-center mb-100">
        <h1 className="head_text text-center">
          <span className="mr-4 inline-block text-white">Code Sprout</span>{" "}
          <br className="max-md:hidden" />
          <span className="green_gradient fix-cut-off inline-block">

          Cultivate Your Coding Potential

          </span>
        </h1>
        <p className="desc font-poppins" style={{ margin: '0 auto' }}>
          LASS is a online ed-tech platform which helps students learn to code at lightning speeds.
        </p>
      </section>
      <div className="text-center flex justify-center items-center w-screen mt-10 text-5xl">
      <TypewriterEffectSmooth words={words} />
      <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>


      </div>

    </div>
  );
}
