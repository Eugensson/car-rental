"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

export const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 overflow-hidden bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease.
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                assumenda sequi nisi quod eos facere molestiae laboriosam
                quaerat ipsam explicabo.
              </motion.p>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex justify-center md:justify-start items-center gap-x-3"
              >
                <button className="btn-cta">
                  <Image
                    width={132}
                    height={36}
                    src="/assets/icons/buttons/google-play.svg"
                    alt="GooglePlay"
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    width={132}
                    height={36}
                    src="/assets/icons/buttons/app-store.svg"
                    alt="AppStore"
                  />
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src="/assets/images/cta/phone.svg"
              alt="Phone"
              width={320}
              height={640}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
