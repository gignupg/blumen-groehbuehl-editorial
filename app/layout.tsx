import type { Metadata } from 'next';
import Link from 'next/link';
import { Fraunces, Cormorant_Garamond } from 'next/font/google';
import { business, sections } from '@/lib/content';
import EditorialMobileNav from './_components/MobileNav';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blumen Gröhbühl — Familienflorist seit 1984',
  description:
    'Blumen Wolfgang Gröhbühl in Bruchsal-Untergrombach. Familienbetrieb seit 1984, regional verwurzelt, Lieferant für die gehobene Gastronomie.',
};

const groupOrder: Array<{ key: 'none' | 'angebot' | 'kontakt'; label?: string }> = [
  { key: 'none' },
  { key: 'angebot', label: 'Unser Angebot' },
  { key: 'kontakt', label: 'Kontakt' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = sections.map((s, i) => ({
    slug: s.slug,
    title: s.title,
    group: (s.group ?? 'none') as 'none' | 'angebot' | 'kontakt',
    index: i + 2,
  }));

  return (
    <html lang="de" className={`${fraunces.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-[#f5efe1] text-[#1a1d1a] font-cormorant grain">
          <EditorialMobileNav navItems={navItems} groups={groupOrder} />

          <div className="hidden lg:flex min-h-screen">
            <aside className="w-[300px] xl:w-[340px] shrink-0 border-r border-[#1a3a2e]/15 px-8 xl:px-10 py-10 sticky top-0 self-start h-screen overflow-y-auto">
              <Link href="/" className="block group">
                <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#1a3a2e]/70">
                  Blumen
                </div>
                <div className="font-fraunces font-light text-[42px] leading-[0.95] text-[#1a3a2e] -tracking-[0.01em]">
                  Gröh<em className="italic">bühl</em>
                </div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-[#1a3a2e]/60">
                  Ihr preiswerter Florist
                </div>
              </Link>

              <nav className="mt-10 space-y-7">
                {groupOrder.map((g) => {
                  const items = navItems.filter((n) => n.group === g.key);
                  if (items.length === 0) return null;
                  return (
                    <div key={g.key}>
                      {g.label && (
                        <div className="font-fraunces italic text-[12px] text-[#c4937a] mb-3 tracking-wide">
                          — {g.label}
                        </div>
                      )}
                      <ul className="space-y-1.5">
                        {items.map((n) => (
                          <li key={n.slug}>
                            <Link
                              href={`/${n.slug}/`}
                              className="group flex items-baseline gap-3 py-1 text-[#1a3a2e] hover:text-[#c4937a] transition-colors"
                            >
                              <span className="font-fraunces text-[10px] tracking-[0.15em] text-[#1a3a2e]/40 tabular-nums pt-1">
                                {String(n.index).padStart(2, '0')}
                              </span>
                              <span className="font-cormorant text-[18px] leading-tight">
                                {n.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </nav>

              <div className="mt-10 pt-6 border-t border-[#1a3a2e]/15 text-[12px] font-cormorant italic text-[#1a3a2e]/70 leading-relaxed">
                <div>{business.street}</div>
                <div>{business.postal} {business.city}</div>
                <div className="mt-2 not-italic font-fraunces text-[11px] tracking-[0.15em]">
                  T {business.phoneDisplay}
                </div>
              </div>
            </aside>

            <main className="flex-1 min-w-0">{children}</main>
          </div>

          <div className="lg:hidden">
            <main>{children}</main>
          </div>

          <footer className="hidden lg:block bg-[#1a3a2e] text-[#f5efe1]/90 font-cormorant">
            <div className="max-w-[1100px] mx-auto px-10 py-14 grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <div className="font-fraunces text-[11px] tracking-[0.3em] uppercase text-[#c4937a]">
                  Blumen
                </div>
                <div className="font-fraunces font-light text-[38px] leading-tight">
                  Gröh<em className="italic">bühl</em>
                </div>
                <p className="mt-3 italic text-[15px] text-[#f5efe1]/70 max-w-sm leading-relaxed">
                  Ein Familienbetrieb mit Wurzeln in Untergrombach, seit 1984. Wir
                  schneiden Blumen für die Tische der besten Häuser der Region.
                </p>
              </div>
              <div className="col-span-3">
                <div className="font-fraunces italic text-[13px] text-[#c4937a] mb-3">— Adresse</div>
                <div className="text-[14px] leading-relaxed not-italic font-fraunces">
                  {business.street}<br />
                  {business.postal} {business.city}
                </div>
              </div>
              <div className="col-span-4">
                <div className="font-fraunces italic text-[13px] text-[#c4937a] mb-3">— Kontakt</div>
                <div className="text-[14px] leading-relaxed font-fraunces">
                  T {business.phoneDisplay}<br />
                  F {business.faxDisplay}<br />
                  <a href={`mailto:${business.email}`} className="underline decoration-[#c4937a]/50 underline-offset-4">
                    {business.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#f5efe1]/15">
              <div className="max-w-[1100px] mx-auto px-10 py-5 flex justify-between items-center text-[11px] tracking-[0.2em] uppercase text-[#f5efe1]/60">
                <span>© {new Date().getFullYear()} {business.name}</span>
                <span className="italic font-fraunces normal-case tracking-normal">{business.membership}</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
