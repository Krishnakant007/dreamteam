// // components/PaymentDialog.tsx
// "use client";

// // import { Button } from "../../../components/ui/button";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";
// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "../../components/ui/button";
// // components/PaymentDialog.tsx


// interface PaymentDialogProps {
//   trigger?: React.ReactNode;
//   currentBalance: number;
//   onPaymentSuccess?: (amount: number) => void;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
// }

// export function PaymentDialog({
//   trigger,
//   currentBalance,
//   onPaymentSuccess,
//   open,
//   onOpenChange
// }: PaymentDialogProps) {
//   const [amount, setAmount] = useState<string>("");
//   const [isProcessingPayment, setIsProcessingPayment] = useState(false);

//   const handlePayment = async () => {
//     if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessingPayment(true);

//     try {
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: Number(amount) }),
//       });

//       const data = await res.json();

//       if (!data.id) {
//         throw new Error("Order creation failed");
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: data.currency,
//         name: "Fantasy Team Generator",
//         description: "Wallet Top-up",
//         order_id: data.id,
//         handler: function (response: any) {
//           if (onPaymentSuccess) {
//             onPaymentSuccess(Number(amount));
//           }
//           alert("Payment successful!");
//           if (onOpenChange) onOpenChange(false);
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
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       {trigger && (
//         <DialogTrigger asChild>
//           {trigger}
//         </DialogTrigger>
//       )}
//       <DialogContent className="bg-white text-black">
//         <DialogTitle>Add Money to Wallet</DialogTitle>
//         <div className="flex flex-col gap-4">
//           <div className="relative">
//             <input
//               type="number"
//               min="0"
//               step="5"
//               value={amount}
//               onChange={(e) => {
//                 const value = Math.max(0, parseFloat(e.target.value) || 0);
//                 setAmount(value.toString());
//               }}
//               className="border rounded px-3 py-2 w-full"
//               placeholder="Enter amount"
//             />
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
//               <button
//                 type="button"
//                 onClick={() => setAmount((prev) => (Math.max(0, parseFloat(prev) || 0) + 5).toString())}
//                 className="text-gray-500 hover:text-black"
//               >
//                 ▲
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setAmount((prev) => (Math.max(0, parseFloat(prev) || 0) - 5).toString())}
//                 className="text-gray-500 hover:text-black"
//               >
//                 ▼
//               </button>
//             </div>
//           </div>
          
//           <div className="flex gap-2 flex-wrap">
//             <Button variant="outline" onClick={() => setAmount("5")}>
//               ₹5
//             </Button>
//             <Button variant="outline" onClick={() => setAmount("50")}>
//               ₹50
//             </Button>
//             <Button variant="outline" onClick={() => setAmount("100")}>
//               ₹100
//             </Button>
//             <Button variant="outline" onClick={() => setAmount("500")}>
//               ₹500
//             </Button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-sm">Current Balance: ₹{currentBalance}</span>
//             <Button
//               onClick={handlePayment}
//               className="bg-blue-500 text-white"
//               disabled={isProcessingPayment}
//             >
//               {isProcessingPayment ? "Processing..." : "Pay Now"}
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }





// // components/PaymentDialog.tsx
// "use client";

// import { useEffect } from "react";
// import { Button } from "../../components/ui/button";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";

// interface PaymentDialogProps {
//   trigger?: React.ReactNode;
//   currentBalance: number;
//   onPaymentSuccess: (amount: number) => void;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   requiredAmount?: number; // For team generation
// }

// export function PaymentDialog({
//   trigger,
//   currentBalance,
//   onPaymentSuccess,
//   open,
//   onOpenChange,
//   requiredAmount
// }: PaymentDialogProps) {
//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async (amount: number) => {
//     try {
//       const res = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount }),
//       });
      
