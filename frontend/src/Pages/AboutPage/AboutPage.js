import Accordion from "../../Components/Products/Accordion/Accordion";

function AboutPage() {

  const items = [
    {
      label: "What is The Owl?",
      content:
        "The owl was a symbol for Athena, goddess of wisdom and strategy, before the Greeks gave their pantheon human forms.  According to myth, an owl sat on Athena's blind side, so that she could see the whole truth. In Ancient Greece, the owl was a symbol of a higher wisdom, and it was also a guardian of the Acropolis.",
    },
    {
      label: "What is the purpose of this application?",
      content: "To clown on forecasters who are inconsistent",
    },
    {
      label: "Who created the application?",
      content:
        "It was a joint effort between Matthew Babcock(the goat) and Elias Rodriguez",
    },
  ];

  const collapserExpander = (items, expandedIndex) => {
    return items.map((item, index) => {
      if (index === expandedIndex) return "Expanded"
      else return "Collapsed"
    })
  }

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default AboutPage;
