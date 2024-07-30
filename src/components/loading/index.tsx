import Logo from "../common/logo";

export default function Loading() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-4 justify-center items-center">
      <Logo width={128} />
      <div className="flex space-x-2 justify-center items-center w-fit h-fit">
        <div className="h-3 w-3 bg-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-3 w-3 bg-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-3 w-3 bg-foreground rounded-full animate-bounce"></div>
      </div>
    </main>
  );
}
