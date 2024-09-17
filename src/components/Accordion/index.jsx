import React, { useState, useRef } from "react";

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left px-4 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none transition duration-300"
        onClick={toggle}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{title}</span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            &#9660;
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-4 py-2 bg-white">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers."
    },
    {
      title: "What is TailwindCSS?",
      content:
        "TailwindCSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup."
    },
    {
      title: "What is Node.js?",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
