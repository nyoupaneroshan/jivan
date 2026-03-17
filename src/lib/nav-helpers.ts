import type { NavItem } from "@/lib/nav";

export function getSubItems(item: NavItem): NavItem[] {
  // mega sections: children (sections) contain items (links)
  // dropdown nesting: children can contain more children
  return item.children?.length ? item.children : item.items?.length ? item.items : [];
}

export function hasSubItems(item: NavItem): boolean {
  return getSubItems(item).length > 0;
}
