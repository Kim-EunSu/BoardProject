import "./globals.css";
import { AvatarProvider } from "@/context/AvatarContext";
import Providers from "@/utils/provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AvatarProvider>
        <Providers>{children}</Providers>
<<<<<<< Updated upstream
        <div id="portal" />
=======
        {/* <div id="portal" /> */}
>>>>>>> Stashed changes
      </AvatarProvider>
    </html>
  );
}
