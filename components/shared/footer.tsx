import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-foreground text-background py-28", className)}>
      <Container>
        <div className="flex justify-between gap-5">
          <div className="flex-2">
            <Logo className="text-background" />
            <p className="text-background max-w-96 mt-6">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="max-w-80 flex-1">
            <h2 className="font-semibold mb-2">Services</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="max-w-80 flex-1">
            <h2 className="font-semibold mb-2">Services</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>
        <ul></ul>
      </Container>
    </footer>
  );
};
