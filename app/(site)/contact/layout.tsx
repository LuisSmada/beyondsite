export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-y-hidden bg-ui-bg pr-[45] pl-[45]">{children}</div>
  );
}