//       const order = await res.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Fantasy Team Generator",
//         description: requiredAmount
//           ? `Team Generation - ${requiredAmount} credits`
//           : "Wallet Top-up",
//         order_id: order.id,
//         handler: function (response: any) {
//           onPaymentSuccess(amount);
//           if (onOpenChange) onOpenChange(false);
//         },
//         theme: {
//           color: "#10B981",
//         },
//         prefill: {
//           name: "Customer Name", // You can get from user auth
//           email: "customer@example.com",
//         }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment failed:", err);
//       alert("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
//       <DialogContent className="bg-white text-black max-w-md">
//         <DialogTitle>
//           {requiredAmount ? "Complete Payment" : "Add Money to Wallet"}
//         </DialogTitle>
        
//         {requiredAmount && (
//           <div className="bg-yellow-50 p-3 rounded mb-4">
//             <p>You need ₹{requiredAmount} more to generate teams</p>
//             <p className="font-bold">Current balance: ₹{currentBalance}</p>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-3 mb-4">
//           {[100, 200, 500, 1000].map((amount) => (
//             <Button
//               key={amount}
//               variant="outline"
//               onClick={() => handlePayment(amount)}
//               className="border border-gray-300 hover:bg-gray-100"
//             >
//               ₹{amount}
//             </Button>
//           ))}
//         </div>

//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Other amount"
//             min="10"
//             className="flex-1 border p-2 rounded"
//             onChange={(e) => setCustomAmount(Number(e.target.value))}
//           />
//           <Button
//             onClick={() => customAmount && handlePayment(customAmount)}
//             disabled={!customAmount || customAmount < 10}
//           >
//             Pay
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }




// // components/PaymentDialog.tsx
// "use client";

// import { useEffect, useState } from "react"; // Added useState import
// import { Button } from "../../components/ui/button";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../../components/ui/dialog";

// interface PaymentDialogProps {
//   trigger?: React.ReactNode;
//   currentBalance: number;
//   onPaymentSuccess: (amount: number) => void;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   requiredAmount?: number;
// }

// export function PaymentDialog({
//   trigger,
//   currentBalance,
//   onPaymentSuccess,
//   open,
//   onOpenChange,
//   requiredAmount
// }: PaymentDialogProps) {
//   const [customAmount, setCustomAmount] = useState<number | null>(null); // Added state

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async (amount: number) => {
//     try {
//       const res = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount }),
//       });
      
//       const order = await res.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Fantasy Team Generator",
//         description: requiredAmount
//           ? `Team Generation - ${requiredAmount} credits`
//           : "Wallet Top-up",
//         order_id: order.id,
//         handler: function (response: any) {
//           onPaymentSuccess(amount);
//           if (onOpenChange) onOpenChange(false);
//         },
//         theme: {
//           color: "#10B981",
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//         }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment failed:", err);
//       alert("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
//       <DialogContent className="bg-white text-black max-w-md">
//         <DialogTitle>
//           {requiredAmount ? "Complete Payment" : "Add Money to Wallet"}
//         </DialogTitle>
        
//         {requiredAmount && (
//           <div className="bg-yellow-50 p-3 rounded mb-4">
//             <p>You need ₹{requiredAmount} more to generate teams</p>
//             <p className="font-bold">Current balance: ₹{currentBalance}</p>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-3 mb-4">
//           {[100, 200, 500, 1000].map((amount) => (
//             <Button
//               key={amount}
//               variant="outline"
//               onClick={() => handlePayment(amount)}
//               className="border border-gray-300 hover:bg-gray-100"
//             >
//               ₹{amount}
//             </Button>
//           ))}
//         </div>

//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Other amount"
//             min="10"
//             className="flex-1 border p-2 rounded"
//             onChange={(e) => setCustomAmount(Number(e.target.value))}
//           />
//           <Button
//             onClick={() => customAmount && handlePayment(customAmount)}
//             disabled={!customAmount || customAmount < 10}
//           >
//             Pay
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }













// // components/PaymentDialog.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription }  from "../../components/ui/dialog";

