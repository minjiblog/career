import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// import Seo removed to fix Netlify prerender error
// import Seo from "../components/Seo";
import { ThemeProvider } from "../context/ThemeProvider";
import { LanguageProvider } from "../context/LanguageProvider";

const notoSans = Noto_Sans_JP({
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minji Byun | Hospitality × Web3 × Global - Portfolio",
  description: "Konkuk University Economics graduate with 5+ years hotel experience. Multilingual (Japanese, Korean, English) hospitality professional specializing in Web3/AI integration and global customer service.",
  keywords: ["Minji Byun", "호텔", "hospitality", "Web3", "AI", "multilingual", "portfolio", "Japan", "Korea", "경제학과", "건국대학교"],
  authors: [{ name: "Minji Byun" }],
  creator: "Minji Byun",
  publisher: "Minji Byun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://career-minjiblog.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'ja': '/ja',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Minji Byun | Hospitality × Web3 × Global",
    description: "Multilingual hospitality professional with expertise in Web3/AI integration. 5+ years hotel experience, fluent in Japanese, Korean, and English.",
    url: 'https://career-minjiblog.vercel.app',
    siteName: 'Minji Byun Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Minji Byun - Hospitality × Web3 × Global Portfolio',
      },
    ],
    locale: 'ja_JP',
    alternateLocale: ['en_US', 'ko_KR'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Minji Byun | Hospitality × Web3 × Global",
    description: "Multilingual hospitality professional with expertise in Web3/AI integration",
    site: '@minjiblogg',
    creator: '@minjiblogg',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 실제 배포시 Google Search Console에서 발급받은 코드로 교체
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSans.variable} ${inter.variable} ${playfair.variable} text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="antialiased">
              {/* <Seo /> */}
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
