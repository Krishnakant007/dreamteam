// // import Link from "next/link";
// // import { History, CircleDollarSign } from "lucide-react";

// // export default function Header() {
// //   return (
// //     <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
// //       {/* Logo */}
// //       <Link href="/">
// //         <h1 className="text-xl font-bold">My App</h1>
// //       </Link>

// //       {/* History */}
// //       <Link href="/history" className="flex items-center gap-2">
// //         <History size={24} />
// //         <span>History</span>
// //       </Link>

// //       {/* Wallet */}
// //       <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
// //         <CircleDollarSign size={24} />
// //         <span>₹5000</span>
// //       </div>
// //     </header>
// //   );
// // }



// import Link from "next/link";
// import { CircleDollarSign, Wallet } from "lucide-react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
//       {/* Logo */}
//       <Link href="/">
//         <h1 className="text-xl font-bold">My App</h1>
//       </Link>

//       {/* Price Display */}
//       <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
//         <Wallet size={24} />
//         <span className="text-lg font-semibold">₹5000</span>
//       </div>

//       {/* Authentication Buttons */}
//       <div className="flex items-center gap-4 ">
//         <SignedOut>
//           <SignInButton />
//           <SignUpButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </header>
//   );
// // }
// "use client"

// import Link from "next/link";
// import { useState } from "react";

// import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
// import { CircleDollarSign, Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { User } from "@clerk/nextjs/server";

// export default function Header() {
//   const [balance, setBalance] = useState(5000); // Example balance

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       {/* Left - Logo & Navigation */}
//       <div className="flex items-center gap-6">
//         <Link href="/">
//            <img src="/logo.png" alt="log" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text:2xl text-xl">
//             Home
//           </Link>
//           <Link href="/subscription" className="hover:underline font-bold text-xl">
//             My Subscription
//           </Link>
//         </nav>
//       </div>

//       {/* Center - Price Section with Payment Modal */}
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline" className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
//             <Wallet size={24} />
//             <span className="text-lg font-semibold">₹{balance}</span>
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="bg-gray-900 text-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold">Add Money</h2>
//           <p className="text-gray-400 mb-4">Enter the amount you want to add.</p>
//           <input
//             type="number"
//             className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
//             placeholder="Enter amount"
//           />
//           <Button className="w-full">Add Money</Button>
//         </DialogContent>
//       </Dialog>

//       {/* Right - Authentication Buttons */}
//       <div className="flex items-center gap-4">
       
//         <SignedOut>
//           <SignInButton />
//           <SignUpButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </header>
//   );
// }



// "use client"

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
// import { CircleDollarSign, Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";

// export default function Header() {
//   const [balance, setBalance] = useState(5000);
//   const [mounted, setMounted] = useState(false);

//   // This ensures we only render the Clerk components on the client side
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       {/* Left - Logo & Navigation */}
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text:2xl text-xl">
//             Home
//           </Link>
//           <Link href="/subscription" className="hover:underline font-bold text-xl">
//             My Subscription
//           </Link>
//         </nav>
//       </div>

//       {/* Center - Price Section with Payment Modal */}
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline" className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
//             <Wallet size={24} />
//             <span className="text-lg font-semibold">₹{balance}</span>
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="bg-gray-900 text-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold">Add Money</h2>
//           <p className="text-gray-400 mb-4">Enter the amount you want to add.</p>
//           <input
//             type="number"
//             className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
//             placeholder="Enter amount"
//           />
//           <Button className="w-full">Add Money</Button>
//         </DialogContent>
//       </Dialog>

//       {/* Right - Authentication Buttons */}
//       <div className="flex items-center gap-4">
//         {mounted && (
//           <>
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
// import { CircleDollarSign, PlusCircle, Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";

// export default function Header() {
//   const [balance, setBalance] = useState(5000);
//   const [mounted, setMounted] = useState(false);
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     setMounted(true);

//     // Dynamically load Razorpay script
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async () => {
//     if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // must be public key
//         amount: data.amount,
//         currency: data.currency,
//         name: "MyApp",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: function (response: any) {
//           alert("Payment successful!");
//           setBalance(prev => prev + Number(amount));
//           setAmount("");
//         },
//         prefill: {
//           name: "User",
//           email: "user@example.com",
//         },
//         theme: {
//           color: "#10B981",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment Error:", err);
//       alert("Payment failed. Try again.");
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       {/* Left - Logo & Navigation */}
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//           <Link href="/subscription" className="hover:underline font-bold text-xl">
//             Subscription
//           </Link>
//         </nav>
//       </div>

//       {/* Right - Wallet and Auth */}
//       <div className="flex items-center gap-4">
        

//         <Dialog>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="text-black border-white">
//               <Wallet className="w-5 h-5" />
//               <span>₹{balance}</span>
//               <PlusCircle/>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="bg-white text-black">
//             <DialogTitle>Enter Amount</DialogTitle>
//             <div className="flex flex-col gap-4">
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 className="border rounded px-3 py-2"
//                 placeholder="Enter amount"
//               />
//               <Button onClick={handlePayment} className="bg-green-700 text-white">
//                 Pay with Razorpay
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }





// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { CircleDollarSign, PlusCircle, Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { db } from "@/lib/firebase";
// // import { doc } from "firebase/firestore";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     setMounted(true);

//     // Load Razorpay script dynamically
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   // Fetch user's balance from Firestore on mount
//   useEffect(() => {
//     if (user) {
//       const fetchBalance = async () => {
//         try {
//           const userRef = doc(db, "users", user.id);
//           const userDoc = await getDoc(userRef);

