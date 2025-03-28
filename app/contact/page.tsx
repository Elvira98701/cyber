import type { Metadata } from "next";
import { ContactUs } from "@/components/shared";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="py-20">
      <ContactUs />
    </main>
  );
}
