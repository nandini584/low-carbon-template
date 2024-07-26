import Image from "next/image";
import BlogCard from "../Components/Blog/BlogCard";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4] px-36 py-20">
      <h1 className="text-6xl text-black">Sustainability Web Designs <br/> <span className="text-[#490ED9]">Accessible & best SEO <br/> practices</span></h1>
      <BlogCard/>
    </div>
  );
}