// interface PaymentDialogProps {
//   trigger?: React.ReactNode;
//   currentBalance: number;
//   onPaymentSuccess: (amount: number) => void;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   requiredAmount?: number;
// }

// export function PaymentDialog({
//   trigger,
//   currentBalance,
//   onPaymentSuccess,
//   open,
//   onOpenChange,
//   requiredAmount
// }: PaymentDialogProps) {
//   const [customAmount, setCustomAmount] = useState<number | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = async (amount: number) => {
//     setIsProcessing(true);
//     try {
//       const res = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount }),
//       });
      
//       if (!res.ok) throw new Error('Failed to create order');
      
//       const order = await res.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Fantasy Team Generator",
//         description: requiredAmount
//           ? `Team Generation - ${requiredAmount} credits`
//           : "Wallet Top-up",
//         order_id: order.id,
//         handler: function (response: any) {
//           onPaymentSuccess(amount);
//           if (onOpenChange) onOpenChange(false);
//         },
//         theme: {
//           color: "#2563EB",
//         },
//         prefill: {
//           name: "Fantasy Player",
//           email: "user@example.com",
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//           }
//         }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment failed:", err);
//       alert("Payment failed. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
//       <DialogContent className="bg-white text-black max-w-md p-6">
//         <DialogTitle className="text-xl font-bold mb-2">
//           {requiredAmount ? "Complete Payment" : "Add Money to Wallet"}
//         </DialogTitle>
        
//         {requiredAmount && (
//           <DialogDescription className="bg-blue-50 p-4 rounded mb-4">
//             <p className="font-medium">You need ₹{requiredAmount} more to generate teams</p>
//             <p className="text-sm">Current balance: ₹{currentBalance}</p>
//           </DialogDescription>
//         )}

//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Quick Top-up</h3>
//           <div className="grid grid-cols-2 gap-3 mb-4">
//             {[100, 200, 500, 1000].map((amount) => (
//               <Button
//                 key={amount}
//                 variant="outline"
//                 onClick={() => handlePayment(amount)}
//                 className="border border-gray-300 hover:bg-blue-50"
//                 disabled={isProcessing}
//               >
//                 ₹{amount}
//               </Button>
//             ))}
//           </div>

//           <h3 className="font-semibold mb-3">Custom Amount</h3>
//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Enter amount"
//               min="10"
//               step="10"
//               className="flex-1 border p-2 rounded"
//               onChange={(e) => setCustomAmount(Number(e.target.value))}
//               disabled={isProcessing}
//             />
//             <Button
//               onClick={() => customAmount && handlePayment(customAmount)}
//               disabled={!customAmount || customAmount < 10 || isProcessing}
//             >
//               {isProcessing ? 'Processing...' : 'Pay'}
//             </Button>
//           </div>
//         </div>

//         <div className="text-xs text-gray-500">
//           <p>Payments are processed securely via Razorpay</p>
//           <p>100% money-back guarantee if teams are not generated</p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

















// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle , DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { db } from "@/lib/firebase";
// import { doc, updateDoc, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";
// import { Input } from "./ui/input";
// // import { Dialog } from "../../components/ui/dialog";

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
//   trigger?: React.ReactNode;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
//   trigger
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(requiredAmount);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

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
//       await updateDoc(userRef, {
//         credits: increment(amount)
//       });
//       onPaymentSuccess(amount);
//       onOpenChange(false);
//     } catch (err) {
//       console.error("Payment failed:", err);
//       setError("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       {trigger}
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Add Credits</DialogTitle>
//             <DialogDescription>
//               Your current balance: ₹{currentBalance}
//             </DialogDescription>
//           </DialogHeader>
          
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Amount to Add (₹)
//               </label>
//               <Input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//                 min={requiredAmount}
//               />
//               <p className="text-sm text-muted-foreground mt-1">
//                 Minimum required: ₹{requiredAmount}
//               </p>
//             </div>

//             {error && (
//               <div className="text-red-500 text-sm">{error}</div>
//             )}

