import {
  and,
  ControlProps,
  hasType,

  RankedTester,
  rankWith,
  schemaMatches,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsMultiEnumProps } from "@jsonforms/react";
import { withVanillaControlProps } from "@jsonforms/vanilla-renderers";

const VanillaMultiEnum = ({ data, label }: ControlProps) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px 0",
      }}
    >
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>ME{label}:</span>
      <span>{data || "N/A"}</span>
    </div>
  );
};

export const VanillaMultiEnumTester: RankedTester = rankWith(
  10,
  and(
    uiTypeIs("Control"),
    //and(
    schemaMatches(
      (schema) =>
        hasType(schema, "array")
      
    )

    //  schemaSubPathMatches('items', (schema, rootSchema) => {
    //    const resolvedSchema = schema.$ref
    //      ? resolveSchema(rootSchema, schema.$ref, rootSchema)
    //      : schema;
    //    return hasOneOfItems(resolvedSchema) || hasEnumItems(resolvedSchema);
    //  }),
    //),
  )
);

export default withVanillaControlProps(
  withJsonFormsMultiEnumProps(VanillaMultiEnum));
//export default withJsonFormsControlProps(LeftRightDisplay);
