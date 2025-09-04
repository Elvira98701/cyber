"use client";

import type { FC } from "react";
import { useRef, useState } from "react";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useClickAway } from "react-use";

import { INavItem } from "@/@types";
import { UserActions } from "@/components/shared";
import { Button, Navigation } from "@/components/ui";

interface MobileMenuProps {
  className?: string;
  navList: INavItem[];
}

export const MobileMenu: FC<MobileMenuProps> = ({ className, navList }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpenMenu(false);
  });

  return (
    <div className={className}>
      <Button
        variant="secondary"
        onClick={() => setIsOpenMenu(true)}
        type="button"
      >
        <Menu />
      </Button>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-background z-50 p-6"
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            ref={ref}
          >
            <Navigation
              navList={navList}
              variant="mobile"
              handleClick={() => setIsOpenMenu(false)}
            />
            <UserActions className="flex items-center gap-5 mt-6" />
            <Button
              className="absolute top-4 right-4"
              onClick={() => setIsOpenMenu(false)}
              size="icon"
              type="button"
            >
              <X />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
