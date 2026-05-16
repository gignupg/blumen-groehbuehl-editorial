import Link from 'next/link';
import { business, homePhotos, sections, credentials, gastronomieClients, aktionstage } from '@/lib/content';
import { photo } from '@/lib/paths';

export default function EditorialHome() {
  const featureSections = sections.filter((s) => s.group === 'angebot');
  return (
    <div className="px-6 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-16">
      <section className="border-b border-[#1a3a2e]/30 pb-10 lg:pb-14">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70 font-fraunces">
          <span>№ 01 · Edition Mai 2026</span>
          <span>Volume 42 · Familienflorist</span>
          <span className="italic font-fraunces normal-case tracking-normal text-[#c4937a]">
            seit 1984
          </span>
        </div>
        <h1 className="font-fraunces font-light text-[clamp(60px,11vw,180px)] leading-[0.86] tracking-[-0.02em] text-[#1a3a2e]">
          Blumen<br />
          <em className="italic font-fraunces">Gröhbühl</em>
          <span className="text-[#c4937a]">.</span>
        </h1>
        <div className="mt-6 grid grid-cols-12 gap-6 items-baseline">
          <p className="col-span-12 md:col-span-7 font-cormorant text-[20px] sm:text-[24px] leading-[1.45] text-[#1a1d1a]/85 italic">
            Ein inhabergeführter Familienbetrieb in Bruchsal-Untergrombach,
            preisgekrönt auf der Internationalen Gartenschau Rostock, seit
            zweiundvierzig Jahren Lieferant für die gehobene Gastronomie der
            Region — und immer noch derselbe Laden an der Weingartener Straße.
          </p>
          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-[#1a3a2e]/20 font-fraunces text-[12px] tracking-[0.2em] uppercase text-[#1a3a2e]/70 space-y-1">
            <div>Inhaber · Wolfgang Gröhbühl</div>
            <div>Anschrift · {business.street}</div>
            <div>{business.postal} · {business.city}</div>
            <div className="pt-2 normal-case tracking-normal italic font-cormorant text-[14px] text-[#c4937a]">
              T {business.phoneDisplay}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-fraunces italic text-[#c4937a] text-[20px]">— Der Laden</h2>
          <span className="font-fraunces text-[11px] tracking-[0.25em] uppercase text-[#1a3a2e]/60">
            Tafel I
          </span>
        </div>
        <figure className="mx-auto max-w-[683px]">
          <div className="bg-white p-2 border border-[#1a3a2e]/15 shadow-[0_2px_0_rgba(26,58,46,0.08)]">
            <div className="grid grid-cols-[351fr_316fr] gap-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo('home_01.gif')} alt="Schaufenster oben links" className="w-full h-auto block pixel-img" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo('home_02.gif')} alt="Schaufenster oben rechts" className="w-full h-auto block pixel-img" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo('home_03.gif')} alt="Schaufenster unten links" className="w-full h-auto block pixel-img" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo('home_04_neu.gif')} alt="Schaufenster unten rechts" className="w-full h-auto block pixel-img" />
            </div>
          </div>
          <figcaption className="mt-3 font-cormorant italic text-[13px] text-[#1a3a2e]/70 leading-snug text-center">
            Tafel I. Schaufenster an der Weingartener Straße, Untergrombach.
          </figcaption>
        </figure>
      </section>

      <section className="py-10 lg:py-16 grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70 mb-4">
            № 02 — Editor's Note
          </div>
          <p className="font-cormorant text-[19px] sm:text-[22px] leading-[1.55] text-[#1a1d1a]/90">
            <span className="float-left font-fraunces font-light text-[88px] leading-[0.85] mr-3 mt-1 text-[#1a3a2e]">
              W
            </span>
            ir sind ein kleiner Laden in einer kleinen Stadt. Aber wir bauen seit
            1984 jeden Strauß so, als säße er später auf dem Tisch eines
            Restaurants, das Wert auf Details legt. <em>Tut er meistens auch</em>.
            Wir schneiden regional und saisonal, weil das die Blumen besser
            aussehen lässt — und weil es uns ehrlicher fühlt. Im Winter holen wir
            Flower-Label-Ware aus dem Ausland. Bei besonderen Wünschen bitten wir
            um zwei, drei Tage Vorlauf — gute Floristik braucht etwas Geduld.
          </p>
          <div className="mt-5 font-fraunces italic text-[14px] text-[#c4937a]">
            — Wolfgang Gröhbühl
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-[#1a3a2e]/20">
          <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70 mb-4">
            № 03 — Auszeichnungen
          </div>
          <ul className="divide-y divide-[#1a3a2e]/15">
            {credentials.map((c) => (
              <li key={c.label} className="py-3 flex items-baseline justify-between gap-4">
                <span className="font-fraunces text-[20px] text-[#1a3a2e]">{c.label}</span>
                <span className="font-cormorant italic text-[15px] text-[#1a1d1a]/70 text-right">
                  {c.detail}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="py-12 lg:py-20 border-y border-[#1a3a2e]/30 my-4 lg:my-8 relative">
        <div className="absolute -top-3 left-0 font-fraunces text-[10px] tracking-[0.3em] uppercase text-[#c4937a] bg-[#f5efe1] pr-4">
          № 04 — Notiz
        </div>
        <blockquote className="font-fraunces font-light italic text-[clamp(28px,5vw,52px)] leading-[1.15] max-w-4xl text-[#1a3a2e]">
          „Blumen spenden Trost, Blumen spenden Freude — und manchmal sind sie
          einfach nur ein guter Mittwoch."
        </blockquote>
      </section>

      <section className="py-10 lg:py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-fraunces font-light text-[36px] sm:text-[44px] text-[#1a3a2e]">
            Inhaltsverzeichnis<span className="text-[#c4937a]">.</span>
          </h2>
          <span className="font-fraunces italic text-[14px] text-[#c4937a]">— Unser Angebot</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {featureSections.map((s, i) => {
            const cover = s.photos[0];
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="group block"
              >
                <div className="aspect-[4/3] bg-[#e8dcc4] overflow-hidden flex items-center justify-center mb-3 border border-[#1a3a2e]/10">
                  {cover ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={photo(cover)}
                      alt=""
                      className="max-w-full max-h-full pixel-img transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span className="font-fraunces italic text-[28px] text-[#1a3a2e]/40">
                      {s.title}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-fraunces text-[11px] tracking-[0.2em] text-[#1a3a2e]/50 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-fraunces font-light text-[28px] text-[#1a3a2e] group-hover:text-[#c4937a] transition-colors">
                    {s.title}
                  </h3>
                </div>
                {s.kicker && (
                  <div className="font-cormorant italic text-[14px] text-[#1a1d1a]/60 mt-1 pl-8">
                    {s.kicker}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-[#1a3a2e] text-[#f5efe1] -mx-6 sm:-mx-10 lg:-mx-14 xl:-mx-20 px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#c4937a] mb-3">
              № 05 — Stammkunden
            </div>
            <h2 className="font-fraunces font-light text-[40px] lg:text-[52px] leading-[1] text-[#f5efe1]">
              Lieferant für<br />die Häuser der<br /><em className="italic">Region</em>.
            </h2>
          </div>
          <ul className="col-span-12 lg:col-span-8 divide-y divide-[#f5efe1]/20 lg:pl-8">
            {gastronomieClients.map((c) => (
              <li key={c.name} className="py-4 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-fraunces text-[24px] lg:text-[28px] leading-tight">
                    {c.name}
                  </div>
                  <div className="font-cormorant italic text-[14px] text-[#f5efe1]/65">
                    {c.kind}
                  </div>
                </div>
                <div className="font-fraunces text-[12px] tracking-[0.25em] uppercase text-[#c4937a]">
                  {c.place}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70 mb-3">
          № 06 — Aktionstage im Jahr
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {aktionstage.map((a) => (
            <div key={a.name} className="border-t border-[#1a3a2e]/30 pt-5">
              <div className="font-cormorant italic text-[14px] text-[#c4937a]">{a.when}</div>
              <div className="font-fraunces font-light text-[34px] text-[#1a3a2e] mt-1 leading-tight">
                {a.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 border-t border-[#1a3a2e]/30 flex flex-wrap items-baseline justify-between gap-4">
        <div className="font-fraunces italic text-[18px] text-[#1a3a2e]">
          — Fortsetzung folgt auf den nächsten Seiten.
        </div>
        <Link
          href="/wir-ueber-uns/"
          className="font-fraunces text-[12px] tracking-[0.25em] uppercase text-[#1a3a2e] border-b border-[#c4937a] pb-1 hover:text-[#c4937a] transition-colors"
        >
          Wir über uns →
        </Link>
      </section>
    </div>
  );
}
