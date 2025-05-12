import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const amount = searchParams.get("amount");

  if (!from || !to || !amount) {
    return NextResponse.json(
      { error: "from, to ve amount parametreleri gerekli" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.EXCHANGE_API_KEY;
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API anahtarı bulunamadı" },
      { status: 500 }
    );
  }

  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("API isteği başarısız");
    }
    const data = await response.json();
    const rate = (data.conversion_rate * Number(amount)).toFixed(2);
    return NextResponse.json({
      conversion_rate: data.conversion_rate,
      result: rate,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Veri alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}