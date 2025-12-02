import { Suspense } from "react";
import Work from "@/components/work/Work";
import Home from "@/components/home/Home";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
      <Work seeAll={true} />
    </Suspense>
  );
}
