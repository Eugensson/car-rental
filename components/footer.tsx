"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as LinkRouter } from "react-scroll";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

import { fadeIn } from "@/variants";
import { Copyright } from "@/components/copyright";

export const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <li className="flex-1 flex flex-col gap-y-8">
            <LinkRouter
              to="home"
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              <Image
                src="/assets/icons/logo.svg"
                width={200}
                height={200}
                alt="logo"
              />
            </LinkRouter>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex flex-col gap-y-4 font-semibold">
              <Link
                href="tel:+441234567890"
                className="flex items-center gap-x-[10px] font-medium hover:underline transition duration-150"
              >
                <FaPhone size={20} />
                (123)456-7890
              </Link>
              <Link
                href="mailto:office@car-rental.com"
                className="flex items-center gap-x-[10px] font-medium hover:underline transition duration-150"
              >
                <FaEnvelope size={20} />
                office@car-rental.com
              </Link>
            </div>
          </li>
          <li className="flex-1 flex flex-col xl:items-center">
            <h3 className="h3 font-bold mb-8">Company</h3>
            <ul className="flex flex-col gap-y-4 font-semibold">
              <li>
                <Link
                  href="#"
                  className="hover:underline transition duration-150"
                >
                  New York
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition duration-150"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition duration-150"
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition duration-150"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition duration-150"
                >
                  How we work
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex-1 flex flex-col xl:items-center">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <ul className="flex flex-col gap-y-4">
              <li className="flex gap-x-2">
                <span className="text-secondary">Mon-Fri:</span>
                <span className="font-semibold">09:00 AM - 09:00 PM</span>
              </li>
              <li className="flex gap-x-2">
                <span className="text-secondary">Sat:</span>
                <span className="font-semibold">09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex gap-x-2">
                <span className="text-secondary">Sun:</span>
                <span className="font-semibold">Closed</span>
              </li>
            </ul>
          </li>
          <li className="flex-1 flex flex-col xl:items-center">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <p className="mb-9 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your email address"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </li>
        </motion.ul>
      </div>
      <Copyright />
    </footer>
  );
};
