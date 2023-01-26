import { useState } from "react";
import './Accordion.css'

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState("");

  const handleClick = (currIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === currIndex) {
        return -1
      } else return currIndex;
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={index} className="accordion">
        <div onClick={() => handleClick(index)} className="accordion-label">
          {item.label}
        </div>
        {isExpanded && <div className="accordion-content">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
