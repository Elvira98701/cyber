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

  const handleSwitchType = () => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path>
            </svg>
            Google
          </Button>
        </div>

        <Button
          variant="secondary"
          onClick={handleSwitchType}
          type="button"
          className="h-12"
        >
          {type === "login" ? "Sign Up" : "Log in"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
