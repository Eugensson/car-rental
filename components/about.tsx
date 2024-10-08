"use client";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "@/variants";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="section flex items-center" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              src="/assets/images/about/car01.png"
              alt="Car"
              width={600}
              height={448}
              className="rounded-[20px]"
            />
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified.
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent, choose and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              <motion.ul
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <li className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar
                    size={48}
                    className="text-accent mb-2"
                  />
                  <span className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </span>
                  <span className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </span>
                </li>
                <li className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork
                    size={48}
                    className="text-accent mb-2"
                  />
                  <span className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </span>
                  <span className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </span>
                </li>
                <li className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle
                    size={48}
                    className="text-accent mb-2"
                  />
                  <span className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                  </span>
                  <span className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </span>
                </li>
              </motion.ul>
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
