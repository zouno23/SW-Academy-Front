import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import picture1 from "@/../../public/Resources/main2.png";
function FrontView() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8 py-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Learn Anytime, Anywhere
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
            SW Academy, your premier destination for high-quality online
            learning. Our platform offers a diverse array of expertly designed
            courses and resources tailored to help you achieve your educational
            and professional goals. With flexible learning options, engaging
            interactive modules, and a vibrant community of learners, SW Academy
            provides an enriching experience that fits your schedule and pace.
            Whether you're seeking to acquire new skills, advance in your
            career, or explore new interests, SW Academy equips you with the
            knowledge and tools to succeed. Join us today and embark on your
            journey to excellence!
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="px-8">Join Now</Button>
            <Button variant={"outline"} className="px-8">
              Explore Courses
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={picture1}
            width={600}
            height={400}
            alt="Hero Illustration"
            className="max-w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default FrontView;
