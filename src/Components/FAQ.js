import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How does the Refer & Earn program work?",
    answer: "Simply share your referral link with friends. Once they sign up and make a purchase, you earn rewards."
  },
  {
    question: "What rewards can I earn?",
    answer: "You can earn cash incentives, discounts, and special bonuses for every successful referral."
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer: "No! You can refer as many people as you want and keep earning rewards."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0 }}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-blue-100 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-gray-500" />}
            </button>
            
            {openIndex === index && (
              <motion.div
                className="px-6 pb-4 text-gray-600 text-left"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


  