'use client'

import { useEffect, useState } from 'react'
import { getContent } from '@/lib/i18n'

export default function ImprintPage() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  const isEn = content.navigation[0].label === 'Home'
  const title = isEn ? 'Imprint' : 'Impressum'

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10" style={{ color: 'var(--gray-900)' }}>
          {title}
        </h1>

        <div className="space-y-8 prose prose-gray max-w-none" style={{ color: 'var(--gray-700)' }}>
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Company' : 'Impressum'}
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p>
                GeoMessTechnik Heger<br />
                Mühlenstraße 9<br />
                17039 Wulkenzin<br />
                Deutschland
              </p>
              <p>
                Dr.-Ing. Wilhelm Heger<br />
                UID: DE 124114007
              </p>
              <p>
                {isEn ? 'Phone' : 'Telefon'}: +49 395 582 668 0<br />
                {isEn ? 'Fax' : 'Telefax'}: +49 395 570 638 57<br />
                E-Mail:{' '}
                <a
                  href="mailto:master@gmt-heger.com"
                  className="underline hover:no-underline"
                  style={{ color: 'var(--primary-600)' }}
                >
                  master@gmt-heger.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
              {isEn ? 'Disclaimer' : 'Haftungsausschluss'}
            </h2>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '1. Liability for own information' : '1. Haftung für eigene Information'}
            </h3>
            <p className="leading-relaxed">
              GeoMessTechnik Heger stellt vorliegende Homepage unentgeltlich zur Verfügung. GeoMessTechnik Heger übernimmt keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Die Haftung von GeoMessTechnik Heger für Schäden jeglicher Art, die durch die Nutzung oder Nicht-Nutzung der dargebotenen Informationen oder durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, ist grundsätzlich ausgeschlossen, sofern GeoMessTechnik Heger, ihre leitenden Angestellten und ihre Erfüllungsgehilfen nicht vorsätzlich oder grob fahrlässig gehandelt haben.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '2. Liability for third-party information' : '2. Haftung für fremde Informationen'}
            </h3>
            <p className="leading-relaxed">
              GeoMessTechnik Heger haftet nicht für fremde rechtswidrige Informationen, die auf der oder über die Homepage der GeoMessTechnik Heger abrufbar sind, solange GeoMessTechnik Heger von diesen fremden Informationen keine Kenntnis hat. Erlangt GeoMessTechnik Heger Kenntnis, ist GeoMessTechnik Heger nur verpflichtet, solche fremden rechtswidrigen Inhalte von der eigenen Homepage zu entfernen, weitere Ansprüche gegen GeoMessTechnik Heger bestehen nicht. Direkte oder indirekte Verweise auf fremde Internetseiten („Links“) stellen fremde Informationen dar. Da GeoMessTechnik Heger keinen Einfluss auf die aktuelle und zukünftige Gestaltung von verlinkten fremden Internetseiten hat, distanziert sich GeoMessTechnik Heger ausdrücklich von allen Inhalten aller verlinkten fremden Internetseiten sowie von Fremdeinträgen in von GeoMessTechnik Heger eventuell eingerichteten Gästebüchern, Diskussionsforen oder Mailinglisten. GeoMessTechnik Heger distanziert sich vor allem von Inhalten auf verlinkten fremden Internetseiten, die nach der Linksetzung verändert wurden. Für fremde Informationen und Inhalte und insbesondere für Schäden, die sich aus der Nutzung oder Nichtnutzung solcher Art dargebotener Informationen und Inhalte ergeben, haftet allein der Anbieter der jeweiligen fremden Internetseite, von welcher diese Inhalte angeboten werden.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '3. Non-binding product description' : '3. Unverbindliche Produktbeschreibung'}
            </h3>
            <p className="leading-relaxed">
              GeoMessTechnik Heger stellt hochkomplexe technische Produkte her. Angaben innerhalb dieser Homepage erfolgen lediglich zu einer ersten kursorischen Beschreibung der Produkte der GeoMessTechnik Heger und treten hinter vertraglichen Vereinbarungen zurück. GeoMessTechnik Heger empfiehlt eine Beratung durch das Personal der GeoMessTechnik Heger.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '4. Reservation to modify or discontinue the website' : '4. Vorbehalt der Einstellung und Änderung der Homepage'}
            </h3>
            <p className="leading-relaxed">
              Alle Angebote auf der GeoMessTechnik Heger Homepage sind freibleibend und unverbindlich. GeoMessTechnik Heger behält es sich ausdrücklich vor, Teile der Homepage oder die gesamte Homepage ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '5. Access and use at own risk' : '5. Zugang und Nutzung auf eigene Gefahr'}
            </h3>
            <p className="leading-relaxed">
              Zugang zur/und Nutzung der Homepage erfolgen auf Gefahr des Nutzers. GeoMessTechnik Heger empfiehlt dem Nutzer, sich im Internet gegen Schäden durch die Benutzung von Firewalls, Virenschutzprogrammen und Ähnlichem zu schützen.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '6. Copyright of GeoMessTechnik Heger' : '6. Urheberrecht der GeoMessTechnik Heger'}
            </h3>
            <p className="leading-relaxed">
              Die Homepage von GeoMessTechnik Heger ist urheberrechtlich geschützt. Eine Nutzung d.&nbsp;h. z.&nbsp;B. Vervielfältigung oder Verwendung von Texten, Bildern, Skizzen, Zeichnungen, Grafiken, Tondokumenten, Videosequenzen und sonstigen Bestandteilen der Homepage ist ohne ausdrückliche, vorherige, schriftliche Einwilligung durch GeoMessTechnik Heger nicht gestattet. Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--gray-900)' }}>
              {isEn ? '7. Choice of law, place of jurisdiction' : '7. Rechtswahl, Gerichtsstand'}
            </h3>
            <p className="leading-relaxed">
              Für sämtliche Ansprüche, die im Zusammenhang mit dieser Homepage erhoben werden, gelten die Gesetze der Bundesrepublik Deutschland, wobei die Regelungen des internationalen Privatrechts angenommen werden. Ausschließlicher Gerichtsstand ist der Sitz der GeoMessTechnik Heger in Neubrandenburg. Diese Gerichtsstandsvereinbarung gilt nur gegenüber Vollkaufleuten und ausländischen Vertragspartnern sowie gegenüber juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögens.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