//             <Button
//               onClick={handlePayment}
//               disabled={isProcessing}
//               className="w-full"
//             >
//               {isProcessing ? "Processing..." : `Add ₹${amount} to Wallet`}
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
//  import { Dialog, DialogHeader, DialogTitle , DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(requiredAmount);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (open) {
//       setAmount(requiredAmount);
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("You need to be signed in to make payments");
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum amount is ₹${requiredAmount}`);
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

//       onPaymentSuccess(amount);
//       onOpenChange(false);
//     } catch (err) {
//       console.error("Payment failed:", err);
//       setError("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add Credits</DialogTitle>
//           <DialogDescription>
//             Current balance: ₹{currentBalance} | Required: ₹{requiredAmount}
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Amount to Add (₹)
//             </label>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => {
//                 const value = Math.max(Number(e.target.value), requiredAmount);
//                 setAmount(value);
//               }}
//               min={requiredAmount}
//             />
//             <p className="text-sm text-muted-foreground mt-1">
//               Minimum required: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm">{error}</div>
//           )}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full"
//           >
//             {isProcessing ? "Processing..." : `Add ₹${amount} to Wallet`}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// const presetAmounts = [50, 100, 200, 500];

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(requiredAmount);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50)); // Default to requiredAmount or minimum ₹50
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please sign in to make payments");
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Initialize Razorpay payment
//       const response = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount })
//       });

//       const orderData = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: "INR",
//         name: "Your App Name",
//         order_id: orderData.id,
//         handler: async function(response: any) {
//           try {
//             // Verify payment
//             const verificationResponse = await fetch('/api/verify-payment', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature
//               })
//             });

//             if (!verificationResponse.ok) throw new Error('Payment verification failed');

//             // Update Firestore
//             await runTransaction(db, async (transaction) => {
//               const userRef = doc(db, "users", user.id);
//               transaction.update(userRef, {
//                 credits: increment(amount)
//               });
//             });

//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err) {
//             console.error("Payment processing error:", err);
//             setError("Payment verification failed. Contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         theme: { color: "#339933" }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment error:", err);
//       setError(err.message || "Payment failed. Try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Add Wallet Credits</DialogTitle>
//           <DialogDescription>
//             Current: ₹{currentBalance} | Need: ₹{requiredAmount}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className="w-full"
//               >
//                 ₹{amt}
//               </Button>
//             ))}
//           </div>

//           <div>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-lg font-medium"
//             />
//             <p className="text-sm text-muted-foreground mt-1 text-center">
//               Minimum: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700"
//             size="lg"
//           >
//             {isProcessing ? (
//               <span className="flex items-center justify-center gap-2">
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${amount}`
//             )}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }





// // app/components/PaymentDialog.tsx



// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
//  import { Dialog, DialogHeader, DialogTitle , DialogContent, DialogDescription } from "../../components/ui/dialog";

// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// const presetAmounts = [50, 100, 200, 500];

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(requiredAmount);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50));
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please sign in to make payments");
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       const response = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount })
//       });

//       const orderData = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: "INR",
//         name: "Fantasy App",
//         order_id: orderData.id,
//         handler: async function(response: any) {
//           try {
//             const verificationResponse = await fetch('/api/verify-payment', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature
//               })
//             });

//             if (!verificationResponse.ok) throw new Error('Payment verification failed');

//             await runTransaction(db, async (transaction) => {
//               const userRef = doc(db, "users", user.id);
//               transaction.update(userRef, {
//                 credits: increment(amount)
//               });
//             });

//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err) {
//             console.error("Payment processing error:", err);
//             setError("Payment verification failed. Contact support.");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         theme: { color: "#339933" }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment error:", err);
//       setError(err.message || "Payment failed. Try again.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Add Wallet Credits</DialogTitle>
//           <DialogDescription>
//             Current: ₹{currentBalance} | Need: ₹{requiredAmount}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className="w-full"
//               >
//                 ₹{amt}
//               </Button>
//             ))}
//           </div>