//           if (userDoc.exists()) {
//             setBalance(userDoc.data().credits || 0);
//           } else {
//             // If user doesn't exist, create a new record
//             await setDoc(userRef, { credits: 0 });
//           }
//         } catch (err) {
//           console.error("Error fetching balance:", err);
//         }
//       };

//       fetchBalance();
//     }
//   }, [user]);

//   const handlePayment = async () => {
//     if (!user) {
//       alert("Please log in first.");
//       return;
//     }

//     if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public Razorpay Key
//         amount: data.amount,
//         currency: data.currency,
//         name: "MyApp",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: async function (response: any) {
//           alert("Payment successful!");

//           // Update Firebase balance
//           try {
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: balance + Number(amount),
//             });

//             // Update local state
//             setBalance((prev) => prev + Number(amount));
//             setAmount("");
//           } catch (err) {
//             console.error("Failed to update Firestore:", err);
//           }
//         },
//         prefill: {
//           name: user.fullName || "User",
//           email: user.primaryEmailAddress?.emailAddress || "user@example.com",
//         },
//         theme: {
//           color: "#10B981",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment Error:", err);
//       alert("Payment failed. Try again.");
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       {/* Left - Logo & Navigation */}
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//           <Link href="/subscription" className="hover:underline font-bold text-xl">
//             Subscription
//           </Link>
//         </nav>
//       </div>

//       {/* Right - Wallet and Auth */}
//       <div className="flex items-center gap-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="text-black border-white">
//               <Wallet className="w-5 h-5" />
//               <span>₹{balance}</span>
//               <PlusCircle />
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="bg-white text-black">
//             <DialogTitle>Enter Amount</DialogTitle>
//             <div className="flex flex-col gap-4">
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 className="border rounded px-3 py-2"
//                 placeholder="Enter amount"
//               />
//               <Button onClick={handlePayment} className="bg-green-700 text-white">
//                 Pay with Razorpay
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }




// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { CircleDollarSign, PlusCircle, Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [amount, setAmount] = useState<string>("");
//   const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   useEffect(() => {
//     if (user) {
//       const fetchUserData = async () => {
//         try {
//           const userRef = doc(db, "users", user.id);
//           const userDoc = await getDoc(userRef);

//           let userData: UserData = {
//             id: user.id,
//             email: user.emailAddresses[0]?.emailAddress || "",
//             name: user.fullName || "",
//             credits: 0,
//           };

//           if (userDoc.exists()) {
//             userData.credits = userDoc.data().credits || 0;
//           } else {
//             await setDoc(userRef, userData);
//           }

//           localStorage.setItem("user", JSON.stringify(userData));
//           setBalance(userData.credits);
//         } catch (err) {
//           console.error("Error fetching user data:", err);
//         }
//       };

//       const savedUser = localStorage.getItem("user");
//       if (savedUser) {
//         const parsedUser: UserData = JSON.parse(savedUser);
//         setBalance(parsedUser.credits);
//       }

//       fetchUserData();
//     }
//   }, [user]);

//   const handlePayment = async () => {
//     if (!user) {
//       alert("Please log in first.");
//       return;
//     }

//     const paymentAmount = Number(amount);
//     if (!amount || isNaN(paymentAmount) || paymentAmount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessingPayment(true);

//     try {
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: paymentAmount }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: data.currency,
//         name: "MyApp",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: async function (response: any) {
//           try {
//             const userRef = doc(db, "users", user.id);
//             const newBalance = balance + paymentAmount;
//             await updateDoc(userRef, { credits: newBalance });

//             const updatedUser: UserData = {
//               ...JSON.parse(localStorage.getItem("user") || "{}"),
//               credits: newBalance,
//             };
//             localStorage.setItem("user", JSON.stringify(updatedUser));
//             setBalance(newBalance);
//             setAmount("");
//             alert("Payment successful!");
//           } catch (err) {
//             console.error("Failed to update Firestore:", err);
//             alert("Payment succeeded but failed to update balance. Contact support.");
//           }
//         },
//         prefill: {
//           name: user.fullName || "User",
//           email: user.primaryEmailAddress?.emailAddress || "user@example.com",
//         },
//         theme: {
//           color: "#10B981",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment Error:", err);
//       alert("Payment failed. Try again.");
//     } finally {
//       setIsProcessingPayment(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="text-white border-white bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-200 cursor-pointer">
//               <Wallet className="w-5 h-5" />
//               <span>₹{balance}</span>
//               <PlusCircle />
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="bg-white text-black">
//             <DialogTitle>Enter Amount</DialogTitle>
//             <div className="flex flex-col gap-4">
//               <div className="relative">
//                 <input
//                   type="number"
//                   min="0"
//                   step="5"
//                   value={amount}
//                   onChange={(e) => {
//                     const value = Math.max(0, parseFloat(e.target.value) || 0);
//                     setAmount(value.toString());
//                   }}
//                   className="border rounded px-3 py-2 w-full"
//                   placeholder="Enter amount"
//                 />
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
//                   <button
//                     type="button"
//                     onClick={() => setAmount((prev) => (Math.max(0, parseFloat(prev) || 0) + 5).toString())}
//                     className="text-gray-500 hover:text-black"
//                   >
//                     ▲
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setAmount((prev) => (Math.max(0, parseFloat(prev) || 0) - 5).toString())}
//                     className="text-gray-500 hover:text-black"
//                   >
//                     ▼
//                   </button>
//                 </div>
//               </div>
              
