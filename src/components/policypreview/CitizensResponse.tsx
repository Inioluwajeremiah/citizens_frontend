import React from "react";
import AgeRangeDistribution from "../charts/AgeRangeDistribution";
import AwarenessChart from "../charts/AwarenessChart";
import EffectivenessChart from "../charts/EffectivenessChart";
import GenderDistrubution from "../charts/GenderDistrubution";
import StateDistribution from "../charts/StateDistribution";

interface DataItem {
  name: string;
  value: number;
}

interface ChartsProps {
  data: DataItem[];
}

const CitizensResponse: React.FC<ChartsProps> = ({}) => {
  return (
    <div className="container mx-auto w-[80%] lg:w-full ">
      <p className="text-[40px] font-semibold text-blackColor">
        Citizens <span className="text-primaryColor">Response</span>
      </p>
      {/* chart div */}
      <div className=" flex flex-row flex-wrap items-center justify-center my-10 gap-4 lg:gap-8">
        <AgeRangeDistribution />
        <AwarenessChart />
        <EffectivenessChart />
        <GenderDistrubution />
        <StateDistribution />
      </div>
    </div>
  );
};

export default CitizensResponse;
