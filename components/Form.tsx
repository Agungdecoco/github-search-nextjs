import React from "react";

export default function Form({ value, onChange }: Props) {
  return (
    <input
      type="text"
      className="border border-zinc-200 p-3 rounded-[8px] w-full"
      placeholder="search github user"
      value={value}
      onChange={onChange}
    />
  );
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
