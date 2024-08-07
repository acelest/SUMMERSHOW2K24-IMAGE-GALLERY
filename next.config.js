module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dljayhfu0/image/upload/**", // Assurez-vous que le chemin est correct
      },
    ],
  },
};
