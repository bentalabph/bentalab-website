import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  BarChart3,
  Calculator,
  CheckCircle2,
  Download,
  Eye,
  KeyRound,
  Mail,
  MessageCircle,
  Package,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react'

const defaultBrandLogo = {
  logoUrl: '/BentaLab-Logo.png',
  logoVersion: '2',
}

const installerDownloadUrl = 'https://github.com/bentalabph/bentalab-website/releases/download/V1.0.0.Beta.10/BentaBoss-Installer.zip'
const supportEmail = 'bentalabph@gmail.com'
const supportPhone = 'PASTE_CONTACT_NUMBER_HERE'

const screenshots = [
  { src: '/screenshots/dashboard.png', title: 'Dashboard Monitoring' },
  { src: '/screenshots/pos.png', title: 'POS Sales Recording' },
  { src: '/screenshots/inventory.png', title: 'Inventory Tracking' },
  { src: '/screenshots/reports.png', title: 'Business Reports' },
]

export default function App() {
  const facebookUrl = 'https://www.facebook.com/bentalabph'
  const messengerUrl = 'https://m.me/bentalabph'
  const emailUrl = `mailto:${supportEmail}`
  const hasSupportPhone =
    typeof supportPhone === 'string' &&
    supportPhone.trim() &&
    supportPhone !== 'PASTE_CONTACT_NUMBER_HERE'
  const [brandLogo, setBrandLogo] = useState(defaultBrandLogo)

  useEffect(() => {
    let shouldUpdate = true

    fetch('/brand-config.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Brand config not available')
        }

        return response.json()
      })
      .then((config) => {
        if (!shouldUpdate) {
          return
        }

        setBrandLogo({
          logoUrl:
            typeof config.logoUrl === 'string' && config.logoUrl.trim()
              ? config.logoUrl.trim()
              : defaultBrandLogo.logoUrl,
          logoVersion:
            typeof config.logoVersion === 'string' && config.logoVersion.trim()
              ? config.logoVersion.trim()
              : defaultBrandLogo.logoVersion,
        })
      })
      .catch(() => {
        if (shouldUpdate) {
          setBrandLogo(defaultBrandLogo)
        }
      })

    return () => {
      shouldUpdate = false
    }
  }, [])

  const problems = [
    'Manual sales records are hard to review',
    'Customer balances can be missed or forgotten',
    'Inventory movement is difficult to monitor',
    'Expenses are separated from sales reports',
    'Profit is hard to understand without proper reports',
    'Corrections are hard to trace without an audit trail',
  ]

  const solutionPoints = [
    'Record sales and payments',
    'Monitor products and stock movement',
    'Track customer balances',
    'Record expenses',
    'View business reports',
    'Keep safer correction and audit records',
  ]

  const features = [
    {
      icon: ShoppingCart,
      title: 'POS Sales',
      description:
        'Record daily sales, payments, discounts, customer transactions, and printing service orders in one place.',
    },
    {
      icon: Package,
      title: 'Inventory Tracking',
      description:
        'Track products, raw materials, stock movement, and inventory adjustments for better monitoring.',
    },
    {
      icon: Calculator,
      title: 'Accounting Records',
      description:
        'Connect sales, payments, receivables, expenses, and journal entries to business reports.',
    },
    {
      icon: BarChart3,
      title: 'Reports & Monitoring',
      description:
        'View sales reports, profit and loss, customer balances, ledgers, inventory reports, and dashboard summaries.',
    },
  ]

  const businessTypes = [
    'Printing shops',
    'Tarpaulin and signage businesses',
    'Sticker and label printing',
    'Sublimation businesses',
    'Photocopy and document service shops',
    'Small and home-based businesses',
    'Other MSMEs that need POS, inventory, and accounting records',
  ]

  const pricingItems = [
    'Single-device lifetime activation',
    'Free future improvements and updates',
    'Early access to BentaBoss pre-release',
    'Support for setup and activation',
    'Additional device activation: PHP 379 per device',
  ]

  const installSteps = [
    'Click the download button.',
    'Wait for the installer file to finish downloading.',
    'Download and install BentaBoss on your Windows computer.',
    'If Windows shows a warning, click More info -> Run anyway if you trust the official BentaLab PH source.',
    'Open BentaBoss and enter your activation key.',
  ]

  const faqs = [
    {
      question: 'Is BentaBoss web-based?',
      answer: 'No. BentaBoss is currently a local Windows desktop app.',
    },
    {
      question: 'Is BentaBoss already official?',
      answer:
        'BentaBoss is currently in Beta / Pre-Release. It is already usable for real business testing, but improvements may still be made based on feedback.',
    },
    {
      question: 'Can I try BentaBoss first?',
      answer:
        'Yes. You may download the installer directly from the website and try it on your Windows computer.',
    },
    {
      question: 'How much is BentaBoss?',
      answer:
        'The current pre-release offer is PHP 749 lifetime activation for one device. Additional device activation may be offered for PHP 379 per device.',
    },
    {
      question: 'Is it safe to install?',
      answer:
        'BentaBoss should only be downloaded from official BentaLab PH sources. Windows may show an "Unknown Publisher" warning because the app is not yet code-signed with a paid publisher certificate. This does not automatically mean unsafe, but users should only continue if they trust the official source.',
    },
    {
      question: 'How many devices are included?',
      answer:
        'The PHP 749 activation is for one device. Additional devices may be activated separately if available.',
    },
    {
      question: 'What happens if I reformat my computer?',
      answer:
        'Since BentaBoss is installed locally, reformatting may remove local app data if no backup was made. Users should create and keep backups before reformatting or changing computers.',
    },
    {
      question: 'Is BentaBoss only for printing businesses?',
      answer:
        'BentaBoss is especially focused on printing businesses, but it can also help other small businesses that need POS, inventory, customer balance tracking, expenses, and reports.',
    },
  ]

  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">
          <div className="logo-icon">
            <BentaLabLogo logo={brandLogo} />
          </div>
          <div>
            <span className="logo-text">BentaLab PH</span>
            <span className="logo-sub">Business tools made smarter</span>
          </div>
        </div>

        <div className="nav-links" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#support">Support</a>
        </div>

        <div className="nav-actions">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Open BentaLab PH on Facebook"
          >
            <FacebookIcon />
          </a>

          <a href={installerDownloadUrl} download className="nav-cta">
            Download
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">
            <span className="badge-dot" />
            Beta / Pre-Release for selected early users
          </div>

          <h1 className="hero-title">
            Run your business with better sales, inventory, and accounting control.
            <br />
            <span>BentaBoss POS &amp; Accounting</span>
          </h1>

          <p className="hero-desc">
            BentaBoss is an Integrated POS &amp; Accounting System made for Philippine
            Micro and Small Businesses, especially printing businesses that need a more organized way to
            record sales, monitor inventory, track customer balances, manage expenses,
            and view reports in one system.
          </p>

          <div className="hero-btns">
            <a href={installerDownloadUrl} download className="btn-primary">
              <Download aria-hidden="true" size={17} />
              Download BentaBoss
            </a>
            <a href="#pricing" className="btn-secondary">
              <Eye aria-hidden="true" size={17} />
              View pricing
            </a>
          </div>

          <p className="hero-note">
            The installer is hosted on this website for direct download.
          </p>
        </div>

        <div className="app-preview" aria-label="BentaBoss dashboard preview">
          <div className="app-bar">
            <div className="dots" aria-hidden="true">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
            </div>
            <span className="app-title">Dashboard - Business Summary</span>
          </div>
          <div className="app-body">
            <div className="dash-header">BentaBoss Monitoring</div>
            <div className="dash-title">Daily Business Control</div>
            <div className="metrics">
              <Metric label="Sales" value="PHP 48.2K" width="72%" />
              <Metric label="Inventory" value="1,204" width="55%" />
              <Metric label="Receivables" value="PHP 12.7K" width="40%" />
              <Metric label="Profit & Loss" value="+PHP 6.5K" width="60%" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="content-section">
        <div className="section-label">Common Business Problems</div>
        <h2 className="section-title">Still tracking your business manually?</h2>
        <p className="section-desc">
          Many small businesses still rely on notebooks, Excel files, or scattered
          records. This can make it harder to monitor sales, balances, inventory,
          expenses, and profit.
        </p>

        <div className="cards-grid cards-grid-3">
          {problems.map((problem) => (
            <article className="compact-card" key={problem}>
              <AlertTriangle aria-hidden="true" size={18} />
              <h3>{problem}</h3>
            </article>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="split-section">
        <div>
          <div className="section-label">The BentaBoss Solution</div>
          <h2 className="section-title">One local system for daily business monitoring</h2>
          <p className="section-desc no-margin">
            BentaBoss connects POS sales, basic inventory tracking, customer balances,
            expenses, reports, and accounting records in one desktop system, helping
            business owners monitor operations with more confidence and control.
          </p>
        </div>

        <div className="check-grid">
          {solutionPoints.map((point) => (
            <div className="check-item" key={point}>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="features-section" id="features">
        <div className="section-label">Features</div>
        <h2 className="section-title">Made for daily business operations</h2>
        <p className="section-desc">
          BentaBoss helps small businesses manage common workflows without switching
          between separate POS, spreadsheet, and accounting tools.
        </p>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feat-icon">
                  <Icon aria-hidden="true" size={19} />
                </div>
                <h3 className="feat-title">{feature.title}</h3>
                <p className="feat-desc">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <div className="divider" />

      <section className="content-section">
        <div className="section-label">Built For</div>
        <h2 className="section-title">Made for growing Philippine Micro and Small Businesses</h2>
        <p className="section-desc">
          BentaBoss is designed for small and growing businesses that need practical
          tools, not complicated enterprise software.
        </p>

        <div className="cards-grid business-grid">
          {businessTypes.map((business) => (
            <article className="business-card" key={business}>
              <ShieldCheck aria-hidden="true" size={18} />
              <span>{business}</span>
            </article>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="content-section">
        <div className="section-label">Product Preview</div>
        <h2 className="section-title">See how BentaBoss helps organize daily operations</h2>
        <p className="section-desc">
          Use real BentaBoss screenshots to show the system honestly and clearly.
        </p>

        <div className="screenshots-grid">
          {screenshots.map((screenshot) => (
            <article className="screenshot-card" key={screenshot.src}>
              <div className="screenshot-frame">
                <img
                  src={screenshot.src}
                  alt={`${screenshot.title} screenshot`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.classList.add('is-missing')
                  }}
                />
                <span className="screenshot-fallback">Screenshot coming soon</span>
              </div>
              <h3>{screenshot.title}</h3>
            </article>
          ))}
        </div>
        <p className="privacy-note">
          Do not show sensitive client/customer data in screenshots. Use demo data or
          blurred/clean screenshots only.
        </p>
      </section>

      <div className="divider" />

      <section className="pricing-section" id="pricing">
        <div>
          <div className="section-label">Pre-Release Offer</div>
          <h2 className="section-title">Affordable lifetime access for early users</h2>
          <p className="section-desc no-margin">
            BentaBoss is currently in Beta / Pre-Release. This means the app is already
            usable for real business testing, but some features, reports, layouts, and
            workflows may still be improved based on user feedback.
          </p>
          <p className="trust-note">
            BentaBoss has been tested with real business workflows and large-volume
            transaction testing during pre-release development.
          </p>
        </div>

        <div className="pricing-card">
          <div className="pricing-head">
            <div>
              <p className="pricing-label">Lifetime activation for one device</p>
              <h3 className="price">PHP 749</h3>
              <p className="pricing-note">Lifetime activation for one device</p>
            </div>
            <div className="price-mark">PHP</div>
          </div>

          <div className="pricing-list">
            {pricingItems.map((item) => (
              <div className="pricing-item" key={item}>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="pricing-footnote">
            Pre-release pricing may change after the official stable release.
          </p>

          <a href={installerDownloadUrl} download className="dl-btn pricing-cta">
            <Download aria-hidden="true" size={18} />
            Download BentaBoss
          </a>
        </div>
      </section>

      <div className="divider" />

      <section className="download-section" id="download">
        <div>
          <div className="section-label">Official Download</div>
          <h2 className="section-title">How to download and install BentaBoss</h2>
          <p className="section-desc no-margin">
            The installer is hosted on this website. Click the download button below to
            get the latest installer file.
          </p>

          <div className="steps-list install-list">
            {installSteps.map((step, index) => (
              <div className="step-card" key={step}>
                <div className="step-number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <a href={installerDownloadUrl} download className="dl-btn">
            <Download aria-hidden="true" size={18} />
            Download BentaBoss
          </a>
        </div>

        <aside className="notice-card">
          <div className="notice-header">
            <div className="notice-icon">
              <AlertTriangle aria-hidden="true" size={17} />
            </div>
            <div className="notice-title">Windows security warning</div>
          </div>
          <div className="notice-body">
            <p>
              Windows may show "Windows protected your PC" or "Unknown Publisher"
              because BentaBoss is not yet code-signed with a paid software publisher
              certificate.
            </p>
            <p>
              This does not automatically mean the app is unsafe. It only means Windows
              cannot yet verify the publisher identity. Please download only from
              official BentaLab PH sources.
            </p>
          </div>
        </aside>
      </section>

      <div className="divider" />

      <section className="content-section" id="faq">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Common questions before downloading</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="support-section" id="support">
        <div className="support-card">
          <div className="section-label">Support</div>
          <h2 className="section-title">Need help?</h2>
          <p className="section-desc no-margin">
            For download, installation, activation, setup, or pre-release questions,
            message BentaLab PH. We can guide you before and after installation.
          </p>
          <div className="support-actions">
            <a href={messengerUrl} target="_blank" rel="noopener noreferrer" className="support-btn">
              <MessageCircle aria-hidden="true" size={18} />
              Message BentaLab PH
            </a>
            <a href={emailUrl} className="support-email">
              <Mail aria-hidden="true" size={18} />
              {supportEmail}
            </a>
            {hasSupportPhone && <span className="support-phone">{supportPhone}</span>}
          </div>
        </div>

        <aside className="activation-card">
          <div className="activation-icon">
            <KeyRound aria-hidden="true" size={18} />
          </div>
          <h3>Activation Reminder</h3>
          <p>
            Keep your activation key safe. One activation is valid for one device unless
            additional device activation is purchased.
          </p>
        </aside>
      </section>

      <section className="final-cta">
        <div>
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Ready to organize your business with BentaBoss?</h2>
          <p className="section-desc no-margin">
            Download the installer directly from the website and start setup on your
            Windows computer.
          </p>
        </div>
        <a href={installerDownloadUrl} download className="btn-primary">
          <Download aria-hidden="true" size={17} />
          Download BentaBoss
        </a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <BentaLabLogo logo={brandLogo} />
          <p>Copyright 2026 BentaLab Business Solutions. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FacebookIcon />
            Facebook
          </a>
          <a href={emailUrl} className="footer-social">
            <Mail aria-hidden="true" size={17} />
            {supportEmail}
          </a>
        </div>
      </footer>
    </main>
  )
}

function BentaLabLogo({ logo }) {
  const versionSeparator = logo.logoUrl.includes('?') ? '&' : '?'
  const logoSrc = `${logo.logoUrl}${versionSeparator}v=${encodeURIComponent(logo.logoVersion)}`

  return <img className="bentalab-logo" src={logoSrc} alt="BentaLab logo" />
}

function FacebookIcon() {
  return (
    <svg className="facebook-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.2V6.9c0-.7.5-.9 1-.9h1.8V3.2c-.9-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v1.9H7.5v3.2h2.8V21h3.5v-8.6h2.7l.5-3.2h-3Z"
      />
    </svg>
  )
}

function Metric({ label, value, width }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-bar">
        <div className="metric-fill" style={{ width }} />
      </div>
    </div>
  )
}
