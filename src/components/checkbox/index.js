import React from "react";

export default function Checkbox({
  label,
  checked,
  handleCheckboxChange,
  labelClassName,
  id,
}) {
  return (
    <>
      <div
        onClick={handleCheckboxChange(id, !checked)}
        className={checked ? "checkbox-checked" : "checkbox"}
      ></div>
      {label && (
        <p
          onClick={handleCheckboxChange(id, !checked)}
          className={labelClassName || "body3 cursor-pointer"}
          htmlFor={label}
        >
          {label}
        </p>
      )}
    </>
  );
}
