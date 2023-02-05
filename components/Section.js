import { useState } from "react";
import AddSubSectionModal from "./SectionComponents/AddSubSectionModal";
import SectionBanner from "./SectionComponents/SectionBanner";

export default function Section() {
  return (
    <div className="w-[300px] h-screen flex flex-col items-center">
      <SectionBanner />

      {/* <AddSubSectionModal /> */}
    </div>
  );
}
