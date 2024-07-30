import Logo from "@/components/common/logo";
import ForgotForm from "@/components/forgot";

export default function Forgot() {
  return (
    <main className="flex px-8 md:px-0 flex-col justify-center items-center min-h-screen w-full gap-16 md:gap-8">
      <Logo />

      <section className="flex flex-col gap-2 justify-center items-center w-[328px] md:w-[300px] h-fit">
        <h1 className="text-xl font-bold w-fit">
        Mot de passe oublié
        </h1>

        <ForgotForm />
      </section>
    </main>
  );
}
