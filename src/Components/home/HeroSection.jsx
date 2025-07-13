import Slider from "./Slider";
import Content from "./Content";

export default function HeroSection() {
  return (
    <section className="flex flex-col pt-10 pb-5 lg:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-8 py-10 gap-10">
  {/* Left: Content */}
  <div className="w-full lg:w-1/2">
    <Content />
  </div>

  {/* Right: Slider */}
  <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[60vh] overflow-hidden rounded-lg">
    <Slider />
  </div>
</section>
  )
}
