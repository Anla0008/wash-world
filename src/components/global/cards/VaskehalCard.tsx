"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButtonAnchorTag from "../buttons/anchortag/PrimaryButtonAnchorTag";
import useRandomWaitStatus from "@/hooks/useRandomWaitStatus";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

// Værdierne her skal senere hentes dynamisk fra car_wash_locations db tabel

const VaskehalCard = ({ city, address, openingHours, image, href }: VaskehalCardProps) => {
  const status = useRandomWaitStatus();
  const [isFavorite, setIsFavorite] = useState(false);

  const statusColor = status === "Kort ventetid" ? "bg-(--brand-green)" : status === "Moderat ventetid" ? "bg-(--splash)" : "bg-(--error-red)";

  const statusTextColor = status === "Kort ventetid" ? "text-(--brand-green)" : status === "Moderat ventetid" ? "text-(--splash)" : "text-(--error-red)";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <article className="col-span-2 relative flex gap-3 p-3 bg-(--gray-5) text-(--foreground-reverse) rounded-md">
      <Image src={image} alt={`WashWorld ${city}`} width={110} height={170} className="rounded-md object-cover" />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex gap-6 pr-8 items-center">
          <p className="extra-bold">{city}</p>

          <div className="ml-auto flex gap-3">
            <p className={`${statusTextColor} text-[10px]`}>{status}</p>
            <span className={`h-2 w-2 rounded-full ${statusColor}`}></span>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p>{openingHours}</p>
          <p>{address}</p>
        </div>

        <div className="flex items-center gap-8">
          <Link href={href} className="underline text-xs" aria-label={`Læs mere om vaskehallen i ${city}`}>
            Læs mere
          </Link>

          <div className="ml-auto">
            <PrimaryButtonAnchorTag href={googleMapsUrl} target="_blank">
              Vis vej
            </PrimaryButtonAnchorTag>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => setIsFavorite(!isFavorite)} aria-label={isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"} className="absolute top-3 right-3 text-2xl text-(--foreground-reverse)">
        {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
      </button>
    </article>
  );
};

export default VaskehalCard;
