import React from "react";

export default function menu() {
  return (
    <div
      className={classNames(
        "container mx-auto flex justify-center items-center h-screen",
        "px-5 md:px-10 sm:px-8 xl:px-0"
      )}
    >
      <div
        className={classNames("flex-none", "w-full md:w-3/4 lg:w-2/3 xl:w-1/4")}
      >
        <div
          className={classNames(
            "flex-row justify-center items-center",
            "bg-transparent"
          )}
        >
          
        </div>
      </div>
    </div>
  );
}
