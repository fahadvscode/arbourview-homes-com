/**
 * Single source of truth for arbourviewhomes.com — primary information hub.
 * Every page, metadata block, and JSON-LD block reads from this file.
 *
 * HOW TO BUMP FRESHNESS DATES: When Mattamy Homes releases new Arbourview details, update LAST_UPDATED and LAST_UPDATED_ISO here. Sitemap lastmod, footer, FAQ, JSON-LD dateModified, and disclaimer copy all derive from these two constants.
 */

export const SITE_URL = "https://arbourviewhomes.com";
export const SITE_NAME = "arbourviewhomes.com";
export const SITE_ORG_NAME = "arbourviewhomes.com";
export const PROJECT_NAME = "Arbourview";
export const PROJECT_NAME_FULL = "Arbourview by Mattamy Homes";
export const WORDMARK = "Arbourview";
export const BUILDER = "Mattamy Homes";
export const CITY = "Georgetown";
export const MUNICIPALITY = "Halton Hills";
export const STREET_ADDRESS = "10114 Eighth Line";
export const POSTAL_CODE = "L7G 4S5";
export const ADDRESS_LOCALITY = "Halton Hills";
export const ADDRESS_REGION = "ON";
export const ADDRESS_COUNTRY = "CA";
export const SITE_ADDRESS = "10114 Eighth Line, Halton Hills, ON L7G 4S5";
export const LAST_UPDATED = "September 1, 2026";
export const LAST_UPDATED_ISO = "2026-09-01";
export const STATUS = "Coming Soon — Registration Open";
export const STATUS_BADGE = "Coming Soon — Registration Open";
export const TAGLINE = "Where Your Kids Will Know the Farmers by Name";
export const SITE_SOURCE = "https://arbourviewhomes.com";
export const PLACE_NAME = "Arbourview Sales Information";

export const GEO = {
  // Verified from Mattamy Homes' official Arbourview "Directions" link.
  latitude: 43.6200855,
  longitude: -79.8893979,
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=10114%20Eighth%20Line%2C%20Halton%20Hills%2C%20ON%20L7G%204S5&z=14&output=embed";

export const HERO_EYEBROW = "PRE-CONSTRUCTION · GEORGETOWN, ONTARIO · INFORMATION HUB";
export const HERO_SUBHEAD =
  "Townhomes and detached homes by Mattamy Homes at 10114 Eighth Line, Georgetown — Coming Soon, with registration open for community updates.";
export const CTA_LABEL = "Register for Arbourview Updates";
export const CTA_NAV_LABEL = "VIP Registration";
export const FORM_HEADING = "VIP Registration";
export const FORM_LEDE =
  "Free registration. Buyers who sign up are notified first when Arbourview floor plans and pricing are released. No purchase obligation.";
export const FOOTER_BLURB =
  "Independent information and registration hub for Arbourview by Mattamy Homes in Georgetown, Halton Hills. Not the builder's official site.";

export const HERO_IMAGE = {
  src: "/images/arbourview-hero.webp",
  alt: "Arbourview Georgetown information hub — neighbourhood context near Eighth Line and downtown Georgetown",
  caption:
    "Neighbourhood context for Arbourview Georgetown. Official architectural renderings have not been released by Mattamy Homes as of September 1, 2026.",
  width: 1536,
  height: 1024,
};

export const GALLERY_IMAGES = [
  {
    src: "/images/arbourview-hero.webp",
    alt: "Arbourview Georgetown community context near Eighth Line in Halton Hills",
    caption:
      "Neighbourhood-context photography for Arbourview Georgetown. This is not an official Mattamy Homes rendering of the community.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/georgetown-main-street.webp",
    alt: "Arbourview location context — historic Georgetown Main Street near Mattamy Homes' Eighth Line site",
    caption:
      "Historic downtown Georgetown Main Street near Arbourview. Neighbourhood-context photography, not an official rendering of Arbourview.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/hungry-hollow-trails.webp",
    alt: "Hungry Hollow trails near Arbourview Georgetown — conservation-area walking paths in Halton Hills",
    caption:
      "Forested Hungry Hollow trail character in Georgetown. Independent neighbourhood photography, not an official Arbourview rendering.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/widelot-streetscape.webp",
    alt: "WideLot™ streetscape context for Arbourview floor plans and detached homes in Georgetown",
    caption:
      "WideLot™-style streetscape context used to illustrate Mattamy's lot-width concept. Not an official architectural rendering of Arbourview.",
    width: 1536,
    height: 1024,
  },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Arbourview. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of September 1, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Arbourview and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Arbourview Georgetown | Mattamy Homes New Homes",
    description:
      "New townhomes & detached homes by Mattamy Homes at Arbourview in Georgetown. Register for prices & floor plans.",
    h1: "Arbourview Georgetown — New Townhomes & Detached Homes by Mattamy Homes",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Arbourview Floor Plans | Townhomes & Detached",
    description:
      "Explore planned collection tiers at Arbourview Georgetown — townhomes and detached homes by Mattamy Homes.",
    h1: "Arbourview Floor Plans — Townhomes & Detached WideLot™ Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Arbourview Prices | Deposit Structure Georgetown",
    description:
      "Arbourview pricing and deposit structure, tracked and updated as Mattamy Homes releases details.",
    h1: "Arbourview Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Arbourview Location | Eighth Line, Georgetown",
    description:
      "Arbourview sits at 10114 Eighth Line, Georgetown — downtown, trails, transit & schools.",
    h1: "Arbourview Location — Eighth Line, Georgetown",
  },
  gallery: {
    path: "/gallery",
    title: "Arbourview Renderings | Site Plan Georgetown",
    description:
      "Renderings and site plan for Arbourview, Mattamy Homes' newest Georgetown community.",
    h1: "Arbourview Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Arbourview FAQ | Prices, Deposit & VIP Access",
    description:
      "Answers to the most common Arbourview questions — pricing, deposit, launch date, schools & more.",
    h1: "Arbourview FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Arbourview VIP Updates Georgetown",
    description:
      "Register for Arbourview community updates and get first access to pricing and floor plans.",
    h1: "Register for Arbourview Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Arbourview Georgetown",
    description:
      "Your Arbourview VIP registration has been received. You will be notified when pricing and floor plans are released.",
    h1: "Registration received",
    robots: { index: false, follow: false },
  },
  guide: {
    path: "/blog/oakville-pre-construction-guide",
    title: "Halton Hills Pre-Construction Guide 2026: What to Kn",
    description:
      "Halton Hills Pre-Construction Guide 2026: What to Know Before You Buy — practical, sourced context for Halton Hills pre-construction buyers.",
    h1: "Halton Hills Pre-Construction Guide 2026: What to Know Before You Buy",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | arbourviewhomes.com",
    description:
      "How this independent Arbourview information site collects, stores, and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | arbourviewhomes.com",
    description:
      "Terms of use for this independent Arbourview information and registration website.",
    h1: "Terms of Use",
  },
};

