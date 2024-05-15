import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"; 

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
      <div className="">
        <Navbar></Navbar>
        <Sidebar />
      </div>
      
      <div className="pag w-screen ">{children}</div>
    </div>
  );
}