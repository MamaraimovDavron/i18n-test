import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ru", "en", "es", "de"],

  defaultLocale: "ru",
});

export const config = {
  matcher: ["/", "/(en|ru|es|de)/:path*"],
};
