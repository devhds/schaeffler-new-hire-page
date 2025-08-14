import type { CollectionConfig } from "payload";
import path from "path";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  folders: true,
  upload: {
    staticDir:
      process.env.PAYLOAD_UPLOAD_DIR ||
      path.join(process.cwd(), "public", "media"),
  },
};
