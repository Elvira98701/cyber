import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl sm:text-8xl font-bold text-center">Not Found</h1>
      <p>Could not find requested resource.</p>
      <ButtonLink href="/" size="lg">
        Return Home
      </ButtonLink>
    </main>
  );
}
