import React from "react";
import {
  ControlProps,
  isControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const TopBottomDisplay = ({ data, label }: ControlProps) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</div>
      <div style={{ whiteSpace: "pre-wrap" }}>{data || "N/A"}</div>
    </div>
  );
};

export const topBottomTester: RankedTester = rankWith(
  3,
  (uiSchema, schema) => isControl(uiSchema) && schema?.type === "string"
);

export default withJsonFormsControlProps(TopBottomDisplay);
