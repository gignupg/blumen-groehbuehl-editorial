export const business = {
  name: 'Blumen Wolfgang Gröhbühl',
  shortName: 'Blumen Gröhbühl',
  tagline: 'Ihr preiswerter Florist',
  founder: 'Wolfgang Gröhbühl',
  foundedYear: 1984,
  street: 'Weingartener Straße 27',
  postal: '76646',
  city: 'Bruchsal-Untergrombach',
  region: 'Baden-Württemberg',
  phone: '+49 7257 930063',
  phoneDisplay: '07257 / 930 063',
  fax: '+49 7257 930064',
  faxDisplay: '07257 / 930 064',
  email: 'wolfgang_groehbuehl@web.de',
  vatId: 'DE 143 117 397',
  membership: 'Fachverband Deutscher Floristen E.V.',
};

export type SectionSlug =
  | 'wir-ueber-uns'
  | 'ladenraeume'
  | 'keramik'
  | 'indoor-outdoor'
  | 'raumbegruenung'
  | 'trauerschmuck'
  | 'hochzeit'
  | 'schnittblumen'
  | 'tischdekoration'
  | 'raumdekoration'
  | 'adresse'
  | 'datenschutz'
  | 'impressum';

export type SectionGroup = 'angebot' | 'kontakt' | null;

export interface Section {
  slug: SectionSlug;
  title: string;
  group: SectionGroup;
  groupLabel?: string;
  kicker?: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
  photos: string[];
  photoCaption?: (i: number) => string;
}

