import {withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  isControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withVanillaControlProps } from "@jsonforms/vanilla-renderers";

const LeftRightDisplay = ({ data, label }: ControlProps) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px 0",
      }}
    >
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>LR{label}:</span>
      <span>{data || "N/A"}</span>
    </div>
  );
};

export const leftRightTester: RankedTester = rankWith(5, isControl);

export default withVanillaControlProps(withJsonFormsControlProps(LeftRightDisplay));
