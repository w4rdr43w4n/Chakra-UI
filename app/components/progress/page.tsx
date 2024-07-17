"use client";

import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <>
      
    </>
  );
}
