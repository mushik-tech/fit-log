"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";

const PlanButtons = ({ id }: { id: number }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    const filteredData = plan.filter((dt) => dt.id !== id);
    setPlan(filteredData);
  };

  const handleRemove = () => {
    const filteredData = plan.filter((dt) => dt.id !== id);
    setPlan(filteredData);
  };
  return (
    <>
      <button
        onClick={() => handleMarkAsDone()}
        className="btn rounded-3xl bg-[#CCFF00] text-black font-semibold"
      >
        Mark as Done
      </button>
      <button onClick={() => handleRemove()} className="text-[#6B7280]">
        X
      </button>
    </>
  );
};

export default PlanButtons;
