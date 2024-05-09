import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"; 

export default function Layout({ children }) {
  return (
    <div className="flex bg-black h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="">
        <Navbar useage="dash"/>
        <Sidebar />
      </div>
      
      <div className=" ">{children}</div>
    </div>
  );
}