import { ProfileForm } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";
import { redirect } from "next/navigation";

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
      <ProfileForm data={user} />
    </main>
  );
}
