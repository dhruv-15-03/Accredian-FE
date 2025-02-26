import { motion } from "framer-motion";
import { FaGift, FaUsers, FaWallet, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const benefitsData = [
  {
    icon: <FaGift className="text-6xl text-blue-500" />,
    title: "Exciting Rewards",
    description: "Earn amazing rewards for every successful referral."
  },
  {
    icon: <FaUsers className="text-6xl text-green-500" />,
    title: "More Connections",
    description: "Expand your network by referring your friends and colleagues."
  },
  {
    icon: <FaWallet className="text-6xl text-yellow-500" />,
    title: "Cash Incentives",
    description: "Get direct cash bonuses for every successful referral."
  },
  {
    icon: <FaWallet className="text-6xl text-red-300" />,
    title: "Better Guidance",
    description: "Get the best guidance from best mentors"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Refer & Earn?</h2>

      {/* Benefits Container */}
      <div className="flex justify-center gap-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg w-72 transition-all cursor-pointer"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




  
  