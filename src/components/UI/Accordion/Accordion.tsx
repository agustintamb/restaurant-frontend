import { useState } from "react";
import { IAccordionItem } from "@/types";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
  AccordionTitle,
} from "./Accordion.styles";

interface AccordionProps {
  items: IAccordionItem[];
  title?: string;
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
  className?: string;
}

const Accordion = ({
  items,
  title,
  allowMultiple = false,
  defaultExpandedIds = [],
  className,
}: AccordionProps) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(
    defaultExpandedIds.filter((id) => items.some((item) => item.id === id))
  );

  const isExpanded = (itemId: string) => expandedIds.includes(itemId);

  const toggleItem = (itemId: string) => {
    if (isExpanded(itemId)) {
      setExpandedIds(expandedIds.filter((id) => id !== itemId));
    } else {
      if (allowMultiple) setExpandedIds([...expandedIds, itemId]);
      else setExpandedIds([itemId]);
    }
  };

  return (
    <AccordionContainer className={className}>
      {title && <AccordionTitle>{title}</AccordionTitle>}
      {items.map((item) => (
        <AccordionItem key={item.id} expanded={isExpanded(item.id)}>
          <AccordionHeader onClick={() => toggleItem(item.id)}>
            {item.title}
            <AccordionIcon expanded={isExpanded(item.id)}>
              {isExpanded(item.id) ? "−" : "+"}
            </AccordionIcon>
          </AccordionHeader>
          <AccordionContent expanded={isExpanded(item.id)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
