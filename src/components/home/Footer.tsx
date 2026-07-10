import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 pb-10 pt-12 sm:px-6 md:px-10 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-[0_30px_100px_-60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="relative z-10 p-8 sm:p-12 md:p-16">
          <div className="border-b border-black/5 pb-12">
            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0c0e]">
              SEAINT Enterprise
            </h3>

            <p className="max-w-3xl text-gray-500">
              Private equity, venture capital, and strategic advisory for companies building tomorrow.
            </p>

            <div
              id="contact"
              className="mt-6 rounded-2xl border border-cyan-400/30 bg-[#f6f8fb] p-5 sm:p-6 md:p-8"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-600 ring-1 ring-cyan-400/30">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                    Available for consultations
                  </div>

                  <h4 className="text-xl font-medium tracking-tight text-[#0a0c0e]">
                    Need funding? Let's talk.
                  </h4>

                  <ul className="space-y-3 text-sm text-gray-500">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-cyan-500">✓</span>
                      <span>Private equity and venture capital opportunities</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-cyan-500">✓</span>
                      <span>Strategic advisory and operating support</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-cyan-500">✓</span>
                      <span>Platform growth and capital strategy</span>
                    </li>
                  </ul>

                  <a
                    href="mailto:support@seaintenterprise.com"
                    className="inline-flex text-sm text-cyan-600 transition hover:text-[#00c8ff]"
                  >
                    support@seaintenterprise.com
                  </a>
                </div>

                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-black/5 bg-white p-8 text-center shadow-sm lg:col-span-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-7 w-7"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                    </svg>
                  </div>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-600">
                    Book a consultation
                  </p>

                  <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#0a0c0e]">
                    Choose a time that works for you.
                  </h4>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
                    Schedule directly with our team through Calendly.
                  </p>

                  <a
                    href="https://calendly.com/seaintco/new-meeting"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(34,211,238,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-500"
                  >
                    Book Consultation
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-12 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Company
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/portfolio" className="hover:text-cyan-600">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <a href="https://calendly.com/seaintco/new-meeting" target="_blank" rel="noreferrer" className="hover:text-cyan-600">
                    Book Consultation
                  </a>
                </li>

                <li>
                  <a href="mailto:support@seaintenterprise.com" className="hover:text-cyan-600">
                    Need Funding?
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Focus
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>Private Equity</li>
                <li>Venture Capital</li>
                <li>Strategic Advisory</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Legal
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/privacy" className="hover:text-cyan-600">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms" className="hover:text-cyan-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Contact
              </h4>

              <p className="mt-3 text-sm text-gray-500">
                Questions about funding, partnerships, or advisory services?
              </p>

              <a
                href="mailto:support@seaintenterprise.com"
                className="mt-3 inline-flex text-sm text-cyan-600 hover:text-[#00c8ff]"
              >
                Email our team
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-black/5 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
            <p>© 2026 SEAINT Enterprise. All rights reserved.</p>

            <a href="#top" className="hover:text-cyan-600">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}