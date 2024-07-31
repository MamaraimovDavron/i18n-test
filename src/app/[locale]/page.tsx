import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return <h1>{t("example1")}</h1>;
}
