function NotFound({ message }: { message: string }) {
  return (
    <div className=" h-3/4 w-full flex items-center justify-center text-wrap max-sm:hidden text-2xl font-semibold text-gray-400">
      {message}
    </div>
  );
}

export default NotFound;
