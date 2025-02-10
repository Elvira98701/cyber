import { BreadcrumbSection, Container } from "@/components/shared";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-20 bg-muted">
      <Container>
        <BreadcrumbSection className="py-11" />
      </Container>
      {children}
    </main>
  );
}
