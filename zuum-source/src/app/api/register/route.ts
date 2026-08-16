import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

type RegisterBody = {
  name?: string;
  mobile?: string;
  email?: string;
  location?: string;
  hasDL?: boolean;
  hasExperience?: boolean;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RegisterBody;

    // Basic validation
    if (!body.name || !body.mobile) {
      return NextResponse.json(
        { ok: false, error: "Name and mobile are required" },
        { status: 400 }
      );
    }

    const subject = `New Rider Registration — ${body.name} (${body.mobile})`;
    const text = [
      `New rider registration submitted on ${SITE.domain}.`,
      "",
      `Name: ${body.name}`,
      `Mobile: ${body.mobile}`,
      `Email: ${body.email || "—"}`,
      `Location: ${body.location || "—"}`,
      `Driving License: ${body.hasDL ? "Yes" : "No"}`,
      `Work Experience: ${body.hasExperience ? "Yes" : "No"}`,
      "",
      `Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`,
    ].join("\n");

    // Build a mailto link as the primary email delivery mechanism (no SMTP secret needed).
    const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;

    // Log for visibility on the server side.
    console.log("[ZUUM] New registration:", {
      name: body.name,
      mobile: body.mobile,
      email: body.email,
      location: body.location,
      hasDL: body.hasDL,
      hasExperience: body.hasExperience,
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Registration received",
      mailtoLink,
      email: SITE.email,
    });
  } catch (err) {
    console.error("[ZUUM] /api/register error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to process registration" },
      { status: 500 }
    );
  }
}
