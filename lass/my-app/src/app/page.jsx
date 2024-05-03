
import Image from "next/image";
import Link from "next/link";
import WordOfTheDay from '../components/WordOfTheDay.client'; // Import the new component
import { TypewriterEffectSmooth } from "../components/typewriter";
import { InfiniteMovingCardsDemo } from "../components/testemonials";
import { Button } from "@nextui-org/react";
export default function Landing() {


  const words = [
    {
      text: "Get",
      className: "text-white dark:text-white",
    },
    {
      text: "Started",
      className: "text-white dark:text-white",
    },
    {
      text: "Now",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
      <div className="h-screen w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] fixed"></div>
      <div className="h-screen w-screen pt-20"> {/* Added padding-top here */}
        <section className="w-full inline-block text-center mb-100">
          <h1 className="head_text text-center">
            <span className="mr-4 inline-block text-white">Code Sprout</span>
            <br className="max-md:hidden" />
            <span className="green_gradient fix-cut-off inline-block">
              Cultivate Your Coding Potential
            </span>
          </h1>
          <p className="desc font-poppins" style={{ margin: '0 auto' }}>
            LASS is an online ed-tech platform which helps students learn to code at lightning speeds.
          </p>
        </section>
        <div className="text-center flex justify-center items-center w-screen mt-10 text-5xl transform hover:-translate-y-1 transition-all duration-200">
          <TypewriterEffectSmooth className="typewriter" words={words} />
        </div>
        <div className="flex justify-center mb-0">
          <Link href="signIn/studentSignup">
            <Button radius="full" className="bg-gradient-to-tr from-blue-900 via-indigo-600 to-purple-900 text-white shadow-lg mr-10 mb-0">
              I'm a Student
            </Button>
          </Link>
          <Link href="signIn/teacherSignup">
            <Button radius="full" className="bg-gradient-to-tr from-purple-900 via-indigo-600 to-blue-900 text-white shadow-lg ml-4">
              I'm a Teacher
            </Button>
          </Link>
        </div>
        <WordOfTheDay /> {/* Include the new component */}
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}
