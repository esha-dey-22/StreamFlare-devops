/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index.html",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/about.html" },
      { source: "/games/game1", destination: "/games/game1.html" },
      { source: "/games/game2", destination: "/games/game2.html" },
      { source: "/games/game2-play", destination: "/games/game2-play.html" },
      {
        source: "/games/game2-play-environment",
        destination: "/games/game2_play_environment.html",
      },
      { source: "/games/game3", destination: "/games/game3.html" },
      { source: "/games/game3-play", destination: "/games/game3-play.html" },
      {
        source: "/games/game3-play-environment",
        destination: "/games/game3_play_environment.html",
      },
      { source: "/games/game4", destination: "/games/game4.html" },
    ];
  },
};

module.exports = nextConfig;