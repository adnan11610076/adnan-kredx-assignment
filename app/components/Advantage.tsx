'use client'

import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";


const Advantage = () => {
  const accordionData = [
    {
      id: 1,
      title: "Increase bottom line by reducing costs and increasing efficiency",
      content: [
        "This is the first item's accordion body.",
        "Additional content for the first item.",
        "More details about the first item.",
        "Any other information related to the first item.",
      ],
    },
    {
      id: 2,
      title: "A tool for CFOs to analyze the cash flow and simulate what-if scenarios",
      content: [
        "This is the second item's accordion body.",
        "Additional content for the second item.",
        "More details about the second item.",
        "Any other information related to the second item.",
      ],
    },
    {
      id: 3,
      title: "Use integrated financing to fulfill cash flow gaps just in time",
      content: [
        "This is the third item's accordion body.",
        "Additional content for the third item.",
        "More details about the third item.",
        "Any other information related to the third item.",
      ],
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="advantage mx-auto max-w-screen-xl">
      <h2>The KredX CMS Advantage</h2>
      {accordionData.map((item) => (
        <div
          key={item.id}
          className={`mb-2 flex advantage-content  ${
            openAccordion === item.id ? "bg-gradient-to-r  text-white" : "bg-white "
          }`}
        >
          <div
            className={`accordion-title cursor-pointer p-2 shadow-md w-2/5 ${
              openAccordion === item.id
                ? "bg-gradient-to-r from-teal-700 to-teal-400 rounded-l-lg shadow-md text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => handleAccordionClick(item.id)}
          >
            <h3 className="text-lg">{item.title} <FaArrowRight /></h3>
          </div>
          {openAccordion === item.id && (
            <ul className="accordion-content bg-gradient-to-r rounded-r-lg shadow-md rounded-b-lg from-teal-700 to-teal-400 p-2 w-1/2 list-disc pl-6 text-white">
              {item.content.map((content, index) => (
                <li key={index}>
                 <FaArrowAltCircleRight /> {content} 
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Advantage;
