import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Stories & Desert Experiences",
  description: "Read real stories from travelers who explored Agafay desert. Adventure tales, family experiences, and romantic getaways in Morocco.",
  openGraph: {
    title: "Travel Stories & Desert Experiences",
    description: "Real stories from travelers who explored Agafay desert with quad biking and camel riding adventures.",
    images: ['/images/Quad-biking-in-a-desert-landscape.jpg'], 
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}