import { ButtonLink } from "@/components/ui";

export default function NotAuth() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl sm:text-8xl font-bold text-center">
        Not Authorized
      </h1>
      <p>You are not authorized to access this resource.</p>
      <ButtonLink href="/" size="lg">
        Go Back
      </ButtonLink>
    </main>
  );
}