//           <div>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-lg font-medium"
//             />
//             <p className="text-sm text-muted-foreground mt-1 text-center">
//               Minimum: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700"
//             size="lg"
//           >
//             {isProcessing ? "Processing..." : `Pay ₹${amount}`}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }












// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle , DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";
// import { toast } from "sonner";

// declare const Razorpay: any;

// const presetAmounts = [50, 100, 200, 500];

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(requiredAmount);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Load Razorpay script when dialog opens
//   useEffect(() => {
//     if (open && typeof window !== 'undefined' && !(window as any).Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onerror = () => {
//         setError("Failed to load payment processor. Please refresh the page.");
//       };
//       document.body.appendChild(script);

//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [open]);

//   // Reset form when dialog opens
//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50));
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError("Please sign in to make payments");
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Step 1: Create order
//       const orderResponse = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: amount * 100 }) // Convert to paise
//       });

//       if (!orderResponse.ok) {
//         throw new Error("Failed to create payment order");
//       }

//       const orderData = await orderResponse.json();

//       // Step 2: Initialize Razorpay payment
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: "INR",
//         name: "Fantasy App",
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             // Step 3: Verify payment
//             const verificationResponse = await fetch('/api/verify-payment', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//                 amount: amount
//               })
//             });

//             const verificationData = await verificationResponse.json();
            
//             if (!verificationResponse.ok || !verificationData.success) {
//               throw new Error(verificationData.message || "Payment verification failed");
//             }

//             // Step 4: Update user balance
//             await runTransaction(db, async (transaction) => {
//               const userRef = doc(db, "users", user.id);
//               transaction.update(userRef, {
//                 credits: increment(amount)
//               });
//             });

//             // Success flow
//             toast.success(`₹${amount} added to your wallet!`);
//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err: any) {
//             console.error("Payment processing error:", err);
//             setError(err.message || "Payment verification failed. Contact support.");
//             toast.error("Payment verification failed");
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || "",
//           email: user.primaryEmailAddress?.emailAddress || "",
//         },
//         theme: {
//           color: "#339933"
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info("Payment cancelled");
//           }
//         }
//       };

//       const rzp = new Razorpay(options);
//       rzp.open();
//     } catch (err: any) {
//       console.error("Payment error:", err);
//       setError(err.message || "Payment failed. Try again.");
//       toast.error(err.message || "Payment failed");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Add Wallet Credits</DialogTitle>
//           <DialogDescription>
//             Current: ₹{currentBalance.toLocaleString('en-IN')} | Need: ₹{requiredAmount.toLocaleString('en-IN')}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : ''}`}
//               >
//                 ₹{amt.toLocaleString('en-IN')}
//               </Button>
//             ))}
//           </div>

//           <div>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-lg font-medium"
//             />
//             <p className="text-sm text-muted-foreground mt-1 text-center">
//               Minimum: ₹{requiredAmount.toLocaleString('en-IN')}
//             </p>
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700"
//             size="lg"
//           >
//             {isProcessing ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${amount.toLocaleString('en-IN')}`
//             )}
//           </Button>

//           <div className="text-xs text-gray-500 text-center">
//             <p>Payments are processed securely via Razorpay</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }









// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";
// import { toast } from "sonner";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const presetAmounts = [50, 100, 200, 500];

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(Math.max(requiredAmount, 50));
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Load Razorpay script
//   useEffect(() => {
//     if (open && typeof window !== 'undefined' && !window.Razorpay) {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
//       script.onerror = () => {
//         setError('Failed to load payment processor');
//         toast.error('Payment system unavailable. Please refresh the page.');
//       };
//       document.body.appendChild(script);
      
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50));
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError('Please sign in to make payments');
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // Create order directly with Razorpay (client-side only approach)
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: amount * 100, // Convert to paise
//         currency: 'INR',
//         name: 'Fantasy App',
//         description: 'Wallet Top-up',
//         handler: async (response: any) => {
//           try {
//             // Client-side verification (basic check)
//             if (!response.razorpay_payment_id) {
//               throw new Error('Payment failed: No payment ID received');
//             }

