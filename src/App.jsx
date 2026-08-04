import { useMemo, useState } from 'react'
import {
  ArrowRight, BarChart3, BookOpen, Check, ChevronDown, CircleHelp,
  ClipboardList, Download, ExternalLink, FileSpreadsheet, Gauge, Menu, MessageCircle,
  Package, ReceiptText, Search, ShieldCheck, ShoppingCart, Sparkles, Users, X,
} from 'lucide-react'
import { config } from './site-config'

const features = [
  [ShoppingCart, 'Point of Sale', 'Record sales efficiently and keep transactions organized.'],
  [ClipboardList, 'Sales management', 'Monitor sales activity and maintain clear business records.'],
  [Package, 'Inventory tracking', 'Keep track of inventory movement and stock activity.'],
  [Users, 'Customer balances', 'Manage customer balances and keep payment records organized.'],
  [ReceiptText, 'Expenses', 'Record business expenses and see costs more clearly.'],
  [BookOpen, 'Accounting records', 'Maintain organized records connected to business transactions.'],
  [BarChart3, 'Reports', 'Review useful business information for everyday decisions.'],
  [ShieldCheck, 'Audit trail', 'Keep a record of important system activities and corrections.'],
  [FileSpreadsheet, 'Data export', 'Export available information to PDF, Excel, and CSV when supported.'],
  [Gauge, 'Business monitoring', 'Get a clearer view of operations in one desktop application.'],
]

const updates = [
  { version: 'V1.0.0', date: 'Official release', newItems: ['Official BentaBoss installer available for Windows'], improved: ['Refined workflows and reports for everyday business use'], fixed: ['Bug fixes and stability improvements'], known: ['No known issues'] },
]

const faqs = [
  ['What is BentaBoss?', 'BentaBoss is a Windows desktop application that brings POS, sales, inventory, customer balances, expenses, accounting records, and reports into one practical system.'],
  ['Who is BentaBoss for?', 'It is designed for printing businesses and crafters who need a clearer way to manage sales, inventory, customer balances, expenses, and business records.'],
  ['How long is the trial?', `You can try BentaBoss free for ${config.trialDays} days. After the trial, decide if it is right for your business and message the BentaLab PH office Facebook page if you would like to continue. You can then ask about activation and next steps.`],
  ['Is BentaBoss ready to use?', 'Yes. The official release is available for real business use, with ongoing improvements informed by customer feedback.'],
  ['Why does Windows show Unknown Publisher?', 'The installer is not yet code-signed with a paid publisher certificate. If you received it from an official BentaLab PH source, choose More info → Run anyway.'],
  ['How do I report a bug?', 'Use the feedback form below or email the BentaLab PH team with your BentaBoss version, what happened, and steps to reproduce the issue.'],
]

