"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "./container";
import { ButtonLink } from "../ui";

interface BannerProps {
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <section className={cn("gradient", className)}>
      <Container className="h-screen flex items-center justify-between flex-col lg:flex-row">
        <div className="flex-2 text-center lg:text-left">
          <div className="mt-[25vh] lg:mt-0">
            <span className="text-muted-foreground font-semibold text-2xl">
              Pro.Beyond.
            </span>
            <motion.h1
              className="text-7xl sm:text-8xl text-background font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-thin">IPhone 14</span> Pro
            </motion.h1>
            <p className="text-muted-foreground mb-6 mt-4">
              Created to change everything for the better. For everyone
            </p>
            <ButtonLink href="/catalog" variant="outline" size="lg">
              Shop Now
            </ButtonLink>
          </div>
        </div>
        <motion.div
          className="lg:self-end lg:flex-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="w-[80%] mx-auto lg:ml-auto lg:mr-0 hidden lg:block"
            src="/images/iphone.png"
            width={609}
            height={948}
            alt="phone"
            priority
          />
          <Image
            className="block mx-auto lg:hidden"
            src="/images/iphone-mobile.png"
            width={343}
            height={289}
            alt="phone mobile"
            priority
          />
        </motion.div>
      </Container>
    </section>
  );
};
