"use client";

import type { FC } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "./container";
import { ButtonLink } from "../ui";

interface BannerProps {
  className?: string;
}

export const Banner: FC<BannerProps> = ({ className }) => {
  return (
    <section className={cn("gradient overflow-hidden", className)}>
      <Container className="h-screen flex items-center justify-between flex-col lg:flex-row">
        <div className="flex-2 text-center lg:text-left">
          <div className="mt-[20vh] lg:mt-0">
            <span className="text-muted-foreground font-semibold text-2xl">
              Pro.Beyond.
            </span>
            <motion.h1
              className="text-7xl sm:text-8xl text-background font-bold"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4 }}
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
            className="w-full lg:w-[60%] 2xl:w-[70%] mx-auto sm:ml-auto sm:mr-0 hidden sm:block"
            src="/images/iphone.png"
            width={609}
            height={948}
            alt="phone"
            priority
          />
          <Image
            className="block mx-auto sm:hidden"
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
