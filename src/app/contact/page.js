"use client";
import Content from "@/Components/home/Content";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

          {isSubmitSuccessful && (
            <p className="mb-4 text-green-600 text-center">
              Thanks for contacting us! We&apos;ll get back to you soon.
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#EE4899] text-white py-2 rounded cursor-pointer hover:bg-[#e82282] transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 bg-white p-6 rounded flex flex-col justify-center">
          <Content />
        </div>
      </div>
    </div>
  );
}
