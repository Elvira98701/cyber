import type { FC } from "react";

interface Props {
  code: string;
}

export const VerificationUserTemplate: FC<Props> = ({ code }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <div>
      <p>
        Confirmation code: <h2>{code}</h2>
      </p>

      <p>
        <a href={`${siteUrl}/api/auth/verify?code=${code}`}>
          Confirm registration
        </a>
      </p>
    </div>
  );
};
