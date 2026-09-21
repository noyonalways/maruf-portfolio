export const siteConfig = {
  name: "Md. Maruf Mondol",
  shortName: "Maruf Mondol",
  role: "Digital Marketer",
  // Replace public/maruf-mondol.png (or point this to a new file) to update the photo.
  photo: "/maruf-mondol.png",
  tagline: "Smart digital marketing that drives real growth",
  description:
    "Md. Maruf Mondol is a digital marketer helping businesses grow with SEO, digital marketing, graphics design, web development and business automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marufmondol.com",
  locale: "en_US",
  email: "hello@marufmondol.com",
  phone: "+880 1712-345678",
  phoneHref: "tel:+8801712345678",
  whatsapp: "https://wa.me/8801712345678",
  address: {
    street: "Level 4, Banani",
    city: "Dhaka",
    region: "Dhaka",
    postalCode: "1213",
    country: "Bangladesh",
  },
  geo: { latitude: 23.7936, longitude: 90.4043 },
  experienceSince: "2019",
  social: {
    facebook: "https://facebook.com/marufmondol",
    linkedin: "https://linkedin.com/in/marufmondol",
    x: "https://x.com/marufmondol",
    instagram: "https://instagram.com/marufmondol",
    youtube: "https://youtube.com/@marufmondol",
    github: "https://github.com/marufmondol",
  },
  handle: "@marufmondol",
  keywords: [
    "Md. Maruf Mondol",
    "digital marketer",
    "digital marketing consultant",
    "SEO specialist",
    "SEO services",
    "graphics design",
    "web development",
    "business automation",
    "digital marketer Bangladesh",
  ],
  developer: {
    name: "Noyon Rahman",
    url: "https://noyonrahman.com",
    github: "https://github.com/noyonalways",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { title: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { title: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
  { title: "X", href: siteConfig.social.x, icon: "x" },
  { title: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { title: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
] as const;
