import BlogCard from "./blog-card";

export default function Home() {
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[120px]">
      <BlogCard />
    </div>
  );
}
