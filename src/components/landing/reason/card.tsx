import { ReasonElt } from "@/type/reason";

interface Props {
  reason: ReasonElt;
}

export default function Card({ reason }: Props) {
  return (
    <section className="flex flex-col gap-4 rounded-xl shadow-lg bg-card w-full justify-center items-center py-4 px-4">
      <reason.icon className="w-16 h-16 stroke-secondary-600" />

      <div className="w-full h-fit flex flex-col gap-2 text-center">
        <h3 className="text-lg md:text-xl font-normal">{reason.title}</h3>
        <p className="text-sm font-light">{reason.description}</p>
      </div>
    </section>
  );
}
