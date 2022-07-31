/* eslint-disable import/no-anonymous-default-export */

import basicSEO from "./parts/basicSEO";
import defaultGroups from "./parts/defaultGroups";

// studio/schemas/about.js
export default {
    name: "help",
    title: "Help",
    type: "document",
    __experimental_actions: ["update", "create", "publish"],
    groups: defaultGroups,
    fields: [
      basicSEO,
      {
        title: "Hero Heading",
        description:
          "This heading will appear at the top of the page.",
        type: "string",
        name: "heading",
        group: 'content'
      },
      {
        title: "Subheading",
        description:
          "This subheading will appeart at the top of the page. A great place to put a help phone number, email address, or other helpful contact info.",
        type: "text",
        name: "subheading",
        group: 'content'
      },
      {
        title: "Hero Button",
        name: "heroButton",
        group: 'content',
        type: "string",
        description: "Text for the button in the hero section. If no text is set, the button will be hidden."
      },
      {
        name: 'paragraphOne',
        type: 'text',
        group: 'content',
        title: 'First paragraph after the hero section.'
      },
      {
        name: 'faqs',
        title: 'Frequently Asked Questions',
        type: 'array',
        group: 'content',
        of: [{type: 'reference', to: {type: 'faq'}}],
      },
    ],
  };