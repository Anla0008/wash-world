"use client";
import { useState } from "react";
import Input from "@/components/global/forms/Input";
import TextArea from "@/components/global/forms/TextArea";
import TertriaryButton from "@/components/global/buttons/onClick/TertriaryButton";
import Swipe from "@/components/global/buttons/onClick/Swipe";

import Sorting, { SortDirection } from "@/components/global/filtering/Sorting";

export default function Home() {
  const [inputError, setInputError] = useState(true);
  const [inputValidated, setInputValidated] = useState(false);

  const [textAreaError, setTextAreaError] = useState(false);
  const [textAreaValidated, setTextAreaValidated] = useState(true);
  const [waitTimes, setWaitTimes] = useState([5, 10, 3, 8, 2]);

  const handleSortDirectionChange = (direction: SortDirection) => {
    const sorted = [...waitTimes].sort((a, b) =>
      direction === "asc" ? a - b : b - a,
    );
    setWaitTimes(sorted);
  };

  return <div className="flex flex-col align-center gap-10">
    <Input label="Label" error={inputError} validated={inputValidated} placeholder="placeholder" type="password" />
    <TextArea label="Label" error={textAreaError} validated={textAreaValidated} placeholder="placeholder"/>
    <Swipe disabled={true}>Betal noget</Swipe>
    <Sorting label="Ventetid" onDirectionChange={handleSortDirectionChange} />
    <p>{waitTimes.join(", ")}</p>
  </div>;
}