//             // Update user balance in Firestore
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: currentBalance + amount
//             });

//             toast.success(`₹${amount} added to your wallet!`);
//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err: any) {
//             console.error('Payment processing error:', err);
//             setError(err.message || 'Failed to update wallet');
//             toast.error(err.message || 'Payment processing failed');
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || '',
//           email: user.primaryEmailAddress?.emailAddress || ''
//         },
//         theme: {
//           color: '#339933'
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
      
//       rzp.on('payment.failed', (response: any) => {
//         setError(response.error.description || 'Payment failed');
//         toast.error(response.error.description || 'Payment failed');
//         setIsProcessing(false);
//       });

//     } catch (err: any) {
//       console.error('Payment error:', err);
//       setError(err.message || 'Payment failed. Please try again.');
//       toast.error(err.message || 'Payment failed');
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Add Wallet Credits</DialogTitle>
//           <DialogDescription>
//             Current: ₹{currentBalance} | Need: ₹{requiredAmount}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className="w-full"
//               >
//                 ₹{amt}
//               </Button>
//             ))}
//           </div>

//           <div>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-lg font-medium"
//             />
//             <p className="text-sm text-muted-foreground mt-1 text-center">
//               Minimum: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700"
//             size="lg"
//           >
//             {isProcessing ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${amount}`
//             )}
//           </Button>

//           <div className="text-xs text-gray-500 text-center">
//             <p>Payments processed securely via Razorpay</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }








// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";
// import { toast } from "sonner";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const presetAmounts = [50, 100, 200, 500];

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(Math.max(requiredAmount, 50));
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (open && typeof window !== 'undefined' && !window.Razorpay) {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
//       script.onerror = () => {
//         setError('Failed to load payment processor');
//         toast.error('Payment system unavailable. Please refresh the page.');
//       };
//       document.body.appendChild(script);
      
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50));
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError('Please sign in to make payments');
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       // First create an order on your server
//       const orderResponse = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: amount * 100, // Convert to paise
//           currency: 'INR'
//         }),
//       });

//       if (!orderResponse.ok) {
//         throw new Error('Failed to create payment order');
//       }

//       const orderData = await orderResponse.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: 'Fantasy App',
//         description: 'Wallet Top-up',
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             // Verify payment on server (recommended) or update directly
//             if (!response.razorpay_payment_id) {
//               throw new Error('Payment failed: No payment ID received');
//             }

//             // Update user balance in Firestore
//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: currentBalance + amount
//             });

//             toast.success(`₹${amount} added to your wallet!`);
//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err: any) {
//             console.error('Payment processing error:', err);
//             setError(err.message || 'Failed to update wallet');
//             toast.error(err.message || 'Payment processing failed');
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || '',
//           email: user.primaryEmailAddress?.emailAddress || ''
//         },
//         theme: {
//           color: '#339933'
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info('Payment cancelled');
//           }
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
      
//       rzp.on('payment.failed', (response: any) => {
//         setError(response.error.description || 'Payment failed');
//         toast.error(response.error.description || 'Payment failed');
//         setIsProcessing(false);
//       });

