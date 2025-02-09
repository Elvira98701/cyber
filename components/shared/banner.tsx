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
      <Container className="min-h-screen flex items-center justify-between">
        <div className="flex-2">
          <span className="text-muted-foreground font-semibold text-2xl">
            Pro.Beyond.
          </span>
          <motion.h1
            className="text-8xl text-background font-bold"
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
        <motion.div
          className="self-end flex-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="w-[80%] ml-auto"
            src="/images/iphone.png"
            width={609}
            height={948}
            alt="phone"
            priority
          />
        </motion.div>
      </Container>
    </section>
  );
};
