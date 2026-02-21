import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentClass: "",
    message: "",
    company: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName || formData.parentName.length < 3) {
      newErrors.parentName = "This field is required.";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.studentClass) {
      newErrors.studentClass = "This field is required.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        parentName: "",
        phone: "",
        email: "",
        studentClass: "",
        message: "",
        company: "",
      });
    }, 1500);
  };

  return (
    <section className="bg-[#FAF7F2] py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-12 md:p-16"
      >
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">
          Send Us an Enquiry
        </h2>
        <p className="text-[#4B5563] mb-10">
          Fill out the form below and our admission team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="hidden"
          />

          {/* Parent Name */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Parent Name *
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#E5E7EB] focus:border-[#7B1E1E] focus:ring-2 focus:ring-[rgba(123,30,30,0.15)] outline-none transition-all"
            />
            {errors.parentName && (
              <p className="text-sm text-red-500 mt-1">{errors.parentName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#E5E7EB] focus:border-[#7B1E1E] focus:ring-2 focus:ring-[rgba(123,30,30,0.15)] outline-none transition-all"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#E5E7EB] focus:border-[#7B1E1E] focus:ring-2 focus:ring-[rgba(123,30,30,0.15)] outline-none transition-all"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Student Class */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Student Class *
            </label>
            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#E5E7EB] focus:border-[#7B1E1E] focus:ring-2 focus:ring-[rgba(123,30,30,0.15)] outline-none transition-all"
            >
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>KG</option>
              <option>Class 1–5</option>
              <option>Class 6–8</option>
              <option>Class 9–10</option>
              <option>Class 11–12</option>
            </select>
            {errors.studentClass && (
              <p className="text-sm text-red-500 mt-1">{errors.studentClass}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your query here..."
              rows="4"
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#E5E7EB] focus:border-[#7B1E1E] focus:ring-2 focus:ring-[rgba(123,30,30,0.15)] outline-none transition-all"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-[#F4B400] text-[#1F2937] font-semibold px-10 py-3 rounded-full hover:bg-[#D89E00] transition-all duration-300 disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-6 bg-[#E6F4EA] text-[#1F2937] rounded-xl px-4 py-3">
            Thank you for your enquiry. Our admission team will contact you shortly.
          </div>
        )}
      </motion.div>
    </section>
  );
}
