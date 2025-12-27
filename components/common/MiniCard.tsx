interface IMiniCard {
  title: string;
  description: string;
  isHoverable?: boolean;
}

export const MiniCard = ({ title, description, isHoverable }: IMiniCard) => {
  return (
    <div
      className={`
        group h-full w-[300px] sm:w-auto xl:w-[266px] lg:w-[233.5px] rounded-2xl bg-ui-surface p-6
        shadow-sm border
        ${isHoverable ? "border-ui-border" : "border-accent-500"}
        ${
          isHoverable &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-[0_18px_55px_rgba(12,52,61,.14)] hover:ring-1 hover:ring-accent-500/20"
        }
      `}
    >
      <div className="h-0.5 w-10 bg-accent-500/70 rounded-full mb-4" />

      <div className="text-lg font-bold text-brand-900">{title}</div>
      <p className="mt-2 text-sm text-ui-textMuted">{description}</p>
    </div>
  );
};
