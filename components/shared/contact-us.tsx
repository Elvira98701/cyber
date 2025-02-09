import React from "react";
import { Container } from "./container";

interface ContactUsProps {
  className?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <div className="py-10 text-center">
          <h1 className="text-5xl font-thin pb-2">
            Contact <span className="font-bold">Us</span>
          </h1>
          <p>
            Say Hello send us your thoughts about our products or share your
            ideas with our Team!
          </p>
        </div>
      </Container>
    </section>
  );
};