//     } catch (err: any) {
//       console.error('Payment error:', err);
//       setError(err.message || 'Payment failed. Please try again.');
//       toast.error(err.message || 'Payment failed');
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md bg-white rounded-lg shadow-xl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-green-700">Add Wallet Credits</DialogTitle>
//           <DialogDescription className="text-gray-600">
//             <div className="flex justify-between mt-2">
//               <span>Current: <span className="font-medium">₹{currentBalance}</span></span>
//               <span>Required: <span className="font-medium">₹{requiredAmount}</span></span>
//             </div>
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className={`w-full ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//               >
//                 ₹{amt}
//               </Button>
//             ))}
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Custom Amount</label>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-lg font-medium border-gray-300 focus:ring-green-500 focus:border-green-500"
//             />
//             <p className="text-xs text-gray-500 text-center">
//               Minimum: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && (
//             <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md text-center">
//               {error}
//             </div>
//           )}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
//           >
//             {isProcessing ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${amount}`
//             )}
//           </Button>

//           <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200">
//             <p>Payments processed securely via Razorpay</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "../../components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { db } from "@/lib/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";
// import { toast } from "sonner";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const presetAmounts = [50, 100, 200, 500];

// interface PaymentDialogProps {
//   currentBalance: number;
//   requiredAmount: number;
//   onPaymentSuccess: (amount: number) => void;
//   onOpenChange: (open: boolean) => void;
//   open: boolean;
// }

// export function PaymentDialog({
//   currentBalance,
//   requiredAmount,
//   onPaymentSuccess,
//   onOpenChange,
//   open,
// }: PaymentDialogProps) {
//   const { user } = useUser();
//   const [amount, setAmount] = useState<number>(Math.max(requiredAmount, 50));
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (open && typeof window !== 'undefined' && !window.Razorpay) {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
//       script.onerror = () => {
//         setError('Failed to load payment processor');
//         toast.error('Payment system unavailable. Please refresh the page.');
//       };
//       document.body.appendChild(script);
      
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       setAmount(Math.max(requiredAmount, 50));
//       setError(null);
//     }
//   }, [open, requiredAmount]);

//   const handlePayment = async () => {
//     if (!user) {
//       setError('Please sign in to make payments');
//       return;
//     }

//     if (amount < requiredAmount) {
//       setError(`Minimum ₹${requiredAmount} required`);
//       return;
//     }

//     setIsProcessing(true);
//     setError(null);

//     try {
//       const orderResponse = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: amount * 100,
//           currency: 'INR'
//         }),
//       });

//       if (!orderResponse.ok) {
//         throw new Error('Failed to create payment order');
//       }

//       const orderData = await orderResponse.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: 'Fantasy App',
//         description: 'Wallet Top-up',
//         order_id: orderData.id,
//         handler: async (response: any) => {
//           try {
//             if (!response.razorpay_payment_id) {
//               throw new Error('Payment failed: No payment ID received');
//             }

//             const userRef = doc(db, "users", user.id);
//             await updateDoc(userRef, {
//               credits: currentBalance + amount
//             });

//             toast.success(`₹${amount} added to your wallet!`);
//             onPaymentSuccess(amount);
//             onOpenChange(false);
//           } catch (err: any) {
//             console.error('Payment processing error:', err);
//             setError(err.message || 'Failed to update wallet');
//             toast.error(err.message || 'Payment processing failed');
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: user.fullName || '',
//           email: user.primaryEmailAddress?.emailAddress || ''
//         },
//         theme: {
//           color: '#339933'
//         },
//         modal: {
//           ondismiss: () => {
//             setIsProcessing(false);
//             toast.info('Payment cancelled');
//           }
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
      
//       rzp.on('payment.failed', (response: any) => {
//         setError(response.error.description || 'Payment failed');
//         toast.error(response.error.description || 'Payment failed');
//         setIsProcessing(false);
//       });

//     } catch (err: any) {
//       console.error('Payment error:', err);
//       setError(err.message || 'Payment failed. Please try again.');
//       toast.error(err.message || 'Payment failed');
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md bg-white rounded-lg shadow-xl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-green-700">Add Wallet Credits</DialogTitle>
//           <DialogDescription asChild>
//             <div className="text-gray-600 flex justify-between mt-2">
//               <span>Current: <span className="font-extrabold">₹{currentBalance}</span></span>
//               <span>Required: <span className="font-semibold">₹{requiredAmount}</span></span>
//             </div>
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-3">
//             {presetAmounts.map((amt) => (
//               <Button
//                 key={amt}
//                 variant={amount === amt ? "default" : "outline"}
//                 onClick={() => setAmount(Math.max(amt, requiredAmount))}
//                 className={`w-full text-black ${amount === amt ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
//               >
//                 ₹{amt}
//               </Button>
//             ))}
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Custom Amount</label>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
//               min={requiredAmount}
//               placeholder="Enter custom amount"
//               className="text-center text-gray-800 text-lg font-medium border-gray-300 focus:ring-green-500 focus:border-green-500"
//             />
//             <p className="text-xs text-gray-500 text-center">
//               Minimum: ₹{requiredAmount}
//             </p>
//           </div>

//           {error && (
//             <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md text-center">
//               {error}
//             </div>
//           )}

//           <Button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
//           >
//             {isProcessing ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${amount}`
//             )}
//           </Button>

//           <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200">
//             <p>Payments processed securely via Razorpay</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "../../components/ui/dialog";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { X } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const presetAmounts = [50, 100, 200, 500];

interface PaymentDialogProps {
  currentBalance: number;
  requiredAmount: number;
  onPaymentSuccess: (amount: number) => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function PaymentDialog({
  currentBalance,
  requiredAmount,
  onPaymentSuccess,
  onOpenChange,
  open,
}: PaymentDialogProps) {
  const { user } = useUser();
  const [amount, setAmount] = useState<number>(Math.max(requiredAmount, 50));
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && typeof window !== 'undefined' && !window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onerror = () => {
        setError('Failed to load payment processor');
        toast.error('Payment system unavailable. Please refresh the page.');
      };
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setAmount(Math.max(requiredAmount, 50));
      setError(null);
    }
  }, [open, requiredAmount]);

  const handlePayment = async () => {
    if (!user) {
      setError('Please sign in to make payments');
      return;
    }

    if (amount < requiredAmount) {
      setError(`Minimum ₹${requiredAmount} required`);
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100,
          currency: 'INR'
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Fantasy App',
        description: 'Wallet Top-up',
        order_id: orderData.id,
        handler: async (response: any) => {
          try {
            if (!response.razorpay_payment_id) {
              throw new Error('Payment failed: No payment ID received');
            }

            const userRef = doc(db, "users", user.id);
            await updateDoc(userRef, {
              credits: currentBalance + amount
            });

            toast.success(`₹${amount} added to your wallet!`);
            onPaymentSuccess(amount);
            onOpenChange(false); // Close dialog on success
          } catch (err: any) {
            console.error('Payment processing error:', err);
            setError(err.message || 'Failed to update wallet');
            toast.error(err.message || 'Payment processing failed');
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: user.fullName || '',
          email: user.primaryEmailAddress?.emailAddress || ''
        },
        theme: {
          color: '#339933'
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            toast.info('Payment cancelled');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
      rzp.on('payment.failed', (response: any) => {
        setError(response.error.description || 'Payment failed');
        toast.error(response.error.description || 'Payment failed');
        setIsProcessing(false);
      });

    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment failed. Please try again.');
      toast.error(err.message || 'Payment failed');
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white rounded-lg shadow-xl">
        <div className="absolute right-4 top-4">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-700">Add Wallet Credits</DialogTitle>
          <DialogDescription asChild>
            <div className="text-gray-600 flex justify-between mt-2">
              <span>Current: <span className="font-extrabold">₹{currentBalance}</span></span>
              <span>Required: <span className="font-semibold">₹{requiredAmount}</span></span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {presetAmounts.map((amt) => (
              <Button
                key={amt}
                variant={amount === amt ? "default" : "outline"}
                onClick={() => setAmount(Math.max(amt, requiredAmount))}
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
              onChange={(e) => setAmount(Math.max(Number(e.target.value), requiredAmount))}
              min={requiredAmount}
              placeholder="Enter custom amount"
              className="text-center text-gray-800 text-lg font-medium border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
            <p className="text-xs text-gray-500 text-center">
              Minimum: ₹{requiredAmount}
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
  );
}