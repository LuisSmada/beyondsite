interface IAboutItem {
  title: string;
  description: string;
}

export const AboutItemss = (props: IAboutItem) => {
  return (
    <>
      <div
        className="
          h-[300px] w-[250px] px-5 py-5 rounded-2xl
          bg-ui-surface text-brand-900 shadow-xl
           border border-accent-500/50
        "
      >
        <div className="  flex h-[calc(100%-40px)] flex-col justify-end items-start w-full">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div className="text-[14px] mb-3">{props.description}</div>
        </div>
      </div>
    </>
  );
};

export const AboutItems = ({ title, description }: IAboutItem) => {
  return (
    <div
      className="
        group h-full w-full rounded-2xl bg-ui-surface p-6
        shadow-sm border border-ui-border
        transition-all duration-200
        hover:-translate-y-1 hover:border-accent-500/40
        hover:shadow-[0_18px_55px_rgba(12,52,61,.14)]
        hover:ring-1 hover:ring-accent-500/20
      "
    >
      <div className="h-0.5 w-10 bg-accent-500/70 rounded-full mb-4" />

      <div className="text-lg font-bold text-brand-900">{title}</div>
      <p className="mt-2 text-sm text-ui-textMuted">{description}</p>
    </div>
  );
};
