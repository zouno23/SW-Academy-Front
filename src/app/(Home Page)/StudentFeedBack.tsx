import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Male from "@/../../public/Resources/userMale.png";
import Female from "@/../../public/Resources/UserFemale.png";
import Illustration from "@/../../public/Resources/StudentFeedBack.png";
function StudentFeedBack() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            What Our Students Say
          </h2>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <Image src={Male} alt="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="font-bold">Wajdy Bouon</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "SW Academy has been a game-changer for my learning journey.\n
                The interactive lessons and personalized approach have\n helped
                me achieve my goals."
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <Image src={Female} alt="" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="font-bold">Sarah Anderson</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "I highly recommend SW Academy to anyone looking to expand\n
                their knowledge. The expert instructors and flexible\n
                scheduling have made learning a breeze."
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={Illustration}
            width={2000}
            height={2000}
            alt="Testimonial Illustration"
            className="max-w-full rounded-2xl border-2"
          />
        </div>
      </div>
    </section>
  );
}

export default StudentFeedBack;
