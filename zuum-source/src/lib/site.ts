export const SITE = {
  name: "ZUUM",
  fullName: "ZUUM Electric",
  domain: "zuum.co.in",
  phone: "7900333002",
  phoneDisplay: "+91 79003 33002",
  whatsapp: "917900333002",
  email: "zuumelectric@gmail.com",
  locations: ["Haldwani", "Rudrapur"],
  salaryRange: "₹35,000",
}

export const WHATSAPP_BASE = `https://wa.me/${SITE.whatsapp}`
export const TEL_BASE = `tel:+${SITE.whatsapp}`

/**
 * Smoothly scroll to the registration form section.
 * Works reliably on both desktop and mobile, accounting for the sticky header.
 */
export function scrollToRegister() {
  if (typeof document === 'undefined') return
  const el = document.getElementById('register')
  if (!el) return
  const headerHeight = 80 // sticky header ~64px + a little breathing room
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

export function buildWhatsappRegistrationLink(data: {
  name: string
  mobile: string
  email: string
  location: string
  hasDL: boolean
  hasExperience: boolean
}) {
  const lines = [
    "*New Rider Registration — ZUUM* 🛵",
    "",
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    `Email: ${data.email}`,
    `Location: ${data.location}`,
    `Driving License: ${data.hasDL ? "Yes ✅" : "No ❌"}`,
    `Work Experience: ${data.hasExperience ? "Yes ✅" : "No ❌"}`,
    "",
    "I'm interested in joining ZUUM as a delivery partner. Please share next steps.",
  ]
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(lines.join("\n"))}`
}
