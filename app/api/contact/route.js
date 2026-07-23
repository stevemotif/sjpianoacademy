import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SUBJECT_LABELS = {
  enquiry: 'Enquiry for Piano Class',
  waitlist: 'Waiting List Form',
}

export async function POST(request) {
  const body = await request.json()
  const { name, email, phone, subject, message } = body

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'SJ Piano Academy <onboarding@resend.dev>',
      to: process.env.SEND_MAIL_TO,
      cc: process.env.SEND_MAIL_CC || undefined,
      replyTo: email,
      subject: `SJ Piano Academy - ${SUBJECT_LABELS[subject] || subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Subject: ${SUBJECT_LABELS[subject] || subject}`,
        '',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('Contact form email failed:', error)
      return Response.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact form email failed:', err)
    return Response.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
