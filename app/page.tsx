import React, { Suspense } from "react";
import TodosList from "./todos/TodosList";

function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
