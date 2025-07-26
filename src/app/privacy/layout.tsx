export const dynamic = 'force-static';

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  // Minimal layout to avoid global providers and React context during prerender
  return <>{children}</>;
}
