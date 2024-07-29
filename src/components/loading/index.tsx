export default function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white w-fit h-fit">
      <div className="h-3 w-3 bg-text-950 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 bg-text-950 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 bg-text-950 rounded-full animate-bounce"></div>
    </div>
  );
}
