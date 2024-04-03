import Column from "@/components/Column";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { todoData } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto">
          {todoData.map(({ id, todos }, index) => (
            <Column key={id} id={id} todos={todos} index={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
