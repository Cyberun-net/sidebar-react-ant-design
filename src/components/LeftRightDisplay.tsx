import React from "react";
import {
  ControlProps,
  isControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const LeftRightDisplay = ({ data, label }: ControlProps) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px 0",
      }}
    >
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>{label}:</span>
      <span>{data || "N/A"}</span>
    </div>
  );
};

export const leftRightTester: RankedTester = rankWith(3, isControl);

export default withJsonFormsControlProps(LeftRightDisplay);
