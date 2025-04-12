"use client";

import type { FC } from "react";
import { useSession } from "next-auth/react";
import { Button, ButtonLink } from "../ui";
import { CircleUser, User } from "lucide-react";

interface ProfileButtonProps {
  onClickSignIn: () => void;
}

export const ProfileButton: FC<ProfileButtonProps> = ({ onClickSignIn }) => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <Button
          variant="secondary"
          size="icon"
          onClick={onClickSignIn}
          type="button"
          className="hover-hover:bg-primary hover-hover:text-background"
        >
          <User size={24} />
        </Button>
      ) : (
        <ButtonLink
          href="/profile"
          variant="secondary"
          size="icon"
          title="profile"
          className="hover-hover:bg-primary hover-hover:text-background"
        >
          <CircleUser size={24} />
        </ButtonLink>
      )}
    </>
  );
};
