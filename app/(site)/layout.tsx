import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SiteMain from '@/components/SiteMain'

const GA_ID = 'G-GK2C4Y14B5'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Navigation />
      <SiteMain>{children}</SiteMain>
      <Footer />
    </>
  )
}
