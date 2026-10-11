"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import { useContext, useState } from "react";
import { TiFolderAdd } from "react-icons/ti";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleAddtoPlan = () => {
    const isExist = plan.find((p) => p.id === workout.id);

    if (isExist) {
      return;
    }

    if (plan.length >= 5) {
      alert("Sorry! You can only add up to 5 workout");
      return;
    }

    setPlan([...plan, workout]);
  };

  return (
    <button
      onClick={() => handleAddtoPlan()}
      className="btn bg-[#C2F800] font-bold text-black rounded-lg disabled:opacity-40  disabled:pointer-none"
      disabled={plan.length >= 5}
    >
      <TiFolderAdd size={20} /> Add to today's plan
    </button>
  );
};

export default AddButton;
