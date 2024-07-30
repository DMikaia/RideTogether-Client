import Logo from "@/components/common/logo";
import LoginFom from "@/components/login";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex px-8 md:px-0 flex-col justify-center items-center min-h-screen w-full gap-16 md:gap-8">
      <Logo />

      <section className="flex flex-col gap-2 justify-center items-center w-[328px] md:w-[300px] h-fit">
        <h1 className="text-xl font-bold w-fit text-foreground">Connexion</h1>
        <LoginFom />

        <div className="flex justify-between w-full h-fit">
          <Link
            href={"/forgot"}
            className="w-fit self-start text-xs text-primary underline"
          >
            Mot de passe oublié ?
          </Link>
          <Link
            href={"/register"}
            className="w-fit self-start text-xs text-secondary-foreground underline"
          >
            Pas encore inscrit?
          </Link>
        </div>
      </section>
    </main>
  );
}
