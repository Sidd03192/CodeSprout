import Image from "next/image";
import WordOfTheDay from './WordOfTheDay.client'; // Import the new component

export default function Landing() {
  return (
    <div className="h-screen w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <section className="w-full inline-block text-center">
        <h1 className="head_text text-center">
          <span className="mr-4 inline-block text-white">Code Sprout</span>{" "}
          <br className="max-md:hidden" />
          <span className="green_gradient fix-cut-off inline-block">
            Cultivate Your Coding
          </span>
        </h1>
        <p className="desc font-poppins" style={{ margin: '0 auto' }}>
          LASS is a online ed-tech platform which helps students learn to code at lightning speeds.
        </p>
      </section>
      <WordOfTheDay /> {/* Include the new component */}
    </div>
  );
}