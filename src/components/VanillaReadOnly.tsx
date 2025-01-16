import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, scopeEndsWith } from "@jsonforms/core";

const VanillaReadOnly = ({ data, label }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontWeight: "bold", width: "40%" }}>{label}</div>
      <div style={{ color: "#555", width: "60%" }}>{data || "N/A"}</div>
    </div>
  );
};

export default withJsonFormsControlProps(VanillaReadOnly);

// Tester function

export const vanillaReadOnlyTester = rankWith(
  2, // Priorité du renderer
  scopeEndsWith("readOnly") // Condition : appliquer ce renderer aux champs en lecture seule
);