export const NAV = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/oakville-pre-construction-guide", label: "Buyer Guide" },
] as const;

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Arbourview floor plans" },
  pricing: { href: "/pricing", text: "See Arbourview pricing & deposit structure" },
  location: { href: "/location", text: "Explore the Arbourview location" },
  faq: { href: "/faq", text: "Read the full Arbourview FAQ" },
  floorPlansPricing: { href: "/pricing", text: "Check current Arbourview pricing" },
  floorPlansRegister: { href: "/register", text: "Register for floor plan updates" },
  pricingRegister: {
    href: "/register",
    text: "Register to be notified when prices release",
  },
  locationFaq: { href: "/faq", text: "See more Arbourview location FAQs" },
  faqRegister: { href: "/register", text: "Register for Arbourview updates" },
  guide: {
    href: "/blog/oakville-pre-construction-guide",
    text: "Halton Hills Pre-Construction Guide 2026: What to Know Before You Buy",
  },
} as const;

export const QUICK_FACTS = [
  { label: "Builder", value: "Mattamy Homes" },
  { label: "Type", value: "Townhomes & Detached Homes (WideLot™)" },
  { label: "Address", value: "10114 Eighth Line, Halton Hills, ON L7G 4S5" },
  { label: "City", value: "Georgetown, Halton Hills, Ontario" },
  { label: "Nearby", value: "Downtown Georgetown Main Street, Hungry Hollow trails" },
  { label: "Connectivity", value: "GO Transit, Highways 7, 401, 407" },
  { label: "Starting Price", value: "To be announced" },
  { label: "Deposit", value: "To be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Status", value: "Coming Soon — Registration Open" },
] as const;

export const HOME_ANSWER =
  "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in its Coming Soon stage, with pricing and floor plans to be released to registered buyers first.";

export const HOME_OVERVIEW = [
  "Arbourview sits at 10114 Eighth Line in Georgetown, inside the Town of Halton Hills in Halton Region, Ontario. Mattamy Homes has published that civic address, together with a directions pin at 43.6200855, -79.8893979, as the public location for the community. Eighth Line marks the agricultural edge of Georgetown rather than a nameless greenfield with no established centre. Mattamy's official project page places the parcel beside one of the Greater Toronto Area's most intact small-town downtowns: Georgetown's historic Main Street, with boutiques, cafés, restaurants, and the Georgetown Farmers' Market. Hungry Hollow's trail and conservation lands add forested walking routes and conservation scenery in the same town. Those named places are the neighbourhood facts this information hub records; they are not a substitute for a released marketing site plan.",
  "arbourviewhomes.com is the flagship public fact sheet for Arbourview while Mattamy Homes' own coming-soon page remains a thin registration gate. The job of this hub is to gather every sourced detail in one crawlable place: builder, address, home types, WideLot™ concept, nearby amenities, transit, and the current Coming Soon status. It also carries the registration form so interested buyers can ask to be notified when floor plans and pricing appear. The page is written in the third person about Mattamy Homes and the Georgetown site. It does not speak as the builder, does not invent a price, and does not treat an unreleased booklet as if it already existed.",
  "Mattamy Homes was founded in Toronto in 1978 by Peter Gilgan. The company is Canada's largest privately-owned homebuilder and ranks among the top-25 homebuilders in the United States. In the 1990s, at The Orchard community in Burlington, Ontario, Mattamy introduced WideLot™, a design idea that uses wider-than-standard lot widths to open up the street profile and enlarge living space inside and outside the home. Arbourview in Georgetown is being planned around that same WideLot™ language. Exact lot dimensions for this Eighth Line release have not been published, so this hub will not invent a frontage in feet or a square-footage band to make a card look finished.",
  "Mattamy Homes has confirmed that Arbourview will include townhomes and detached homes. Recreation named on the official project page includes the Gellert Community Centre — fitness, swimming, and sports already operating in Georgetown — and Williams Mill Creative Arts Studios. Those indoor amenities sit alongside Hungry Hollow outdoors. Specific floor plans, lot widths, interior sizes, bedroom counts, and building heights have not been released as of the project's Coming Soon stage. Until a collection booklet exists, the honest product statement is two tiers plus the WideLot™ concept, not a list of invented model names.",
  "As of September 1, 2026, Mattamy Homes has not issued Arbourview pricing, a deposit schedule, occupancy timing, or a firm sales-launch date. Registered buyers are typically notified first when those materials appear. This site exists to keep the public record current as each verified fact is released, and to offer a free registration path with no purchase obligation. Buyers who want the next layer of detail can continue through the floor-plans, pricing, location, and FAQ pages linked from this hub. E.&O.E. Information current as of September 1, 2026.",
];

