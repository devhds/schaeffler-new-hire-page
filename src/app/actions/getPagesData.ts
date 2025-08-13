import { getPayload } from "payload";
import config from "@payload-config";
import { Config } from "@/payload-types";
import { localization } from "@/middleware";

export async function getCurrentPageData(
  lang: Config["locale"],
  slug: Config["collections"]["pages"],
) {
  const payload = await getPayload({ config });

  const pagesData = await payload.find({
    collection: "pages",
    locale: lang,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return pagesData.docs[0];
}

export async function getAllPageTranslations(
  pageId: string,
  currentLanguage: Config["locale"],
) {
  const payload = await getPayload({ config });

  const translations: Record<string, string | null> = {};

  for (const locale of localization.locales) {
    try {
      const doc = await payload.findByID({
        collection: "pages",
        id: pageId,
        locale: locale.code as Config["locale"],
      });

      translations[locale.code] = `/${locale.code}/${doc.slug}`;
    } catch (error) {
      console.error(`Failed to fetch translation for ${locale.code}`, error);
      translations[locale.code] = null;
    }
  }

  const entries = Object.entries(translations);

  const reordered = [
    ...entries.filter(([lang]) => lang === currentLanguage),
    ...entries.filter(([lang]) => lang !== currentLanguage),
  ];

  const orderedSlugs = Object.fromEntries(reordered);

  return orderedSlugs;
}
