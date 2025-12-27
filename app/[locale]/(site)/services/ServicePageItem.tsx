interface IServicePageItem {
  title: string;
  description: string;
  spots: string;
}

export const ServicePageItem = ({
  title,
  description,
  spots,
}: IServicePageItem) => {
  return (
    <div className="bg-ui-surface rounded-xl border border-accent-500 px-5 py-8 sm:py-5 shadow-xl relative h-auto sm:h-75 md:h-92 lg:h-80">
      {/* <div
        className="pointer-events-none absolute -top-24 -right-24 h-75 w-72 rounded-full
          bg-[radial-gradient(circle,rgba(249,191,75,0.22),transparent_60%)] blur-2xl"
      /> */}
      <div className="sm:text-xl md:text-xl font-bold text-brand-900 h-15 text-xl mb-4 sm:mb-0 md:mb-4">
        {title}
      </div>
      <div className="text-brand-900 font-semibold text-base mb-5 h-12 ">
        {description}
      </div>
      <ul className="list-disc pl-5 marker:text-ui-borderStrong space-y-1">
        {spots.split(",").map((spot, idx) => (
          <li key={idx} className="text-ui-textMuted">
            {spot.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
};
