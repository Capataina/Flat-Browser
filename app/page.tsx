import type { Metadata } from "next";
import BrowserClient from "@/src/components/browser/BrowserClient";
import { areas } from "@/src/areas/data";

export const metadata: Metadata = {
  title: "Flatbrowser - London Area & Project Browser",
  description:
    "A rubric-driven, area-by-area, project-by-project sweep of London — built to be the last research tool needed for finding an upgrade from Croydon as a graduate-visa renter.",
};

export default function Home() {
  return <BrowserClient areas={areas} />;
}
