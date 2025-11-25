// app/booking-policy/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Policy & Terms",
  description: "Learn about our booking process, cancellation policy, payment terms, and customer service guidelines for desert adventures.",
};

export default function BookingPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}