export const WIDELOT_COPY = [
  "WideLot™ is a Mattamy Homes design concept, not a marketing nickname for a single floor plan. It was introduced in the 1990s at The Orchard in Burlington, Ontario, and describes homes placed on lots that are wider than the typical GTA standard of the era. The intended result is a more open street face, more usable side yard, and larger rooms that can take windows on more than one elevation. Arbourview in Georgetown is being built around this concept.",
  "What WideLot™ does not yet tell a buyer at Arbourview is the measured frontage, the depth of each lot, or the interior square footage of any named plan. Mattamy Homes has not released those figures for the Eighth Line site. A wider lot is a planning idea; a price-per-square-foot number still needs a published size and a published price. Until both exist, this information hub describes the concept in plain language and leaves the dimensions labelled as not yet released.",
  "Townhomes and detached homes at Arbourview are both planned under the WideLot™ umbrella. That does not mean the two collections will share the same lot width, the same parking arrangement, or the same tenure. Freehold versus POTL status for townhomes has not been confirmed. Buyers should wait for the collection booklet and the agreement of purchase and sale rather than importing another Mattamy community's lot table onto Georgetown. Registering on this site is how notices typically go out when those documents are published.",
];

export const AEO_PASSAGES: { heading: string; text: string }[] = [
  {
    heading: "What is Arbourview and who is building it?",
    text: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. The project is located at 10114 Eighth Line and is currently in its Coming Soon registration stage.",
  },
  {
    heading: "Where is Arbourview located in Georgetown?",
    text: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.",
  },
  {
    heading: "What home types will be available at Arbourview?",
    text: "Arbourview is planned to offer townhomes and detached homes built using Mattamy's WideLot™ concept, which uses wider-than-standard lot widths to create more interior and exterior living space. Exact floor plans, lot sizes, and bedroom counts have not yet been released by Mattamy Homes as of the project's Coming Soon stage.",
  },
  {
    heading: "How much will homes at Arbourview cost?",
    text: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    heading: "What is a WideLot™ home?",
    text: "WideLot™ is a Mattamy Homes design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, that uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. Arbourview in Georgetown is being built around this WideLot™ concept, though exact lot dimensions for the project have not yet been released.",
  },
  {
    heading: "When will Arbourview launch for sale?",
    text: "Mattamy Homes has not announced a firm sales launch date for Arbourview. The project is currently in a Coming Soon, registration-only stage, where interested buyers can sign up for community updates to be notified when floor plans, pricing, and a VIP launch date are announced.",
  },
  {
    heading: "What is the deposit structure for Arbourview?",
    text: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registered buyers usually receive this information first, alongside pricing and floor plans.",
  },
  {
    heading: "How do I get VIP registration for Arbourview?",
    text: "Buyers can register for Arbourview community updates directly through this site's registration form, providing a first name, last name, email, and phone number. Registered buyers are typically notified ahead of the public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    heading: "What schools will serve Arbourview?",
    text: "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
  },
  {
    heading: "Is Arbourview a good investment?",
    text: "Arbourview sits close to an established, well-preserved downtown Georgetown with GO Transit and multi-highway access, which are generally favourable investment fundamentals for a commuter-friendly small town. As with any pre-construction purchase, buyers should weigh the unreleased pricing, deposit structure, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its agreement of purchase and sale.",
  },
  {
    heading: "What amenities are near Arbourview?",
    text: "Arbourview is close to Georgetown's historic downtown Main Street, home to boutiques, cafés, restaurants, and the Georgetown Farmers' Market. Nearby recreation includes the Hungry Hollow trails and conservation area, the Gellert Community Centre for fitness and swimming, and Williams Mill Creative Arts Studios.",
  },
  {
    heading: "What is the difference between Arbourview's townhomes and detached homes?",
    text: "Mattamy Homes has confirmed Arbourview will include both townhomes and detached homes built using its WideLot™ design concept, but has not yet released specific plan names, square footage, lot widths, or pricing for either collection as of the project's Coming Soon stage.",
  },
  {
    heading: "Who is Mattamy Homes and what is their track record?",
    text: "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan, and a top-25 homebuilder in the United States. The company introduced its WideLot™ home concept in the 1990s and has built communities across the Greater Toronto Area, including its newest Georgetown community, Arbourview.",
  },
  {
    heading: "What highways and transit serve Arbourview?",
    text: "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
  },
  {
    heading: "Is Arbourview close to downtown Georgetown?",
    text: "Yes. Arbourview is positioned close to one of the GTA's most well-preserved small-town downtowns, with Georgetown's historic Main Street, local boutiques, restaurants, and the Georgetown Farmers' Market within easy reach, alongside nearby trails and community recreation facilities.",
  },
];

export const HOME_LOCATION_AEO: { heading: string; text: string }[] = AEO_PASSAGES.filter(
  (item) =>
    item.heading === "Where is Arbourview located in Georgetown?" ||
    item.heading === "What highways and transit serve Arbourview?" ||
    item.heading === "What schools will serve Arbourview?" ||
    item.heading === "What amenities are near Arbourview?" ||
    item.heading === "Is Arbourview close to downtown Georgetown?",
);