//               <div className="flex gap-2 flex-wrap">
//                 <Button variant="outline" onClick={() => setAmount("5")}>
//                   ₹5
//                 </Button>
//                 <Button variant="outline" onClick={() => setAmount("50")}>
//                   ₹50
//                 </Button>
//                 <Button variant="outline" onClick={() => setAmount("100")}>
//                   ₹100
//                 </Button>
//                 <Button variant="outline" onClick={() => setAmount("500")}>
//                   ₹500
//                 </Button>
//               </div>

//               <Button
//                 onClick={handlePayment}
//                 className="bg-blue-500 text-white"
//                 disabled={isProcessingPayment}
//               >
//                 {isProcessingPayment ? (
//                   <span className="flex items-center gap-2">
//                     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing...
//                   </span>
//                 ) : (
//                   "Pay with UPI, Cards"
//                 )}
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }
















// // components/Header.tsx
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { PaymentDialog } from "./PaymentDialog";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!user) return;

//       try {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await getDoc(userRef);

//         let userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };

//         if (userDoc.exists()) {
//           userData.credits = userDoc.data().credits || 0;
//         } else {
//           await setDoc(userRef, userData);
//         }

//         setBalance(userData.credits);
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//       }
//     };

//     fetchUserData();
//   }, [user]);

//   const handlePaymentSuccess = (amount: number) => {
//     setBalance(prev => prev + amount);
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <PaymentDialog
//           trigger={
//             <Button variant="outline" className="text-white border-white bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-200 cursor-pointer">
//               <Wallet className="w-5 h-5" />
//               <span>₹{balance}</span>
//             </Button>
//           }
//           currentBalance={balance}
//           onPaymentSuccess={handlePaymentSuccess}
//         />

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }










// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot } from "firebase/firestore";
// import { PaymentDialog } from "./PaymentDialog";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);

//   useEffect(() => {
//     if (!user) return;

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         setBalance(docSnap.data().credits || 0);
//       } else {
//         // Initialize user if not exists
//         const userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };
//         setDoc(userRef, userData);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handlePaymentSuccess = (amount: number) => {
//     setBalance(prev => prev + amount);
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <PaymentDialog
//           trigger={
//             <Button variant="outline" className="text-white border-white bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-200 cursor-pointer">
//               <Wallet className="w-5 h-5" />
//               <span>₹{balance}</span>
//             </Button>
//           }
//           currentBalance={balance}
//           onPaymentSuccess={handlePaymentSuccess}
//         />

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }










// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { PaymentDialog } from "./PaymentDialog";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   useEffect(() => {
//     if (!user) return;

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         setBalance(docSnap.data().credits || 0);
//       } else {
//         // Initialize user if not exists
//         const userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };
//         setDoc(userRef, userData);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handlePaymentSuccess = (amount: number) => {
//     setBalance(prev => prev + amount);
//     setShowPaymentDialog(false);
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-200 cursor-pointer"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-5 h-5 mr-2" />
//           <span>₹{balance}</span>
//         </Button>

//         <PaymentDialog
//           currentBalance={balance}
//           requiredAmount={0}
//           onPaymentSuccess={handlePaymentSuccess}
//           onOpenChange={setShowPaymentDialog}
//           open={showPaymentDialog}
//         />

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }









// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, setDoc } from "firebase/firestore";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);

//   useEffect(() => {
//     if (!user) return;

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         setBalance(docSnap.data().credits || 0);
//       } else {
//         // Initialize user if not exists
//         const userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };
//         setDoc(userRef, userData);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2 bg-green-800 px-4 py-2 rounded-lg">
//           <Wallet className="w-5 h-5" />
//           <span className="font-bold">₹{balance}</span>
//         </div>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }








// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, setDoc, runTransaction } from "firebase/firestore";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose
// } from  "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";


// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100); // Default to 100
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!user) return;

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         setBalance(docSnap.data().credits || 0);
//       } else {
//         // Initialize user if not exists
//         const userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };
//         setDoc(userRef, userData);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("You need to be signed in to make payments");
//       return;
//     }

//     if (amount <= 0) {
//       setError("Amount must be greater than 0");
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       const userRef = doc(db, "users", user.id);
      
//       await runTransaction(db, async (transaction) => {
//         const userDoc = await transaction.get(userRef);
//         if (!userDoc.exists()) {
//           throw new Error("User document not found");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(amount)
//         });
//       });

//       setBalance(prev => prev + amount);
//       setShowPaymentDialog(false);
//     } catch (err) {
//       console.error("Payment failed:", err);
//       setError("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-6">
//         <Link href="/">
//           <img src="/logo.png" alt="logo" className="w-15 h-15" />
//         </Link>
//         <nav className="flex gap-8">
//           <Link href="/" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-200 cursor-pointer"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-5 h-5 mr-2" />
//           <span>₹{balance}</span>
//         </Button>

//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add Money to Wallet</DialogTitle>
//               <DialogDescription>
//                 Current balance: ₹{balance}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-medium mb-3">Quick Select</h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   {presetAmounts.map((amt) => (
//                     <Button
//                       key={amt}
//                       variant={amount === amt ? "default" : "outline"}
//                       onClick={() => setAmount(amt)}
//                       className="w-full"
//                     >
//                       ₹{amt}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-medium mb-3">Custom Amount</h3>
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
//                   min="0"
//                   placeholder="Enter amount"
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm">{error}</div>
//               )}

