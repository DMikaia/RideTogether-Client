import Logo from "@/components/common/logo";
import ResetForm from "@/components/reset";
import { wait } from "@/libs/wait";

export default async function Reset() {
  await wait(2000);

  return (
    <main className="flex px-8 md:px-0 flex-col justify-center items-center min-h-screen w-full gap-16 md:gap-8">
      <Logo />

      <section className="flex flex-col gap-2 justify-center items-center w-[328px] md:w-[300px] h-fit">
        <h1 className="text-xl font-bold w-fit">Réinitialisation</h1>

        <ResetForm />
      </section>
    </main>
  );
}
