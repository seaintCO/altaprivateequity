export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#0a0c0e]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-cyan-600">Legal</p>
        <h1 className="text-5xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: 2026</p>

        <div className="mt-12 space-y-10 text-gray-600">
          {[
            ["Information We Collect", "We may collect your name, email, company name, message details, and any information you voluntarily submit through our contact forms or email communications."],
            ["How We Use Information", "We use submitted information to respond to inquiries, evaluate partnership or funding opportunities, provide strategic advisory communication, improve our website, and maintain business records."],
            ["Funding & Partnership Requests", "If you contact us about funding, investment, acquisition, advisory, or partnership opportunities, we may review the information internally to determine whether there is a potential fit."],
            ["No Sale of Personal Data", "SEAINT Enterprise does not sell your personal information. We may share information only with trusted service providers, advisors, or legal professionals when necessary for business operations or compliance."],
            ["Data Security", "We use reasonable administrative and technical safeguards to protect submitted information. However, no online transmission or storage system can be guaranteed to be fully secure."],
            ["Cookies & Analytics", "Our website may use basic analytics or cookies to understand traffic, performance, and user interaction. You can control cookies through your browser settings."],
            ["Your Rights", "You may request access, correction, or deletion of information you have provided by contacting us at support@seaintenterprise.com."],
            ["Contact", "For privacy questions, email support@seaintenterprise.com."]
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

