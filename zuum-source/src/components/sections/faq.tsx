'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  CreditCard,
  IdCard,
  Landmark,
  Users,
  Rocket,
  IndianRupee,
  ShieldCheck,
  RefreshCw,
  CarFront,
  Phone,
  Wrench,
  HelpCircle,
  MessageCircle,
  Search,
  Plus,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from './how-to-join'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { WHATSAPP_BASE, TEL_BASE } from '@/lib/site'
import { cn } from '@/lib/utils'

type QA = { q: string; a: React.ReactNode }

const CATEGORIES: {
  id: string
  title: string
  emoji: string
  icon: typeof FileText
  questions: QA[]
}[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    emoji: '🚀',
    icon: Rocket,
    questions: [
      {
        q: 'What documents are required?',
        a: (
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              ['Aadhaar Card', FileText],
              ['PAN Card', CreditCard],
              ['Driving License', IdCard],
              ['Bank Account Details', Landmark],
              ['2 Assigned Guarantor IDs', Users],
            ].map(([label, Icon]: any) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </li>
            ))}
          </ul>
        ),
      },
      {
        q: 'How do I start earning by joining ZUUM?',
        a: 'Complete KYC (Aadhaar + DL), pick your EV scooter, and start delivering on Swiggy/Zomato/Zepto within 24 hours. Our onboarding team walks you through each step — most riders are on the road the same day they register.',
      },
      {
        q: 'What is the minimum age?',
        a: '18 years or older, with a valid two-wheeler driving licence from an Indian RTO. Foreign nationals need a valid Indian visa + FRRO + International Driving Permit.',
      },
      {
        q: 'What is ZUUM and who is it for?',
        a: "ZUUM is India's premium EV rental platform. We rent electric two-wheelers on flexible daily, weekly, and monthly plans — for professionals, students, weekend riders, and delivery partners on Swiggy, Zomato, Zepto, Blinkit, Porter, Amazon, Flipkart, JioMart, Urban Company and more.",
      },
    ],
  },
  {
    id: 'pricing-plans',
    title: 'Pricing & Plans',
    emoji: '💰',
    icon: IndianRupee,
    questions: [
      {
        q: 'How much does it cost?',
        a: 'Starting at: Daily ₹300/day (100 km), Weekly ₹1,600/week (700 km), Monthly ₹6,000/month (3,000 km). One-time refundable security deposit: ₹4,000.',
      },
      {
        q: 'Is there a security deposit?',
        a: 'Flat ₹4,000 refundable, once. Returned within 15 working days of returning the vehicle in good condition. Deductions apply for damage, missing items, or unpaid fines — always itemized via WhatsApp.',
      },
      {
        q: "What's included in the ZUUM Plan?",
        a: 'All-inclusive: Electric scooter, comprehensive insurance, free maintenance, 24/7 roadside assistance, free vehicle swap on breakdown, KM allowance per plan (extra ₹2/km), and full Rider App access.',
      },
      {
        q: 'What if I exceed the KM limit?',
        a: 'Extra KMs are charged at ₹2/km, billed at cycle end. Live usage is visible in the app. WhatsApp alert at 80% of the limit. If you regularly overrun, we will suggest an upgrade — pro-rated fairly.',
      },
      {
        q: 'Can I switch plans?',
        a: 'Yes. Upgrade or switch at any renewal point. Many riders start daily, switch to weekly, then monthly. Message us on WhatsApp or change in the app. Pro-rated fairly.',
      },
      {
        q: 'How does payment work?',
        a: 'Via Cashfree — UPI (free), debit/credit cards, netbanking, wallets. Pay in advance per cycle. Optional auto-renewal — cancel anytime. Every payment generates a GST invoice.',
      },
    ],
  },
  {
    id: 'vehicle-usage',
    title: 'Vehicle & Usage',
    emoji: '🛵',
    icon: CarFront,
    questions: [
      {
        q: 'Can I use the bike for delivery?',
        a: 'Absolutely. Built for commercial use. Supports Swiggy, Zomato, Zepto, Blinkit, Porter, Amazon, Flipkart, JioMart, Urban Company, FreshToHome, Rapido, Uber, Ola and more.',
      },
      {
        q: 'What is the battery range?',
        a: 'Real-world: 60–125 km per charge. Battery swap stations across the region — under 2 minutes. Home charging via the included charger.',
      },
      {
        q: 'Is the bike insured?',
        a: 'Yes — comprehensive: theft (with FIR), third-party, accidental damage. Excess up to ₹2,000 per claim. Negligence or violations void coverage.',
      },
      {
        q: 'Is the battery included?',
        a: 'Yes! Battery is included in all plans. We also provide battery swap support for uninterrupted rides.',
      },
      {
        q: 'Can someone else ride the bike?',
        a: 'No. Only the registered renter. This is for insurance and safety. Violation voids insurance and attracts a penalty.',
      },
    ],
  },
  {
    id: 'service-support',
    title: 'Service & Support',
    emoji: '🔧',
    icon: Wrench,
    questions: [
      {
        q: 'Who pays for maintenance?',
        a: 'We do. Brake pads, tyres, battery, motor — all included. Bring to our centre, or we collect for monthly riders. Damage from negligence is chargeable.',
      },
      {
        q: 'Breakdown on the road?',
        a: "Call +91 79003 33002 or tap SOS in the app. 24/7 RSA in 30 minutes. Can't fix on spot? We bring a backup bike.",
      },
      {
        q: 'What if I am in an accident?',
        a: 'Immediately: (1) Check for injuries and ensure safety, (2) Call +91 79003 33002, (3) File police FIR if there are injuries or significant damage, (4) Take photos, (5) Do not admit liability on the spot.',
      },
      {
        q: 'How do I contact support?',
        a: 'WhatsApp: +91 79003 33002 (fastest). Phone: +91 79003 33002 (24/7). Email: info@zuum.co.in (within 6 hrs). The app also has 1-tap support.',
      },
      {
        q: 'What if the vehicle is stolen?',
        a: 'Every vehicle has an IoT tracker + remote immobilizer. (1) Call +91 79003 33002 immediately, (2) File police FIR within 24 hrs, (3) Submit FIR within 48 hrs. Insurance covers loss if procedures are followed.',
      },
    ],
  },
  {
    id: 'cancel-refunds',
    title: 'Cancel & Refunds',
    emoji: '🔄',
    icon: RefreshCw,
    questions: [
      {
        q: 'Can I cancel?',
        a: 'Yes, anytime. Return the vehicle to our centre. Already-paid amount is non-refundable, but charges stop. Deposit refunded in 7 days. No cancellation fee, no lock-in.',
      },
      {
        q: 'When do I get my deposit back?',
        a: '₹4,000 refunded within 15 working days of return. Conditions: good condition, accessories returned, no outstanding fines/overages. Deductions itemized via WhatsApp.',
      },
      {
        q: 'Can I extend my rental?',
        a: 'Tap "Renew" in the app or WhatsApp us 1–2 days before expiry. New payment link generated, vehicle stays with you. Auto-renewal can be toggled on or off.',
      },
    ],
  },
  {
    id: 'hindi-questions',
    title: 'हिंदी सवाल',
    emoji: '🇮🇳',
    icon: HelpCircle,
    questions: [
      {
        q: 'ज़ूम इलेक्ट्रिक क्या है और यह किसके लिए है?',
        a: 'ज़ूम इलेक्ट्रिक भारत का प्रीमियम ईवी स्कूटर रेंटल प्लेटफ़ॉर्म है। हम डिलीवरी पार्टनर्स (स्विगी, ज़ोमैटो, ज़ेप्टो, अमेज़न फ्लेक्स) को इलेक्ट्रिक स्कूटर किराये पर देते हैं। हल्द्वानी और रुद्रपुर में सक्रिय — दैनिक ₹300, साप्ताहिक ₹1,600, मासिक ₹6,000 प्लान। मुफ़्त चार्जिंग, हेलमेट, इंश्योरेंस सब कुछ शामिल।',
      },
      {
        q: 'ज़ूम से कितना कमा सकता हूँ?',
        a: 'डिलीवरी पार्टनर ₹35,000+/महीना कमा सकते हैं। पेट्रोल स्कूटर पर ₹6,721/महीना सिर्फ़ ईंधन में जाते हैं, जबकि ज़ूम ईवी में चार्जिंग मुफ़्त है। इसलिए ईवी से ₹3,000-5,000/महीना ज़्यादा बचत होती है।',
      },
      {
        q: 'जॉइन करने के लिए क्या डाक्यूमेंट्स चाहिए?',
        a: 'तीन डाक्यूमेंट्स चाहिए: (1) ड्राइविंग लाइसेंस (2-व्हीलर), (2) आधार कार्ड (KYC के लिए), (3) पासपोर्ट साइज़ फोटो। साथ ही ₹4,000 रिफंडेबल सिक्योरिटी डिपॉज़िट। बस इतना ही! 24 घंटे में स्कूटर अलॉट हो जाएगा।',
      },
      {
        q: 'चार्जिंग का कोई खर्चा है क्या?',
        a: 'बिल्कुल नहीं! ज़ूम चार्जिंग स्टेशन्स पर unlimited free charging है। हल्द्वानी और रुद्रपुर में हमारे स्टेशन्स हैं जहाँ आप कभी भी charge कर सकते हैं — 24 घंटे, सातों दिन। यही ईवी का सबसे बड़ा फायदा है।',
      },
      {
        q: 'अगर स्कूटर खराब हो जाए तो क्या करें?',
        a: 'ज़ूम 24/7 ब्रेकडाउन सपोर्ट देता है। व्हाट्सएप या कॉल करें — 45 मिनट में हमारी टीम पहुँच जाएगी। अगर स्कूटर तुरंत रिपेयर न हो सके, तो 2 घंटे में रिप्लेसमेंट स्कूटर दे दिया जाएगा। आपकी कमाई कभी रुकेगी नहीं।',
      },
      {
        q: 'क्या मैं अपनी स्कूटी लाकर ज़ूम से जुड़ सकता हूँ?',
        a: 'नहीं, ज़ूम अपनी ईवी स्कूटर्स रेंट पर देता है। आपको अपनी स्कूटी लाने की ज़रूरत नहीं। हम ₹4,000 रिफंडेबल डिपॉज़िट के साथ fully charged स्कूटर, हेलमेट, इंश्योरेंस सब प्रोवाइड करते हैं। बस अपनी DL और आधार लाओ, बाकी सब हमारी ज़िम्मेदारी।',
      },
    ],
  },
]

