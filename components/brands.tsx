"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

export const Brands = () => {
  return (
    <section className="xl:pt-8 xl:h-[120px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              width={85}
              height={32}
              src="/assets/icons/brands/ford.svg"
              alt="Ford logo"
            />
          </div>
          <div>
            <Image
              width={85}
              height={50}
              src="/assets/icons/brands/audi.svg"
              alt="Audi logo"
            />
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src="/assets/icons/brands/bmw.svg"
              alt="BMW logo"
            />
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src="/assets/icons/brands/mercedes.svg"
              alt="Mercedes logo"
            />
          </div>
          <div>
            <Image
              width={62}
              height={50}
              src="/assets/icons/brands/mazda.svg"
              alt="Mazda logo"
            />
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src="/assets/icons/brands/vw.svg"
              alt="Volkswagen logo"
            />
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src="/assets/icons/brands/skoda.svg"
              alt="Skoda logo"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
