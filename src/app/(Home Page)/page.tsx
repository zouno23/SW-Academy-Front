import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import NavBar from "./NavBar";
import FrontView from "./FrontVue";
import KeyFeatures from "./KeyFeatures";
import StudentFeedBack from "./StudentFeedBack";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <main className="flex-1">
        <FrontView />
        <KeyFeatures />
        <StudentFeedBack />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Explore Our Popular Courses
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our wide selection of high-quality courses across various
                subjects.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Course Thumbnail"
                    className="rounded-md"
                  />
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-bold">
                      Introduction to Web Development
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Learn the fundamentals of web development, including HTML,
                      CSS, and JavaScript.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        12 Lessons
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Course Thumbnail"
                    className="rounded-md"
                  />
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-bold">
                      Data Science Fundamentals
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Dive into the world of data science and learn essential
                      tools and techniques.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        18 Lessons
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Course Thumbnail"
                    className="rounded-md"
                  />
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-bold">
                      Mastering Public Speaking
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Develop the skills to become a confident and effective
                      public speaker.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        15 Lessons
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Course Thumbnail"
                    className="rounded-md"
                  />
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-bold">
                      Graphic Design Essentials
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Learn the fundamental principles and techniques of graphic
                      design.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        22 Lessons
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-" />
    </div>
  );
}

export default Home;
