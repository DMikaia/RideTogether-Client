import Reveal from "@/components/animation/reveal";
import { Button } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container overflow-hidden mx-auto">
      <section
        id="hero"
        className="w-full flex flex-col bg-card md:flex-row-reverse justify-center items-center gap-8 py-8 md:gap-12 md:py-24"
      >
        <Reveal>
          <Image
            src={"/road-trip.webp"}
            alt="A green car"
            width="300"
            height="181"
            className="md:w-[400px] h-fit"
            priority={true}
          />
        </Reveal>

        <Reveal>
          <div className="w-full md:w-[360px] h-fit flex flex-col gap-4">
            <div className="w-full h-fit flex flex-col gap-2 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Trouver un <span className="text-primary">Covoiturage</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground px-4 md:px-0">
                Profitez du covoiturage sans commission pour tous vos trajets,
                qu&#39;ils soient courts ou longs.
              </p>
            </div>
            <Link
              href={"/register"}
              className="w-fit md:w-[264px] px-4 md:px-0 self-center md:self-start"
            >
              <Button className="w-[256px] md:w-full">S&#39;inscrire</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
