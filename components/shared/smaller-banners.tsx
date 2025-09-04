import type { FC } from "react";

import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SmallerBannersProps {
  className?: string;
}

export const SmallerBanners: FC<SmallerBannersProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 min-h-[700px]",
        className
      )}
    >
      <h2 className="visually-hidden">Best Products</h2>
      <div className="lg:col-span-2 lg:row-span-1 flex flex-col justify-center items-end px-6 py-14 md:p-14 bg-[url(/images/PlayStation.png)] bg-no-repeat bg-[auto_200px] md:bg-contain lg:bg-auto bg-left-bottom ">
        <div className="max-w-48 sm:max-w-[338px]">
          <h3 className="font-medium text-3xl md:text-5xl mb-2">
            Playstation 5
          </h3>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 bg-muted bg-[url(/images/MacBook.png)] bg-no-repeat bg-right bg-[auto_250px] md:bg-contain lg:bg-auto px-6 py-14 md:p-14 flex items-center">
        <div className="max-w-64 sm:max-w-96">
          <h3 className="text-5xl sm:text-6xl font-thin">
            Macbook <span className="font-bold">Air</span>
          </h3>
          <p className="mt-2 mb-4">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <ButtonLink href="/catalog" size="lg">
            Shop Now
          </ButtonLink>
        </div>
      </div>
      <div className="lg:col-span-1 lg:row-span-2 bg-muted bg-[url(/images/airpods.png)] bg-no-repeat bg-left p-12 flex items-center justify-end">
        <div className="max-w-[220px]">
          <h3 className="font-thin text-3xl mb-2">
            Apple AirPods <span className="font-bold">Max</span>
          </h3>
          <p>Computational audio. Listen, it&apos;s powerful</p>
        </div>
      </div>
      <div className="lg:col-span-1 lg:row-span-2 bg-primary bg-[url(/images/vision.png)] bg-no-repeat bg-left p-12 flex items-center justify-end">
        <div className="max-w-[220px]">
          <h3 className="font-thin text-3xl mb-2 text-background">
            Apple Vision <span className="font-bold">Pro</span>
          </h3>
          <p>An immersive way to experience entertainment</p>
        </div>
      </div>
    </section>
  );
};
