import link from "./link";

export default {
  name: "hero",
  title: "Hero Section",
  description: "Main section on the homepage",
  type: "object",
  group: "content",
  fields: [
    {
      name: "title",
      title: "Title",
      description:
        "This title will appear in the hero unit at the top of the page",
      type: "string",
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttons',
      type: 'array',
      of: [{type: 'link'}],
      validation: Rule => Rule.max(2)
    }
  ],
};
