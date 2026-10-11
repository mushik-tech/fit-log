import Banner from "@/Components/Homepage/Banner";
import WorkOuts from "@/Components/Homepage/WorkOuts";
import WorkOutsLoading from "@/Components/Homepage/WorkOutsLoading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="font-sans">
      <Banner></Banner>
      <Suspense fallback={<WorkOutsLoading />}>
        <WorkOuts />
      </Suspense>
    </div>
  );
}
