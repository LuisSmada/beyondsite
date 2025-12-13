import { Plus } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";

interface IHomeServiceItem {
  title: string;
  description: string;
  href: string;
}

export const HomeServiceItem = (props: IHomeServiceItem) => {
  return (
    <Link href="/services" className="group block">
      <div
        className="
          h-[300px] w-[250px] px-5 py-5 rounded-2xl
          bg-ui-surface text-brand-900 shadow-xl
          cursor-pointer border border-transparent
          transition-all duration-200 ease-out
          group-hover:scale-[1.02] group-hover:-translate-y-1
          group-hover:border-accent-500/50
          group-hover:shadow-[0_18px_55px_rgba(12,52,61,.16)]
          group-hover:ring-1 group-hover:ring-accent-500/25
        "
      >
        <div className="">
          <div className="bg-brand-900 w-10 h-10 rounded-[100%] "></div>
        </div>
        <div className="  flex h-[calc(100%-40px)] flex-col justify-end items-start w-full">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div className="text-[14px] mb-3 text-ui-textMuted">
            {props.description}
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-accent-500 rounded-[100%] mr-2 text-ui-bg flex items-center justify-center">
              <Plus className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold">Read more</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
