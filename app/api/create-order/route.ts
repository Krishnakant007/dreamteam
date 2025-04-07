// app/api/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount } = body;

  if (!amount) {
    return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
  }

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: Number(amount), // Razorpay works in paisa
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
}




















// // update by deepseak
// import { NextRequest, NextResponse } from 'next/server';
// import Razorpay from 'razorpay';

// // Define TypeScript interfaces for the request and response
// interface CreateOrderRequest {
//   amount: number;
// }

// interface RazorpayOrder {
//   id: string;
//   amount: number;
//   currency: string;
//   receipt: string;
//   status: string;
//   created_at: number;
// }

// export async function POST(req: NextRequest) {
//   // Validate environment variables
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     return NextResponse.json(
//       { error: 'Razorpay credentials not configured' },
//       { status: 500 }
//     );
//   }

//   // Parse and validate request body
//   let requestBody: CreateOrderRequest;
//   try {
//     requestBody = await req.json();
//   } catch (err) {
//     return NextResponse.json(
//       { error: 'Invalid request body' },
//       { status: 400 }
//     );
//   }

//   const { amount } = requestBody;

//   // Validate amount
//   if (!amount || isNaN(amount) || amount <= 0) {
//     return NextResponse.json(
//       { error: 'Valid amount is required' },
//       { status: 400 }
//     );
//   }

//   try {
//     // Initialize Razorpay client
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     // Create order options
//     const options = {
//       amount: Math.round(amount * 100), // Convert to paisa
//       currency: 'INR',
//       receipt: `receipt_order_${Date.now()}`,
//       payment_capture: 1 // Auto-capture payment
//     };

//     // Create the order
//     const order = await razorpay.orders.create(options);

//     // Type-safe response
//     const response: RazorpayOrder = {
//       id: order.id,
//       amount: order.amount,
//       currency: order.currency,
//       receipt: order.receipt,
//       status: order.status,
//       created_at: order.created_at
//     };

//     return NextResponse.json(response);
//   } catch (err: any) {
//     console.error('Razorpay order creation error:', err);

//     // Handle specific Razorpay errors
//     if (err.error?.description) {
//       return NextResponse.json(
//         { error: err.error.description },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       { error: 'Failed to create payment order' },
//       { status: 500 }
//     );
//   }
// }








// // app/api/create-order/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import Razorpay from 'razorpay';

// interface OrderRequest {
//   amount: number;
// }

// const MIN_AMOUNT = 100; // ₹1 minimum

// export async function POST(req: NextRequest) {
//   // Validate environment
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     return NextResponse.json(
//       { error: 'Payment service unavailable' },
//       { status: 500 }
//     );
//   }

//   // Parse request
//   let requestData: OrderRequest;
//   try {
//     requestData = await req.json();
//   } catch (err) {
//     return NextResponse.json(
//       { error: 'Invalid request format' },
//       { status: 400 }
//     );
//   }

//   // Validate amount
//   const amountInPaisa = Math.round(Number(requestData.amount) * 100);
//   if (isNaN(amountInPaisa) || amountInPaisa < MIN_AMOUNT) {
//     return NextResponse.json(
//       { error: `Minimum payment is ₹${MIN_AMOUNT/100}` },
//       { status: 400 }
//     );
//   }

//   try {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     const order = await razorpay.orders.create({
//       amount: amountInPaisa,
//       currency: 'INR',
//       receipt: `ord_${Date.now()}`,
//       payment_capture: 1
//     });

//     return NextResponse.json({
//       order_id: order.id,
//       amount: order.amount,
//       currency: order.currency
//     });

//   } catch (err: any) {
//     console.error('Payment processing error:', err);
//     return NextResponse.json(
//       { error: 'Payment processing failed' },
//       { status: 500 }
//     );
//   }
// }