export function FAQ() {
  const [activeCat, setActiveCat] = React.useState(CATEGORIES[0].id)
  const [search, setSearch] = React.useState('')
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Filter by search across all categories, or by active category
  const visibleCats = React.useMemo(() => {
    if (search.trim()) {
      const q = search.toLowerCase()
      return CATEGORIES.map((c) => ({
        ...c,
        questions: c.questions.filter(
          (qa) =>
            qa.q.toLowerCase().includes(q) ||
            (typeof qa.a === 'string' && qa.a.toLowerCase().includes(q))
        ),
      })).filter((c) => c.questions.length > 0)
    }
    return CATEGORIES.filter((c) => c.id === activeCat)
  }, [search, activeCat])

  return (
    <section id="faq" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Got <span>Questions?</span> We&apos;ve Got Answers
            </>
          }
          subtitle="Everything you need to know about ZUUM. Can't find what you're looking for? Reach out to our support team."
        />

        {/* Search bar */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 rounded-full border-border bg-card pl-11 pr-4 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Category pill tabs */}
        {!search.trim() && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => {
              const isActive = activeCat === c.id
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCat(c.id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm',
                    isActive
                      ? 'border-transparent bg-brand-gradient text-white shadow-md'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  )}
                >
                  <span className="text-base">{c.emoji}</span>
                  {c.title}
                </button>
              )
            })}
          </div>
        )}

        {/* FAQ items */}
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {visibleCats.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No questions found for &quot;{search}&quot;. Try a different search or reach out on WhatsApp.
            </div>
          )}
          {visibleCats.map((cat) => (
            <div key={cat.id} className="space-y-3">
              {search.trim() && (
                <div className="flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="text-base">{cat.emoji}</span>
                  {cat.title}
                </div>
              )}
              {cat.questions.map((qa, idx) => {
                const itemId = `${cat.id}-${idx}`
                const isOpen = openItems.has(itemId)
                return (
                  <motion.div
                    key={itemId}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className={cn(
                      'overflow-hidden rounded-2xl border bg-card transition-colors',
                      isOpen ? 'border-primary/40' : 'border-border hover:border-primary/30'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(itemId)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-foreground sm:text-base">
                        {qa.q}
                      </span>
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                          isOpen
                            ? 'rotate-45 border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-muted/40 text-foreground'
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:text-[15px]">
                            {qa.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Still have a question CTA */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-6 text-center sm:p-8">
            <div
              aria-hidden
              className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <div className="relative">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">Still have a question?</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Our support team is online 24/7. Replies in minutes — we&apos;re here to help you ride and earn.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Button asChild className="h-11 rounded-full bg-[#25D366] px-5 text-white hover:bg-[#1ebe5d]">
                  <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-full px-5">
                  <a href={TEL_BASE}>
                    <Phone className="h-4 w-4" />
                    Call +91 79003 33002
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
