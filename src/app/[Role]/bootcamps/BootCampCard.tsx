function BootCampCard() {
  return (
    <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          alt="Mobile App Development"
          className="h-full w-full object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/300",
            objectFit: "cover",
          }}
          width={600}
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">Mobile App Development</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Learn to build mobile apps for iOS and Android using modern frameworks
          and technologies.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-1">iOS Development</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Develop iOS apps using Swift and the latest Apple technologies.
            </p>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
              Swift
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootCampCard;
