import StarsRating from "@/components/StarsRating";
import Image from "next/image";

const Reviews = [
  {
    User: {
      Name: "Jane Doe",
      Image: (
        <Image
          alt="Avatar"
          className="rounded-full"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
      ),
    },
    Review: {
      Rating: 4,
      Comment:
        " This course was incredibly helpful for me to get started with web development. The instructor did a great job explaining the conceptsand providing practical examples. Highly recommended ",
    },
  },
  {
    User: {
      Name: "John Smith",
      Image: (
        <Image
          alt="Avatar"
          className="rounded-full"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
      ),
    },
    Review: {
      Rating: 2,
      Comment:
        " I've been looking for a comprehensive web development course, and this one exceeded my expectations. The curriculum is well-structured, and the instructor's explanations are clear and easy to follow. I feel much more confident in my web development skills after completing this course. ",
    },
  },
];
export function ReviewsTable({}) {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg font-semibold">Course Reviews</h2>
      <div className="mt-4 grid gap-6">
        {Reviews.map((item) => (
          <div className="grid gap-2" key={item?.Review.Rating}>
            <div className="flex items-center gap-2">
              {item?.User?.Image}
              <div>
                <h3 className="font-medium">{item?.User?.Name}</h3>
                <StarsRating Rating={item.Review.Rating} key="1" />
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              {item?.Review?.Comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
