'use client'

import { useEffect, useState } from 'react'
import { getContent } from '@/lib/i18n'

export default function PrivacyPage() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  const isEn = content.navigation[0].label === 'Home'
  const title = isEn ? 'Privacy Policy' : 'Datenschutz'

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10" style={{ color: 'var(--gray-900)' }}>
          {title}
        </h1>

        <div className="space-y-8 prose prose-gray max-w-none" style={{ color: 'var(--gray-700)' }}>
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Scope' : 'Geltungsbereich'}
            </h2>
            <p className="leading-relaxed mb-4">
              {isEn
                ? 'This privacy policy is intended to inform users of this website in accordance with the Federal Data Protection Act and the Telemedia Act about the type, scope and purpose of the collection and use of personal data by the website operator'
                : 'Diese Datenschutzerklärung soll die Nutzer dieser Website gemäß Bundesdatenschutzgesetz und Telemediengesetz über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Websitebetreiber'}
            </p>
            <p className="text-center leading-relaxed my-6">
              Wilhelm Heger, Mühlenstraße 9, D-17039 Wulkenzin<br />
              <a
                href="mailto:master@gmt-heger.com"
                className="underline hover:no-underline"
                style={{ color: 'var(--primary-600)' }}
              >
                master@gmt-heger.com
              </a>
            </p>
            <p className="leading-relaxed">
              {isEn ? 'inform.' : 'informieren.'}
            </p>
            <p className="leading-relaxed">
              {isEn
                ? 'The website operator takes your privacy very seriously and treats your personal data confidentially and in accordance with statutory provisions.'
                : 'Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften.'}
            </p>
            <p className="leading-relaxed">
              {isEn
                ? 'Please note that data transmission on the Internet may generally be subject to security vulnerabilities. Comprehensive protection against access by third parties is not possible.'
                : 'Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken bedacht sein kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Fremde ist nicht realisierbar.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Access data' : 'Zugriffsdaten'}
            </h2>
            <p className="leading-relaxed mb-4">
              {isEn
                ? 'The website operator or page provider collects data about access to the site and stores it as "server log files". The following data are logged:'
                : 'Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert diese als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:'}
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>{isEn ? 'Website visited' : 'Besuchte Website'}</li>
              <li>{isEn ? 'Time of access' : 'Uhrzeit zum Zeitpunkt des Zugriffes'}</li>
              <li>{isEn ? 'Amount of data sent in bytes' : 'Menge der gesendeten Daten in Byte'}</li>
              <li>{isEn ? 'Source/referrer from which you reached the page' : 'Quelle/Verweis, von welchem Sie auf die Seite gelangten'}</li>
              <li>{isEn ? 'Browser used' : 'Verwendeter Browser'}</li>
              <li>{isEn ? 'Operating system used' : 'Verwendetes Betriebssystem'}</li>
              <li>{isEn ? 'IP address used' : 'Verwendete IP-Adresse'}</li>
            </ul>
            <p className="leading-relaxed">
              {isEn
                ? 'The data collected are used only for statistical analysis and to improve the website. However, the website operator reserves the right to subsequently check the server log files if there is concrete evidence of unlawful use.'
                : 'Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website. Der Websitebetreiber behält sich allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Handling of personal data' : 'Umgang mit personenbezogenen Daten'}
            </h2>
            <p className="leading-relaxed">
              {isEn
                ? 'The website operator collects, uses and discloses your personal data only if permitted by law or if you consent to the data collection. Personal data means any information that serves to identify you and that can be traced back to you – for example your name, your email address and telephone number.'
                : 'Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen. Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Handling of contact data' : 'Umgang mit Kontaktdaten'}
            </h2>
            <p className="leading-relaxed">
              {isEn
                ? 'If you contact the website operator using the contact options provided, your details will be stored so that they can be used to process and respond to your enquiry. These data will not be passed on to third parties without your consent.'
                : 'Nehmen Sie mit dem Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'User rights: information, correction and deletion' : 'Rechte des Nutzers: Auskunft, Berichtigung und Löschung'}
            </h2>
            <p className="leading-relaxed">
              {isEn
                ? 'As a user, you have the right to receive free information on request about what personal data has been stored about you. Provided your request does not conflict with a legal obligation to retain data (e.g. data retention), you have the right to have incorrect data corrected and to have your personal data blocked or deleted.'
                : 'Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogenen Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z.&nbsp;B. Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Berichtigung falscher Daten und auf die Sperrung oder Löschung Ihrer personenbezogenen Daten.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
