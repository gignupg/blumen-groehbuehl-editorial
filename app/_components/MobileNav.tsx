'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  slug: string;
  title: string;
  group: 'none' | 'angebot' | 'kontakt';
  index: number;
}

export default function EditorialMobileNav({
  navItems,
  groups,
}: {
  navItems: NavItem[];
  groups: Array<{ key: 'none' | 'angebot' | 'kontakt'; label?: string }>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden sticky top-0 z-40">
      <div className="bg-[#f5efe1]/95 backdrop-blur-sm border-b border-[#1a3a2e]/15 px-5 py-4 flex items-center justify-between">
        <Link href="/" className="font-fraunces text-[#1a3a2e]" onClick={() => setOpen(false)}>
          <span className="text-[10px] tracking-[0.3em] uppercase block leading-none">Blumen</span>
          <span className="text-[26px] leading-none font-light">Gröh<em className="italic">bühl</em></span>
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
          className="font-fraunces text-[11px] tracking-[0.25em] uppercase text-[#1a3a2e] border border-[#1a3a2e]/30 px-3 py-2"
        >
          {open ? 'Schließen' : 'Inhalt'}
        </button>
      </div>
      {open && (
        <div className="bg-[#f5efe1] border-b border-[#1a3a2e]/20 px-5 py-6 max-h-[80vh] overflow-y-auto">
          {groups.map((g) => {
            const items = navItems.filter((n) => n.group === g.key);
            if (items.length === 0) return null;
            return (
              <div key={g.key} className="mb-5">
                {g.label && (
                  <div className="font-fraunces italic text-[12px] text-[#c4937a] mb-2 tracking-wide">
                    — {g.label}
                  </div>
                )}
                <ul className="space-y-1">
                  {items.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/${n.slug}/`}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-3 py-1.5 text-[#1a3a2e]"
                      >
                        <span className="font-fraunces text-[10px] tracking-[0.15em] text-[#1a3a2e]/40 tabular-nums">
                          {String(n.index).padStart(2, '0')}
                        </span>
                        <span className="font-cormorant text-[19px]">{n.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
