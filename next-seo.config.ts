import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  title: 'Minji Byun | ホスピタリティ × Web3 × クリエイティブ ― キャリアポートフォリオ',
  description:
    'ホテル業界で培ったホスピタリティと Web3 / 生成AI の知見、クリエイティブな実績をまとめたポートフォリオサイト。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://minji-portfolio.example.com',
    site_name: 'Minji Byun Portfolio',
    images: [
      {
        url: 'https://minji-portfolio.example.com/og.png',
        width: 1200,
        height: 630,
        alt: 'Minji Byun Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@minji',
    site: '@minji',
    cardType: 'summary_large_image',
  },
};

export default config;
