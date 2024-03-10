import React from "react";

export default function GenederCheckbox() {
  return (
    <>
      <div className="flex">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mx-2">Male</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-sm"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mx-2">Female</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-sm"
            />
          </label>
        </div>
      </div>
    </>
  );
}
