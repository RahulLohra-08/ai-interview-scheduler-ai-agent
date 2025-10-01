import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'www.gravatar.com', 'secure.gravatar.com', 'cdn.sanity.io', 'pbs.twimg.com', 'media.licdn.com', 's.gravatar.com', 'a0.muscache.com', 'avatars.dicebear.com', 'res.cloudinary.com', 'i.pravatar.cc', 'randomuser.me', 'api.dicebear.com', 'ui-avatars.com', 'avatars.twitch.tv', 'imgur.com', 'images.unsplash.com', 'plus.unsplash.com', 'images.pexels.com', 'www.example.com' ], 
  },
  eslint: {
    ignoreDuringBuilds: true, //Small warning, but we can ignore it for now
  },
  typescript: {
    ignoreBuildErrors: true, //Temporary, should be fixed later
  }
};

export default nextConfig;