//               <div className="flex gap-3">
//                 <DialogClose asChild>
//                   <Button variant="outline" className="w-full">
//                     Cancel
//                   </Button>
//                 </DialogClose>
//                 <Button
//                   onClick={handlePayment}
//                   disabled={isProcessing || amount <= 0}
//                   className="w-full"
//                 >
//                   {isProcessing ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     `Add ₹${amount}`
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton mode="modal">
//             <Button variant="outline" className="text-white border-white">
//               Sign Up
//             </Button>
//           </SignUpButton>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }







// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, setDoc, runTransaction } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   credits: number;
// }

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!user) return;

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         setBalance(docSnap.data().credits || 0);
//       } else {
//         const userData: UserData = {
//           id: user.id,
//           email: user.emailAddresses[0]?.emailAddress || "",
//           name: user.fullName || "",
//           credits: 0,
//         };
//         setDoc(userRef, userData);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("You need to be signed in to make payments");
//       return;
//     }

//     if (amount <= 0) {
//       setError("Amount must be greater than 0");
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       const userRef = doc(db, "users", user.id);
      
//       await runTransaction(db, async (transaction) => {
//         const userDoc = await transaction.get(userRef);
//         if (!userDoc.exists()) {
//           throw new Error("User document not found");
//         }
        
//         // Simply add the amount without any balance checks
//         transaction.update(userRef, {
//           credits: (userDoc.data().credits || 0) + amount
//         });
//       });

//       setBalance(prev => prev + amount);
//       setShowPaymentDialog(false);
//     } catch (err) {
//       console.error("Payment failed:", err);
//       setError("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img src="/logo.png" alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
//           <span className="text-xl font-bold hidden sm:inline">Fantasy Cricket</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/matches" className="hover:underline font-medium">
//             Matches
//           </Link>
//         </nav>
//       </div>

//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">₹{balance}</span>
//         </Button>

//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle className="text-xl font-bold text-green-700">Add Money to Wallet</DialogTitle>
//               <DialogDescription className="text-gray-600">
//                 Current balance: ₹{balance}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-6 mt-4">
//               <div>
//                 <h3 className="font-medium text-gray-700 mb-3">Quick Select</h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   {presetAmounts.map((amt) => (
//                     <Button
//                       key={amt}
//                       variant={amount === amt ? "default" : "outline"}
//                       onClick={() => setAmount(amt)}
//                       className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//                     >
//                       ₹{amt}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-medium text-gray-700 mb-3">Custom Amount</h3>
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
//                   min="0"
//                   placeholder="Enter amount"
//                   className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm">{error}</div>
//               )}

//               <div className="flex gap-3">
//                  <Button
//                   onClick={handlePayment}
//                   disabled={isProcessing || amount <= 0}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white"
//                 >
//                   {isProcessing ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     `Add ₹${amount}`
//                   )}
//                 </Button>
               
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" appearance={{
//             elements: {
//               userButtonAvatarBox: "w-8 h-8 md:w-9 md:h-9"
//             }
//           }} />
//         </SignedIn>
//         <SignedOut>
//           <div className="flex gap-2">
//             <SignInButton mode="modal">
//               <Button variant="outline" className="text-white border-white hover:bg-green-700 hover:text-white">
//                 Sign In
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button className="bg-white text-green-700 hover:bg-gray-100">
//                 Sign Up
//               </Button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }











// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";

// declare const Razorpay: any;

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Load balance (simplified version)
//   useEffect(() => {
//     if (!user) return;

//     const fetchBalance = async () => {
//       try {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await getDoc(userRef);

//         if (userDoc.exists()) {
//           setBalance(userDoc.data().credits || 0);
//         } else {
//           await setDoc(userRef, { credits: 0 });
//         }
//       } catch (err) {
//         console.error("Error fetching balance:", err);
//       }
//     };

//     fetchBalance();
//   }, [user]);

//   // Load Razorpay script (simplified)
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please log in first.");
//       return;
//     }

//     if (amount <= 0) {
//       setError("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Create order
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       // Razorpay options (simplified)
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: data.currency,
//         name: "Your App Name",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: async function (response: any) {
//           try {
//             // Update Firebase balance (direct update like old header)
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: balance + amount,
//             });

//             // Update local state
//             setBalance(prev => prev + amount);
//             setShowPaymentDialog(false);
//           } catch (err) {
//             console.error("Failed to update balance:", err);
//             setError("Payment succeeded but balance update failed.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//       };

//       const rzp = new Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment Error:", err);
//       setError(err.message || "Payment failed. Try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img src="/logo.png" alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
//           <span className="text-xl font-bold hidden sm:inline">Your App Name</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/products" className="hover:underline font-medium">
//             Products
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">₹{balance}</span>
//         </Button>

//         {/* Payment Dialog (simplified) */}
//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle className="text-xl font-bold text-green-700">Add Funds</DialogTitle>
//               <DialogDescription className="text-gray-600">
//                 Current balance: ₹{balance}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-4 mt-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {presetAmounts.map((amt) => (
//                   <Button
//                     key={amt}
//                     variant={amount === amt ? "default" : "outline"}
//                     onClick={() => setAmount(amt)}
//                     className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//                   >
//                     ₹{amt}
//                   </Button>
//                 ))}
//               </div>

//               <Input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 min="1"
//                 placeholder="Enter custom amount"
//                 className="border-gray-300 focus:border-green-500"
//               />

