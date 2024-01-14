"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SessionSelect";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface PageProps {
  sessionTotal: number;
  currentSession: number;
}

function SessionSelect({ sessionTotal, currentSession }: PageProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      defaultValue={String(currentSession)}
      onValueChange={(session) => {
        console.log(session);
        router.push(`${pathname}?ss=${session}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={`Mùa ${currentSession}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: sessionTotal }, (_, index) => (
            <SelectItem key={index + 1} value={String(index + 1)}>
              Mùa {index + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SessionSelect;
