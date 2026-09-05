import { LAST_UPDATED, SITE_ORG_NAME, SITE_URL } from "./content";

export const PRIVACY_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "An independent Arbourview information hub",
    paragraphs: [
      `${SITE_ORG_NAME} is an independent information and registration website covering Arbourview, a Coming Soon community by Mattamy Homes in Georgetown, Halton Hills. It is not the official Mattamy Homes website, is not affiliated with or endorsed by the builder, and does not impersonate the builder. The canonical host of this resource is ${SITE_URL}/.`,
    ],
  },
  {
    h2: "What is collected, and why",
    paragraphs: [
      "The registration form collects five fields only: first name, last name, email address, telephone number, and whether the visitor is a licensed real estate agent. Those fields exist so the Registration Team can answer a community-update request and send notices if Mattamy Homes later publishes Arbourview floor plans, pricing, a deposit schedule, or a VIP launch date.",
      "With those five fields, the site also stores first-touch UTM parameters (utm_source, utm_medium, utm_campaign, utm_term, and utm_content), the path of the page where the form was submitted, and a consent timestamp. That bundle is retained as the CASL proof-of-consent record. A hidden honeypot field and a minimum time-to-submit check exist only to reject automated spam; they are not used to build marketing profiles.",
    ],
  },
  {
    h2: "PIPEDA — identified purpose and limited collection",
    paragraphs: [
      "This site is operated with the intent of complying with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). Collection is limited to the registration fields and UTM context described above. The identified purpose is to administer the Arbourview community-update list and to demonstrate consent. Personal information is not sold. It is kept only as long as that purpose requires, or as a statute requires, and is stored with a contractual processor rather than in an unmanaged inbox.",
    ],
  },
  {
    h2: "Supabase as the data processor",
    paragraphs: [
      "Registration rows are written to a Postgres database hosted by Supabase, a third-party processor. Inserts from this application use the public anonymous key under a row-level security policy that permits insert-only from the anonymous role. A service-role credential is not shipped in browser code and is not used by the public registration route.",
    ],
  },
  {
    h2: "Access, correction, and deletion — same form, no phone or email",
    paragraphs: [
      "Records remain on the Arbourview update list while they are needed to send project notices, and for a reasonable period afterward so a CASL consent question can be answered, unless a shorter period is required by law.",
      "To request that a record be deleted, corrected, or provided to you, use the same five-field registration form that appears in the hero, on interior pages, and at /register. Complete the fields as usual and state clearly in the submission that it is a privacy request (deletion, access, or correction) rather than a VIP-update request. The Registration Team processes verified requests through that form. This site publishes no phone number, no personal email address, and no mailto or tel link; the form is the sole contact mechanism, including for PIPEDA requests.",
    ],
  },
  {
    h2: "Cookies, Google Analytics 4, Google Tag Manager, and Meta Pixel",
    paragraphs: [
      "Measurement on this site may include Google Analytics 4 (GA4), Google Tag Manager (GTM), and the Meta (Facebook) Pixel. Those vendors can set cookies or similar identifiers and process device and usage data under their own policies. Conversion measurement includes a GA4 form_submit event and a Meta Pixel Lead event after a successful registration, both fired from the thank-you page so a back-button does not double-count. A floor_plan_view event may fire when collection cards on the floor-plans page enter the viewport. There is no phone_click event, because this information hub publishes no phone number to click.",
      "Analytics identifiers are supplied as environment variables. Until those values are present, the corresponding scripts stay inactive. Scripts load after the page is interactive so they do not delay the hero image or the answer-first summary.",
    ],
  },
  {
    h2: "CASL commercial electronic messages",
    paragraphs: [
      "Electronic messages about Arbourview and similar pre-construction opportunities are sent only when a visitor has checked the consent box on the registration form. That box is never pre-checked. Consent, the time of consent, and the page path are stored together. Each commercial electronic message will include a working unsubscribe mechanism. Consent can also be withdrawn by submitting a request through the same registration form.",
    ],
  },
  {
    h2: "Accessibility — AODA and WCAG 2.1 AA",
    paragraphs: [
      "This public-facing site is built to meet WCAG 2.1 Level AA. Ontario's Accessibility for Ontarians with Disabilities Act (AODA) applies to websites of this kind. If a page, table, form, or map is difficult to use, submit a note through the registration form so the Registration Team can review it. Do not use a phone number or personal email; none is published here.",
    ],
  },
  {
    h2: "Independence reminder on personal information",
    paragraphs: [
      `${SITE_ORG_NAME} is not Mattamy Homes. Submitting the form does not create a purchase agreement with the builder and does not transfer personal information to Mattamy Homes unless a separate, lawful disclosure is later required to fulfil the registration purpose you requested. Prices, sizes, and specifications described on this information hub remain subject to change. E.&O.E. Information current as of ${LAST_UPDATED}.`,
    ],
  },
];

export const TERMS_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Independent information resource, not the builder",
    paragraphs: [
      `These terms govern use of ${SITE_ORG_NAME} (${SITE_URL}/), an independent information and registration website covering Arbourview in Georgetown, Ontario. Mattamy Homes is the developer of the project. This site is not affiliated with, endorsed by, or operated by Mattamy Homes. Nothing published here is a representation by the builder.`,
    ],
  },
  {
    h2: "As-is information, E.&O.E.",
    paragraphs: [
      `Material on this site is general information only. It is not an offer to sell, a solicitation to buy, or a statement that any home is available. Prices, sizes, specifications, incentives, deposits, occupancy, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`,
      "Starting prices, the deposit schedule, occupancy timing, incentives, exact interior sizes, lot widths, plan names, unit counts, and assignment policy have not been published by Mattamy Homes for Arbourview and are labelled to be announced. They must be verified against the builder's released documents at VIP launch.",
    ],
  },
  {
    h2: "No legal, tax, financial, or investment advice",
    paragraphs: [
      "Nothing on this Arbourview information hub is legal, tax, financial, or investment advice. Passages about deposits, closing costs, land-transfer tax, HST treatment, trails, schools, GO Transit, or highways are general Ontario or Georgetown context unless a fact is sourced to Mattamy Homes' official Arbourview page. This site does not guarantee appreciation, allocation, approval, rental yield, or returns, and it does not describe Arbourview as a guaranteed or risk-free purchase.",
    ],
  },
  {
    h2: "What registration does and does not do",
    paragraphs: [
      "Submitting the five-field form requests to be added to a list to receive Arbourview information when it is released. Registration is free and creates no obligation to purchase. It does not reserve a lot, a plan, or a sales appointment, and it does not create VIP priority with Mattamy Homes unless the builder independently confirms such a program. The operator may refuse or remove a registration.",
    ],
  },
  {
    h2: "Intellectual property and neighbourhood photography",
    paragraphs: [
      "Project names, builder names, trademarks such as WideLot™, and any official photographs or renderings remain the property of their respective owners. Photographs on this site are neighbourhood-context imagery of downtown Georgetown, Hungry Hollow trail character, and WideLot™-style streetscape context. They are not official Mattamy Homes architectural renderings of Arbourview and must not be treated as a representation of finished homes, landscaping, views, or a site plan.",
    ],
  },
  {
    h2: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by Ontario law, the operator of this site is not liable for decisions made on the basis of information published here, including decisions to register, to wait, or to purchase. Verify every figure with the builder's released price list, deposit schedule, and agreement of purchase and sale, and with independent professional advisors.",
    ],
  },
  {
    h2: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
    ],
  },
];
