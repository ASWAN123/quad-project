// app/sustainability/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Tourism - Eco-Friendly Desert Adventures",
  description: "Committed to responsible tourism. Learn how we protect the Agafay Desert environment and support local communities.",
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}