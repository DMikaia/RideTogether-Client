import { qa } from "@/helpers/questions";
import Item from "./item";
import { Accordion } from "@/components/common/accordion";

export default function QA() {
  return (
    <section
      id="q&a"
      className="w-full h-fit flex flex-col gap-8 py-16 md:gap-12 md:py-24 bg-primary-200"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
        Foire aux questions
      </h3>

      <Accordion
        type="single"
        collapsible
        className="w-full px-4 md:px-56 flex flex-col gap-4"
      >
        {qa.map((item, index) => (
          <Item
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </Accordion>
    </section>
  );
}
