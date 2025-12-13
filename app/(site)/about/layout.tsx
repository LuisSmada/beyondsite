export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen overflow-x-hidden bg-ui-bg px-11">{children}</div>
  );
}
