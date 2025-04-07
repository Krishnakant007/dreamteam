// app/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = ['/sign-in', '/sign-up', '/login'].some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <>
      {!isAuthRoute && <Header balance={null} />}
      <main className={`px-4 pb-4 ${!isAuthRoute ? 'pt-20' : ''} min-h-[calc(100vh-80px)]`}>
        {children}
      </main>
      <SignedIn>{!isAuthRoute && <Footer />}</SignedIn>
      <SignedOut>
        <div className="h-16 bg-black"></div>
      </SignedOut>
    </>
  );
}