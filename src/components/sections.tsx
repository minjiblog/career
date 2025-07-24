"use client";

import Section from "./Section";
import { FaHotel, FaPlaneDeparture, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import React from "react";


import { useLanguage } from "../context/LanguageProvider";

export const Hero = () => {
  const { lang } = useLanguage();
  
  const translations = {
    ja: {
      title: 'MINJI BYUN\nホスピタリティ × Web3 クリエイター',
      cta_project: 'プロジェクト相談はこちら',
      cta_resume: '履歴書をダウンロード'
    },
    en: {
      title: 'MINJI BYUN\nHospitality × Web3 Creator',
      cta_project: 'Discuss a project',
      cta_resume: 'Download résumé'
    }
  };
  
  // Translation function removed as it's not used
  return (
    <section id="hero" className="relative py-8 md:py-12">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full" />
      <div className="absolute top-8 right-8 w-6 h-6 bg-accent/30 rounded-full" />
      <div className="absolute bottom-4 left-8 w-4 h-4 bg-primary/15 rounded-full" />
      <div className="absolute bottom-8 right-4 w-10 h-10 bg-accent/20 rounded-full" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Newspaper masthead style */}
        <div className="text-center pb-2 mb-4">
          {/* Date and edition info */}
          <div className="text-xs text-primary/70 dark:text-primary/60 mb-2 font-mono">
            {new Date().toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} • Portfolio Edition
          </div>
          
          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-4 leading-tight">
            MINJI BYUN
          </h1>
          
          {/* Subheadline */}
          <div className="border-t border-b border-accent/40 py-3 my-4">
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-accent dark:text-accent italic">
              {lang === 'ja' ? 'ホスピタリティ × テック × グローバル' : 'Hospitality × Tech × Global'}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutMe = () => {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "About Me",
      items: [
        "建国大学校 経済学科 卒業",
        "ホテル勤務5年以上（フロント〜マネジメント）",
        "多言語対応（日本語・韓国語・英語）でグローバル顧客サービス提供",
        "Web3 / 生成AI 活用とクリエイティブ制作で顧客体験をアップデート"
      ]
    },
    en: {
      heading: "About Me",
      items: [
        "Graduated from Konkuk University, Department of Economics",
        "5+ years of hotel experience (Front desk to Management)",
        "Multilingual support (Japanese, Korean, English) for global customer service",
        "Enhancing customer experience through Web3 / Generative AI and creative production"
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];
  
  return (
    <Section id="about">
      <h2 className="text-3xl font-bold mb-6 text-primary">{currentContent.heading}</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-start gap-3">
          <FaGraduationCap className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[0]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaHotel className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[1]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaPlaneDeparture className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[2]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaLaptopCode className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[3]}
          </span>
        </li>
      </ul>
    </Section>
  );
};


export const CertificatesSkills = () => {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "Certificates & Skills",
      certs: [
        "日本語能力試験 N1",
        "TOEIC Listening & Reading Test 935",
        "日商簿記3級",
        "Generative AI Prompt Engineering",
      ]
    },
    en: {
      heading: "Certificates & Skills",
      certs: [
        "Japanese Language Proficiency Test N1",
        "TOEIC Listening & Reading Test 935",
        "Bookkeeping Level 3 (Japan)",
        "Generative AI Prompt Engineering",
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];

  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold mb-6 text-primary">{currentContent.heading}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {currentContent.certs.map((c) => (
          <div
            key={c}
            className="bg-white/80 dark:bg-white/10 rounded-card shadow-soft p-4 backdrop-blur-md"
          >
            <p className="font-semibold text-accent">{c}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export function WhyHotelIndustry() {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "なぜホテル業界で働くのか",
      subtitle: "私のホスピタリティへの情熱",
      reasons: [
        {
          icon: "❤️",
          title: "人とのつながりを大切にする",
          description: "お客様一人ひとりとの出会いを通じて、心に残る体験を提供することに深いやりがいを感じています。"
        },
        {
          icon: "🌍",
          title: "多様な文化との出会い",
          description: "世界各国からのお客様との交流を通じて、異文化理解を深め、グローバルな視野を養うことができます。"
        },
        {
          icon: "✨",
          title: "おもてなしの心を追求",
          description: "日本の伝統的なおもてなしの精神と現代のサービス技術を融合し、最高のホスピタリティを提供したいと考えています。"
        },
        {
          icon: "🚀",
          title: "業界の未来を創造",
          description: "テクノロジーとホスピタリティーの融合で、ホテル業界の新しい可能性を探求し続けています。"
        }
      ]
    },
    en: {
      heading: "Why I Work in the Hotel Industry",
      subtitle: "My Passion for Hospitality",
      reasons: [
        {
          icon: "❤️",
          title: "Valuing Human Connections",
          description: "I find deep fulfillment in creating memorable experiences through meaningful interactions with each guest."
        },
        {
          icon: "🌍",
          title: "Embracing Cultural Diversity",
          description: "Through interactions with guests from around the world, I deepen my cross-cultural understanding and broaden my global perspective."
        },
        {
          icon: "✨",
          title: "Pursuing the Spirit of Omotenashi",
          description: "I strive to blend Japan's traditional spirit of omotenashi with modern service technology to provide exceptional hospitality."
        },
        {
          icon: "🚀",
          title: "Creating the Future of the Industry",
          description: "I continuously explore new possibilities in the hotel industry by combining technology with hospitality."
        }
      ]
    }
  };

  const currentContent = content[lang as keyof typeof content];

  return (
    <Section id="why-hotel-industry" className="bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-900/10 dark:to-purple-900/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
          {currentContent.heading}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {currentContent.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {currentContent.reasons.map((reason, index) => (
          <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-card shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-start space-x-4">
              <div className="text-4xl mb-4 flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-6 rounded-card">
          <p className="text-lg font-medium text-primary dark:text-white mb-2">
            {lang === 'ja' ? '"お客様の笑顔が私の原動力です"' : '"Guest smiles are my driving force"'}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {lang === 'ja' 
              ? 'ホスピタリティとテクノロジーの融合で、より良い未来を創造していきます。'
              : 'Creating a better future through the fusion of hospitality and technology.'
            }
          </p>
        </div>
      </div>
    </Section>
  );
}

export const Projects = () => {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "Projects / Achievements",
      items: [
        {
          title: "NinjaNote KR 運営",
          desc: "Ninja DAOとCryptoNinja Partners プロジェクト 情報を韓国語で 紹介する ファンサイト 'NinjaNote KR' を運営。コミュニティ 記事 作成 & 企画 運営。",
          link: "https://ninjanote-kr.site/"
        },
        {
          title: "mojikootoko - 門司港オンラインペルソナ",
          desc: "北九州市門司港地区の魅力を発信するクリエイター活動。Instagram・Pinterest・ブログを通じて地域文化と日常を共有し、ファンとの交流を深める。",
          link: "https://mojikootoko.com/"
        },
        {
          title: "通訳及び翻訳実績多数",
          desc: "NFTプロジェクト関連コンテンツの通訳、ライブイベント通訳、地域活性化コンテンツの翻訳作業に参加。韓国語・日本語・英語の多言語スキルを活かしたフリーランス活動。"
        }
      ]
    },
    en: {
      heading: "Projects / Achievements",
      items: [
        {
          title: "NinjaNote KR Operation",
          desc: "Operating the fan site 'NinjaNote KR' that introduces Ninja DAO and CryptoNinja Partners project information in Korean. Creating community articles & managing projects.",
          link: "https://ninjanote-kr.site/"
        },
        {
          title: "mojikootoko - Mojiko Port Online Persona",
          desc: "Creator activities promoting the charm of Mojiko Port area in Kitakyushu City. Sharing regional culture and daily life through Instagram, Pinterest, and blog to deepen fan engagement.",
          link: "https://mojikootoko.com/"
        },
        {
          title: "Multiple Interpretation & Translation Projects",
          desc: "Participated in interpretation of NFT project-related content, live event interpretation, and translation of regional revitalization content. Freelance activities utilizing multilingual skills in Korean, Japanese, and English."
        }
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];
  
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">{currentContent.heading}</h2>
      
      {/* First two items in a row */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {currentContent.items.slice(0, 2).map(({ title, desc, link }) => (
          <div
            key={title}
            className={`rounded-card shadow-soft overflow-hidden bg-white/80 dark:bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 ${link ? 'cursor-pointer hover:shadow-lg' : ''}`}
            onClick={link ? () => window.open(link, '_blank', 'noopener,noreferrer') : undefined}
          >
            <div className="p-6">
              <h4 className="font-semibold mb-3 text-accent flex items-center gap-2 text-lg">
                {title}
                {link && (
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{desc}</p>
              {link && (
                <p className="text-xs text-accent mt-3 opacity-80 font-medium">
                  🔗 {link.replace('https://', '').replace('/', '')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Third item centered */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {currentContent.items.slice(2).map(({ title, desc, link }) => (
            <div
              key={title}
              className={`rounded-card shadow-soft overflow-hidden bg-white/80 dark:bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 ${link ? 'cursor-pointer hover:shadow-lg' : ''}`}
              onClick={link ? () => window.open(link, '_blank', 'noopener,noreferrer') : undefined}
            >
              <div className="p-6">
                <h4 className="font-semibold mb-3 text-accent flex items-center gap-2 text-lg">
                  {title}
                  {link && (
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{desc}</p>
                {link && (
                  <p className="text-xs text-accent mt-3 opacity-80 font-medium">
                    🔗 {link.replace('https://', '').replace('/', '')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const Hobbies = () => {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "Hobbies",
      hobbies: [
        {
          icon: "🖼️",
          title: "NFT コレクター",
          subtitle: "デジタルアート & メタバース"
        },
        {
          icon: "🤖",
          title: "生成 AI & Vibe Coding",
          subtitle: "クリエイティブ コーディング"
        },
        {
          icon: "🏊",
          title: "水泳",
          subtitle: "フィットネス & リラックス"
        }
      ]
    },
    en: {
      heading: "Hobbies",
      hobbies: [
        {
          icon: "🖼️",
          title: "NFT Collector",
          subtitle: "Digital Art & Metaverse"
        },
        {
          icon: "🤖",
          title: "Generative AI & Vibe Coding",
          subtitle: "Creative Coding"
        },
        {
          icon: "🏊",
          title: "Swimming",
          subtitle: "Fitness & Relaxation"
        }
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];
  
  return (
    <Section id="hobbies">
      <h2 className="text-3xl font-bold mb-6 text-primary">{currentContent.heading}</h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {currentContent.hobbies.map((hobby, index) => (
          <li key={index} className="flex flex-col items-center text-center gap-3 bg-white/80 dark:bg-white/10 rounded-card shadow-soft p-6 backdrop-blur-md">
            <div className="text-4xl text-accent">{hobby.icon}</div>
            <p className="font-semibold">{hobby.title}<br />{hobby.subtitle}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export const PersonalStory = () => {
  const { lang } = useLanguage();

  const content = {
    ja: {
      heading: '私の歩み',
      subtitle: 'これまでの道のりと、これからの想い',
      story: [
        {
          title: '韓国から日本へ',
          text: '5年前、新しい挑戦を求めて日本にやってきました。言葉の壁、文化の違い、すべてが新鮮で困難でした。しかし、ホテル業界で働く中で「おもてなし」の心を学び、人と人とのつながりの美しさを実感しました。'
        },
        {
          title: 'ホスピタリティとの出会い',
          text: 'フロントデスクから始まり、マネジメントまで経験する中で、真のホスピタリティとは技術ではなく「心」だということを学びました。お客様の笑顔、同僚との協力、すべてが私を成長させてくれました。'
        },
        {
          title: 'テクノロジーへの情熱',
          text: 'Web3やAIといった新しい技術に触れ、これらがホスピタリティ業界にもたらす可能性に魅了されました。伝統的なおもてなしと最新技術の融合で、より良い顧客体験を創造したいと考えています。'
        },
        {
          title: 'これからの挑戦',
          text: '国境を越えて人々をつなぐ架け橋になりたい。ホスピタリティの心を持ちながら、テクノロジーの力で世界をより温かい場所にしていく。それが私の使命です。毎日が学びの連続ですが、この道を歩み続けます。'
        }
      ]
    },
    en: {
      heading: 'My Journey',
      subtitle: 'Reflecting on the path traveled and embracing what lies ahead',
      story: [
        {
          title: 'From Korea to Japan',
          text: 'Five years ago, I came to Japan seeking new challenges. Language barriers, cultural differences—everything was fresh and difficult. However, working in the hotel industry taught me the spirit of "omotenashi" and made me realize the beauty of human connections.'
        },
        {
          title: 'Discovering Hospitality',
          text: 'Starting from the front desk and progressing to management, I learned that true hospitality is not about technique but about the "heart." Guest smiles, colleague cooperation—everything contributed to my growth.'
        },
        {
          title: 'Passion for Technology',
          text: 'Encountering new technologies like Web3 and AI, I became fascinated by the possibilities they bring to the hospitality industry. I want to create better customer experiences by fusing traditional omotenashi with cutting-edge technology.'
        },
        {
          title: 'Future Challenges',
          text: 'I want to become a bridge connecting people across borders. With a hospitality mindset and the power of technology, I aim to make the world a warmer place. This is my mission. Every day is a continuous learning experience, but I will keep walking this path.'
        }
      ]
    }
  };

  const currentContent = content[lang as keyof typeof content];

  return (
    <Section id="personal-story">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">{currentContent.heading}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic">{currentContent.subtitle}</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {currentContent.story.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row gap-6 items-start ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="flex-shrink-0 relative">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
              {index < currentContent.story.length - 1 && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30" />
              )}
            </div>
            
            {/* Content card */}
            <div className="flex-1 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-soft backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export const Contact = () => {
  const { lang, switchLang } = useLanguage();

  const content = {
    ja: {
      heading: 'お問い合わせ',
      subtitle: 'SNSやメールでお気軽にご連絡ください'
    },
    en: {
      heading: 'Contact',
      subtitle: 'Feel free to reach out via social media or email'
    }
  };

  const currentContent = content[lang as keyof typeof content];

  return (
    <Section id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">{currentContent.heading}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{currentContent.subtitle}</p>
        
        {/* SNS Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://x.com/minjiblogg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              {/* X (Twitter) SVG Icon */}
              <svg className="w-8 h-8 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">X (Twitter)</span>
          </a>
          
          <a 
            href="https://www.instagram.com/mojikootoko/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              {/* Instagram SVG Icon */}
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Instagram</span>
          </a>
          
          <a 
            href="mailto:mopoong3@gmail.com" 
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              {/* Email SVG Icon */}
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Email</span>
          </a>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-xs text-muted-foreground">
        2025 Minji Byun / <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a> &nbsp;|&nbsp;
        <button type="button" onClick={switchLang} className="underline">{lang === 'ja' ? 'English' : '日本語'}</button>
      </footer>
    </Section>
  );
}
