"use client";

import Section from "../../components/Section";
import { useLanguage } from "../../context/LanguageProvider";

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  const content = {
    ja: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日",
      sections: {
        overview: {
          title: "概要",
          content: "本プライバシーポリシーは、Minji Byun（以下「当方」）が運営するポートフォリオサイト（以下「本サイト」）における個人情報の取り扱いについて説明します。"
        },
        collection: {
          title: "収集する情報",
          content: [
            "本サイトでは、以下の情報を収集する場合があります：",
            "• 訪問者のIPアドレス（アクセスログとして自動的に記録）",
            "• ブラウザの種類とバージョン",
            "• 訪問日時とアクセスページ",
            "• SNSリンクを通じてご連絡いただいた場合の連絡先情報"
          ]
        },
        usage: {
          title: "情報の利用目的",
          content: [
            "収集した情報は以下の目的で利用します：",
            "• サイトの運営・保守・改善",
            "• セキュリティの確保",
            "• お問い合わせへの対応",
            "• 法的義務の履行"
          ]
        },
        sharing: {
          title: "第三者への提供",
          content: "当方は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。"
        },
        analytics: {
          title: "アクセス解析ツール",
          content: "現在、本サイトではGoogle Analyticsなどの外部アクセス解析ツールは使用しておりません。"
        },
        cookies: {
          title: "Cookie（クッキー）",
          content: "本サイトでは、ユーザー体験向上のため、言語設定やテーマ設定などの情報をブラウザのローカルストレージに保存する場合があります。これらの情報は個人を特定するものではありません。"
        },
        contact: {
          title: "お問い合わせ",
          content: "本プライバシーポリシーに関するご質問は、以下の連絡先までお問い合わせください：",
          email: "メール: mopoong3@gmail.com"
        },
        changes: {
          title: "プライバシーポリシーの変更",
          content: "当方は、必要に応じて本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。"
        }
      }
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated",
      sections: {
        overview: {
          title: "Overview",
          content: "This Privacy Policy explains how Minji Byun (\"I\", \"me\") handles personal information on this portfolio website (\"the Site\")."
        },
        collection: {
          title: "Information We Collect",
          content: [
            "This site may collect the following information:",
            "• Visitor IP addresses (automatically recorded in access logs)",
            "• Browser type and version",
            "• Visit date/time and accessed pages",
            "• Contact information when you reach out via social media links"
          ]
        },
        usage: {
          title: "How We Use Information",
          content: [
            "Collected information is used for:",
            "• Site operation, maintenance, and improvement",
            "• Security purposes",
            "• Responding to inquiries",
            "• Legal compliance"
          ]
        },
        sharing: {
          title: "Third-Party Sharing",
          content: "I do not share personal information with third parties without your consent, except as required by law."
        },
        analytics: {
          title: "Analytics Tools",
          content: "This site currently does not use external analytics tools such as Google Analytics."
        },
        cookies: {
          title: "Cookies",
          content: "This site may store information such as language and theme preferences in your browser's local storage to improve user experience. This information does not personally identify you."
        },
        contact: {
          title: "Contact",
          content: "For questions about this Privacy Policy, please contact:",
          email: "Email: mopoong3@gmail.com"
        },
        changes: {
          title: "Policy Changes",
          content: "I may update this Privacy Policy as needed. Changes will be effective when posted on this page."
        }
      }
    }
  };

  const currentContent = content[lang as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Section id="privacy-policy">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary text-center">
            {currentContent.title}
          </h1>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            {currentContent.lastUpdated}: {new Date().toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
          </p>

          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.overview.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentContent.sections.overview.content}
              </p>
            </div>

            {/* Information Collection */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.collection.title}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {Array.isArray(currentContent.sections.collection.content) ? (
                  currentContent.sections.collection.content.map((item, index) => (
                    <p key={index} className={index > 0 ? "mt-2" : ""}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p>{currentContent.sections.collection.content}</p>
                )}
              </div>
            </div>

            {/* Usage */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.usage.title}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {Array.isArray(currentContent.sections.usage.content) ? (
                  currentContent.sections.usage.content.map((item, index) => (
                    <p key={index} className={index > 0 ? "mt-2" : ""}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p>{currentContent.sections.usage.content}</p>
                )}
              </div>
            </div>

            {/* Third-party Sharing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.sharing.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentContent.sections.sharing.content}
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.analytics.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentContent.sections.analytics.content}
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.cookies.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentContent.sections.cookies.content}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.contact.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                {currentContent.sections.contact.content}
              </p>
              <p className="text-primary font-medium">
                {currentContent.sections.contact.email}
              </p>
            </div>

            {/* Changes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {currentContent.sections.changes.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentContent.sections.changes.content}
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {lang === 'ja' ? 'ホームに戻る' : 'Back to Home'}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
