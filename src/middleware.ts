import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const localization = {
  locales: [
    {
      //done!
      code: "de",
      label: "🇩🇪 Deutsch",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "en",
      label: "🇬🇧 English",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "fr",
      label: "🇫🇷 Français",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "it",
      label: "🇮🇹 Italiano",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "es",
      label: "🇪🇸 Español",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "pt-br",
      label: "🇵🇹🇧🇷 Português",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "pl",
      label: "🇵🇱 Polski",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "ko",
      label: "🇰🇷 한국어",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "es-mx",
      label: "🇪🇸🇲🇽 Español",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "cs",
      label: "🇨🇿 Česky",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "hu",
      label: "🇭🇺 Magyar",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "sk",
      label: "🇸🇰 Slovenský",
      fallbackLocale: "en",
    },
    {
      //done!
      code: "cn",
      label: "🇨🇳 中文",
      fallbackLocale: "en",
    },
  ],
  defaultLocale: "de",
};

const SUPPORTED_LANGUAGES = localization.locales.map((locale) => locale.code);
const DEFAULT_LANGUAGE = "en";

function detectLanguage(req: NextRequest): string {
  const acceptLang = req.headers.get("accept-language") || "";

  const acceptedLanguages = acceptLang
    .split(",")
    .map((part) => {
      const [langRaw, qValueRaw] = part.trim().split(";q=");
      const lang = langRaw?.toLowerCase()?.split("-")[0] || "";
      const quality = qValueRaw ? parseFloat(qValueRaw) : 1.0;

      return lang ? { lang, quality } : null;
    })
    .filter(
      (entry): entry is { lang: string; quality: number } =>
        !!entry && !!entry.lang,
    )
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of acceptedLanguages) {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      return lang;
    }
  }

  return DEFAULT_LANGUAGE;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = localization.locales
    .map((locale) => locale.code)
    .some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

  if (pathnameHasLocale) return;

  if (pathname === "/") {
    const detectedLang = detectLanguage(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLang}`;

    return NextResponse.redirect(url);
  }

  request.nextUrl.pathname = `/${DEFAULT_LANGUAGE}/`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|admin|assets|api|fonts|lottie|images|media|prototype|eras|next|scripts|onetrust|favicon).*)",
  ],
};
