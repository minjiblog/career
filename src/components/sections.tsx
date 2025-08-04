"use client";

import Section from "./Section";
import { FaHotel, FaPlaneDeparture, FaLaptopCode, FaGraduationCap, FaMedal } from 'react-icons/fa';
import React from "react";


import { useLanguage } from "../context/LanguageProvider";

export const Hero = () => {
  const { lang, switchLang } = useLanguage();
  
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
        "韓国陸軍 兵長 満期除隊",
        "ホテル勤務5年以上（フロント〜レベニューマネジメント）",
        "多言語対応（日本語・韓国語・英語）でグローバル顧客サービス提供",
        "Web3 / 生成AI 活用とクリエイティブ制作で顧客体験をアップデート"
      ]
    },
    en: {
      heading: "About Me",
      items: [
        "Graduated from Konkuk University, Department of Economics",
        "Completed military service as Sergeant in ROK Army",
        "5+ years of hotel experience (Front desk to Revenue Management)",
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
          <FaMedal className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[1]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaHotel className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[2]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaPlaneDeparture className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[3]}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaLaptopCode className="text-accent mt-1" size={24} />
          <span className="text-gray-800 dark:text-gray-200">
            {currentContent.items[4]}
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
      subtitle: "取得資格と専門スキル",
      items: [
        {
          title: "日本語能力試験 N1",
          icon: "🇯🇵",
          category: "語学資格",
          color: "from-red-500 to-pink-500"
        },
        {
          title: "TOEIC Listening & Reading Test 935",
          icon: "🇺🇸",
          category: "語学資格",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "日商簿記3級",
          icon: "📊",
          category: "ビジネス資格",
          color: "from-green-500 to-emerald-500"
        }
      ]
    },
    en: {
      heading: "Certificates & Skills",
      subtitle: "Professional qualifications and expertise",
      items: [
        {
          title: "Japanese Language Proficiency Test N1",
          icon: "🇯🇵",
          category: "Language Certification",
          color: "from-red-500 to-pink-500"
        },
        {
          title: "TOEIC Listening & Reading Test 935",
          icon: "🇺🇸",
          category: "Language Certification",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Bookkeeping Level 3 (Japan)",
          icon: "📊",
          category: "Business Certification",
          color: "from-green-500 to-emerald-500"
        }
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];

  return (
    <Section id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">{currentContent.heading}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">{currentContent.subtitle}</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {currentContent.items.map(({ title, icon, category, color }) => (
          <div
            key={title}
            className="group relative overflow-hidden bg-[#1a1a1a]/90 dark:bg-[#0a0a0a]/80 rounded-xl shadow-lg backdrop-blur-md border border-gray-200/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.05]"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${color} p-4 relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{icon}</div>
                  <div className="text-xs text-white/80 font-medium uppercase tracking-wide">{category}</div>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/60 rounded-full" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/5 rounded-full" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-white/10 rounded-full" />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-white text-base leading-tight group-hover:text-accent transition-colors">
                {title}
              </h3>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <div key={index} className="bg-[#1a1a1a]/40 dark:bg-[#0a0a0a]/30 backdrop-blur-sm p-6 rounded-card shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105">
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
      heading: "Side Projects",
      subtitle: "創造性とテクノロジーを活かした個人プロジェクト",
      items: [
        {
          title: "NinjaNote KR 運営",
          desc: "Ninja DAOとCryptoNinja Partners プロジェクト 情報を韓国語で 紹介する ファンサイト 'NinjaNote KR' を運営。コミュニティ 記事 作成 & 企画 運営。",
          link: "https://ninjanote-kr.site/",
          category: "Web3・コミュニティ",
          icon: "🥷",
          color: "from-orange-500 to-red-500",
          tags: ["Web3", "コミュニティ", "韓国語"]
        },
        {
          title: "mojikootoko - 門司港オンラインペルソナ",
          desc: "北九州市門司港地区の魅力を発信するクリエイター活動。Instagram・Pinterest・ブログを通じて地域文化と日常を共有し、ファンとの交流を深める。",
          link: "https://mojikootoko.com/",
          category: "クリエイター・地域活性化",
          icon: "🏛️",
          color: "from-green-500 to-teal-500",
          tags: ["クリエイター", "地域活性化", "SNS"]
        },
        {
          title: "通訳及び翻訳実績多数",
          desc: "NFTプロジェクト関連コンテンツの通訳、ライブイベント通訳、地域活性化コンテンツの翻訳作業に参加。韓国語・日本語・英語の多言語スキルを活かしたフリーランス活動。",
          category: "多言語・フリーランス",
          icon: "🌐",
          color: "from-blue-500 to-purple-500",
          tags: ["通訳", "翻訳", "多言語"]
        }
      ]
    },
    en: {
      heading: "Side Projects",
      subtitle: "Personal projects leveraging creativity and technology",
      items: [
        {
          title: "NinjaNote KR Operation",
          desc: "Operating the fan site 'NinjaNote KR' that introduces Ninja DAO and CryptoNinja Partners project information in Korean. Creating community articles & managing projects.",
          link: "https://ninjanote-kr.site/",
          category: "Web3・Community",
          icon: "🥷",
          color: "from-orange-500 to-red-500",
          tags: ["Web3", "Community", "Korean"]
        },
        {
          title: "mojikootoko - Mojiko Port Online Persona",
          desc: "Creator activities promoting the charm of Mojiko Port area in Kitakyushu City. Sharing regional culture and daily life through Instagram, Pinterest, and blog to deepen fan engagement.",
          link: "https://mojikootoko.com/",
          category: "Creator・Regional Revitalization",
          icon: "🏛️",
          color: "from-green-500 to-teal-500",
          tags: ["Creator", "Regional", "SNS"]
        },
        {
          title: "Multiple Interpretation & Translation Projects",
          desc: "Participated in interpretation of NFT project-related content, live event interpretation, and translation of regional revitalization content. Freelance activities utilizing multilingual skills in Korean, Japanese, and English.",
          category: "Multilingual・Freelance",
          icon: "🌐",
          color: "from-blue-500 to-purple-500",
          tags: ["Interpretation", "Translation", "Multilingual"]
        }
      ]
    }
  };
  
  const currentContent = content[lang as keyof typeof content];
  
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">{currentContent.heading}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">{currentContent.subtitle}</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {currentContent.items.map(({ title, desc, link, category, icon, color, tags }) => (
          <div
            key={title}
            className={`group relative overflow-hidden bg-[#1a1a1a]/90 dark:bg-[#0a0a0a]/80 rounded-xl shadow-lg backdrop-blur-md border border-gray-200/10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] ${link ? 'cursor-pointer' : ''}`}
            onClick={link ? () => window.open(link, '_blank', 'noopener,noreferrer') : undefined}
          >
            {/* Gradient header with icon */}
            <div className={`bg-gradient-to-r ${color} p-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <div className="text-xs text-white/80 font-medium uppercase tracking-wide">{category}</div>
                  </div>
                </div>
                {link && (
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/5 rounded-full" />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h4 className="font-bold mb-3 text-white text-lg leading-tight group-hover:text-accent transition-colors">
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-400 mb-4 line-clamp-4">{desc}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link indicator */}
              {link && (
                <div className="flex items-center gap-2 text-accent text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span>{link.replace('https://', '').split('/')[0]}</span>
                </div>
              )}
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export const HotelExperience = () => {
  const { lang } = useLanguage();
  const content = {
    ja: {
      heading: "ホテルでの経験",
      subtitle: "5年間のホテル業界での実務経験と成果",
      sections: [
        {
          title: "フロント業務",
          icon: "🏨",
          color: "from-blue-500 to-cyan-500",
          points: [
            { text: "チェックイン・チェックアウト対応", metric: "年間1万件以上" },
            { text: "外国人ゲストへの多言語サービス", metric: "JP/KR/EN" },
            { text: "客室アップセルと会員プラン案内", metric: "ADR 8%向上" },
            { text: "OTA在庫・料金管理、トラブルシューティング", metric: "" }
          ]
        },
        {
          title: "レベニューマネジメント",
          icon: "📊",
          color: "from-purple-500 to-pink-500",
          points: [
            { text: "需要予測に基づく料金設定", metric: "稼働率 10%改善" },
            { text: "競合分析 (Compset) とダッシュボード作成", metric: "" },
            { text: "販促プラン作成・効果測定", metric: "ROI 120%達成" },
            { text: "データドリブンなレポーティングと経営層報告", metric: "" }
          ]
        }
      ]
    },
    en: {
      heading: "Hotel Experience",
      subtitle: "5+ years of hands-on experience and achievements in hospitality",
      sections: [
        {
          title: "Front Desk Operations",
          icon: "🏨",
          color: "from-blue-500 to-cyan-500",
          points: [
            { text: "Handled check-ins/check-outs", metric: "10k+ per year" },
            { text: "Multilingual service for overseas guests", metric: "JP/KR/EN" },
            { text: "Upselling & membership plans", metric: "+8% ADR" },
            { text: "OTA inventory & rate management, issue resolution", metric: "" }
          ]
        },
        {
          title: "Revenue Management",
          icon: "📊",
          color: "from-purple-500 to-pink-500",
          points: [
            { text: "Dynamic rate setting based on demand forecasting", metric: "+10% occupancy" },
            { text: "Competitor set analysis & dashboard creation", metric: "" },
            { text: "Designed and measured promotional campaigns", metric: "120% ROI" },
            { text: "Data-driven reporting to executive team", metric: "" }
          ]
        }
      ]
    }
  } as const;
  const c = content[lang as keyof typeof content];
  return (
    <Section id="hotel-experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">{c.heading}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">{c.subtitle}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {c.sections.map(({ title, icon, color, points }) => (
          <div key={title} className="group relative overflow-hidden bg-[#1a1a1a]/90 dark:bg-[#0a0a0a]/80 rounded-xl shadow-lg backdrop-blur-md border border-gray-200/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${color} p-6 relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex items-center gap-4">
                <div className="text-4xl">{icon}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <ul className="space-y-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2 group-hover/item:scale-125 transition-transform" />
                    <div className="flex-1">
                      <span className="text-gray-200 dark:text-gray-300 leading-relaxed">{point.text}</span>
                      {point.metric && (
                        <div className="mt-1">
                          <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold">
                            {point.metric}
                          </span>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <div className={`w-full h-full bg-gradient-to-br ${color} transform rotate-45 translate-x-8 -translate-y-8`} />
            </div>
          </div>
        ))}
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
          <li key={index} className="flex flex-col items-center text-center gap-3 bg-[#1a1a1a]/80 dark:bg-[#0a0a0a]/70 rounded-card shadow-soft p-6 backdrop-blur-md">
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
          text: 'Starting from the front desk and progressing to revenue management, I learned that true hospitality is not about technique but about the "heart." Guest smiles, colleague cooperation—everything contributed to my growth.'
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
            <div className="flex-1 bg-[#1a1a1a]/90 dark:bg-[#0a0a0a]/80 rounded-lg p-6 shadow-soft backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
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

export function FinalMessage() {
  const { lang } = useLanguage();
  
  const content = {
    ja: {
      heading: "マジマな一言",
      message: "ホスピタリティの心で築いた信頼と、Web3・AIで描く未来を繋げ、グローバルに価値を創造し続けます。"
    },
    en: {
      heading: "Final Message",
      message: "I will continue to create global value by connecting the trust built through hospitality with the future envisioned through Web3 and AI."
    }
  };
  
  const currentContent = content[lang as keyof typeof content];
  
  return (
    <Section id="final-message">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">{currentContent.heading}</h2>
        <div className="bg-[#1a1a1a]/80 dark:bg-[#0a0a0a]/70 rounded-card shadow-soft p-8 backdrop-blur-md border border-primary/20">
          <p className="text-xl leading-relaxed text-white font-medium italic">
            "{currentContent.message}"
          </p>
        </div>
      </div>
    </Section>
  );
}

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
