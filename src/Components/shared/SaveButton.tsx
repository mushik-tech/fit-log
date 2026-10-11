"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import React, { useContext, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  const isSelected = savePlan.find((p) => p.id === workout.id);

  const handleAddtoSave = () => {
    const isExist = savePlan.find((p) => p.id === workout.id);

    if (isExist) {
      alert("Sorry! Alread Saved");
      return;
    }

    setSavePlan([...savePlan, workout]);
  };

  return (
    <button
      onClick={() => handleAddtoSave()}
      className="btn btn-outline border-[#2D313B] rounded-lg"
      disabled={!!isSelected}
    >
      {isSelected ? <MdBookmarkAdded /> : <FaRegBookmark />}
      {isSelected ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;
