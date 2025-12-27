import { LucideProps, Plus } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

interface IHomeServiceItem {
  title: string;
  description: string;
  href?: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  minHeight?: string;
}

const Wrapper = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  if (href) {
    return (
      <Link href={href} className="group block">
        {children}
      </Link>
    );
  } else {
    return <div className="group bloc">{children}</div>;
  }
};

export const HomeServiceItem = (props: IHomeServiceItem) => {
  const t = useTranslations("HomePage");
  const Icon = props.icon;

  return (
    <Wrapper href={props.href}>
      <div
        className={`
          h-[310px] w-[250px] px-5 py-5 rounded-2xl
          bg-ui-surface text-brand-900 shadow-xl
           border
          transition-all duration-200 ease-out
          flex flex-col justify-between
          ${props.href ? " border-transparent" : "border-accent-500/50"}
          ${props.href && " cursor-pointer"}
          ${
            true &&
            "group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:border-accent-500/50 group-hover:shadow-[0_18px_55px_rgba(12,52,61,.16)] group-hover:ring-1 group-hover:ring-accent-500/25"
          }
        `}
      >
        <div className="flex items-start justify-between">
          <div className="w-full h-10">
            {Icon && (
              <div className="bg-brand-900 w-10 h-10 rounded-[100%] flex items-center justify-center">
                <Icon className="h-5 w-5 text-ui-surface" />
              </div>
            )}
          </div>
        </div>
        <div className="  flex flex-col w-full">
          <div className="font-bold text-xl h-auto mb-2">{t(props.title)}</div>
          <div
            className={`text-[14px] mb-3 text-ui-textMuted line-clamp-3 ${props.minHeight ? `min-h-[${props.minHeight}px]` : "min-h-[63px]"} flex items items-end`}
          >
            {t(props.description)}
          </div>
          {props.href && (
            <div className="flex items-center">
              <div className="w-6 h-6 bg-accent-500 rounded-[100%] mr-2 text-ui-bg flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold">{t("#ReadMore")}</div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
