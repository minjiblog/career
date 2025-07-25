"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageProvider';

export default function NotFound() {
  const { lang } = useLanguage();

  const content = {
    ja: {
      title: "404 - ページが見つかりません",
      description: "お探しのページは存在しないか、移動された可能性があります。",
      homeButton: "ホームに戻る"
    },
    en: {
      title: "404 - Page Not Found",
      description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      homeButton: "Back to Home"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t.description}
          </p>
        </div>
        
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          {t.homeButton}
        </Link>
      </div>
    </div>
  );
}
