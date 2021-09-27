export default {
  name: "work",
  title: "Assigned Works",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "file",
      title: "Attachment/File",
      type: "file",
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
