"use client";

import { useState, type FC } from "react";
import { Button, Dialog, DialogContent } from "@/components/ui";
import { signIn } from "next-auth/react";
import { LoginForm } from "./form/login-form";
import { RegisterForm } from "./form/register-form";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({ open, onClose }) => {
  const [type, setType] = useState<"login" | "register">("login");

  const handleClose = () => {
    onClose();
  };

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-background p-5">
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}

        <hr />
        <p>Or sign in with</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1 text-foreground"
          >
            GitHub
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1 text-foreground"
          >
            Google
          </Button>
        </div>

        <Button
          variant="secondary"
          onClick={onSwitchType}
          type="button"
          className="h-12"
        >
          {type === "login" ? "Sign Up" : "Log in"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
