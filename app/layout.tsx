// import { type Metadata } from 'next'
// import {
//   ClerkProvider,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs'
// import { Geist, Geist_Mono } from 'next/font/google'
// import './globals.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

// export const metadata: Metadata = {
//   title: 'Clerk Next.js Quickstart',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//           <header className="flex justify-end items-center p-4 gap-4 h-16">
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }




// import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import Header from './components/Header';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
//           {/* Header with Authentication */}
//           <Header>
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </Header>

//           {/* Main Content */}
//           <main className="p-4">
//             {children}

           
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }






// // 'use client'
// // import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
// // import { Geist, Geist_Mono } from 'next/font/google';
// // import { useRouter } from 'next/navigation';
// // import './globals.css';
// // import Header from './components/Header';

// // const geistSans = Geist({
// //   variable: '--font-geist-sans',
// //   subsets: ['latin'],
// // });

// // const geistMono = Geist_Mono({
// //   variable: '--font-geist-mono',
// //   subsets: ['latin'],
// // });

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   const router = useRouter();
// //   const hideHeaderRoutes = ["/sign-in", "/sign-up"]; // Add more if needed

// //   return (
// //     <ClerkProvider>
// //       <html lang="en">
// //         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
// //           {/* Show Header only when user is signed in and not on login/signup pages */}
// //           {!hideHeaderRoutes.includes(router.pathname) && (
// //             <SignedIn>
// //               <Header>
// //                 <UserButton />
// //               </Header>
// //             </SignedIn>
// //           )}

// //           {/* Main Content */}
// //           <main className="p-4">{children}</main>
// //         </body>
// //       </html>
// //     </ClerkProvider>
// //   );
// // }





// "use client";

// import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import Header from './components/Header';
// import { usePathname } from 'next/navigation';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   const hideHeaderRoutes = ['/sign-in', '/sign-up']; // add more paths if needed
//   const shouldHideHeader = hideHeaderRoutes.includes(pathname);

//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
          
//           {!shouldHideHeader && (
//             <Header>
//               <SignedOut>
//                 <SignInButton />
//                 <SignUpButton />
//               </SignedOut>
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </Header>
//           )}

//           <main className="p-4">
//             {children}
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }







// "use client";

// import { ClerkProvider } from '@clerk/nextjs';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
//           <main className="p-4">
//             {children}
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }




// import { ClerkProvider } from '@clerk/nextjs';
// import { GeistSans, GeistMono } from 'geist/font';
// import './globals.css';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//         <body className="antialiased bg-black text-white">
//           <main className="p-4">
//             {children}
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }



// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import { ClerkProvider } from '@clerk/nextjs';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
//       appearance={{
//         variables: {
//           colorPrimary: '#000000',
//         },
//       }}
//     >
//       {/* Suppress hydration warnings from browser extensions */}
//       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
//         <body className="antialiased bg-black text-white" suppressHydrationWarning>
//           <main className="p-4">
//             {children}
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }







// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import { ClerkProvider } from '@clerk/nextjs';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
//       appearance={{
//         variables: {
//           colorPrimary: '#000000',
//         },
//       }}
//     >
    
// <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//   <body className="antialiased bg-black text-white" suppressHydrationWarning={true}>
//     <main className="p-4">
//       {children}
//     </main>
//   </body>
// </html>
//     </ClerkProvider>
//   );
// }












// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import { ClerkProvider } from '@clerk/nextjs';
// import Footer from '@/components/Footer';
// import { SignedIn, SignedOut } from '@clerk/nextjs';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
//       appearance={{
//         variables: {
//           colorPrimary: '#000000',
//         },
//       }}
//     >
//       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//         <body className="antialiased bg-black text-white" suppressHydrationWarning={true}>
//           <main className="p-4 min-h-screen">
//             {children}
//           </main>
//           {/* Only show footer when user is signed in */}
//           <SignedIn>
//             <Footer />
//           </SignedIn>
//           {/* Show nothing when signed out (during auth flows) */}
//           <SignedOut>
//             <div className="h-16 bg-black"></div> {/* Spacer if needed */}
//           </SignedOut>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }








// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import { ClerkProvider } from '@clerk/nextjs';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { SignedIn, SignedOut } from '@clerk/nextjs';
// import { headers } from 'next/headers';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const headersList = headers();
//   const pathname = headersList.get('x-pathname') || '';
//   const isAuthRoute = ['/sign-in', '/sign-up', '/login'].some(route => 
//     pathname.startsWith(route)
//   );

//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
//       appearance={{
//         variables: {
//           colorPrimary: '#000000',
//         },
//       }}
//     >
//       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//         <body className="antialiased bg-black text-white" suppressHydrationWarning={true}>
//           {/* Header - not shown on auth routes */}
//           {!isAuthRoute && <Header balance={null} />}
          
//           {/* Main content with padding adjustment for header */}
//           <main className={`px-4 pb-4 ${!isAuthRoute ? 'pt-20' : ''} min-h-[calc(100vh-80px)]`}>
//             {children}
//           </main>
          
//           {/* Footer - only shown when signed in */}
//           <SignedIn>
//             <Footer />
//           </SignedIn>
//           <SignedOut>
//             <div className="h-16 bg-black"></div> {/* Spacer */}
//           </SignedOut>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }



// import { ClerkProvider } from '@clerk/nextjs';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import ClientLayout from './ClientLayout';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
//       appearance={{ variables: { colorPrimary: '#000000' } }}
//     >
//       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//         <body className="antialiased bg-black text-white" suppressHydrationWarning>
//           <ClientLayout>{children}</ClientLayout>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }





// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import ClientLayout from './ClientLayout';
import { metadata } from './metadata';

export { metadata }; // 👈 This exports metadata to Next.js

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={{ variables: { colorPrimary: '#000000' } }}
    >
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="antialiased bg-black text-white" suppressHydrationWarning>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
