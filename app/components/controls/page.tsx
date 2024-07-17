"use client";

import { useState } from "react";

export default function Page() {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
 

  return <></>;
}