export const FLOOR_PLAN_COLLECTIONS = [
  {
    name: "Townhomes",
    slug: "townhomes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned as part of Arbourview's Georgetown community, per Mattamy Homes' official project page. Individual plan names, square footage, and bedroom counts have not yet been released. Register above to be notified when floor plans are published.",
  },
  {
    name: "Detached Homes (WideLot™)",
    slug: "detached-homes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned using Mattamy's WideLot™ concept, built around wider-than-standard lot widths for more interior and exterior living space. Individual plan names, lot widths, and square footage have not yet been released by Mattamy Homes. Register above to be notified when floor plans are published.",
  },
] as const;

export const FLOOR_PLANS_ANSWER =
  "Mattamy Homes has not published Arbourview floor plans while the community remains in its Coming Soon stage. The two planned collections are townhomes and detached homes built using the WideLot™ design concept. Plan names, interior sizes, lot widths, and bedroom counts will be issued with the VIP launch materials.";

export const FLOOR_PLANS_COPY = [
  "Arbourview floor plans remain unpublished while the Georgetown community is still Coming Soon. Mattamy Homes has confirmed two collection tiers — townhomes and detached WideLot™ homes — and has not issued named models, interior dimensions, bedroom or bathroom counts, or lot widths in feet. This information hub keeps a stable public URL for those two tiers so that, when a booklet is released, the same cards can carry sourced plan names instead of a status note. Until that booklet exists, the honest product statement is the pair of collections plus the WideLot™ concept, not a gallery of invented elevations. Square footage and bedroom counts stay labelled not yet released.",
  "On other Ontario campaigns, Mattamy Homes has often presented homes as named collections rather than one undifferentiated list. Elevations, included features, and lot premiums usually arrive together with the floor plans at VIP. That pattern is a general observation about how the builder has staged other launches. It is not a confirmed Arbourview package, a promised calendar, or a guarantee that Georgetown will follow the same sequence. Until Eighth Line-specific materials exist, collection structure should be read as expected process, not as a locked product mix.",
  "WideLot™, introduced in the 1990s at The Orchard in Burlington, uses wider-than-typical lots to open the street profile and enlarge living space. Arbourview is planned around that idea. Exact lot dimensions for 10114 Eighth Line have not been published, so this page will not invent a frontage or a depth. A unit count for Arbourview has also not been announced. Copying another community's model names, absorption story, or square-footage table onto this release mixes two different sales files and would mislead a buyer trying to compare plans.",
  "Architect and interior-designer credits for Arbourview have not been published and are omitted rather than guessed. Elevations, included finishes, and optional packages typically travel with the collection booklet; none of those packages is confirmed for this project. Tenure for townhomes — freehold versus POTL — is likewise unconfirmed, so this hub omits a common-element or maintenance-fee line until that status is stated. Parking counts, basement options, and outdoor-room packages are in the same unpublished bucket. Buyers comparing this page with a brochure from another Mattamy community should treat that brochure as a different file, not as a preview of Eighth Line plans.",
  "People who complete the registration form on this hub are typically notified ahead of a general public announcement when Mattamy Homes issues floor plans. There is no cost to register, and registration does not reserve a specific lot, plan, or sales appointment with the builder. Use the form on this page to request floor-plan updates, then review the pricing page once figures exist. Until a booklet exists, the complete sourced description of Arbourview floor plans is two collection tiers, the WideLot™ concept, and a Coming Soon status. That is the entire confirmed product statement as of September 1, 2026.",
  "Directory sites that list “Georgetown pre-construction” as a filter often skip a Coming Soon community entirely, or bury it inside a town-wide inventory that is not Arbourview. A dedicated, crawlable floor-plans URL that refuses to invent model names is the correct pre-launch state for an information hub. When Mattamy Homes releases plans, this page will add sourced cards — names, sizes, and bedroom counts — rather than remaining a placeholder dressed as a brochure. Until then, the cards above are collection-tier summaries, not a menu of homes a buyer can select today. The linked pricing page will stay in the same unpublished state until a VIP list exists, so plan names and prices can be read together instead of guessed apart.",
];

export const PRICING_ANSWER =
  "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.";

export const PRICING_AS_OF =
  "As of September 1, 2026, Mattamy Homes has not released pricing for Arbourview.";

export const PRICING_ROWS = [
  { type: "Townhomes", price: "To be announced", status: "Coming Soon" },
  { type: "Detached WideLot™ Homes", price: "To be announced", status: "Coming Soon" },
] as const;

