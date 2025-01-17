import React from "react";
import {
  ControlProps,
  isControl,
  rankWith,
  RankedTester,
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const MyVanillaEnumControl: React.FC<ControlProps> = ({
  data,
  label,
  schema,
}) => {
  const isArray = schema?.type === "array";
  const displayData = isArray ? (Array.isArray(data) ? data : []) : data;

  return (
    <div style={{ margin: "10px 0" }}>
      {/* Label */}
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}:</div>

      {/* Affichage des données */}
      {isArray && Array.isArray(displayData) ? (
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          {displayData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <span>{displayData || "N/A"}</span>
      )}
    </div>
  );
};

export const myVanillaEnumTester: RankedTester = rankWith(
  4, 
  (uiSchema, schema) =>
    isControl(uiSchema) &&
    ((schema?.type === "string" && Array.isArray(schema.enum)) ||
      (schema?.type === "array" &&
        schema.items &&
        typeof schema.items === "object" &&
        Array.isArray((schema.items as { enum?: any }).enum)))
);

export default withJsonFormsControlProps(MyVanillaEnumControl);
