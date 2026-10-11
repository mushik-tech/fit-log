"use client";

import { IWorkout } from "@/types/workout.types";
import React, { createContext, SetStateAction, useState } from "react";

export interface IWorkoutInfo {
  plan: IWorkout[];
  setPlan: React.Dispatch<SetStateAction<IWorkout[]>>;
  savePlan: IWorkout[];
  setSavePlan: React.Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutInfo>({
  plan: [],
  setPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [savePlan, setSavePlan] = useState<IWorkout[]>([]);

  const workoutInfo: IWorkoutInfo = {
    plan,
    setPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <WorkoutContext.Provider value={workoutInfo}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
