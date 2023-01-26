import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState("");

  const handleClick = (currIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (expandedIndex === currIndex) {
        return -1
      } else return currIndex;
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={index}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
