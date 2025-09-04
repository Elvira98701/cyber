import Image from "next/image";
import { redirect } from "next/navigation";

import { Container, ProfileForm } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findFirst({
    where: { id: Number(session?.id) },
  });

  if (!user) {
    return redirect("/not-auth");
  }

  return (
    <main className="pt-28 pb-12 md:pt-48 md:pb-28">
      <Container className="flex gap-10 justify-between flex-col items-center md:flex-row">
        <ProfileForm data={user} />
        <Image
          src="/images/profile.jpg"
          width={650}
          height={610}
          alt="profile"
          className="max-w-[650px] w-full h-auto"
        />
      </Container>
    </main>
  );
}
