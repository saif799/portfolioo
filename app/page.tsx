import Home from "../components/home/Home";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import Contact from "../components/contact/Contact";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Home />
      <Suspense fallback={<div>Loading works...</div>}>
        <Work seeAll={false} />
      </Suspense>
      <Skills />
      <Contact />
    </>
  );
}