export const DEPOSIT_ROWS = [
  { milestone: "Initial deposit on signing", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Second staged deposit", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Subsequent staged deposits", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Balance on closing", amount: "To be announced", due: "Occupancy to be announced" },
] as const;

export const INCENTIVE_ROWS = [
  { item: "Decor dollars / design studio credit", status: "To be announced" },
  { item: "Capped development charges", status: "To be announced" },
  { item: "Assignment fee policy", status: "To be announced" },
  { item: "Other launch incentives", status: "To be announced" },
] as const;

export const PRICING_COPY = [
  "No Arbourview list price has been issued. This page is the public status record for starting price, deposit staging, and incentives: every cell that would normally hold a dollar figure reads “To be announced” until Mattamy Homes issues a VIP price list. Town-wide Georgetown aggregator brackets describe a filter on a directory, not an Arbourview offer, and are not used here as a stand-in starting price. Fabricating a number to rank for a query would be both inaccurate and a compliance failure. The two rows below cover townhomes and detached WideLot™ homes only, both still Coming Soon.",
  "At VIP launch, Mattamy Homes has often attached a staged deposit schedule to Ontario agreements: money due on signing, then further instalments at intervals the builder sets, with the balance at occupancy. That description is general process, not a confirmed Arbourview calendar. Dollar amounts, percentages, and due dates for this Georgetown community remain unpublished. Occupancy timing and a closing window are unpublished as well. The tables on this page exist so those cells can be filled from a sourced document rather than from a neighbouring campaign. Nothing in those rows is an offer, a reservation, or a statement that a home is available today.",
  "Credits such as design-studio allowances or capped development charges have shown up on some past Mattamy Ontario launches. Whether Arbourview will include any of those items will be confirmed at VIP launch, not before. This information hub will not invent a credit, a cap, or an assignment fee to fill a template slot. Assignment, rental, and resale rules belong in the agreement of purchase and sale, which does not yet exist for this project. Write-ups of other communities are not Arbourview policy, and a household that needs a particular assignment window should wait for the Georgetown agreement rather than assuming another campaign's clause applies here.",
  "When a VIP list does appear, the opening collection number is a starting point, not the cheque. Lot position, elevation extras, included features, and any development-charge treatment usually change the all-in figure. Those adders will be added to these tables only when Mattamy Homes publishes them for Arbourview. Until then, a directory that already shows a starting price for this project is describing Georgetown as a category, another Halton Hills launch, or an unsourced guess. This hub will not rank Arbourview against other Georgetown campaigns by dollar amount while the list is unpublished.",
  "Closing costs in Ontario sit beside the purchase price and are distinct from staged deposits. Land-transfer tax in Halton Hills does not include a Toronto municipal layer. Legal fees, title insurance, and HST treatment for a qualifying new home are general provincial topics to review with a lawyer and accountant who work in Halton. None of those lines has been confirmed as an Arbourview package. Occupancy is to be announced, so a carrying-cost model that assumes a close in a specific calendar year is not a sourced fact. Development-charge treatment, if offered, belongs in the incentive table once Mattamy Homes states it for this community.",
  "The purpose of this pricing URL is to hold a dated, project-only record that can accept real figures the day they exist. Until that day, the only accurate statement is that pricing has not been released. People who register on this hub are typically notified when a VIP launch date and an occupancy window are set. Compare the two collection tiers and the Eighth Line location; do not compare invented dollars or borrowed aggregator brackets. Townhomes and detached WideLot™ homes remain the only confirmed product types on this status page. E.&O.E. Information current as of September 1, 2026.",
];

export const LOCATION_ANSWER =
  "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.";

export const LOCATION_COPY = {
  intro: [
    "The civic address for Arbourview is 10114 Eighth Line, Halton Hills, ON L7G 4S5, in Georgetown, Halton Region, Ontario. Mattamy Homes' official directions link publishes coordinates 43.6200855, -79.8893979 for that pin. Those are the name, address, and point facts this information hub will keep repeating so a map, a listing, or an answer engine can locate the community without guessing. The embedded map below is a wayfinding aid. It is not a marketing site plan and not a lotting diagram.",
    "Mattamy Homes places Arbourview on the edge of a small-town downtown the company describes as among the GTA's most intact. The named street in that claim is Georgetown's historic Main Street. Walk times from a future porch to a café will depend on the lot, the released site plan, and the buyer's own route. Official architectural renderings and a public marketing site plan have not been issued by Mattamy Homes as of September 1, 2026, so this page does not pretend a drawing already exists.",
    "Eighth Line is Georgetown's agricultural threshold rather than an interior cul-de-sac. The sourced location story is downtown adjacency plus GO Transit and Highways 7, 401, and 407. Together those facts describe a commuter-friendly Halton Hills address. Traffic still governs how long any given trip takes; this hub records the highway relationship, not a promised minute count to an office tower.",
  ],
  downtown: [
    "Georgetown's historic Main Street is the downtown fact Mattamy Homes names for Arbourview. The official project page points to boutiques, cafés, restaurants, and the weekly Georgetown Farmers' Market along that well-preserved commercial strip. Those storefronts are already operating. They are not a future retail block waiting on a later construction phase of this community.",
    "Mattamy's Arbourview tagline — “Where Your Kids Will Know the Farmers by Name” — refers to that market and to the working-farm edge of Georgetown. Setting the slogan aside, the practical point for a buyer is occupancy of the core: weekend destination traffic and weekday errands already happen on Main Street. A first shovel on a field without a downtown still has to invent that fabric.",
    "A visit to Main Street remains the right check. Proximity from Eighth Line to the historic core is a neighbourhood relationship, not a promise that every Arbourview elevation faces a café. Other Georgetown and Halton Hills campaigns may sit farther from that street and still compete for similar households. They do not share this parcel. Do not import their price lists or site plans onto Arbourview.",
  ],
  recreation: [
    "Hungry Hollow is the outdoor recreation Mattamy Homes names beside Arbourview: conservation lands with forested walking routes, bridges, and natural scenery inside Georgetown. How a particular lot meets those trails depends on a site plan that has not been published. Landscape staging on the Arbourview parcel will follow that plan. Completion of a trail connection on occupancy should not be assumed from an unreleased drawing.",
    "Named indoor recreation on the official project page includes the Gellert Community Centre — fitness, swimming, and sports — and Williams Mill Creative Arts Studios. Both are Georgetown facilities already in use. They are not a future amenity building whose opening is tied to an unpublished occupancy date. Mattamy's Arbourview page also points to parks, playgrounds, and additional green space across Halton Hills as part of the wider town.",
    "Those recreation facts explain why Georgetown reads as a small town rather than an interchange. Whether they are reflected in a future Arbourview list price is unknown until figures exist. This hub records the named places. It does not invent walking-minute claims from Eighth Line to Hungry Hollow, to Gellert, or to Williams Mill.",
  ],
  transit: [
    "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
    "Regional rail is the GO fact this page will state, and stop there on schedules. Walking time from a future driveway to the Georgetown GO station, parking-lot conditions, and train frequency are household checks, not numbers invented here. Each buyer should test the first and last mile against an actual commute, including off-peak trips.",
    "The three named highways are Highway 7, Highway 401, and Highway 407. They describe east-west employment access across the GTA and movement through Halton. This hub will keep repeating those three corridors plus GO Transit. It will not publish a door-to-desk minute count. Highway 407 tolls are a household budget line, not an Arbourview carrying cost issued by Mattamy Homes.",
  ],
  schools: [
    "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
    "[UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.] Named catchment schools for this exact parcel are not listed on this site as confirmed.",
    "A nearby school building is not the same thing as an assigned catchment. Elementary, secondary, French immersion, and Catholic versus public envelopes can change from one concession to the next. This information hub will not label any school “the Arbourview school” until the relevant board confirms the 10114 Eighth Line address. Households that need a particular program should contact the boards with that civic address rather than relying on a neighbour's catchments.",
  ],
  widelot: [
    "The homes planned for this Eighth Line location are townhomes and detached houses using Mattamy's WideLot™ idea: lots wider than a typical GTA standard, intended to open the street face and enlarge indoor and outdoor living space. Measured frontages for Arbourview have not been released. The location file that can be written today is therefore downtown Georgetown, Hungry Hollow, Gellert, Williams Mill, GO Transit, Highways 7, 401, and 407, and a WideLot™ product type — more specific than a generic “new homes in Georgetown” label, and aligned with Mattamy's own project page.",
    "Sharing one parcel does not mean townhomes and detached homes will share the same lot geometry, parking, or backing condition. Until Mattamy Homes publishes a site plan, buyers should not assume a particular street, a particular view, or a particular relationship to Hungry Hollow. The registration form on this hub is the notice path for when a site plan and collection booklet appear.",
    "Address, coordinates, named downtown, named trails, named recreation, and named highways are the geography that is public today. Pricing, deposits, occupancy, and interior sizes are not. This page will keep those sourced location facts in one place so that, when a VIP list appears, the builder, the civic address, and the product type are already aligned for anyone citing Arbourview.",
  ],
};

export const FAQ_PAGE_INTRO =
  "This Arbourview FAQ is the question-and-answer file for the Georgetown information hub: what the community is, who is building it, where 10114 Eighth Line sits, which home types are planned, and which details remain unreleased. Each answer is written to stand alone if an answer engine quotes it. Unreleased figures stay labelled as to be announced. Last updated: September 1, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is Arbourview?",
    a: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in a Coming Soon, registration-only stage.",
  },
  {
    q: "Who is the builder behind Arbourview?",
    a: "Arbourview is being built by Mattamy Homes, Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. Mattamy is also the company behind the WideLot™ home design concept Arbourview is being built around.",
  },
  {
    q: "Where exactly is Arbourview located?",
    a: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, close to Georgetown's historic downtown Main Street. The site has practical access to GO Transit and Highways 7, 401, and 407 for commuting across the Greater Toronto Area.",
  },
  {
    q: "What home types and sizes are available at Arbourview?",
    a: "Per Mattamy Homes' official project page, Arbourview is planned to include both townhomes and detached homes, built using Mattamy's WideLot™ concept for wider-than-standard lot widths. Exact floor plans, lot widths, and square footage have not yet been released.",
  },
  {
    q: "How much do homes at Arbourview cost?",
    a: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon stage. Registered buyers typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    q: "What schools serve Arbourview?",
    a: "Arbourview falls within Halton Hills, generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed — buyers should verify with the relevant board before purchasing.",
  },
  {
    q: "How do I get VIP access to Arbourview?",
    a: "You can register for Arbourview community updates directly on this site using the five-field form — first name, last name, email, and phone. Registered buyers are typically notified ahead of the general public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    q: "What is the deposit structure for Arbourview?",
    a: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registering for updates is the fastest way to receive this information when it is released.",
  },
  {
    q: "When is the launch or occupancy for Arbourview?",
    a: "Mattamy Homes has not announced a firm sales launch date or occupancy timeline for Arbourview. The project is currently in a Coming Soon, registration-only stage; registered buyers are typically notified first when a VIP launch date is set.",
  },
  {
    q: "Are there incentives at Arbourview?",
    a: "Incentives for Arbourview have not been announced as of its Coming Soon stage. Mattamy Homes has offered incentives such as decor dollars or capped development charges on other Ontario launches in the past; any Arbourview-specific incentives will be confirmed at VIP launch, not before.",
  },
  {
    q: "Is there a cost to register for Arbourview?",
    a: "No. Registering for Arbourview community updates is free and simply adds you to Mattamy Homes' notification list for this project. There is no obligation to purchase and no cost associated with registering.",
  },
  {
    q: "What is the assignment or rental policy at Arbourview?",
    a: "Mattamy Homes has not published an assignment or rental policy specific to Arbourview, as the project has not yet reached its agreement of purchase and sale stage. Assignment and rental terms are typically detailed in the builder's purchase agreement at VIP launch — confirm directly with Mattamy Homes before relying on any third-party summary.",
  },
  {
    q: "How does Arbourview compare to other Georgetown pre-construction communities?",
    a: "Arbourview stands out for its proximity to one of the GTA's best-preserved small-town downtowns — Georgetown's historic Main Street — along with GO Transit and multi-highway access. Compared to many new-launch communities built farther from an established downtown, Arbourview offers walkable small-town amenities from day one.",
  },
  {
    q: "Is Arbourview a good investment?",
    a: "Arbourview sits close to an established downtown Georgetown with strong commuter connectivity via GO Transit and Highways 7, 401, and 407 — generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the currently unreleased pricing, deposit schedule, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its purchase agreement.",
  },
  {
    q: "What is Mattamy's WideLot™ concept and why does it matter at Arbourview?",
    a: "WideLot™ is a Mattamy Homes design concept introduced in the 1990s at The Orchard community in Burlington, Ontario, using wider-than-typical lot widths to create a more spacious street profile and larger living areas. Arbourview is being built around this WideLot™ concept, though Mattamy has not yet released the exact lot dimensions planned for the community.",
  },
  {
    q: "What trails and green space are near Arbourview?",
    a: "Arbourview is close to the Hungry Hollow trails and conservation area, offering forested walking paths, bridges, and natural scenery within Georgetown. The area also has numerous parks, playgrounds, and green spaces throughout Halton Hills, per Mattamy Homes' official project page.",
  },
];