//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <Button
//                 onClick={handlePayment}
//                 disabled={isProcessing || amount <= 0}
//                 className="w-full bg-green-600 hover:bg-green-700"
//               >
//                 {isProcessing ? "Processing..." : `Pay ₹${amount}`}
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <div className="flex gap-2">
//             <SignInButton mode="modal">
//               <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                 Sign In
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button className="bg-white text-green-700 hover:bg-gray-100">
//                 Sign Up
//               </Button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }




















// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";

// declare const Razorpay: any;

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Load balance (simplified version)
//   useEffect(() => {
//     if (!user) return;

//     const fetchBalance = async () => {
//       try {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await getDoc(userRef);

//         if (userDoc.exists()) {
//           setBalance(userDoc.data().credits || 0);
//         } else {
//           await setDoc(userRef, { credits: 0 });
//         }
//       } catch (err) {
//         console.error("Error fetching balance:", err);
//       }
//     };

//     fetchBalance();
//   }, [user]);

//   // Load Razorpay script (simplified)
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please log in first.");
//       return;
//     }

//     if (amount <= 0) {
//       setError("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Create order
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       // Razorpay options (simplified)
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: data.currency,
//         name: "Your App Name",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: async function (response: any) {
//           try {
//             // Update Firebase balance (direct update like old header)
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: balance + amount,
//             });

//             // Update local state
//             setBalance(prev => prev + amount);
//             setShowPaymentDialog(false);
//           } catch (err) {
//             console.error("Failed to update balance:", err);
//             setError("Payment succeeded but balance update failed.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//       };

//       const rzp = new Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment Error:", err);
//       setError(err.message || "Payment failed. Try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img src="/logo.png" alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
//           <span className="text-xl font-bold hidden sm:inline">Your App Name</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/products" className="hover:underline font-medium">
//             Products
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">₹{balance}</span>
//         </Button>

//         {/* Payment Dialog (simplified) */}
//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle className="text-xl font-bold text-green-700">Add Funds</DialogTitle>
//               <DialogDescription className="text-gray-600">
//                 Current balance: ₹{balance}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-4 mt-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {presetAmounts.map((amt) => (
//                   <Button
//                     key={amt}
//                     variant={amount === amt ? "default" : "outline"}
//                     onClick={() => setAmount(amt)}
//                     className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//                   >
//                     ₹{amt}
//                   </Button>
//                 ))}
//               </div>

//               <Input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 min="1"
//                 placeholder="Enter custom amount"
//                 className="border-gray-300 focus:border-green-500"
//               />

//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <Button
//                 onClick={handlePayment}
//                 disabled={isProcessing || amount <= 0}
//                 className="w-full bg-green-600 hover:bg-green-700"
//               >
//                 {isProcessing ? "Processing..." : `Pay ₹${amount}`}
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <div className="flex gap-2">
//             <SignInButton mode="modal">
//               <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                 Sign In
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button className="bg-white text-green-700 hover:bg-gray-100">
//                 Sign Up
//               </Button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }










// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";

// declare const Razorpay: any;

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(0);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Set up real-time balance listener
//   useEffect(() => {
//     if (!user) {
//       setBalance(0);
//       return;
//     }

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (doc) => {
//       if (doc.exists()) {
//         const data = doc.data();
//         setBalance(data.credits || 0);
//       } else {
//         // Initialize user document if it doesn't exist
//         setDoc(userRef, { credits: 0 })
//           .then(() => setBalance(0))
//           .catch((err) => console.error("Error initializing user:", err));
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please log in first.");
//       return;
//     }

//     if (amount <= 0) {
//       setError("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Create order
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to create payment order");
//       }

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       // Razorpay options
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: data.currency,
//         name: "Fantasy Team Generator",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: async function (response: any) {
//           try {
//             // Verify payment on your server
//             const verificationRes = await fetch("/api/verify-payment", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//                 amount: amount,
//                 userId: user.id,
//               }),
//             });

//             if (!verificationRes.ok) {
//               throw new Error("Payment verification failed");
//             }

//             // The balance will update automatically via the snapshot listener
//             setShowPaymentDialog(false);
//           } catch (err) {
//             console.error("Payment verification error:", err);
//             setError("Payment verification failed. Please contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//           },
//         },
//       };

//       const rzp = new Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment Error:", err);
//       setError(err.message || "Payment failed. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="w-10 h-10 md:w-12 md:h-12"
//           />
//           <span className="text-xl font-bold hidden sm:inline">Fantasy Team Generator</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/matches" className="hover:underline font-medium">
//             Matches
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white flex items-center"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">
//             ₹{balance.toLocaleString('en-IN')}
//           </span>
//         </Button>

//         {/* Payment Dialog */}
//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle className="text-xl font-bold text-green-700">
//                 Add Funds to Wallet
//               </DialogTitle>
//               <DialogDescription className="text-gray-600">
//                 Current balance: ₹{balance.toLocaleString('en-IN')}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-4 mt-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {presetAmounts.map((amt) => (
//                   <Button
//                     key={amt}
//                     variant={amount === amt ? "default" : "outline"}
//                     onClick={() => setAmount(amt)}
//                     className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//                   >
//                     ₹{amt.toLocaleString('en-IN')}
//                   </Button>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Custom Amount
//                 </label>
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(Number(e.target.value))}
//                   min="10"
//                   step="10"
//                   placeholder="Enter amount in ₹"
//                   className="border-gray-300 focus:border-green-500"
//                 />
//               </div>

//               {error && (
//                 <div className="bg-red-50 text-red-600 p-2 rounded text-sm">
//                   {error}
//                 </div>
//               )}

