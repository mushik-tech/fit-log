"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const RemoveButton = ({ id }: { id: number }) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    const filteredData = savePlan.filter((dt) => dt.id !== id);
    setSavePlan(filteredData);

    toast.info("Remove from save", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <button onClick={() => handleMarkAsDone()} className="text-[#6B7280]">
        X
      </button>
    </>
  );
};

export default RemoveButton;
