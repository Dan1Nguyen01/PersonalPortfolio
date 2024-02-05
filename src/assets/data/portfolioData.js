import troveImg from "../img/trove.png";
import airbnbImg from "../img/airbnb.png";
import camelImg from "../img/Camel-Blog.png";
import scraperImg from "../img/webscraper.png";
import pricewise from '../img/pricewise.png'
const portfolios = [
  {
    id: "01",
    imgUrl: troveImg,
    category: "Web Design",
    title: "TroveMusic - Revolutionizing Music Discovery",
    description:
      "Discover the immersive world of TroveMusic, a web application that redefines music exploration. Dive into a curated collection of tunes, explore diverse genres, and share your musical journey with this state-of-the-art platform.",
    technologies: [
      "REACT",
      "Tailwind css",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "https://trovemusic.onrender.com",
  },

  {
    id: "02",
    imgUrl: airbnbImg,
    category: "Web Design",
    title: "AirH&D (B&B Cloned) - Seamless Travel Experiences",
    description: `Our Airbnb clone is a feature-rich web platform that connects travelers with unique accommodations, offering a seamless booking experience.\n This is a test user user1@gmail.com password`,
    technologies: [
      "REACT",
      "Tailwind css",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "https://airbandb-clone.onrender.com",
  },

  {
    id: "03",
    imgUrl: camelImg,
    category: "Web Design",
    title: "Camel Blog - Igniting Curiosity and Connection",
    description:
      "Join the Camel Blog community on a journey of discovery and inspiration. Immerse yourself in a diverse collection of articles that ignite curiosity, connect minds, and foster a space where ideas thrive."
,
    technologies: [
      "REACT",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "https://camel-blog.onrender.com",
  },
  {
    id: "04",
    imgUrl: scraperImg,
    category: "Web Design",
    title: "Amazon Web Scraper - Product Insights at Your Fingertips",
    description:
      "Introducing a Node.js-powered web scraper that extracts product data from e-commerce giants like Amazon. Stay updated on product trends and insights with automatic comparisons, efficiently collecting product names, prices, ratings, and images.",
    technologies: [
      "REACT",
      "Tailwinds CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    siteUrl: "https://web-scraper-bkyq.onrender.com",
  },
  {
    id: "04",
    imgUrl: pricewise,
    category: "Web Design",
    title: "Wise Price - Your Price Tracking Companion",
    description:
      "Wise Price is your go-to companion for tracking prices and receiving timely notifications on changes. Experience the convenience of staying updated on price fluctuations effortlessly.",
    technologies: [
      "REACT",
      "Tailwinds CSS",
      "Next.js",
      "MongoDB",
    ],
    siteUrl: "https://web-scraper-v2-qfmwooqmb-dan1nguyen01.vercel.app/",
  },
];

export default portfolios;
