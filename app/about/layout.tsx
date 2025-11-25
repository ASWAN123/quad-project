// app/about/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Quad Camel Marrakech - Local Desert Adventure Experts",
  description: "Meet our local team in Marrakech. Born and raised in Morocco, we're passionate about sharing authentic desert experiences with quad biking and camel riding.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}