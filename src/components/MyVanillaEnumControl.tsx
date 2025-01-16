import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, isControl } from "@jsonforms/core";

interface MyVanillaEnumControlProps {
  data: string | string[];
  label: string;
}

const MyVanillaEnumControl: React.FC<MyVanillaEnumControlProps> = ({
  data,
  label,
}) => {
  const isArray = Array.isArray(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}:</div>
      {isArray ? (
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {(data as string[]).map((item, index) => (
            <li key={index} style={{ color: "#555" }}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <span style={{ color: "#555" }}>{data}</span>
      )}
    </div>
  );
};
export const myVanillaEnumTester = rankWith(
  4,
  (uiSchema, schema) =>
    isControl(uiSchema) &&
    schema?.type === "string" &&
    Array.isArray(schema.enum)
);

export default withJsonFormsControlProps(MyVanillaEnumControl);
