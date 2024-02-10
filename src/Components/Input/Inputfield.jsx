import React from "react";

const Inputfield = React.forwardRef(({ label, ...attributes }, ref) => {
  return (
    <div className="flex  flex-col items-center w-full space-y-4 space-x-2 justify-center content-center">
      <div>
        <label className="text-sm  space-y-2  text-gray-900">{label}</label>
        <input {...attributes} className="w-full" type="text" ref={ref} />
      </div>
    </div>
  );
});

export default Inputfield;
