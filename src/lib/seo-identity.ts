/** Single source of truth for published first-party identity links. */
export const SITE_ORIGIN = "https://seaintenterprises.com";
export const SEAINT_ORG_ID = `${SITE_ORIGIN}/#organization`;
export const LUIS_PROFILE_URL = `${SITE_ORIGIN}/leadership/luis-altamirano`;
export const LUIS_PERSON_ID = `${LUIS_PROFILE_URL}#person`;
export const LUIS_LINKEDIN = "https://www.linkedin.com/in/luis-altamirano-60b4ab3b8";

/** Only articles specifically credited to Luis should claim Person authorship. */
export function isLuisAuthor(author: string): boolean {
  return ["Luis Altamirano", "Luis Saint Altamirano", "Luis ‘Saint’ Altamirano", 'Luis "Saint" Altamirano'].includes(author.trim());
}

/** The firm is described here using only public, currently supportable details. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": SEAINT_ORG_ID,
  name: "SEAINT Enterprises",
  alternateName: "SEAINT Enterprise",
  url: SITE_ORIGIN,
  description: "Technology and investment-focused enterprise developing software, applied AI, and technology-led business operations.",
  founder: [{ "@type": "Person", "@id": LUIS_PERSON_ID, name: "Luis Altamirano", url: LUIS_PROFILE_URL }],
  knowsAbout: ["Enterprise software", "Applied artificial intelligence", "Automation", "Small-business technology", "Construction technology"],
};
