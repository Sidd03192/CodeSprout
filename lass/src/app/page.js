import Image from "next/image";
import "./globals.css"
export default function Landing() {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Start Coding Now
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> For Students, By Students</span>
        </h1>
        <p className="desc text-center">
          LASS is a online ed-tech platform which helps students learn to code at lightining speeds.
        </p>
    </section>
  );
}
