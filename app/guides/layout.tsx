// app/guides/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Guides - Professional Desert Adventure Team",
  description: "Meet our certified local guides. Professional, experienced, and passionate about sharing Moroccan desert culture and adventure.",
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}