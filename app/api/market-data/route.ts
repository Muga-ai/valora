// Stub for market data API
import { NextResponse } from "next/server";

export async function GET() {
  // Return a placeholder JSON so the build doesn’t break
  return NextResponse.json({
    message: "Market data API is not implemented yet",
    data: [],
  });
}
