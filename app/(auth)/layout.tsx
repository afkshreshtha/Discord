import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord-Login",
  description: "",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full flex items-center justify-center">{children}</div>;
};

export default AuthLayout;