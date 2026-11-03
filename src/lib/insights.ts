export type Headline = { title: string; link: string; published?: string; source: string };
const FEEDS = [
 { symbol: "AAPL", name: "Yahoo Finance Â· Apple" },
 { symbol: "MSFT", name: "Yahoo Finance Â· Microsoft" },
 { symbol: "NVDA", name: "Yahoo Finance Â· NVIDIA" },
 { symbol: "^IXIC", name: "Yahoo Finance Â· Nasdaq" },
];
function decode(value:string){return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<[^>]*>/g,"").trim()}
function tag(xml:string,name:string){return decode(xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`,"i"))?.[1]??"")}
export async function getHeadlines():Promise<Headline[]>{
 const results=await Promise.all(FEEDS.map(async feed=>{try{
 const url=`https://feeds.finance.yahoo.com/rss/2.0/headline?s=${encodeURIComponent(feed.symbol)}&region=US&lang=en-US`;
 const res=await fetch(url,{next:{revalidate:1800},headers:{"User-Agent":"ALTA-Private-Equity-Website/1.0"}});
 if(!res.ok) return [];
 const xml=await res.text();return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0,6).map(match=>{
 const item=match[1];const title=tag(item,"title"),link=tag(item,"link"),published=tag(item,"pubDate");
 return title && /^https:\/\//.test(link) ? {title,link,published,source:feed.name}:null;
 }).filter((item):item is NonNullable<typeof item>=>item!==null);
 }catch{return []}}));
 const seen=new Set<string>();return results.flat().filter(item=>{if(seen.has(item.link))return false;seen.add(item.link);return true}).slice(0,16);
}
