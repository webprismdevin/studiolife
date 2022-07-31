// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "basicSEO",
  group: "seo",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      // validation: Rule => Rule.required()
    },
    {
      name: "description",
      type: "text",
      // validation: Rule => Rule.required()
    },
    {
      name: "ogTitle",
      title: "Open Graph: Title",
      type: "string",
      // validation: Rule => Rule.required()
    },
    {
      name: "ogImage",
      title: "Open Graph: Image",
      type: "image",
      description: "Recommended image ratio: 1200x630",
      // validation: Rule => Rule.required()
    },
    {
      name: "ogDescription",
      title: "Open Graph: Description",
      description: "A brief description of the content.",
      type: "text",
      // validation: Rule => Rule.required()
    },
  ],
};
