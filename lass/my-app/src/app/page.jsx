import Image from "next/image"; // Import Image component
import Link from "next/link"; // Import Link component
import WordOfTheDay from '../components/WordOfTheDay.client'; // Import the new component
import { TypewriterEffectSmooth } from "../components/typewriter"; // Import TypewriterEffectSmooth component
import { InfiniteMovingCardsDemo } from "../components/testemonials"; // Import InfiniteMovingCardsDemo component
import { Button } from "@nextui-org/react"; // Import Button component

export default function Landing() { // Define Landing component

  const words = [ // Define an array of words with text and class name properties
    {
      text: "Get", // First word "Get"
      className: "text-white dark:text-white", // Class for the first word
    },
    {
      text: "Started", // Second word "Started"
      className: "text-white dark:text-white", // Class for the second word
    },
    {
      text: "Now", // Third word "Now"
      className: "text-blue-500 dark:text-blue-500", // Class for the third word
    },
  ];

  return ( // Start of the return statement
    <> // React fragment shorthand
      <div className="h-screen w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] fixed"></div> // Full-screen overlay styling
      <div className="h-screen w-screen pt-20"> {/* Added padding-top here */}
        <section className="w-full inline-block text-center mb-100"> // Section with styling classes
          <h1 className="head_text text-center"> // Header styling classes for "Code Sprout"
            <span className="mr-4 inline-block text-white">Code Sprout</span> // Text content "Code Sprout"
            <br className="max-md:hidden" /> // Line break hidden on small screens
            <span className="green_gradient fix-cut-off inline-block"> // Styling for a green gradient text
              Cultivate Your Coding Potential // Text content "Cultivate Your Coding Potential"
            </span>
          </h1>
          <p className="desc font-poppins" style={{ margin: '0 auto' }}> // Styling for description text using Poppins font
            LASS is an online ed-tech platform which helps students learn to code at lightning speeds. // Description text
          </p>
        </section>
        <div className="text-center flex justify-center items-center w-screen mt-10 text-5xl transform hover:-translate-y-1 transition-all duration-200"> // Styling for centered text with animation on hover
          <TypewriterEffectSmooth className="typewriter" words={words} /> // Typewriter effect component with words array
        </div>
        <div className="flex justify-center mb-0"> // Flex container with center alignment
          <Link href="signIn/studentSignup"> // Link to student sign-up page
            <Button radius="full" className="bg-gradient-to-tr from-blue-900 via-indigo-600 to-purple-900 text-white shadow-lg mr-10 mb-0"> // Button for students
              I'm a Student // Button text
            </Button>
          </Link>
          <Link href="signIn/teacherSignup"> // Link to teacher sign-up page
            <Button radius="full" className="bg-gradient-to-tr from-purple-900 via-indigo-600 to-blue-900 text-white shadow-lg ml-4"> // Button for teachers
              I'm a Teacher // Button text
            </Button>
          </Link>
        </div>
        <WordOfTheDay /> {/* Include the new component */}
        <InfiniteMovingCardsDemo />
      </div>
    </> // End of React fragment
  );
}