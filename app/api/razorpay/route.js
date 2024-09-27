import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payments from "@/app/models/Payments";
import Razorpay from "razorpay";