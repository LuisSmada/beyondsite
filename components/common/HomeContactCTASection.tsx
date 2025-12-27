import { useTranslations } from "next-intl";
import { Button } from "../ui/Button";
import Link from "next/link";

interface IHomeContactCTASection {
  title: string;
  desc: string;
}

export const HomeContactCTASection = ({
  title,
  desc,
}: IHomeContactCTASection) => {
  const t = useTranslations("HomePage");

  return (
    <div className="pb-20 mt-10 w-full px-11 2xl:px-81">
      <div
        className="rounded-2xl bg-ui-surface p-8 shadow-md
                grid grid-cols-1 md:flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div>
          <div className="text-xl font-bold text-brand-900 text-center md:text-start">
            {title}
          </div>
          <p className="text-ui-textMuted mt-1 text-center md:text-start">
            {desc}
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/contact">
            <Button
              className="h-auto  bg-accent-500 py-2.5 px-4 rounded-3xl text-ui-surface
           font-bold hover:scale-[1.02] hover:-translate-y-1
                hover:bg-accent-500
               "
            >
              {t("#ContactUs")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
