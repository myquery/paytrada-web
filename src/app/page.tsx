import Image from "next/image";
import SiteInteractions from "./site-interactions";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
  </svg>
);

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@paytrada.app";

function EcosystemIcon({ kind }: { kind: "wallet" | "market" | "agent" | "network" }) {
  const paths = {
    wallet: <><path d="M4 6h12v11H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11v3" /><path d="M12 10h5v4h-5z" /></>,
    market: <><path d="M3 8v9h14V8M2 8l2-5h12l2 5M7 17v-6h6v6M2 8h16M6 3l-1 5m5-5v5m4-5 1 5" /></>,
    agent: <><path d="m10 1 1.8 6.2L18 10l-6.2 1.8L10 18l-1.8-6.2L2 10l6.2-2.8L10 1Z" /><path d="m16 1 .7 2.3L19 4l-2.3.7L16 7l-.7-2.3L13 4l2.3-.7L16 1Z" /></>,
    network: <><circle cx="4" cy="4" r="2" /><circle cx="16" cy="4" r="2" /><circle cx="10" cy="16" r="2" /><path d="M6 4h8M5 6l4 8m6-8-4 8" /></>,
  };
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand${inverse ? " brand-inverse" : ""}`} href="#top" aria-label="Paytrada home">
      <Image src={inverse ? "/images/paytrada-mark-light.png" : "/images/paytrada-mark.png"} alt="" width={283} height={359} className="brand-symbol" />
      <span>paytrada</span>
    </a>
  );
}

function PhoneAppPreview() {
  return (
    <div className="phone-frame" role="img" aria-label="Illustrative Paytrada mobile experience: Maya discovers a ceramic pour-over set with an AI assistant and reviews a Bitcoin wallet payment. Product concept, not a live app.">
      <div className="phone-island" />
      <div className="phone-screen" aria-hidden="true">
        <div className="phone-status"><span>9:41</span><span>••• ▰</span></div>
        <div className="appbar"><Image src="/images/paytrada-mark.png" alt="" width={17} height={22} /><b>paytrada</b><span className="app-avatar">M</span></div>
        <div className="app-welcome"><small>A LITTLE DISCOVERY. A GOOD FIND.</small><h3>What speaks<br />to you, Maya?</h3></div>
        <div className="app-search"><span>⌕</span> Find your next good thing</div>
        <div className="app-product-photo"><Image src="/images/commerce-product.webp" alt="" fill sizes="240px" /><span>MADE WITH INTENTION</span></div>
        <div className="app-product-detail"><div><small>INDEPENDENT MAKER</small><b>The everyday pour-over set</b></div><span>$72</span></div>
        <div className="app-agent-card"><span className="assistant-spark">✳</span><div><b>A thoughtful find.</b><p>Natural materials. Made for slow mornings.</p></div><span>↗</span></div>
        <div className="app-wallet"><span className="app-wallet-icon">↗</span><div><small>YOUR BITCOIN-NATIVE WALLET</small><b>Review payment <span>→</span></b></div></div>
        <div className="app-tabs"><span className="selected">⌂<small>Discover</small></span><span>▤<small>Shops</small></span><span>◒<small>Wallet</small></span></div>
      </div>
    </div>
  );
}

function StoreBadges() {
  return (
    <div className="store-badges" aria-label="Paytrada mobile apps are coming soon">
      <div className="store-badge" role="img" aria-label="Coming soon to the Apple App Store">
        <svg viewBox="0 0 24 26" aria-hidden="true"><path d="M17.8 13.4c0-2.1 1.7-3.2 1.8-3.3-1-1.5-2.7-1.7-3.3-1.7-1.4-.1-2.8.9-3.5.9-.8 0-1.9-.9-3.1-.8-1.7 0-3.2 1-4 2.4-1.7 3-.4 7.5 1.3 9.9.8 1.2 1.7 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8 2.2-1.2 3-2.4c.9-1.4 1.3-2.6 1.3-2.6s-2.7-1.1-2.7-4.8ZM15.5 6.9c.7-.8 1.1-1.8 1-2.8-.9 0-2 .6-2.6 1.4-.6.6-1.2 1.7-1 2.7 1 .1 2-.5 2.6-1.3Z" fill="currentColor" /></svg>
        <span><small>COMING SOON</small><b>App Store</b></span>
      </div>
      <div className="store-badge" role="img" aria-label="Coming soon to Google Play">
        <svg viewBox="0 0 24 26" aria-hidden="true"><path fill="#6bc28c" d="M3.4 3.8 14 13 3.4 22.2a1.7 1.7 0 0 1-.7-1.4V5.2c0-.6.3-1.1.7-1.4Z" /><path fill="#81bce1" d="m14 13 3-2.6 3.3 1.8c.9.5.9 1.1 0 1.6L17 15.6Z" /><path fill="#e7c378" d="m3.4 3.8 13.7 6.6-3 2.6Z" /><path fill="#dd9480" d="m14 13 3 2.6-13.6 6.6Z" /></svg>
        <span><small>COMING SOON</small><b>Google Play</b></span>
      </div>
    </div>
  );
}

function CommerceArtwork() {
  return (
    <figure className="hero-artwork">
      <div className="commerce-scene">
        <Image className="scene-image" src="/images/commerce-scene.webp" alt="An independent ceramics merchant carefully packs an order, alongside a cream ceramic pour-over set in a sunlit studio." fill priority sizes="(max-width: 700px) 100vw, (max-width: 1440px) 94vw, 1328px" />
        <div className="scene-topline"><span>GOOD FINDS. REAL CONNECTIONS.</span><span>THE PAYTRADA EXPERIENCE <i>↗</i></span></div>
        <svg className="commerce-paths" viewBox="0 0 1328 580" fill="none" aria-hidden="true"><path d="M240 415h163c40 0 40-110 80-110h77M768 305h82c38 0 38 110 76 110h160" /><circle cx="240" cy="415" r="4" /><circle cx="1086" cy="415" r="4" /></svg>
        <div className="scene-phone"><PhoneAppPreview /></div>
        <div className="scene-order"><span className="order-check">✓</span><div><small>MERCHANT EXPERIENCE</small><b>A new order. A new connection.</b><span>Pour-over set · Ready to prepare</span></div></div>
        <div className="scene-assistant"><span className="assistant-spark">✳</span><div><small>YOUR COMMERCE AGENT</small><b>“Find something made for<br />a slower kind of morning.”</b><span>Thoughtful discovery. Your decision.</span></div></div>
        <div className="scene-bottomline"><span>DISCOVER <i>→</i> CONNECT <i>→</i> AUTHORIZE</span><span>Built around everyday commerce.</span></div>
      </div>
      <figcaption><span><i /> A GLIMPSE OF WHAT’S TAKING SHAPE</span><span>Illustrative experience · Product and integrations in development</span></figcaption>
    </figure>
  );
}

const pillars = [
  { number: "01", title: "Wallet", subtitle: "Your assets. Your transactions.", text: "A place for Bitcoin-native assets and payments to meet everyday commerce. Wallet capabilities are being developed and validated as part of a wider connected experience.", tag: "BITCOIN · LIGHTNING · RGB", className: "pillar-wallet" },
  { number: "02", title: "Marketplace", subtitle: "Discover more. Trade directly.", text: "A home for merchant storefronts, product discovery, and commerce flows that connect what people want with the businesses that can provide it.", tag: "STOREFRONTS · CATALOGS", className: "pillar-market" },
  { number: "03", title: "AI agent", subtitle: "Commerce that understands intent.", text: "An intelligent assistant can help find, compare, and prepare purchases. People stay in control and authorize every financial action.", tag: "DISCOVERY · HUMAN CONTROL", className: "pillar-agent" },
  { number: "04", title: "Network", subtitle: "Built for connected commerce.", text: "Payment routing, liquidity coordination, and settlement research are the infrastructure underneath a more interoperable commerce experience.", tag: "ROUTING · SETTLEMENT RESEARCH", className: "pillar-network" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteInteractions />
      <a className="skip-link" href="#ecosystem">Skip to content</a>
      <header className="site-header">
        <div className="header-inner"><Brand inverse />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#ecosystem">Ecosystem</a><a href="#how">How It Works</a><a href="#merchants">Merchants</a><a href="#vision">Our Vision</a>
          </nav>
          <a className="header-cta" href="#contact">Get in Touch <Arrow diagonal /></a>
          <details className="mobile-menu"><summary aria-label="Toggle navigation menu"><span /><span /></summary><nav aria-label="Mobile navigation"><a href="#ecosystem">Ecosystem</a><a href="#how">How It Works</a><a href="#merchants">Merchants</a><a href="#vision">Our Vision</a><a href="#contact">Get in Touch <Arrow diagonal /></a></nav></details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="eyebrow"><span className="eyebrow-dot" /> AGENTIC COMMERCE ON BITCOIN</p>
          <h1 id="hero-title">Commerce, connected.<br /><span>Powered by Bitcoin.</span></h1>
          <p className="hero-description">One connected ecosystem for shoppers, merchants, and intelligent agents to discover, trade, and pay.</p>
          <div className="hero-actions"><a className="button button-primary" href="#ecosystem">Explore Paytrada <Arrow /></a><a className="text-link" href="#vision">Discover our vision <span>↗</span></a></div>
          <StoreBadges />
        </div>
        <CommerceArtwork />
      </section>

      <section className="intro-section section-pad" id="why">
        <span id="vision" className="anchor-target" />
        <div className="section-index"><span>01</span><span>THE PAYTRADA VISION</span><i /></div>
        <div className="intro-content"><p className="eyebrow dark-eyebrow">MORE THAN A WAY TO PAY</p><h2>Beyond payments.<br /><span>A network for commerce.</span></h2></div>
        <div className="intro-side"><p>Commerce today spans storefronts, tools, and payment rails that rarely feel like one experience. Paytrada is building the connections between them.</p><a className="arrow-link" href="#ecosystem">Meet the ecosystem <Arrow /></a></div>
        <div className="disconnected-row"><div><span className="disconnected-mark">···</span><p>Disconnected<br />experiences</p></div><div className="disconnect-path"><i /><i /><i /><span>Paytrada connects the journey</span></div><div className="connected-mark"><span /><span /><span /></div><p className="connected-copy">One connected<br />commerce network</p></div>
      </section>

      <section className="ecosystem-section section-pad" id="ecosystem">
        <div className="ecosystem-heading"><div><div className="section-index light-index"><span>02</span><span>THE ECOSYSTEM</span><i /></div><h2>Four parts.<br /><em>One connected world.</em></h2></div><p>Each part plays a role. Together, they make a more connected way to discover, trade, and pay.</p></div>
        <div className="ecosystem-layout">
          <div className="ecosystem-map" aria-label="Ecosystem diagram connecting wallet, marketplace, agent, and network">
            <div className="map-ring ring-one"/><div className="map-ring ring-two"/><div className="map-core"><Image src="/images/paytrada-mark-light.png" alt="" width={28} height={36} /><small>PAYTRADA</small></div>
            <div className="map-node map-wallet"><span className="map-node-icon"><EcosystemIcon kind="wallet" /></span><b>Wallet</b><small>Assets & payments</small></div>
            <div className="map-node map-market"><span className="map-node-icon"><EcosystemIcon kind="market" /></span><b>Marketplace</b><small>Products & merchants</small></div>
            <div className="map-node map-agent"><span className="map-node-icon"><EcosystemIcon kind="agent" /></span><b>AI agent</b><small>Discovery & assistance</small></div>
            <div className="map-node map-infra"><span className="map-node-icon"><EcosystemIcon kind="network" /></span><b>Network</b><small>Routing & settlement</small></div>
            <span className="map-label map-label-one">DISCOVER</span><span className="map-label map-label-two">AUTHORIZE</span><span className="map-label map-label-three">SETTLE</span>
          </div>
          <div className="pillar-list">{pillars.map((p) => <article className={`pillar ${p.className}`} key={p.number}><span className="pillar-number">{p.number}</span><div className="pillar-body"><h3>{p.title}</h3><h4>{p.subtitle}</h4><p>{p.text}</p><span className="pillar-tag">{p.tag}</span></div><span className="pillar-arrow"><Arrow diagonal /></span></article>)}</div>
        </div>
      </section>

      <section className="journey-section section-pad" id="how">
        <div className="journey-top"><div><div className="section-index"><span>03</span><span>HOW IT COULD WORK</span><i /></div><h2>A better way<br />through the <em>journey.</em></h2></div><p>A connected experience in development. The steps below describe the intended journey, with product capabilities still being validated.</p></div>
        <div className="journey-track"><div className="journey-line"><span /></div>{[
          ["01", "Discover", "Find a product or merchant across a connected marketplace."],
          ["02", "Explore", "Get help comparing options with an intelligent commerce agent."],
          ["03", "Review", "See the details and decide whether to continue."],
          ["04", "Authorize", "Approve the payment yourself, with clear purchase context."],
          ["05", "Follow through", "Track order status and receive a record when settlement is verified."],
        ].map(([n, title, desc]) => <article className="journey-step" key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        <p className="journey-disclaimer">Conceptual journey. Product and settlement capabilities are under active development.</p>
      </section>

      <section className="merchant-section section-pad" id="merchants">
        <div className="merchant-copy"><div className="section-index"><span>04</span><span>FOR MERCHANTS</span><i /></div><p className="eyebrow dark-eyebrow">YOUR STOREFRONT, IN A WIDER NETWORK</p><h2>Meet customers<br />where <em>intent begins.</em></h2><p className="merchant-description">Paytrada is exploring ways to bring merchant catalogs and digital storefronts into a commerce network people and AI agents can navigate.</p><ul className="merchant-list"><li><span>01</span> Product catalog onboarding</li><li><span>02</span> Storefront and platform integrations</li><li><span>03</span> Agent-assisted product discovery</li><li><span>04</span> Payment and order workflows</li></ul><a className="arrow-link" href="#contact">Talk about merchant access <Arrow /></a></div>
        <div className="merchant-visual"><div className="merchant-window"><div className="window-bar"><span /><span /><span /><b>MERCHANT STUDIO <i>CONCEPT</i></b><span className="window-menu">•••</span></div><div className="studio-content"><div className="studio-sidebar"><span className="studio-brand-mark"><Image src="/images/paytrada-mark-light.png" alt="" width={15} height={20} /></span><i className="active"/><i/><i/><i/><i/></div><div className="studio-main"><div className="studio-greeting"><div><small>YOUR STORE / OVERVIEW</small><h3>Good morning, Atelier.</h3><p>A clear view of your connected commerce.</p></div><span className="avatar">A</span></div><div className="studio-stats"><div><small>CATALOG ITEMS</small><b>128</b><span>Ready to discover</span></div><div><small>CONNECTED CHANNELS</small><b>03</b><span>Storefront sources</span></div></div><div className="studio-products"><div className="products-heading"><b>Featured in your catalog</b><span>View catalog ↗</span></div><div className="product-row"><div className="product-shape"><Image src="/images/commerce-product.webp" alt="Illustrative ceramic pour-over set" fill sizes="52px" /></div><span><b>Pour-over set</b><small>Ceramic / home</small></span><span className="product-price">$72</span></div><div className="product-row"><div className="product-shape"><Image src="/images/commerce-maker.webp" alt="Illustrative independent ceramics studio" fill sizes="52px" /></div><span><b>Studio collection</b><small>Handmade / ceramics</small></span><span className="product-price">$210</span></div></div></div></div></div><div className="merchant-callout"><span className="callout-bullet"/><span>One catalog. More paths to discovery.</span><Arrow diagonal /></div></div>
      </section>

      <section className="infrastructure-section section-pad">
        <div className="infra-copy"><div className="section-index light-index"><span>05</span><span>THE FOUNDATION</span><i /></div><p className="eyebrow">COMMERCE FIRST. BITCOIN NATIVE.</p><h2>Quietly powerful<br /><em>infrastructure.</em></h2><p>Bitcoin, Lightning, and RGB are the building blocks underneath Paytrada&apos;s commerce vision. The experience starts with what people and merchants can do.</p><a className="infra-link" href="#contact">Explore the technical vision <Arrow /></a></div>
        <div className="infra-stack"><div className="infra-layer layer-rgb"><span className="layer-number">03</span><div><small>CLIENT-SIDE ASSETS</small><h3>RGB</h3><p>Digital assets and programmable ownership.</p></div><span className="layer-glyph">◈</span></div><div className="infra-layer layer-lightning"><span className="layer-number">02</span><div><small>PAYMENT CONNECTIVITY</small><h3>Lightning</h3><p>Payment channels and routing research.</p></div><span className="layer-glyph">⌁</span></div><div className="infra-layer layer-bitcoin"><span className="layer-number">01</span><div><small>SETTLEMENT FOUNDATION</small><h3>Bitcoin</h3><p>Open digital asset infrastructure.</p></div><span className="layer-glyph">₿</span></div><p className="infra-footnote">Virtual-channel scalability and protected merchant settlement remain under development and validation.</p></div>
      </section>

      <section className="agent-section section-pad">
        <div className="agent-copy"><div className="section-index"><span>06</span><span>AN INTELLIGENT FUTURE</span><i /></div><p className="eyebrow dark-eyebrow">HELPFUL BY DESIGN. HUMAN BY DEFAULT.</p><h2>From “I’m looking for…”<br />to <em>“That’s the one.”</em></h2><p>An agent can turn a shopping goal into a useful shortlist, explain the options, and prepare the next step. You review the details and decide when to pay.</p><div className="agent-principle"><span>✓</span><p><b>Your choice stays yours.</b><br />Financial actions require human review and authorization.</p></div></div>
        <div className="agent-conversation"><div className="conversation-head"><div className="conversation-orb">✳</div><div><b>Paytrada assistant</b><small>SHOPPING MODE · CONCEPT</small></div><span className="conversation-dots">•••</span></div><div className="conversation-body"><div className="chat-date">A MORE PERSONAL WAY TO DISCOVER</div><div className="chat-bubble user-bubble">I’m looking for a thoughtful gift for someone who loves coffee.</div><div className="agent-reply"><span className="reply-icon">✳</span><div><b>Let’s find something they’ll use every day.</b><p>Here are a few independent makers with ceramic pour-over sets. Want to compare materials or price first?</p></div></div><div className="product-recommendation"><div className="recommendation-art"><Image src="/images/commerce-product.webp" alt="Illustrative ceramic pour-over set" fill sizes="64px" /></div><div><small>MAKER / NORTHLINE STUDIO</small><b>Pour-over set · ceramic + walnut</b><span>Good fit for your brief <i>·</i> $72</span></div><span className="reco-arrow">↗</span></div><div className="chat-prompt"><span>Compare these options…</span><span>↑</span></div><div className="authorization-note"><span>✓</span> You review and authorize any purchase</div></div></div>
      </section>

      <section className="closing-section section-pad" id="contact"><div className="closing-orbit orbit-a"/><div className="closing-orbit orbit-b"/><div className="closing-content"><p className="eyebrow"><span className="eyebrow-dot"/> THE NETWORK IS TAKING SHAPE</p><h2>The next chapter<br />of commerce <em>starts here.</em></h2><p>Paytrada is building the connections between people, merchants, intelligent agents, and Bitcoin-native payments.</p><a className="button button-light" href={`mailto:${contactEmail}?subject=Paytrada%20early%20access`}>Start a conversation <Arrow diagonal /></a><small>For merchant and ecosystem enquiries</small></div><div className="closing-stamp"><span>PAYTRADA</span><i>×</i><span>COMMERCE<br />NETWORK</span></div></section>

      <footer className="site-footer"><div className="footer-top"><div><Brand /><p>Agentic commerce on Bitcoin.<br />A network taking shape.</p></div><div className="footer-nav"><div><b>EXPLORE</b><a href="#why">Why Paytrada</a><a href="#ecosystem">Ecosystem</a><a href="#how">How it works</a></div><div><b>PARTICIPATE</b><a href="#merchants">For merchants</a><a href="#contact">Get in touch</a><a href={`mailto:${contactEmail}`}>Email Paytrada ↗</a></div></div></div><div className="footer-bottom"><span>© 2026 Paytrada</span><span>Bitcoin-native commerce, connected.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
