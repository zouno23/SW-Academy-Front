function KeyFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Explore Our Key Features
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Edify offers a wide range of features to enhance your learning
            experience.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Interactive Lessons</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Engage with interactive lessons and multimedia content to deepen
              your understanding.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Personalized Learning</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Receive personalized recommendations and track your progress to
              optimize your learning journey.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Expert Instructors</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Learn from industry-leading experts who are passionate about
              sharing their knowledge.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Flexible Scheduling</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Access courses on-demand and learn at your own pace, anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
