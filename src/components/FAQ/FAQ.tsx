import { IFAQItem, IAccordionItem } from "@/types";
import { StyledAccordion } from "./FAQ.styles";

interface FAQProps {
  questions: IFAQItem[];
}

const FAQ = ({ questions }: FAQProps) => {
  const accordionItems: IAccordionItem[] = questions.map((question) => ({
    id: question.id,
    title: question.question,
    content: question.answer,
  }));
  return (
    <StyledAccordion
      items={accordionItems}
      title="Preguntas Frecuentes"
      allowMultiple={false}
    />
  );
};

export default FAQ;
