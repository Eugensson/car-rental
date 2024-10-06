"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeIn } from "@/variants";

import "swiper/css";
import "swiper/css/pagination";

const testimonialList = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    designation: "Photographer anv Videographer",
  },
];

export const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px] w-full cursor-pointer"
      >
        {testimonialList.map(
          ({ message, avatar, name, designation }, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <FaQuoteLeft size={72} className="mb-6 text-accent" />
                <p className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </p>
                <Image
                  width={64}
                  height={64}
                  src={avatar}
                  alt={`${name} avatar`}
                  className="rounded-full object-cover object-center aspect-square mb-4"
                />
                <p className="text-lg font-medium">{name}</p>
                <p className="text-secondary">{designation}</p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </motion.div>
  );
};
