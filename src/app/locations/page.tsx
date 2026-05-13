"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Location } from "@/types/locations";
import VaskehalCard from "@/components/global/cards/VaskehalCard";

export default function FindVaskehal() {
  const { getLocations } = useAuth();
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    async function loadLocations() {
      const data = await getLocations();
      setLocations(data);
    }

    loadLocations();
  }, [getLocations]);

  return (
    <main className="w-full">
      <section className="flex w-full flex-col gap-5">
        {locations.map((location) => (
          <VaskehalCard key={location.location_pk} city={location.location_city} address={location.location_address} openingHours="07 - 22" image={location.location_img} href="#" location_pk={""} />
        ))}
      </section>
    </main>
  );
}