//               <Button
//                 onClick={handlePayment}
//                 disabled={isProcessing || amount <= 0}
//                 className="w-full bg-green-600 hover:bg-green-700"
//               >
//                 {isProcessing ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing...
//                   </span>
//                 ) : (
//                   `Pay ₹${amount.toLocaleString('en-IN')}`
//                 )}
//               </Button>

//               <div className="text-xs text-gray-500 text-center">
//                 <p>Payments are processed securely via Razorpay</p>
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <div className="flex gap-2">
//             <SignInButton mode="modal">
//               <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                 Sign In
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button className="bg-white text-green-700 hover:bg-gray-100">
//                 Sign Up
//               </Button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }










// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, updateDoc } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";

// declare const Razorpay: any;

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { user } = useUser();
//   const [balance, setBalance] = useState<number>(1);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Real-time balance listener
//   useEffect(() => {
//     if (!user) {
//       setBalance(0);
//       return;
//     }

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (doc) => {
//       if (doc.exists()) {
//         setBalance(doc.data().credits || 0);
//       }
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Load Razorpay script
//   useEffect(() => {
//     if (typeof window !== 'undefined' && !(window as any).Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onerror = () => {
//         toast.error("Failed to load payment processor. Please refresh the page.");
//       };
//       document.body.appendChild(script);

//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, []);

//   const handlePayment = async () => {
//     if (!user) {
//       toast.error("Please log in to add funds");
//       return;
//     }

//     if (amount < 10) {
//       toast.error("Minimum amount is ₹10");
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       // Create order
//       const orderResponse = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amount * 100 }), // Convert to paise
//       });

//       if (!orderResponse.ok) {
//         throw new Error("Failed to create payment order");
//       }

//       const orderData = await orderResponse.json();

//       // Initialize Razorpay
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Fantasy Team Generator",
//         description: "Wallet Top-up",
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             // Directly update balance in Firestore
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: balance + amount,
//             });
            
//             toast.success(`₹${amount} added to your wallet!`);
//             setShowPaymentDialog(false);
//           } catch (error: any) {
//             console.error("Balance update error:", error);
//             toast.error("Payment succeeded but balance update failed. Contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info("Payment cancelled");
//           },
//         },
//       };

//       const rzp = new Razorpay(options);
//       rzp.open();
//     } catch (error: any) {
//       console.error("Payment error:", error);
//       toast.error(error.message || "Payment failed. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="w-10 h-10 md:w-12 md:h-12"
//           />
//           <span className="text-xl font-bold hidden sm:inline">Fantasy Team Generator</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/matches" className="hover:underline font-medium">
//             Matches
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white flex items-center"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">
//             ₹{balance.toLocaleString('en-IN')}
//           </span>
//         </Button>

//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle className="text-xl font-bold text-green-700">
//                 Add Funds to Wallet
//               </DialogTitle>
//               <DialogDescription className="text-gray-600">
//                 Current balance: ₹{balance.toLocaleString('en-IN')}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-4 mt-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {presetAmounts.map((amt) => (
//                   <Button
//                     key={amt}
//                     variant={amount === amt ? "default" : "outline"}
//                     onClick={() => setAmount(amt)}
//                     className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//                   >
//                     ₹{amt.toLocaleString('en-IN')}
//                   </Button>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Custom Amount (₹)
//                 </label>
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(Number(e.target.value))}
//                   min="10"
//                   step="10"
//                   placeholder="Enter amount"
//                   className="border-gray-300 focus:border-green-500"
//                 />
//               </div>

//               <Button
//                 onClick={handlePayment}
//                 disabled={isProcessing || amount < 10}
//                 className="w-full bg-green-600 hover:bg-green-700"
//               >
//                 {isProcessing ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing...
//                   </span>
//                 ) : (
//                   `Pay ₹${amount.toLocaleString('en-IN')}`
//                 )}
//               </Button>

//               <div className="text-xs text-gray-500 text-center">
//                 <p>Payments are processed securely via Razorpay</p>
//                 <p>Minimum amount: ₹10</p>
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>

//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//         <SignedOut>
//           <div className="flex gap-2">
//             <SignInButton mode="modal">
//               <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                 Sign In
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button className="bg-white text-green-700 hover:bg-gray-100">
//                 Sign Up
//               </Button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//       </div>
//     </header>
//   );
// }








// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
// import dynamic from 'next/dynamic';
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, updateDoc } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";

// // Dynamically import UserButton with no SSR
// const UserButton = dynamic(
//   () => import("@clerk/nextjs").then((mod) => mod.UserButton),
//   {
//     ssr: false,
//     loading: () => <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//   }
// );

// // Dynamically import Razorpay since it's window-dependent
// const loadRazorpay = () => {
//   if (typeof window !== 'undefined' && !(window as any).Razorpay) {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onerror = () => {
//       toast.error("Failed to load payment processor. Please refresh the page.");
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }
//   return () => {};
// };

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { isLoaded, user } = useUser();
//   const [balance, setBalance] = useState<number | null>(null);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Real-time balance listener
//   useEffect(() => {
//     if (!isLoaded || !user) {
//       setBalance(0);
//       return;
//     }

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (doc) => {
//       if (doc.exists()) {
//         setBalance(doc.data().credits || 0);
//       }
//     });

//     return () => unsubscribe();
//   }, [isLoaded, user]);

//   // Load Razorpay script
//   useEffect(() => {
//     return loadRazorpay();
//   }, []);

//   const handlePayment = async () => {
//     if (!user) {
//       toast.error("Please log in to add funds");
//       return;
//     }

//     if (amount < 10) {
//       toast.error("Minimum amount is ₹10");
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       const orderResponse = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amount * 100 }),
//       });

