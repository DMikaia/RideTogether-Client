import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/common/accordion";

interface Props {
  question: string;
  answer: string;
  index: number;
}

export default function Item({ question, answer, index }: Props) {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="py-2 px-2 md:px-4 md:py-4 rounded-lg bg-card shadow-lg"
    >
      <AccordionTrigger className="text-sm md:text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-xs md:text-base">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
