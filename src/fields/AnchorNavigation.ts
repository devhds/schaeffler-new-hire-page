import { Field } from "payload";

export const AnchorNavigation: Field = {
  name: "anchorNavigation",
  label: "Anchor Navigation To (Optional field)",
  type: "text",
  admin: {
    description:
      "Write down to which anchor tag this block should be linked (see Navigation Links slug)",
    condition: (data) => {
      return !data?.textContentOnly;
    },
  },
};
