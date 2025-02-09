import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui";

interface SmallerBannersProps {
  className?: string;
}

export const SmallerBanners: React.FC<SmallerBannersProps> = ({
  className,
}) => {
  return (
    <section
      className={cn("grid grid-cols-4 grid-rows-2 min-h-[700px]", className)}
    >
      <h2 className="visually-hidden">Best Products</h2>
      <div className="col-span-2 row-span-1 flex flex-col justify-center items-end px-14 bg-[url(/images/PlayStation.png)] bg-no-repeat bg-left-bottom">
        <div className="max-w-[338px]">
          <h3 className="font-medium text-5xl mb-2">Playstation 5</h3>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="col-span-2 row-span-2 bg-muted bg-[url(/images/MacBook.png)] bg-no-repeat bg-right p-14 flex items-center">
        <div className="max-w-96">
          <h3 className="text-6xl font-thin">
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
      <div className="col-span-1 row-span-2 bg-muted bg-[url(/images/airpods.png)] bg-no-repeat bg-left p-12 flex items-center justify-end">
        <div className="max-w-[220px]">
          <h3 className="font-thin text-3xl mb-2">
            Apple AirPods <span className="font-bold">Max</span>
          </h3>
          <p>Computational audio. Listen, it&apos;s powerful</p>
        </div>
      </div>
      <div className="bg-primary col-span-1 row-span-2 bg-[url(/images/vision.png)] bg-no-repeat bg-left p-12 flex items-center justify-end">
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