export const REGISTER_LEDE =
  "VIP registration on this site is free. Completing the form is how buyers typically receive first notice when Mattamy Homes releases Arbourview floor plans, pricing, and a launch date. There is no purchase obligation.";

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog/oakville-pre-construction-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const BLOG_GUIDE = {
  lede: "Buying pre-construction in Halton Hills in 2026 means reading a Coming Soon file before a price list exists. This guide walks through the process — registration, collection booklets, deposits, occupancy, schools, and the agreement of purchase and sale — with Arbourview in Georgetown used as a current example of a Mattamy Homes launch beside an established small-town downtown.",
  sections: [
    {
      h2: "What Halton Hills buyers should know before a 2026 pre-construction purchase",
      paragraphs: [
        "Halton Hills is a GTA-adjacent town inside Halton Region. Georgetown, Acton, and the rural concessions share school boards, highway access, and a housing market that mixes resale street towns with periodic new-home campaigns. A 2026 pre-construction purchase here is not the same product as a downtown Toronto condo worksheet, and it is not the same as a Milton or Brampton launch that sits farther from a historic Main Street.",
        "The useful questions before a VIP list exists are process questions. Who is the builder. Where is the parcel. What home types are planned. Which amenities and transit facts are sourced. Which figures — price, deposit, occupancy, interior size — remain unpublished. Arbourview, at 10114 Eighth Line in Georgetown, is a live example of that incomplete file: Mattamy Homes, townhomes and detached WideLot™ homes, Coming Soon as of September 1, 2026.",
        "This guide does not rank Halton Hills against other municipalities and does not invent a price-growth percentage. General market commentary below is phrased as general commentary. Project-specific claims are limited to facts Mattamy Homes has published for Arbourview, or to process patterns that are clearly labelled as typical rather than confirmed.",
      ],
    },
    {
      h2: "Coming Soon versus VIP launch — the process, not the slogan",
      paragraphs: [
        "Coming Soon, on a Mattamy Ontario community, usually means a public registration list and an unpublished booklet. VIP launch is the later moment when registered buyers are typically invited to see collections, prices, and a deposit schedule. Arbourview is in the first of those two stages. There is no sourced VIP date on this information hub because Mattamy Homes has not announced one.",
        "Registration is an information request. It is free on this independent site, creates no purchase obligation, and does not reserve a lot. It also does not, by itself, create priority with Mattamy Homes unless the builder independently confirms such a program. Treat any third-party claim of “guaranteed allocation” as unverified until the builder's own process says so.",
        "The practical buyer move during Coming Soon is to collect sourced geography and product type, then wait for documents. For Arbourview that means Eighth Line, downtown Georgetown, Hungry Hollow, Gellert Community Centre, Williams Mill Creative Arts Studios, GO Transit, and Highways 7, 401, and 407 — plus the WideLot™ concept — and a deliberate refusal to fill empty price cells.",
      ],
    },
    {
      h2: "Collection booklets, WideLot™, and how to read unreleased plans",
      paragraphs: [
        "A collection booklet is the document that turns “townhomes and detached homes” into named plans with sizes and bedroom counts. Until that booklet exists, floor-plan pages should describe tiers, not invented models. Arbourview's two planned tiers are townhomes and detached WideLot™ homes. Individual plan names have not been released.",
        "WideLot™ is a Mattamy Homes design concept from the 1990s at The Orchard in Burlington. It uses wider-than-typical lots to open the street profile and enlarge living space. That is a planning idea, not a square-footage table. Exact lot dimensions for Arbourview have not been published. Buyers who need a frontage in feet should wait for the booklet rather than copying another community's lot map.",
        "When a booklet does appear, read it as a set of inputs: interior area, bedroom count, parking, elevation options, and included features. Those lines become the denominator and the adders once a price list exists. They are not lifestyle copy. Architect credits, interior-designer credits, and optional packages for Arbourview are omitted here because they have not been published.",
      ],
    },
    {
      h2: "Deposits, occupancy, and what remains unpublished",
      paragraphs: [
        "Ontario builders in this corridor often attach a staged deposit to the purchase agreement at VIP: an amount due on signing, then further instalments before occupancy. That is how many Mattamy Ontario launches have been structured; it is not a published Arbourview calendar. Dollars, percentages, and due dates for this Georgetown community are still unpublished. Occupancy for Arbourview is unpublished as well.",
        "Deposits and occupancy run on different clocks. Staged deposits leave a buyer's account after signing. Occupancy is the later moment when the home is ready, and that target can still move. Financing sits on a third clock: a lender underwrites a specific plan and price, which do not exist for Arbourview yet. A household that needs a known close year should treat this file as incomplete.",
        "Ontario closing costs sit beside the purchase price. Land-transfer tax in Halton Hills does not include Toronto's municipal layer. Legal fees, title insurance, development charges, and HST treatment for a qualifying new home are general Ontario topics to review with a lawyer and accountant who work in Halton. None of those line items has been confirmed as an Arbourview package. Incentives such as decor dollars or capped development charges, if offered, will be confirmed at VIP launch.",
      ],
    },
    {
      h2: "Living next to downtown Georgetown, Hungry Hollow, and GO",
      paragraphs: [
        "Georgetown's historic Main Street is the amenity that distinguishes some Halton Hills launches from others. Boutiques, cafés, restaurants, and the Georgetown Farmers' Market are occupied, day-one places rather than a plaza drawn on a later phase. Mattamy Homes names that downtown adjacency for Arbourview, along with the tagline “Where Your Kids Will Know the Farmers by Name.”",
        "Hungry Hollow trails and conservation lands supply forested walking paths within town. Gellert Community Centre and Williams Mill Creative Arts Studios are the named indoor recreation facts. Those places describe daily life more usefully than a superlative about location. Door-to-trail minutes from a specific Arbourview lot still depend on a site plan that has not been released.",
        "GO Transit and Highways 7, 401, and 407 are the named access facts for commuting across the Greater Toronto Area. They are planning relationships, not a promised train schedule or a door-to-office minute count. Buyers should verify the Georgetown GO station, parking, and first-mile options against their own commute. This guide will not invent a headway claim.",
      ],
    },
    {
      h2: "School boards, catchments, and what cannot be confirmed yet",
      paragraphs: [
        "Halton Hills is generally served by the Halton District School Board and the Halton Catholic District School Board. That board-level statement is the most that can be sourced for Arbourview's Eighth Line site today. Exact catchment assignments have not been confirmed.",
        "[UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.] Named schools for this parcel are not listed here as confirmed. French immersion, gifted programming, and Catholic versus public assignment can differ from a neighbour one concession over.",
        "School questions are household questions, not marketing slogans. A buyer who needs a particular elementary or secondary school should contact the relevant board with the civic address 10114 Eighth Line, Halton Hills, and should not rely on a third-party summary. This information hub will add named schools only after a board confirms catchment for the parcel.",
      ],
    },
    {
      h2: "The agreement of purchase and sale, assignment, and rental rules",
      paragraphs: [
        "The document that binds money is the agreement of purchase and sale, not a landing page. Mattamy Homes has not published an Arbourview agreement because the project has not reached that stage. Assignment fees, consent windows, occupancy-before-rental rules, and any restriction on leasing will typically appear in that agreement at VIP launch.",
        "Write-ups of other Mattamy communities are not the Arbourview rulebook. A household that needs to assign before occupancy, or to rent on closing, should read the Arbourview agreement when it exists and confirm the clauses with Mattamy Homes. This independent hub will not invent a fee or a permission.",
        "Selling after closing is a different legal event from assigning a pre-construction contract. Once homes close, Georgetown ground-oriented resale near Main Street and Eighth Line is the natural comparable set. Until then, treating another Halton Hills campaign's asking prices as an Arbourview forecast mixes two releases. Filling in the form here does not create a purchase agreement with the builder.",
      ],
    },
    {
      h2: "A buyer checklist for Halton Hills pre-construction in 2026",
      paragraphs: [
        "Request the dated price list, the collection booklet with interior sizes, the deposit calendar, the occupancy target, and the assignment and rental clauses. If none of those documents can be produced, the campaign is still Coming Soon — the stage Arbourview occupies as of this guide.",
        "Walk the geography. For Arbourview that means Eighth Line, Georgetown's historic Main Street, the Farmers' Market schedule, Hungry Hollow, Gellert, and the GO station relationship. Confirm school catchment with the Halton District School Board and the Halton Catholic District School Board. Run land-transfer tax, legal, development charges, and HST treatment with professionals who work in Halton, not with a downtown condo worksheet.",
        "Compare like with like: lot width, parking, tenure, and downtown adjacency, not a slogan. Then decide. This information hub will publish Arbourview prices and floor plans when Mattamy Homes does. Until then, the honest 2026 statement is: sourced small-town and commute facts, incomplete numbers, free registration for updates, and no invented statistics. Keep this guide beside the FAQ and the Eighth Line location page so the same sourced facts are not re-derived from a directory snippet. E.&O.E. Information current as of September 1, 2026.",
      ],
    },
  ],
};

export const GALLERY_INTRO =
  "Mattamy Homes has not issued official architectural renderings or a public marketing site plan for Arbourview as of September 1, 2026. Until those files exist, this gallery shows neighbourhood-context photography of downtown Georgetown, Hungry Hollow trail character, and WideLot™-style streetscape context — each captioned so the images cannot be mistaken for project elevations. Project renderings will be added on this page after the builder releases them.";
