"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/nav";
import { getSubItems, hasSubItems } from "@/lib/nav-helpers";

export function MobileNavNode({
  item,
  openId,
  setOpenId,
  onLeafClick,
  depth = 0,
}: {
  item: NavItem;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  onLeafClick: () => void;
  depth?: number;
}) {
  const children = getSubItems(item);
  const expandable = hasSubItems(item);
  const isOpen = openId === item.id;

  return (
    <li className="border-b border-white/10">
      <div className="relative">
        <Link
          href={item.href}
          className="block pr-12 py-4 text-white/90 hover:bg-white/10 transition"
          style={{ paddingLeft: 20 + depth * 16 }}
          onClick={(e) => {
            if (expandable) {
              // tap expands instead of navigating
              e.preventDefault();
              setOpenId(isOpen ? null : item.id);
              return;
            }
            onLeafClick();
          }}
        >
          {item.label}
        </Link>

        {expandable && (
          <button
            type="button"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white"
            aria-label="Toggle submenu"
          >
            {isOpen ? "−" : "+"}
          </button>
        )}
      </div>

      {expandable && (
        <div
          className={`overflow-hidden transition-all duration-300 bg-black/20 ${
            isOpen ? "max-h-[1200px]" : "max-h-0"
          }`}
        >
          <ul>
            {children.map((child) => (
              <MobileNavNode
                key={child.id}
                item={child}
                openId={openId}
                setOpenId={setOpenId}
                onLeafClick={onLeafClick}
                depth={depth + 1}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
