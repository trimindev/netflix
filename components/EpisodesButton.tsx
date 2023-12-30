import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function EpisodesButton() {
  return (
    <Select>
      <SelectTrigger className="w-full h-9 flex justify-center items-center gap-1 bg-[#191919] font-bold rounded-sm active:bg-opacity-90 transition-all">
        <SelectValue placeholder="Danh Sách Tập" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mùa 1</SelectLabel>

          <SelectItem value="fd">tập 1</SelectItem>
          <SelectItem value="fd">tập 2</SelectItem>
          <SelectItem value="fd">tập 3</SelectItem>
          <SelectItem value="fd">tập 4</SelectItem>
          <SelectItem value="fd">tập 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default EpisodesButton;
