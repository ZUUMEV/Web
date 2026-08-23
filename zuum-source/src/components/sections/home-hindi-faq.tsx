import { ChevronRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_BASE } from '@/lib/site'
import { SectionHeader } from './how-to-join'

const hindiFaqs = [
  {
    q: 'ज़ूम इलेक्ट्रिक क्या है और यह किसके लिए है?',
    a: 'ज़ूम इलेक्ट्रिक भारत का प्रीमियम ईवी स्कूटर रेंटल प्लेटफ़ॉर्म है। हम डिलीवरी पार्टनर्स (स्विगी, ज़ोमैटो, ज़ेप्टो, अमेज़न फ्लेक्स) को इलेक्ट्रिक स्कूटर किराये पर देते हैं। हल्द्वानी और रुद्रपुर में सक्रिय — दैनिक ₹300, साप्ताहिक ₹1,600, मासिक ₹6,000 प्लान। मुफ़्त चार्जिंग, हेलमेट, इंश्योरेंस सब कुछ शामिल।',
  },
  {
    q: 'ज़ूम से कितना कमा सकता हूँ?',
    a: 'डिलीवरी पार्टनर ₹35,000+/महीना कमा सकते हैं। पेट्रोल स्कूटर पर ₹6,721/महीना सिर्फ़ ईंधन में जाते हैं, जबकि ज़ूम ईवी में चार्जिंग मुफ़्त है। इसलिए ईवी से ₹3,000-5,000/महीना ज़्यादा बचत होती है। विस्तृत गणना के लिए हमारा सेविंग्स कैलकुलेटर देखें।',
  },
  {
    q: 'जॉइन करने के लिए क्या डाक्यूमेंट्स चाहिए?',
    a: 'तीन डाक्यूमेंट्स चाहिए: (1) ड्राइविंग लाइसेंस (2-व्हीलर), (2) आधार कार्ड (KYC के लिए), (3) पासपोर्ट साइज़ फोटो। साथ ही ₹4,000 रिफंडेबल सिक्योरिटी डिपॉज़िट। बस इतना ही! 24 घंटे में स्कूटर अलॉट हो जाएगा।',
  },
  {
    q: 'चार्जिंग का कोई खर्चा है क्या?',
    a: 'बिल्कुल नहीं! ज़ूम चार्जिंग स्टेशन्स पर unlimited free charging है। हल्द्वानी और रुद्रपुर में हमारे स्टेशन्स हैं जहाँ आप कभी भी charge कर सकते हैं — 24 घंटे, सातों दिन। यही ईवी का सबसे बड़ा फायदा है। पेट्रोल में ₹6,721/महीना खर्च, ईवी में ₹0।',
  },
  {
    q: 'अगर स्कूटर खराब हो जाए तो क्या करें?',
    a: 'ज़ूम 24/7 ब्रेकडाउन सपोर्ट देता है। व्हाट्सएप या कॉल करें — 45 मिनट में हमारी टीम पहुँच जाएगी। अगर स्कूटर तुरंत रिपेयर न हो सके, तो 2 घंटे में रिप्लेसमेंट स्कूटर दे दिया जाएगा। आपकी कमाई कभी रुकेगी नहीं।',
  },
  {
    q: 'क्या मैं अपनी स्कूटी लाकर ज़ूम से जुड़ सकता हूँ?',
    a: 'नहीं, ज़ूम अपनी ईवी स्कूटर्स रेंट पर देता है। आपको अपनी स्कूटी लाने की ज़रूरत नहीं। हम ₹4,000 रिफंडेबल डिपॉज़िट के साथ fully charged स्कूटर, हेलमेट, इंश्योरेंस सब प्रोवाइड करते हैं। बस अपनी DL और आधार लाओ, बाकी सब हमारी ज़िम्मेदारी।',
  },
]

export function HomeHindiFAQ() {
  return (
    <section id="hindi-faq" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="हिंदी में जवाब"
          title={
            <>
              आपके <span>सवाल</span>, हमारे जवाब
            </>
          }
          subtitle="डिलीवरी पार्टनर्स के सबसे ज़्यादा पूछे जाने वाले सवाल — अब हिंदी में"
        />

        <div className="mt-10 space-y-3">
          {hindiFaqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-medium leading-snug sm:text-lg">{faq.q}</h3>
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hi ZUUM, मुझे और जानकारी चाहिए।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            और सवाल है? व्हाट्सएप पर पूछें
          </a>
        </div>
      </div>

      {/* Hindi FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: hindiFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  )
}
