"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(e.target);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 2000);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (form) => {
    const errors = {};
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!message.trim()) errors.message = "Message is required";

    return errors;
  };

  const inputVariants = {
    focus: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form
                className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
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
                    name="name"
                    className={`w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
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
                    name="email"
                    className={`w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
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
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    whileFocus="focus"
                    variants={inputVariants}
                  ></motion.textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
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
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    ></motion.div>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-300">
                  Your message has been sent successfully. We&apos;ll get back
                  to you soon!
                </p>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  123 Web Dev Lane, Codeville, TX 12345
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  contact@example.com
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-500 transition"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-500 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-500 transition"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