export const sections: Section[] = [
  {
    slug: 'wir-ueber-uns',
    title: 'Wir über uns',
    group: null,
    kicker: 'Familienbetrieb seit 1984',
    intro:
      'Ein inhabergeführter Familienbetrieb in Bruchsal-Untergrombach — preisgekrönt, regional verwurzelt und seit über vier Jahrzehnten Lieferant für die gehobene Gastronomie der Region.',
    bullets: [
      'Familienbetrieb seit 1984.',
      'Mitglied im Fachverband der Floristen.',
      'Regelmäßige Messe-Teilnahme auf der Inventa Karlsruhe.',
      'Regelmäßige Messe-Teilnahme auf den Hochzeitstagen Karlsruhe.',
      'Mitgestaltung der Hallenschauen auf der Internationalen Gartenschau in Rostock — Silber- und Bronzemedaille sowie Ehrenpreis der Stadt Rostock.',
      'Mitwirkung bei drei Hallenschauen auf der Landesgartenschau in Kehl 2004.',
      'Lieferant von Blumen und Dekors für die gehobene Gastronomie der Region.',
      'Wir veranstalten unsere eigenen Aktionstage: Ostertage, Terracotta-Wochen, Adventsausstellung.',
      'Regelmäßige Fortbildungen über neue Arbeitstechniken, Deko-Ideen und internationale Floristik-Trends.',
    ],
    photos: [],
  },
  {
    slug: 'ladenraeume',
    title: 'Ladenräume',
    group: 'angebot',
    groupLabel: 'Unser Angebot',
    kicker: 'Komm vorbei',
    intro:
      'Ein Laden, der riecht wie ein Garten nach dem Regen. Drei Räume, immer neu inszeniert, jede Jahreszeit ein anderes Bild.',
    photos: ['ladenraeume_01.jpg', 'ladenraeume_02.jpg', 'ladenraeume_03.jpg'],
    photoCaption: (i) => ['Eingangsbereich', 'Verkaufsraum', 'Dekoration im Wandel'][i] || '',
  },
  {
    slug: 'keramik',
    title: 'Keramik',
    group: 'angebot',
    intro: 'Gefäße als eigenständige Objekte — nicht bloß Beiwerk zum Strauß.',
    bullets: [
      'Keramik in trendigem Design und modischen Farben.',
      'Glasklar und schlicht oder matt veredelt.',
      'Edle Terracotta für drinnen und draußen.',
    ],
    photos: ['keramik_01.jpg', 'keramik_02.jpg', 'keramik_03.jpg', 'keramik_04.jpg'],
    photoCaption: (i) => `Keramik No. ${String(i + 1).padStart(2, '0')}`,
  },
  {
    slug: 'indoor-outdoor',
    title: 'Indoor — Outdoor',
    group: 'angebot',
    intro:
      'Vom Windlicht bis zum Rosenbogen. Was den Raum schmückt — oder den Garten.',
    bullets: [
      'Tisch- und Duftkerzen',
      'Leuchter',
      'Servietten',
      'Windlichter',
      'Gartenfackeln',
      'Rosenbögen aus Metall',
      'Gefäße aus Metall',
      'Rankgerüste aus Metall',
      'Kleinmöbel aus Eisen',
      'Zeitgemäße Trockenfloristik',
      'Hochwertige Tischsets',
      'Tischläufer und Kissen',
    ],
    photos: [],
  },
  {
    slug: 'raumbegruenung',
    title: 'Raumbegrünung',
    group: 'angebot',
    intro:
      'Wir liefern nicht nur individuell zusammengestellte Hydrokulturen für Ihre Geschäfts- oder Privaträume — wir pflegen sie auch auf Anfrage oder nach vertraglicher Vereinbarung.',
    photos: [
      'raumbegruenung_01.jpg',
      'raumbegruenung_02.jpg',
      'raumbegruenung_03.jpg',
      'raumbegruenung_04.jpg',
    ],
    photoCaption: (i) =>
      ['Hydrokultur im Empfang', 'Pflanzeninsel', 'Begrünung im Büro', 'Pflege vor Ort'][i] || '',
  },
  {
    slug: 'trauerschmuck',
    title: 'Trauerschmuck',
    group: 'angebot',
    kicker: 'Blumen spenden Trost',
    intro: 'Individuell gestaltet — mit Ruhe, mit Sorgfalt, mit Respekt.',
    bullets: [
      'Sarg- und Urnenschmuck',
      'Leichenhallendekoration',
      'Trauerspenden',
      'Gestecke zu den Gedenktagen',
    ],
    photos: [
      'trauerschmuck_01.jpg',
      'trauerschmuck_03.jpg',
      'trauerschmuck_05.jpg',
      'trauerschmuck_06.jpg',
    ],
    photoCaption: () => 'Trauerfloristik',
  },
  {
    slug: 'hochzeit',
    title: 'Hochzeit',
    group: 'angebot',
    kicker: 'Für den schönsten Tag im Leben',
    intro:
      'Brautstrauß. Anstecker. Kirchenschmuck. Autoschmuck. Tischblumen. Und alles, was wir gemeinsam noch erfinden.',
    paragraphs: [
      'Für den schönsten Tag im Leben brauchen Sie nicht nur einen Brautstrauß. Wir sorgen für die florale Ausstattung des Bräutigams, der Trauzeugen, Brautväter und Blumenkinder, angemessenen Kirchenschmuck, die blumige Dekoration Ihres Fahrzeuges, ästhetisch gestaltete Tischblumen — und für alles, was wir Ihnen sonst noch von den Augen ablesen.',
    ],
    photos: ['hochzeit_01.jpg', 'hochzeit_02.jpg', 'hochzeit_03.jpg'],
    photoCaption: (i) => ['Brautstrauß', 'Kirchenfloristik', 'Tischschmuck'][i] || '',
  },
  {
    slug: 'schnittblumen',
    title: 'Schnittblumen',
    group: 'angebot',
    kicker: 'Regional, saisonal, Flower-Label',
    intro:
      'Wir verwenden bevorzugt regionale Blumen der Saison. Im Winter verarbeiten wir qualitativ hochwertige Ware aus dem Ausland mit dem Flower-Label. Bei ausgefallenen Wünschen empfehlen wir eine Vorbestellung von 2–3 Tagen.',
    photos: ['schnittblumen_01.jpg'],
    photoCaption: () => 'Frische Schnittblumen',
  },
  {
    slug: 'tischdekoration',
    title: 'Tischdekoration',
    group: 'angebot',
    intro:
      'Vom intimen Abendessen bis zum großen Empfang — Tische, an denen man gerne sitzt.',
    photos: ['tischdeko_02.jpg', 'tischdeko_03.jpg', 'tischdeko_04.jpg', 'tischdeko_05.jpg'],
    photoCaption: (i) => `Tischdekoration No. ${String(i + 1).padStart(2, '0')}`,
  },
  {
    slug: 'raumdekoration',
    title: 'Raumdekoration',
    group: 'angebot',
    intro: 'Für Geschäftsräume, Veranstaltungen und private Anlässe.',
    photos: ['raumdeko_01.jpg', 'raumdeko_02.jpg', 'raumdeko_03.jpg', 'raumdeko_04.jpg'],
    photoCaption: (i) => `Raumdekoration No. ${String(i + 1).padStart(2, '0')}`,
  },
  {
    slug: 'adresse',
    title: 'Adresse',
    group: 'kontakt',
    groupLabel: 'Kontakt',
    intro: 'Sie finden uns mitten in Untergrombach, an der Weingartener Straße.',
    photos: [],
  },
  {
    slug: 'datenschutz',
    title: 'Datenschutz',
    group: 'kontakt',
    paragraphs: [
      'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).',
      'Verantwortlich für die Datenverarbeitung ist Wolfgang Gröhbühl, Weingartener Straße 27, 76646 Bruchsal-Untergrombach.',
      'Beim Besuch unserer Website wird Ihre IP-Adresse, Beginn und Ende der Sitzung erfasst. Diese Daten werden ausschließlich für statistische Zwecke verarbeitet.',
      'Wenn Sie per Formular oder E-Mail Kontakt mit uns aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert.',
      'Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Sie können sich jederzeit an die zuständige Aufsichtsbehörde wenden.',
    ],
    photos: [],
  },
  {
    slug: 'impressum',
    title: 'Impressum',
    group: 'kontakt',
    paragraphs: [
      'Firmenname: Blumen Wolfgang Gröhbühl',
      'Anschrift: Weingartener Straße 27, 76646 Bruchsal-Untergrombach',
      'Telefon: +49 (0) 7257 / 930 063',
      'Telefax: +49 (0) 7257 / 930 064',
      'E-Mail: wolfgang_groehbuehl@web.de',
      'Geschäftsführer: Wolfgang Gröhbühl',
      'USt-ID: DE 143 117 397',
      'Inhaltlich verantwortlich gem. § 6 MDStV: Wolfgang Gröhbühl',
      'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
    ],
    photos: [],
  },
];

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function getNavSections(): Section[] {
  return sections;
}

export const homePhotos = ['home_01.gif', 'home_02.gif', 'home_03.gif', 'home_04_neu.gif'];

export const credentials = [
  { label: 'Silbermedaille', detail: 'IGS Rostock' },
  { label: 'Bronzemedaille', detail: 'IGS Rostock' },
  { label: 'Ehrenpreis', detail: 'der Stadt Rostock' },
  { label: 'Landesgartenschau', detail: 'Kehl 2004' },
];

export const gastronomieClients = [
  { name: "Walk'sches Haus", place: 'Weingarten', kind: 'Restaurant & Romantikhotel' },
  { name: 'Ristorante Cala Gonone', place: 'Weingarten', kind: 'Ristorante' },
  { name: 'Hotel Ritter', place: 'Bruchsal', kind: 'Hotel & Restaurant' },
  { name: 'Hotel Scheffelhöhe', place: 'Bruchsal', kind: 'Hotel' },
  { name: 'Schloss Eberstein', place: 'Gernsbach', kind: 'Hotel & Restaurant' },
];

export const aktionstage = [
  { name: 'Ostertage', when: 'Frühjahr' },
  { name: 'Terracotta-Wochen', when: 'Sommer' },
  { name: 'Adventsausstellung', when: 'Winter' },
];
