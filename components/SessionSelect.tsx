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
import { SelectSeparator } from "@radix-ui/react-select";

interface PageProps {
  sessionTotal: number;
  currentSession: number;
}

function SessionSelect({ sessionTotal, currentSession }: PageProps) {
  return (
    <Select>
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
