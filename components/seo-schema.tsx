export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CryptoRef - 加密货币交易所返佣网站",
    url: "https://www.cryptoref.example.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.cryptoref.example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    sameAs: ["https://twitter.com/cryptoref", "https://t.me/cryptoref", "https://weibo.com/cryptoref"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

