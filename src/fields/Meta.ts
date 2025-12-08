import { Field } from "payload";

export const metaFields: Field[] = [
  {
    name: "meta",
    type: "group",
    label: "Metadata",
    fields: [
      {
        name: "title",
        label: "Meta Title",
        type: "text",
        localized: true,
        admin: {
          description: "Used in <title> and SEO.",
        },
      },
      {
        name: "description",
        label: "Meta Description",
        type: "textarea",
        localized: true,
        admin: {
          description: "Used in <meta name='description'> for SEO.",
        },
      },
      {
        name: "image",
        label: "Meta Image",
        type: "upload",
        relationTo: "media",
        required: false,
        admin: {
          description: "Used for Open Graph and Twitter Card.",
        },
      },
    ],
  },
];
