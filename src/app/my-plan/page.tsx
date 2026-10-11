"use client";

import SavedPlan from "@/Components/MyPlan/SavedPlan";
import TodayPlan from "@/Components/MyPlan/TodayPlan";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const [selectedTab, isSelectedTab] = useState("today");

  const { plan, savePlan } = useContext(WorkoutContext);

  return (
    <div className="my-10 px-20">
      <h1 className="text-3xl font-bold text-white">MY PLAN</h1>
      <p className="mt-1 text-sm text-[#9CA3AF]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* name of each tab group should be unique */}
      <div className="flex justify-between">
        <div className="tabs tabs-box bg-[#151921] w-68 p-2 rounded-2xl border-2 border-[#232732] flex gap-4">
          <input
            type="radio"
            name="my_tabs_1"
            className={`${selectedTab === "today" ? "tab-active w-1/2 rounded-2xl border-2 border-[#232732] bg-[#15171D]" : ""} tab`}
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => isSelectedTab("today")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`${selectedTab === "save" ? "tab-active w-1/2 rounded-2xl border-2 border-[#232732] bg-[#15171D]" : ""} tab`}
            aria-label="Saved"
            onClick={() => isSelectedTab("save")}
          />
        </div>
      </div>

      <div>
        {selectedTab === "today" ? (
          <TodayPlan data={plan}></TodayPlan>
        ) : (
          <SavedPlan data={savePlan}></SavedPlan>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
