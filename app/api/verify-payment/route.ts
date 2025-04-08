// import Razorpay from 'razorpay';
// import { NextResponse } from 'next/server';
// import { doc, updateDoc, getFirestore } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '@/lib/firebase';

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export async function POST(request: Request) {
//   const {
//     razorpay_payment_id,
//     razorpay_order_id,
//     razorpay_signature,
//     amount,
//     userId,
//   } = await request.json();

//   try {
//     // Verify the payment signature
//     const generatedSignature = crypto
//       .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest('hex');

//     if (generatedSignature !== razorpay_signature) {
//       throw new Error("Invalid payment signature");
//     }

//     // Update user balance in Firestore
//     const userRef = doc(db, "users", userId);
//     await updateDoc(userRef, {
//       credits: firebase.firestore.FieldValue.increment(amount),
//     });

//     return NextResponse.json({ success: true });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message || "Payment verification failed" },
//       { status: 400 }
//     );
//   }
// }
