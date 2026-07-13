import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, negocio, mensaje } = body
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }
    const { data, error } = await resend.emails.send({
      from: 'Vanzacode <coco@vanzacode.com.ar>',
      to: ['hola@vanzacode.com.ar', 'ttomifernandez@gmail.com'],
      subject: `Nuevo contacto: ${nombre} — ${negocio || 'Sin negocio'}`,
      html: `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#030712;color:#f8fafc;padding:32px;border-radius:12px;"><h2 style="color:#f97316;margin-bottom:24px;">Nuevo mensaje de contacto</h2><table style="width:100%;border-collapse:collapse;"><tr><td style="padding:8px 0;color:#94a3b8;width:120px;">Nombre:</td><td style="padding:8px 0;font-weight:600;">${nombre}</td></tr><tr><td style="padding:8px 0;color:#94a3b8;">Email:</td><td style="padding:8px 0;">${email}</td></tr><tr><td style="padding:8px 0;color:#94a3b8;">Negocio:</td><td style="padding:8px 0;">${negocio || 'No especificado'}</td></tr></table><div style="margin-top:24px;padding:16px;background:#0f172a;border-radius:8px;border-left:4px solid #f97316;"><p style="color:#94a3b8;margin:0 0 8px;font-size:14px;">Mensaje:</p><p style="margin:0;line-height:1.6;">${mensaje}</p></div><div style="margin-top:24px;text-align:center;"><a href="https://wa.me/5493515929043" style="display:inline-block;background:#22c55e;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Responder por WhatsApp</a></div></div>`,
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true, id: data?.id })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
