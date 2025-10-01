import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        pathname: "/profile/picture/0**",
      },
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        pathname: "/profile/picture/1**",
      },
      {
        protocol: "https",
        hostname: "script.google.com",
        pathname: "/**", // This will allow any path from this host
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