function Logo({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="BentaLab PH home">
    <img src="/BentaLab-Logo.png" alt="BentaLab PH" />
    <span><strong>BentaLab PH</strong><small>Business Solutions</small></span>
  </a>
}

function Button({ href, children, secondary = false, external = false }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
    {children} {external ? <ExternalLink size={15} /> : <ArrowRight size={16} />}
  </a>
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const filteredFaqs = useMemo(() => faqs.filter(([q, a]) => `${q} ${a}`.toLowerCase().includes(search.toLowerCase())), [search])
  const closeMenu = () => setMobileOpen(false)

  return <div className="site-shell">
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className={mobileOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {['home', 'bentaboss', 'features', 'pricing', 'updates', 'support', 'about'].map((id) => <a key={id} href={`#${id}`} onClick={closeMenu}>{id === 'bentaboss' ? 'BentaBoss' : id === 'about' ? 'About BentaLab' : id[0].toUpperCase() + id.slice(1)}</a>)}
        </nav>
        <div className="header-actions"><a className="text-link" href={`mailto:${config.email}`}>Get Started</a><Button href={config.downloadUrl} external>Download BentaBoss</Button></div>
        <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="release-section trial-section" id="trial"><div className="section release-grid"><div><div className="release-badge">TRY BENTABOSS</div><h2>Take 7 days to see if it fits your business.</h2></div><div><p>Start with a free {config.trialDays}-day trial and explore BentaBoss in your everyday workflow. There is no need to decide immediately.</p><p>After the trial, if you would like to continue using BentaBoss, message us through the <a className="email-link" href={config.messenger} target="_blank" rel="noreferrer">BentaLab PH office Facebook page <MessageCircle size={15} /></a> so we can help with activation and next steps.</p></div></div></section>
      <section className="hero section" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot" /> BentaBoss — official release now available</div>
          <h1>Smart business tools for <em>Printing Businesses &amp; Crafters.</em></h1>
          <p className="lead">Meet BentaBoss — an integrated POS and accounting solution designed to help businesses manage sales, inventory, customer balances, expenses, reports, and daily operations with more confidence and control.</p>
          <div className="hero-actions"><Button href={config.downloadUrl} external><Download size={17} /> Download BentaBoss</Button><Button href="#features" secondary>Explore features</Button></div>
          <p className="micro-note">Windows desktop application · {config.version} · Official release</p>
        </div>
        <div className="hero-visual"><div className="visual-glow" /><div className="product-window"><div className="window-top"><span className="window-dots"><i /><i /><i /></span><span>BentaBoss · Business overview</span><span className="window-status">● Live data</span></div><div className="window-body"><div className="window-sidebar"><b>BB</b><span className="active">▦</span><span>▣</span><span>◫</span><span>≋</span><span>⚙</span></div><div className="window-content"><div className="window-heading"><div><small>MONITORING</small><h3>Business overview</h3></div><span className="date-chip">Today ▾</span></div><div className="metric-row"><div><small>Total sales</small><strong>₱48,240</strong><span className="positive">↑ 12.8%</span></div><div><small>Receivables</small><strong>₱12,700</strong><span className="neutral">8 customers</span></div><div><small>Inventory items</small><strong>1,204</strong><span className="positive">↑ 4.2%</span></div></div><div className="chart-card"><div className="chart-label"><span>Sales activity</span><small>Last 7 days</small></div><div className="chart"><span style={{height:'38%'}} /><span style={{height:'52%'}} /><span style={{height:'44%'}} /><span style={{height:'68%'}} /><span style={{height:'56%'}} /><span style={{height:'82%'}} /><span style={{height:'74%'}} /></div></div></div></div></div><div className="floating-note"><Sparkles size={15} /><span><strong>One clear view</strong><small>for your daily operations</small></span></div></div>
      </section>

      <section className="trust-strip"><div><strong>Built for the way Filipino MSMEs work</strong><span>Practical tools for everyday business decisions.</span></div><div className="trust-items"><span><Check /> Real-world workflows</span><span><Check /> Easy to understand</span><span><Check /> Continuously improved</span></div></section>

      <section className="intro section" id="bentaboss"><div className="section-kicker">The BentaLab approach</div><div className="intro-grid"><div><h2>Business technology built for growing businesses.</h2></div><div><p className="section-lead">BentaLab Business Solutions creates smart, practical, and easy-to-use business tools that help MSMEs manage sales, inventory, accounting, reports, and daily operations with more confidence and control.</p><div className="pillars"><div><span>01</span><h3>Practical</h3><p>Built around real business needs and everyday workflows.</p></div><div><span>02</span><h3>Simple</h3><p>Designed to make business management easier to understand and use.</p></div><div><span>03</span><h3>Built to improve</h3><p>Continuously improved through feedback and practical experience.</p></div></div></div></div></section>

      <section className="product-band"><div className="section product-grid"><div className="product-mark"><div className="product-icon">BB</div><span>THE FIRST BENTALAB PRODUCT</span><h2>BentaBoss<br /><em>Integrated POS &amp; Accounting</em></h2><p>BentaBoss brings essential sales, inventory, accounting, and reporting tools together in one practical desktop application.</p><Button href="#features" secondary>Explore BentaBoss</Button></div><div className="product-points">{[['01','POS and sales recording'],['02','Inventory and stock activity'],['03','Customer balances and expenses'],['04','Accounting records and reports'],['05','Audit trail and data management'],['06','PDF / Excel / CSV exports']].map(([n,t]) => <div key={n}><span>{n}</span><strong>{t}</strong></div>)}</div></div></section>

      <section className="section feature-section" id="features"><div className="section-kicker">What BentaBoss helps with</div><div className="section-heading"><h2>Everything you need to keep the day moving.</h2><p>Simple building blocks for the sales, records, and decisions that matter most.</p></div><div className="feature-grid">{features.map(([Icon,title,description]) => <article className="feature-card" key={title}><div className="icon-box"><Icon size={19} /></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className="benefit-section"><div className="section benefit-grid"><div><div className="section-kicker">The everyday difference</div><h2>Spend less time guessing. Run your business with more confidence.</h2><p className="section-lead">Good business decisions start with organized information. BentaBoss helps bring the important pieces together.</p></div><div className="benefits">{[['01','Know your sales','Understand sales activity and transaction records.'],['02','Monitor your inventory','Keep better visibility over stock movement and activity.'],['03','Keep records organized','Bring sales, expenses, balances, and accounting records into one system.'],['04','Make better decisions','Use organized reports to better understand performance.']].map(([n,t,d]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section className="section audiences" id="about"><div className="section-kicker">Made for your kind of work</div><div className="section-heading"><h2>Built for printing businesses and crafters.</h2><p>BentaBoss is designed for the practical realities of printing businesses and crafters — from tracking sales and materials to managing customer balances, expenses, inventory, and records.</p></div><div className="audience-list">{['Printing businesses','Crafters','Custom-order businesses','Small production teams','Creative entrepreneurs','Growing owner-led businesses'].map((item, i) => <span key={item}><span>0{i+1}</span>{item}</span>)}</div></section>

      <section className="release-section"><div className="section release-grid"><div><div className="release-badge">● OFFICIAL RELEASE</div><h2>Ready for your everyday business.</h2></div><div><p>BentaBoss is now officially released and available for real business use. It brings sales, inventory, customer balances, expenses, reports, and daily operations together in one practical desktop application.</p><p>The product will continue to receive improvements, fixes, and updates based on customer feedback and the needs of growing businesses.</p><p className="release-footnote">Download the official installer and get started with BentaBoss today.</p></div></div></section>

      <section className="section pricing-section" id="pricing"><div className="section-kicker">Official pricing</div><div className="pricing-grid"><div><h2>Start with a clear, fair price.</h2><p className="section-lead">Get lifetime access to the activated version with straightforward pricing for your business.</p><a className="email-link" href={`mailto:${config.email}`}>Questions about activation? <ArrowRight size={15} /></a></div><div className="price-card"><span className="promo-label">Official release promo</span><span className="price-label">BentaBoss Activation</span><div className="original-price">{config.pricing.originalActivation}</div><div className="price">{config.pricing.activation}<small> / device</small></div><p>Lifetime activation for one device.</p><hr />{['One-device activation','Lifetime access to the activated version','Lifetime free updates for future improvements, subject to the licensing policy'].map((item) => <div className="price-item" key={item}><Check size={16} />{item}</div>)}<div className="additional"><strong>{config.pricing.additionalDevice}</strong> per additional device, if offered.</div><Button href={`mailto:${config.email}?subject=BentaBoss%20activation`}>Get BentaBoss</Button></div></div></section>

      <section className="download-band" id="download"><div className="section download-grid"><div><div className="section-kicker">Official download</div><h2>Ready to bring more order to your day?</h2><p>Download the official BentaBoss installer for Windows from the official BentaLab PH source.</p><Button href={config.downloadUrl} external><Download size={17} /> Download for Windows</Button></div><div className="download-meta"><div><span>Current version</span><strong>{config.version}</strong></div><div><span>Release status</span><strong>{config.releaseDate}</strong></div><div><span>Compatibility</span><strong>Windows 10 or later</strong></div><div><span>File source</span><strong>Official GitHub release <ExternalLink size={14} /></strong></div></div></div></section>

      <section className="section guide-section" id="support"><div className="guide-grid"><div><div className="section-kicker">Get set up</div><h2>From download to first use in three steps.</h2><p className="section-lead">Need help installing? <a href={`mailto:${config.email}`}>Contact the BentaLab PH team.</a></p></div><div className="steps">{['Download the official BentaBoss installer.','Run the installer and follow the installation instructions.','Open BentaBoss and complete activation or setup.'].map((step,i) => <div key={step}><span>0{i+1}</span><strong>{step}</strong></div>)}</div></div><div className="warning"><div><CircleHelp size={18} /><strong>Important notice about the Windows security warning</strong></div><p>BentaBoss may show “Windows protected your PC” or “Unknown Publisher” because the app is not yet code-signed with a paid software publisher certificate.</p><p>If you trust the official source, you may continue with <strong>More info → Run anyway</strong>. Download or receive the installer only from official BentaLab PH / BentaBoss sources.</p></div></section>

      <section className="section requirements"><div className="section-kicker">System requirements</div><div className="req-grid"><div><h2>A dependable start for everyday work.</h2><p className="section-lead">These are the current recommended starting points and are kept here in one place so they can be updated easily as BentaBoss evolves.</p></div><div className="req-list">{config.system.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

      <section className="updates-section" id="updates"><div className="section updates-grid"><div><div className="section-kicker">What's new</div><h2>Progress you can follow.</h2><p className="section-lead">BentaBoss is improved through real-world feedback. Check back here for the latest release notes.</p></div><div className="update-card">{updates.map((u) => <div key={u.version}><div className="update-top"><span>{u.version}</span><small>{u.date}</small></div><div className="update-columns"><div><b>New</b>{u.newItems.map(x=><p key={x}>+ {x}</p>)}</div><div><b>Improved</b>{u.improved.map(x=><p key={x}>↗ {x}</p>)}</div><div><b>Fixed</b>{u.fixed.map(x=><p key={x}>✓ {x}</p>)}</div></div><div className="known"><b>Known issues</b><p>{u.known.join(' · ')}</p></div></div>)}</div></div></section>

      <section className="section faq-section"><div className="faq-heading"><div><div className="section-kicker">Support center</div><h2>Questions, answered clearly.</h2></div><div className="search-box"><Search size={17} /><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search support questions" aria-label="Search support questions" /></div></div><div className="faq-list">{filteredFaqs.map(([question,answer], index) => <article key={question} className={openFaq===index ? 'faq-item is-open':'faq-item'}><button onClick={()=>setOpenFaq(openFaq===index?-1:index)}><span>{question}</span>{openFaq===index?<X size={17}/>:<ChevronDown size={17}/>}</button>{openFaq===index&&<p>{answer}</p>}</article>)}</div></section>

      <section className="feedback-section"><div className="section feedback-grid"><div><div className="section-kicker">Your feedback matters</div><h2>Help us improve BentaBoss.</h2><p className="section-lead">Found a bug, have a suggestion, or see a way to make the system more useful? Let us know.</p><div className="contact-links"><a href={`mailto:${config.email}`}><MessageCircle size={16}/> {config.email}</a><a href={config.messenger} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Message on Facebook</a></div></div><form className="feedback-form" action={`mailto:${config.email}`} method="post" encType="text/plain"><div className="form-row"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label></div><div className="form-row"><label>Category<select name="category" defaultValue="Bug Report"><option>Bug Report</option><option>Feature Request</option><option>Question</option><option>Feedback</option><option>Other</option></select></label><label>BentaBoss version<input name="version" placeholder={config.version} /></label></div><label>Message<textarea name="message" rows="4" required /></label><p className="form-note">This form opens your email client. No fake submission status is shown.</p><button className="button" type="submit">Send feedback <ArrowRight size={16}/></button></form></div></section>

      <section className="about-section"><div className="section about-grid"><div><div className="section-kicker">About BentaLab PH</div><h2>Local context. Practical ambition.</h2></div><div><p className="section-lead">BentaLab Business Solutions creates smart and practical business tools that help MSMEs manage, grow, and operate better.</p><p>“Benta” represents sales, business, livelihood, and entrepreneurship. “Lab” represents innovation, testing, creation, and continuous improvement. Together, BentaLab PH represents a Filipino-focused approach to practical business technology and local MSME workflows.</p></div></div></section>
    </main>

    <footer className="footer"><div className="footer-main"><Logo compact /><p>{config.tagline}</p><div className="footer-actions"><Button href={config.downloadUrl} external>Download BentaBoss</Button><a href={config.facebook} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Facebook</a></div></div><div className="footer-bottom"><span>© 2026 {config.company}. All rights reserved.</span><span>BentaBoss Official Release</span><span><a href={`mailto:${config.email}`}>Support</a> · <a href="#home">Privacy</a> · <a href="#home">Terms</a></span></div></footer>
  </div>
}

export default App
