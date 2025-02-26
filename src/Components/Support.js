import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { TextField, Button } from "@mui/material";

export default function Support() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="support" className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-500 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Need Help? We're Here for You!
        </motion.h2>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-center backdrop-blur-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-3xl mx-auto mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-sm opacity-80">support@example.com</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-center backdrop-blur-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt className="text-3xl mx-auto mb-3 text-green-300" />
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-sm opacity-80">+1 (800) 123-4567</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-center backdrop-blur-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaCommentDots className="text-3xl mx-auto mb-3 text-pink-300" />
            <h3 className="text-xl font-semibold">Live Chat</h3>
            <p className="text-sm opacity-80">Chat with our support team</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md backdrop-blur-lg max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField 
              label="Your Name" 
              variant="outlined" 
              fullWidth 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <TextField 
              label="Your Email" 
              variant="outlined" 
              fullWidth 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <TextField 
              label="Your Message" 
              variant="outlined" 
              fullWidth 
              name="message" 
              multiline 
              rows={4} 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="secondary" 
              startIcon={<FaPaperPlane />} 
              fullWidth 
              className="bg-yellow-400 text-white hover:bg-yellow-500 transition-all"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <motion.button 
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
      >
        <FaCommentDots className="text-xl" /> Live Chat
      </motion.button>
    </section>
  );
}


  