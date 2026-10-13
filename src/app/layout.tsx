import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PERSONAL_INFO, PROJECTS, FAQS } from "@/data/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bipin-portfolio.vercel.app"),
  title: {
    default: "Bipin Kumar | Data Science & AI/ML Engineer | Portfolio",
    template: "%s | Bipin Kumar — Portfolio",
  },
  description:
    "Portfolio of Bipin Kumar — Data Science & AI/ML Engineer specializing in Agentic AI platforms, autonomous systems, predictive machine learning pipelines, and end-to-end full-stack AI integrations. B.Tech CSE from Jagannath University, Jaipur.",
  keywords: [
    "Bipin Kumar",
    "Bipin Kumar Data Science",
    "Bipin Kumar AI ML Engineer",
    "Bipin Kumar Portfolio",
    "Agentic FacilityOps AI Platform",
    "SwasthyaAI Diabetes Predictor",
    "Machine Learning Engineer",
    "Data Scientist Jaipur",
    "Jagannath University Jaipur",
    "Muzaffarpur Bihar Data Scientist",
    "Python AI Developer",
    "LangChain RAG Systems",
    "FastAPI Machine Learning",
    "Scikit-learn",
    "TensorFlow",
    "Next.js AI Portfolio",
  ],
  authors: [{ name: "Bipin Kumar", url: "https://bipin-portfolio.vercel.app" }],
  creator: "Bipin Kumar",
  publisher: "Bipin Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bipin-portfolio.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bipin-portfolio.vercel.app",
    title: "Bipin Kumar | Data Science & AI/ML Engineer | Portfolio",
    description:
      "Data Science & AI/ML Engineer with production expertise in autonomous agent architectures, predictive ML pipelines, and full-stack AI platforms.",
    siteName: "Bipin Kumar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Bipin Kumar - Data Science & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bipin Kumar | Data Science & AI/ML Engineer",
    description:
      "Data Science & AI/ML Engineer specializing in Agentic AI, predictive ML pipelines, and production full-stack systems.",
    images: ["/profile.jpg"],
    creator: "@krbipin",
  },
  verification: {
    google: "google-site-verification-token",
    other: {
      "msvalidate.01": "bing-site-verification-token",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://bipin-portfolio.vercel.app/#person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    description: PERSONAL_INFO.bio,
    url: "https://bipin-portfolio.vercel.app",
    image: "https://bipin-portfolio.vercel.app/profile.jpg",
    email: PERSONAL_INFO.email,
    birthPlace: {
      "@type": "Place",
      name: PERSONAL_INFO.originLocation,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PERSONAL_INFO.university.name,
      url: PERSONAL_INFO.university.website,
    },
    sameAs: [
      PERSONAL_INFO.social.github,
      PERSONAL_INFO.social.linkedin,
    ],
    knowsAbout: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Agentic AI",
      "Deep Learning",
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@graph": PROJECTS.map((proj) => ({
      "@type": "SoftwareApplication",
      name: proj.title,
      applicationCategory: "SoftwareApplication",
      operatingSystem: "Web",
      description: proj.description,
      author: {
        "@id": "https://bipin-portfolio.vercel.app/#person",
      },
      url: proj.liveUrl || "https://bipin-portfolio.vercel.app/projects/" + proj.slug,
      codeRepository: proj.githubUrl,
    })),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/profile.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
      </head>
      <body className="bg-[#09090b] text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-indigo-600/30 selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
