export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen overflow-x-hidden bg-ui-bg  text-brand-900">
      {children}
    </div>
  );
}
