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
        <p className={labelClassName || "body3"} htmlFor={label}>
          {label}
        </p>
      )}
    </>
  );
}
