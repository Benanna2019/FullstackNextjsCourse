import { Suspense } from "react";
import Link from "next/link";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import CourseContent from "./components/CourseContent";
import { Button } from "@/shadcn/ui/button";
import { ArrowRight } from "lucide-react";

export default async function Page() {
  return (
    <>
      <div className="min-h-screen pt-24 relative">
        <div className=" w-full h-40 absolute top-0"></div>
        <div className=" w-full h-40 absolute bottom-0"></div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12">

            <div className="container px-4 md:px-6">
              <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center">
                <div className="flex flex-col mx-auto items-center justify-center space-y-4">
                  <div className="text-sm font-medium uppercase tracking-wider text-[#fc5826]">FULLSTACK NEXTJS</div>

                  <div role="button" className="h-4 flex items-center justify-center py-3 px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-full outline-2 outline-white">
                    <Link href="https://buy.stripe.com/bJedR88oKgKm4hx0wLe7m03" className="text-xs">
                      Presale - $149
                    </Link>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <h1 className="text-xl text-white sm:text-5xl md:text-4xl text-center">
                    Fullstack Next.js courses and trainings for Professional Software Developers
                  </h1>
                </div>


                <div className="mt-20 max-w-2xl text-lg text-white md:text-xl text-left">
                  <p>
                    Web development is rapidly changing and knowing what to learn can be overwhelming.
                  </p>

                  <p className="mt-10 w-full text-lg md:text-xl text-left">
                    As a frontend developer, you want to know how to take your skills all the way and build fullstack apps.
                  </p>

                  <p className="mt-10 w-full text-lg md:text-xl text-left">
                    Nextjs is a powerful framework for building fullstack apps with React. But how do you know where to start?
                  </p>

                  <h2 className="mt-10 w-full text-lg md:text-3xl text-left font-bold">
                    Fullstack Nextjs is your guide
                  </h2>

                  <p className="mt-10 w-full text-lg md:text-xl text-left">
                    This course is for you if you want to learn how to build fullstack apps with Next.js.
                    Not only  will we cover Nextjs but we will learn databases, api&apos;s, authentication and more.
                  </p>


                  <section id="content" className="mt-16 w-full">
                    <h3 className="text-xl md:text-3xl font-semibold text-white mb-6">What we will cover</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 ">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Pages Router</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">App Router</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">API Design</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Forms</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Authentication</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Deployment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Databases</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Realtime</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Streaming</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">PWA&apos;s</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#fc5826] rounded-full mr-3"></div>
                        <span className="text-lg text-white">Local First</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div className="pt-24">
        <CourseContent />
      </div> */}

      {/* <div className="border-t border-gray-10">
        <div className="container">
          {/* <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside> 
        </div>
      </div> */}
    </>
  );
}
