import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sections, getSection, business } from '@/lib/content';
import { photo } from '@/lib/paths';

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export default function EditorialSection({ params }: { params: { slug: string } }) {
  const section = getSection(params.slug);
  if (!section) notFound();

  const idx = sections.findIndex((s) => s.slug === section.slug);
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;
  const sectionNumber = String(idx + 2).padStart(2, '0');

  return (
    <article className="px-6 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-16">
      <header className="border-b border-[#1a3a2e]/25 pb-8 lg:pb-12 mb-10 lg:mb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5 font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70">
          <span>№ {sectionNumber}</span>
          {section.groupLabel && (
            <span className="italic font-fraunces normal-case tracking-normal text-[#c4937a]">
              — {section.groupLabel}
            </span>
          )}
        </div>
        <h1 className="font-fraunces font-light text-[clamp(52px,9vw,128px)] leading-[0.9] tracking-[-0.015em] text-[#1a3a2e]">
          {section.title}<span className="text-[#c4937a]">.</span>
        </h1>
        {section.kicker && (
          <div className="mt-5 font-fraunces italic text-[20px] sm:text-[26px] text-[#c4937a]">
            {section.kicker}
          </div>
        )}
      </header>

      {section.intro && (
        <p className="font-cormorant text-[20px] sm:text-[24px] leading-[1.5] text-[#1a1d1a]/85 max-w-3xl mb-10 lg:mb-14">
          {section.intro}
        </p>
      )}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl mb-10 lg:mb-14">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-baseline gap-4 border-b border-[#1a3a2e]/15 py-3">
              <span className="font-fraunces text-[11px] tabular-nums text-[#c4937a] pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-cormorant text-[18px] leading-[1.4] text-[#1a1d1a]/90">
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.paragraphs && section.paragraphs.length > 0 && section.slug !== 'impressum' && section.slug !== 'datenschutz' && (
        <div className="font-cormorant text-[18px] leading-[1.7] text-[#1a1d1a]/85 space-y-5 max-w-3xl mb-10 lg:mb-14">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {section.slug === 'impressum' && section.paragraphs && (
        <dl className="max-w-2xl font-cormorant text-[16px] leading-[1.6] divide-y divide-[#1a3a2e]/15">
          {section.paragraphs.map((p, i) => {
            const m = p.match(/^([^:]+):\s*(.*)$/);
            if (!m) {
              return (
                <p key={i} className="py-3 italic text-[#1a1d1a]/70">
                  {p}
                </p>
              );
            }
            return (
              <div key={i} className="py-3 grid grid-cols-3 gap-4">
                <dt className="font-fraunces text-[11px] tracking-[0.2em] uppercase text-[#1a3a2e]/70 pt-1">
                  {m[1]}
                </dt>
                <dd className="col-span-2 text-[#1a1d1a]/90">{m[2]}</dd>
              </div>
            );
          })}
        </dl>
      )}

      {section.slug === 'datenschutz' && section.paragraphs && (
        <div className="max-w-3xl font-cormorant text-[17px] leading-[1.7] text-[#1a1d1a]/85 space-y-4">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {section.photos.length > 0 && (
        <Plates section={section} />
      )}

      {section.slug === 'adresse' && <AdresseBlock />}

      <nav className="mt-16 pt-8 border-t border-[#1a3a2e]/25 flex flex-wrap items-baseline justify-between gap-4">
        {prev ? (
          <Link href={`/${prev.slug}/`} className="group font-fraunces text-[#1a3a2e]">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1a3a2e]/60 mb-1">
              ← Vorherige
            </div>
            <div className="text-[22px] font-light italic group-hover:text-[#c4937a] transition-colors">
              {prev.title}
            </div>
          </Link>
        ) : (
          <Link href="/" className="group font-fraunces text-[#1a3a2e]">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1a3a2e]/60 mb-1">
              ← Anfang
            </div>
            <div className="text-[22px] font-light italic group-hover:text-[#c4937a] transition-colors">
              Titel
            </div>
          </Link>
        )}
        {next && (
          <Link href={`/${next.slug}/`} className="group font-fraunces text-[#1a3a2e] text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1a3a2e]/60 mb-1">
              Nächste →
            </div>
            <div className="text-[22px] font-light italic group-hover:text-[#c4937a] transition-colors">
              {next.title}
            </div>
          </Link>
        )}
      </nav>
    </article>
  );
}

function Plates({ section }: { section: ReturnType<typeof getSection> & {} }) {
  const photos = section.photos;
  const single = photos.length === 1;
  return (
    <section className="mb-10 lg:mb-14">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-fraunces italic text-[20px] text-[#c4937a]">— Tafeln</h2>
        <span className="font-fraunces text-[11px] tracking-[0.25em] uppercase text-[#1a3a2e]/60">
          {photos.length === 1
            ? 'Plate I'
            : `Plates I — ${['I', 'II', 'III', 'IV', 'V', 'VI'][photos.length - 1]}`}
        </span>
      </div>
      <div className={single ? 'max-w-md' : 'grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'}>
        {photos.map((p, i) => (
          <figure key={p} className="group">
            <div className="bg-white p-2 border border-[#1a3a2e]/15 shadow-[0_2px_0_rgba(26,58,46,0.08)]">
              <div className="aspect-[4/3] bg-[#e8dcc4] flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo(p)}
                  alt={section.photoCaption ? section.photoCaption(i) : section.title}
                  className="max-w-full max-h-full pixel-img"
                />
              </div>
            </div>
            <figcaption className="mt-2 font-cormorant italic text-[14px] text-[#1a3a2e]/75 leading-snug">
              Plate {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}.{' '}
              {section.photoCaption ? section.photoCaption(i) : section.title}.
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function AdresseBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14">
      <div className="lg:col-span-5 space-y-5">
        <div>
          <div className="font-fraunces italic text-[14px] text-[#c4937a] mb-2">— Anschrift</div>
          <div className="font-fraunces font-light text-[32px] leading-tight text-[#1a3a2e]">
            {business.name}
          </div>
          <div className="font-cormorant text-[18px] mt-2 leading-relaxed">
            {business.street}<br />
            D-{business.postal} {business.city}
          </div>
        </div>
        <div>
          <div className="font-fraunces italic text-[14px] text-[#c4937a] mb-2">— Kontakt</div>
          <div className="font-fraunces text-[16px] space-y-1">
            <div>T <span className="font-cormorant text-[19px]">{business.phoneDisplay}</span></div>
            <div>F <span className="font-cormorant text-[19px]">{business.faxDisplay}</span></div>
            <div>
              E <a href={`mailto:${business.email}`} className="font-cormorant text-[17px] underline decoration-[#c4937a] underline-offset-4">
                {business.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="bg-white p-2 border border-[#1a3a2e]/15 shadow-[0_2px_0_rgba(26,58,46,0.08)]">
          <iframe
            title="Karte zu Blumen Gröhbühl"
            src="https://maps.google.com/maps?q=Blumen+Gr%C3%B6hb%C3%BChl%2C+Weingartener+Stra%C3%9Fe+27%2C+76646+Bruchsal&output=embed"
            className="w-full aspect-[5/4] block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-2 font-cormorant italic text-[13px] text-[#1a3a2e]/70">
          <a
            href="https://maps.app.goo.gl/jnsBKqTRD29CBzGw6"
            target="_blank"
            rel="noopener"
            className="underline decoration-[#c4937a]/60 underline-offset-4"
          >
            In Google Maps öffnen →
          </a>
        </div>
      </div>
    </div>
  );
}
