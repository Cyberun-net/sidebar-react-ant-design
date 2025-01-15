import React from "react";
import {
  ControlProps,
  isControl,
  NOT_APPLICABLE,
  RankedTester,
  rankWith,
  computeLabel,
} from "@jsonforms/core";
import { Control, withJsonFormsControlProps } from "@jsonforms/react";

const CustomHorizontalRenderer = (props: ControlProps) => {
  const {
    data,
    label,
    id,
    uischema,
    schema,
    path,
    visible,
    enabled,
    handleChange,
    required,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      {/* Label à gauche */}
      <label
        htmlFor={id}
        style={{
          flex: 1,
          textAlign: "left",
          marginRight: "16px",
          fontWeight: "bold",
        }}
      >
        {computeLabel(label, required)}
      </label>

      {/* Champ de saisie à droite */}
      <input
        type="text"
        id={id}
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        style={{
          flex: 2,
          padding: "8px",
          marginLeft: "-400px",
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
        }}
        disabled={!enabled}
        hidden={!visible}
      />
    </div>
  );
};

export default withJsonFormsControlProps(CustomHorizontalRenderer);
export const customHorizontalRendererTester = rankWith(2, isControl);
