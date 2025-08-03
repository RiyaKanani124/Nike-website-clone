
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
       question: "Can I customize my Nike shoes?",
      answer: "Yes, Nike offers customization options through Nike By You. You can select different colors, materials, and even add personalized text to create a unique pair of shoes."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number sent to your email."
    },
    {
         question: "Can I customize my Nike shoes?",
      answer: "Yes, Nike offers customization options through Nike By You. You can select different colors, materials, and even add personalized text to create a unique pair of shoes."
    },
   
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 100 countries worldwide."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can contact us via email at support@shoeshop.com or call us at 123-456-7890."
    }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <b>{faq.question}</b> <span>{open === index ? '▲' : '▼'}</span>
          </div>
          {open === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
