import type { Metadata } from "next";
import GuideClient from "@/src/components/relocation-guide/GuideClient";
import { filterGroups, guideMeta } from "@/src/establishments/config";
import { establishments } from "@/src/establishments/data";

export const metadata: Metadata = {
  title: "London - Relocation Guide",
  description:
    "A modular London relocation guide with filters, search, and expandable area cards.",
};

export default function Home() {
  return (
    <GuideClient
      establishments={establishments}
      filterGroups={filterGroups}
      guideMeta={guideMeta}
    />
  );
}
