import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, travelDates, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      travelDates,
      message,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Implement email sending here
    // Example integrations you can use:
    // 1. Resend: https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Nodemailer with SMTP
    // 4. Email services like Postmark or Mailgun

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request. Please try again." }, { status: 500 })
  }
}
