"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "@/variants";
import { SearchContext } from "@/context/search";
import { Searchbar } from "@/components/searchbar";

export const Hero = () => {
  const searchContext = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="h-full flex flex-col xl:flex-row justify-center xl:justify-start items-center">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Global</span>
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find the perfect ride for any adventure with our wide range of
              affordable and reliable rental cars.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex justify-center xl:justify-start items-center gap-x-3"
            >
              <button className="btn-cta">
                <Image
                  width={132}
                  height={36}
                  src="/assets/icons/buttons/app-store.svg"
                  alt="AppStore"
                />
              </button>
              <button className="btn-cta">
                <Image
                  width={132}
                  height={36}
                  src="/assets/icons/buttons/google-play.svg"
                  alt="GooglePlay"
                />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[40vh] md:max-w-[70vw] xl:max-w-[740px] xl:max-h-[542px] xl:absolute xl:right-[10px] min-[1680px]:right-[120px] xl:top-15"
          >
            <Image
              src="/assets/images/hero/car.svg"
              alt="car"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchContext?.searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="z-10 fixed top-[80px] w-full max-w-[1920px]"
        >
          <Searchbar />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Searchbar />
          </motion.div>
        </div>
      )}
    </section>
  );
};
