export const dynamic = "force-static";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] dark:bg-[#0a0a0a] flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Privacy Policy</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          This site does not collect personal data. For inquiries please contact mopoong3@gmail.com.
        </p>
      </div>
    </div>
  );
}
