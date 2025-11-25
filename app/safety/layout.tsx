// app/safety/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety First - Our Commitment to Your Security",
  description: "Your safety is our top priority. Professional equipment, certified guides, and comprehensive safety protocols for all desert adventures.",
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}