import { NextRequest, NextResponse } from "next/server";
import { addMeetingRequest, getMeetingRequests } from "@/lib/meeting-store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, subject, phone, email, date, time } = body;

    if (!name || !subject || !phone || !email || !date || !time) {
      return NextResponse.json(
        { error: "Eksik alan: name, subject, phone, email, date, time gerekli" },
        { status: 400 }
      );
    }

    const request_ = addMeetingRequest({
      name: String(name),
      subject: String(subject),
      phone: String(phone),
      email: String(email),
      date: typeof date === "string" ? date : new Date(date).toISOString().split("T")[0],
      time: String(time),
    });

    return NextResponse.json(request_, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (authHeader !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const requests = getMeetingRequests();
  return NextResponse.json(requests);
}
