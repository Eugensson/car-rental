"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeIn } from "@/variants";
import { Rating } from "@/components/raiting";

import "swiper/css";

const carList = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "/assets/images/carSlider/car01.svg",
    info: [
      { icon: "/assets/icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "/assets/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/assets/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/assets/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/assets/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "/assets/images/carSlider/car02.png",
    info: [
      { icon: "/assets/icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "/assets/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/assets/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/assets/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/assets/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "/assets/images/carSlider/car03.svg",
    info: [
      { icon: "/assets/icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "/assets/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/assets/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/assets/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/assets/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/assets/images/carSlider/car02.svg",
    info: [
      { icon: "/assets/icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "/assets/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/assets/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/assets/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/assets/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
];

export const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {carList.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <Image src={car.image} alt={car.name} width={360} height={264} />
              <div className="flex justify-between">
                <div>
                  <p className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </p>
                  <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  <p className="mb-6 text-accent font-semibold uppercase">
                    {car.price}/day
                  </p>
                </div>
                <Rating value={car.stars} />
              </div>
              <ul className="flex items-center gap-x-3 xl:gap-x-4 w-max mb-6">
                {car.info.map((item, index) => (
                  <li key={index} className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                      <Image
                        src={item.icon}
                        alt={`${item.text} icon`}
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-[12px] uppercase">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-accent btn-lg">See details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
