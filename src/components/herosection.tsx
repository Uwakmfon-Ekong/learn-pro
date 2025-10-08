import { Button } from "./button"
import Image from "next/image"
import HeroImage from "../../public/Group 2.svg"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-8">
            <h1 className="text-[30px] font-outfit sm:text-5xl lg:text-6xl xl:text-[55px] font-bold leading-tight text-balance">
            Embark on a <span className="text-primary">Delightful</span>
            <br />
            Journey of <span className="text-primary">Growth</span> with
            <br />
            <span className="text-primary">Online</span> Learning!
          </h1>

             <p className="text-[18px] text-[#646464] eading-relaxed max-w-xl">
            Explore our wide range of expert-led courses in web-development, data science, project management, and more.
          </p>
          </div>

       

          <div className="flex flex-wrap gap-4">
           <Link href="https://www.notion.so/preshpie/Tech-Path-26f919f0b4d380bc959bd723eafd6ce5">
            <Button className="bg-primary !rounded-[8px] text-primary-foreground hover:bg-primary/90 px-8">
              Get Started
            </Button>
            </Link>
            <Link href="https://x.com/WhakeeSui">
            <Button className="px-8 bg-transparent !text-primary border !rounded-[8px]">
              Contact us
            </Button>
            </Link>
          </div>

          <div>
            <h1>The future of coding is HeroSection.it beins with us and it is the way we go </h1>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="text-4xl font-bold text-[oklch(0.70_0.20_340)]">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[oklch(0.75_0.18_50)]">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Professional</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
      
          
            <div className="relative z-10 flex items-center justify-center h-full">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-full h-full object-contain"
              />
            </div>
      </div>
    </section>
  )
}
