import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "../ui/NavigationMenu";

type ListItemProps = React.ComponentPropsWithoutRef<typeof Link> & {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors",
              "hover:bg-ui-surface2 focus:bg-ui-surface2",
              className
            )}
            {...props}
          >
            <div className="text-sm font-semibold text-ui-text">{title}</div>
            <p className="mt-1 line-clamp-2 text-sm text-ui-textMuted">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
