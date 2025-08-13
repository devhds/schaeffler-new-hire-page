import { CollectionConfig } from "payload";
import { metaFields } from "@/fields/Meta";
import slugify from "slugify";
import { TextImage } from "@/blocks/TextImage";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title" },
  fields: [
    ...metaFields,
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      localized: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value;
            if (data?.title) {
              return slugify(data.title, { lower: true, strict: true });
            }
            return value;
          },
        ],
      },
    },
    {
      name: "textContentOnly",
      type: "checkbox",
      label: "Text Content Only",
      defaultValue: false,
      localized: true,
      admin: {
        description: "When true - using for pages with text content only",
      },
    },
    {
      name: "goBackButtonText",
      type: "text",
      label: "Go Back Button",
      localized: true,
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.textContentOnly === true,
      },
    },
    {
      name: "content",
      type: "blocks",
      required: true,
      blocks: [TextImage],
    },
  ],
};

export default Pages;