//       if (!orderResponse.ok) throw new Error("Failed to create payment order");

//       const orderData = await orderResponse.json();
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Fantasy Team Generator",
//         description: "Wallet Top-up",
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: (balance || 0) + amount,
//             });
//             toast.success(`₹${amount} added to your wallet!`);
//             setShowPaymentDialog(false);
//           } catch (error) {
//             console.error("Balance update error:", error);
//             toast.error("Payment succeeded but balance update failed. Contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info("Payment cancelled");
//           },
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error: any) {
//       console.error("Payment error:", error);
//       toast.error(error.message || "Payment failed. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="w-10 h-10 md:w-12 md:h-12"
//           />
//           <span className="text-xl font-bold hidden sm:inline">Fantasy Team Generator</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/matches" className="hover:underline font-medium">
//             Matches
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white flex items-center"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">
//             {balance !== null ? `₹${balance.toLocaleString('en-IN')}` : '...'}
//           </span>
//         </Button>

//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             {/* Dialog content remains the same */}
//           </DialogContent>
//         </Dialog>

//         {isLoaded ? (
//           <>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//             <SignedOut>
//               <div className="flex gap-2">
//                 <SignInButton mode="modal">
//                   <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                     Sign In
//                   </Button>
//                 </SignInButton>
//                 <SignUpButton mode="modal">
//                   <Button className="bg-white text-green-700 hover:bg-gray-100">
//                     Sign Up
//                   </Button>
//                 </SignUpButton>
//               </div>
//             </SignedOut>
//           </>
//         ) : (
//           <div className="flex gap-2">
//             <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
// import dynamic from 'next/dynamic';
// import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { db } from "@/lib/firebase";
// import { doc, onSnapshot, updateDoc } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";

// // Dynamically import UserButton with no SSR
// const UserButton = dynamic(
//   () => import("@clerk/nextjs").then((mod) => mod.UserButton),
//   {
//     ssr: false,
//     loading: () => <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//   }
// );

// const presetAmounts = [50, 100, 200, 500];

// export default function Header() {
//   const { isLoaded, user } = useUser();
//   const [balance, setBalance] = useState<number | null>(null);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [amount, setAmount] = useState<number>(100);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

//   // Real-time balance listener
//   useEffect(() => {
//     if (!isLoaded || !user) {
//       setBalance(0);
//       return;
//     }

//     const userRef = doc(db, "users", user.id);
//     const unsubscribe = onSnapshot(userRef, (doc) => {
//       if (doc.exists()) {
//         setBalance(doc.data().credits || 0);
//       }
//     });

//     return () => unsubscribe();
//   }, [isLoaded, user]);

//   // Load Razorpay script - improved version
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     if ((window as any).Razorpay) {
//       setIsRazorpayLoaded(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => setIsRazorpayLoaded(true);
//     script.onerror = () => {
//       toast.error("Failed to load payment processor. Please refresh the page.");
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async () => {
//     if (!user || !isRazorpayLoaded) {
//       toast.error("Payment system not ready. Please try again.");
//       return;
//     }

//     if (amount < 10) {
//       toast.error("Minimum amount is ₹10");
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       const orderResponse = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amount * 100 }),
//       });

//       if (!orderResponse.ok) throw new Error("Failed to create payment order");

//       const orderData = await orderResponse.json();
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Fantasy Team Generator",
//         description: "Wallet Top-up",
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: (balance || 0) + amount,
//             });
//             toast.success(`₹${amount} added to your wallet!`);
//             setShowPaymentDialog(false);
//           } catch (error) {
//             console.error("Balance update error:", error);
//             toast.error("Payment succeeded but balance update failed. Contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933",
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info("Payment cancelled");
//           },
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error: any) {
//       console.error("Payment error:", error);
//       toast.error(error.message || "Payment failed. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
//       {/* Left side - Logo & Navigation */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <Link href="/" className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="w-10 h-10 md:w-12 md:h-12"
//           />
//           <span className="text-xl font-bold hidden sm:inline">Fantasy Team Generator</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="hover:underline font-medium">
//             Home
//           </Link>
//           <Link href="/matches" className="hover:underline font-medium">
//             Matches
//           </Link>
//         </nav>
//       </div>

//       {/* Right side - Wallet & Auth */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button
//           variant="outline"
//           className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white flex items-center"
//           onClick={() => setShowPaymentDialog(true)}
//         >
//           <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//           <span className="font-medium">
//             {balance !== null ? `₹${balance.toLocaleString('en-IN')}` : '...'}
//           </span>
//         </Button>

//         <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
//           <DialogContent className="bg-white text-gray-800 rounded-lg max-w-md">
//             <DialogHeader>
//               <DialogTitle>Add Funds to Wallet</DialogTitle>
//               <DialogDescription>
//                 Enter the amount you want to add to your wallet
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                 {presetAmounts.map((amt) => (
//                   <Button
//                     key={amt}
//                     variant={amount === amt ? "default" : "outline"}
//                     onClick={() => setAmount(amt)}
//                   >
//                     ₹{amt}
//                   </Button>
//                 ))}
//               </div>
//               <Input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 placeholder="Enter custom amount"
//                 min="10"
//               />
//               <Button
//                 onClick={handlePayment}
//                 disabled={isProcessing || !isRazorpayLoaded}
//               >
//                 {isProcessing ? "Processing..." : "Proceed to Payment"}
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>

//         {isLoaded ? (
//           <>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//             <SignedOut>
//               <div className="flex gap-2">
//                 <SignInButton mode="modal">
//                   <Button variant="outline" className="text-white border-white hover:bg-green-700">
//                     Sign In
//                   </Button>
//                 </SignInButton>
//                 <SignUpButton mode="modal">
//                   <Button className="bg-white text-green-700 hover:bg-gray-100">
//                     Sign Up
//                   </Button>
//                 </SignUpButton>
//               </div>
//             </SignedOut>
//           </>
//         ) : (
//           <div className="flex gap-2">
//             <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import dynamic from 'next/dynamic';
import { Wallet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "../../components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Dynamically import UserButton with no SSR
const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { 
    ssr: false,
    loading: () => <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
  }
);

// Dynamically import Razorpay since it's window-dependent
const loadRazorpay = () => {
  if (typeof window !== 'undefined' && !(window as any).Razorpay) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onerror = () => {
      toast.error("Failed to load payment processor. Please refresh the page.");
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }
  return () => {};
};

const presetAmounts = [50, 100, 200, 500];

export default function Header() {
  const { isLoaded, user } = useUser();
  const [balance, setBalance] = useState<number | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [amount, setAmount] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Real-time balance listener
  useEffect(() => {
    if (!isLoaded || !user) {
      setBalance(0);
      return;
    }

    const userRef = doc(db, "users", user.id);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        setBalance(doc.data().credits || 0);
      }
    });

    return () => unsubscribe();
  }, [isLoaded, user]);

  // Load Razorpay script
  useEffect(() => {
    return loadRazorpay();
  }, []);

  const handlePayment = async () => {
    if (!user) {
      setError('Please sign in to make payments');
      return;
    }

    if (amount < 10) {
      setError('Minimum amount is ₹10');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create payment order");

      const orderData = await orderResponse.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Fantasy Team Generator",
        description: "Wallet Top-up",
        order_id: orderData.id,
        handler: async (response: any) => {
          try {
            if (!response.razorpay_payment_id) {
              throw new Error('Payment failed: No payment ID received');
            }

            const userRef = doc(db, "users", user.id);
            await updateDoc(userRef, {
              credits: (balance || 0) + amount,
            });

            toast.success(`₹${amount} added to your wallet!`);
            setShowPaymentDialog(false);
          } catch (error: any) {
            console.error('Payment processing error:', error);
            setError(error.message || 'Failed to update wallet');
            toast.error(error.message || 'Payment processing failed');
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: user.fullName || "",
          email: user.primaryEmailAddress?.emailAddress || "",
        },
        theme: {
          color: "#339933",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            toast.info("Payment cancelled");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      
      rzp.on('payment.failed', (response: any) => {
        setError(response.error.description || 'Payment failed');
        toast.error(response.error.description || 'Payment failed');
        setIsProcessing(false);
      });

    } catch (error: any) {
      console.error("Payment error:", error);
      setError(error.message || "Payment failed. Please try again.");
      toast.error(error.message || "Payment failed");
      setIsProcessing(false);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Left side - Logo & Navigation */}
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          {/* <span className="text-xl font-bold hidden sm:inline">Fantasy Team Generator</span> */}
        </Link>
        <nav className="flex flex-row md:flex-row md:items-center md:justify-between gap-4 md:gap-10 px-4 py-2">
        <Link href="/" className="hover:underline font-medium flex items-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
  Home
</Link>
<Link href="/history" className="hover:underline font-medium flex items-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
  History
</Link>
</nav>

      </div>

      {/* Right side - Wallet & Auth */}
      <div className="flex items-center gap-3 md:gap-4 pr-10 space-x-5 xl:space-x-24  ">
        <Button
          variant="outline"
          className="text-white border-white bg-green-600 hover:bg-green-700 hover:text-white flex items-center"
          onClick={() => setShowPaymentDialog(true)}
        >
          <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          <span className="font-medium">
            {balance !== null ? `₹${balance.toLocaleString('en-IN')}` : '...'}
          </span>
        </Button>

        <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
          <DialogContent className="max-w-md bg-white rounded-lg shadow-xl">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setShowPaymentDialog(false)}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              >
                <X className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-green-700">Add Wallet Credits</DialogTitle>
              <DialogDescription asChild>
                <div className="text-gray-600 mt-2">
                  Current Balance: <span className="font-extrabold">₹{balance?.toLocaleString('en-IN') || 0}</span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                {presetAmounts.map((amt) => (
                  <Button
                    key={amt}
                    variant={amount === amt ? "default" : "outline"}
                    onClick={() => setAmount(amt)}
                    className={`w-full text-black ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
                  >
                    ₹{amt}
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Custom Amount</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min={10}
                  placeholder="Enter custom amount"
                  className="text-center text-gray-800 text-lg font-medium border-gray-300 focus:ring-green-500 focus:border-green-500"
                />
                <p className="text-xs text-gray-500 text-center">
                  Minimum: ₹10
                </p>
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md text-center">
                  {error}
                </div>
              )}

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay ₹${amount}`
                )}
              </Button>

              <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200">
                <p>Payments processed securely via Razorpay</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {isLoaded ? (
          <>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div className="flex gap-2">
                <SignInButton mode="modal">
                  <Button variant="outline" className="text-white border-white hover:bg-green-700">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-white text-green-700 hover:bg-gray-100">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </>
        ) : (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
          </div>
        )}
      </div>
    </header>
  );
}