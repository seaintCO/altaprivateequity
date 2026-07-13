export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#0a0c0e]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-cyan-600">Legal</p>
        <h1 className="text-5xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: 2026</p>

        <div className="mt-12 space-y-10 text-gray-600">
          {[
            ["Use of Website", "By using this website, you agree to use it only for lawful purposes and in a way that does not interfere with the site, its security, or other users."],
            ["Informational Purposes Only", "Content on this website is provided for general informational and business communication purposes only. It does not constitute legal, tax, accounting, investment, fundraising, securities, or financial advice."],
            ["No Investment Offer", "Nothing on this website is an offer to sell securities, a solicitation to buy securities, or a commitment to provide funding, investment, acquisition, advisory, or financing services."],
            ["Funding Inquiries", "Submitting a funding or partnership inquiry does not create a client, investor, advisor, fiduciary, or business relationship with SEAINT Enterprise."],
            ["Intellectual Property", "All website content, branding, copy, designs, and materials are owned by or licensed to SEAINT Enterprise and may not be copied or reused without permission."],
            ["Third-Party Links", "This website may link to third-party sites. SEAINT Enterprise is not responsible for third-party content, policies, or practices."],
            ["Limitation of Liability", "SEAINT Enterprise is not liable for damages arising from use of this website, reliance on website information, or inability to access the site."],
            ["Contact", "For questions about these terms, email support@seaintenterprise.com."]
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0a0c0e]">{title}</h2>
              <p className="mt-3 leading-7">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

