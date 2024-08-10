export type pageMeta = {
  pageTitle: string;
  pageSubtitle: string;
};

// The base details of site
export const SiteMeta = {
  siteTitle: "Astrordinary",
  siteDesc: "Starter template for Astro.build with Tailwind CSS",
  siteUrl: "htps://example.com",
  fallbackImage: "",
  fallbackKeywords: [
    'Web Developer',
    'Travel Blogger',
  ],
};

// Navbar menu links
export const headerLinks = [
  { title: "Articles", url: "/articles", },
  { title: "Galleries", url: "/galleries", },
  { title: "About", url: "/about", },
];

// footer menu links
export const footerLinks = [
  { title: "Home", url: "/", },
  { title: "About", url: "/about", },
];

// Social menu links
export const socialLinks = [
  { name: "facebook", link: "https://www.facebook.com/", icon: "fa6-brands:facebook-f" },
  { name: "twitter", link: "https://www.facebook.com/", icon: "fa6-brands:x-twitter" },
  { name: "instagram", link: "https://www.instagram.com/", icon: "fa6-brands:instagram" },
  { name: "youtube", link: "https://www.youtube.com/", icon: "fa6-brands:youtube" },
  { name: "github", link: "https://www.github.com/", icon: "fa6-brands:github" },
];

// Page headings
export const pageAbout: pageMeta = {
  pageTitle: "About me",
  pageSubtitle: "Hello",
};