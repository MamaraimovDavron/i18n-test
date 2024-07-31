import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Flag_US from "../images/us.jpg";
import Flag_DE from "../images/germany.jpg";
import Flag_RU from "../images/russian.jpg";
import Flag_ES from "../images/spain.jpg";

export default function Navbar() {
  const t = useTranslations("Home");

  return (
    <header className="bg-red-300 fixed z-30 w-full p-4">
      <nav className="flex justify-end gap-4 p-5">
        <Link href="/ru">
          <Image src={Flag_RU} alt="russian flag" width={25} height={25} />
        </Link>
        <Link href="/en">
          <Image src={Flag_US} alt="us flag" width={25} height={25} />
        </Link>
        <Link href="/es">
          <Image src={Flag_ES} alt="spain flag" width={25} height={25} />
        </Link>
        <Link href="/de">
          <Image src={Flag_DE} alt="germany flag" width={25} height={25} />
        </Link>
      </nav>
      <div className="text-center text-1xl font-bold">{t("example1")}</div>
      <p className="text-center text-2xl font-bold">{t("example2")}</p>
    </header>
  );
}
