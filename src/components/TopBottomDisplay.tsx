import React from "react";
import {
  ControlProps,
  isControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const TopBottomDisplay: React.FC<ControlProps> = ({ data, label }) => {
  const isLongText = typeof data === "string" && data.length > 20;
  return (
    <div
      style={{
        margin: "10px 0",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</div>
      <div
        style={{
          whiteSpace: isLongText ? "pre-wrap" : "normal",
          wordBreak: "break-word",
          color: "#555",
        }}
      >
        {data || "N/A"}
      </div>
    </div>
  );
};

export const topBottomTester: RankedTester = rankWith(
  4, // Priorité
  (uiSchema, schema) =>
    isControl(uiSchema) && // Vérifie que c'est un contrôle
    schema?.type === "string" // Appliqué uniquement aux chaînes
);

export default withJsonFormsControlProps(TopBottomDisplay);
