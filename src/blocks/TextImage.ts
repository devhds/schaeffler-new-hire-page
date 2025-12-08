import { Block } from "payload";
import { AnchorNavigation } from "@/fields/AnchorNavigation";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const TextImage: Block = {
  slug: "textImageBlock",
  labels: {
    singular: "Text Image Block",
    plural: "Text Image Blocks",
  },
  interfaceName: "TextImageBlockTypes",
  imageURL: "/api/media/file/TextImagePreview.png",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "portableText",
      type: "richText",
      required: true,
      localized: true,
      editor: lexicalEditor(),
    },
    {
      name: "imageContent",
      type: "group",
      fields: [
        {
          name: "image",
          type: "upload",
          required: false,
          relationTo: "media",
          label: "Image",
          admin: {
            description:
              "Optional field, when image is selected – it will be placed under the rich text in UI",
          },
        },
        {
          name: "underline",
          type: "text",
          required: false,
          localized: true,
          admin: {
            description: "Optional field",
          },
        },
      ],
      admin: {
        condition: (data) => {
          return !data.textContentOnly;
        },
      },
    },
    AnchorNavigation,
  ],
};
