import { useState } from "react";
import { IFAQItem } from "@/types";
import {
  FAQContainer,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon,
} from "./FAQ.styles";

interface FAQProps {
  questions: IFAQItem[];
}

const FAQ = ({ questions }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Preguntas Frecuentes</FAQTitle>

      <FAQList>
        {questions.map((item, index) => (
          <FAQItem key={item.id} active={activeIndex === index}>
            <FAQQuestion onClick={() => toggleQuestion(index)}>
              {item.question}
              <FAQIcon active={activeIndex === index}>
                {activeIndex === index ? "−" : "+"}
              </FAQIcon>
            </FAQQuestion>

            <FAQAnswer active={activeIndex === index}>{item.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
