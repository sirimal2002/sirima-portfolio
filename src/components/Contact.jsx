import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const inputVariants = {
    focus: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        {!isSubmitted ? (
          <motion.form
            className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 flex items-center"
              >
                <FaUser className="mr-2" />
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 flex items-center"
              >
                <FaEnvelope className="mr-2" />
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 flex items-center"
              >
                <FaCommentAlt className="mr-2" />
                Message
              </label>
              <motion.textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus="focus"
                variants={inputVariants}
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-t-2 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="ml-2" />
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-green-400 text-6xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 720 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              ✓
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-gray-300">
              Your message has been sent successfully. We&apos;ll get back to
              you soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
