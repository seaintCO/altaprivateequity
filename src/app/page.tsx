import Link from "next/link";
import Cinematic from "@/components/Cinematic";

const areas = [
  { n: "01", name: "Technology & AI", detail: "Software, applied intelligence, and the infrastructure behind enduring digital businesses." },
  { n: "02", name: "Private Investment", detail: "A disciplined approach to evaluating opportunities, partnerships, and long-term value creation." },
  { n: "03", name: "Company Building", detail: "From product and distribution to operations, we work at the intersection of capital and execution." },
];
export default function Home() {
 return <main className="alta-site" id="top"><header className="alta-nav"><Link className="alta-brand" href="/">ALTA<span> / PRIVATE EQUITY</span></Link><nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#focus">Focus</a><Link href="/insights">Insights</Link><Link href="/vlogs">Films</Link></nav><Link className="alta-nav-contact" href="/contact">Get in touch ↗</Link></header>
 <Cinematic/>
 <section className="alta-intro alta-reveal" id="approach"><span className="alta-eyebrow">01 / The firm</span><div><h2>Capital is only<br/><em>the beginning.</em></h2><p>ALTA Private Equity explores investments and opportunities where technology, strong operators, and a long-term perspective can build businesses of lasting value.</p><Link className="alta-text-link" href="/investment-approach">Our approach ↗</Link></div></section>
 <section className="alta-focus" id="focus"><div className="alta-section-top"><span className="alta-eyebrow">02 / What moves us</span><h2>Our areas<br/><em>of focus.</em></h2></div>{areas.map(a=><div className="alta-focus-row" key={a.n}><span>{a.n}</span><h3>{a.name}</h3><p>{a.detail}</p><span aria-hidden="true">↗</span></div>)}</section>
 <section className="alta-statement"><span className="alta-eyebrow">03 / Our perspective</span><p>We look beyond the transaction.<br/><em>We think in generations.</em></p><div className="alta-line"/></section>
 <section className="alta-editorial"><div className="alta-section-top"><span className="alta-eyebrow">04 / Intelligence & perspectives</span><h2>Ideas worth<br/><em>following.</em></h2></div><div className="alta-editorial-grid"><Link href="/insights" className="alta-editorial-tile"><div className="alta-ed-visual alta-news-visual"><span>INTELLIGENCE / 001</span><b>MARKET<br/>SIGNALS</b></div><span>Live news and perspectives</span><h3>Insights & market intelligence ↗</h3></Link><Link href="/vlogs" className="alta-editorial-tile"><div className="alta-ed-visual alta-film-visual"><span>JOURNAL / 002</span><b>BEHIND<br/>THE BUILD</b></div><span>Stories from the operators</span><h3>Founder films & vlogs ↗</h3></Link></div></section>
 <footer className="alta-footer"><span className="alta-eyebrow">Start a conversation</span><h2>Build what<br/><em>comes next.</em></h2><Link href="/contact">Contact the firm ↗</Link><div className="alta-footer-bottom"><strong>ALTA / PRIVATE EQUITY</strong><span>Technology · Investment · Company Building</span><span>© {new Date().getFullYear()} ALTA. All rights reserved.</span></div></footer>
 </main>;
}
