/* eslint-disable import/no-anonymous-default-export */

import defaultGroups from "./parts/defaultGroups";
import basicSEO from "./parts/basicSEO";

// studio/schemas/homepage.js
export default {
    name: "homepage",
    title: "Homepage",
    type: "document",
    groups: defaultGroups,
    fields: [
      basicSEO,
      {
        name: 'carousel',
        title: 'Hero Carousel',
        type: 'array',
        group: 'content',
        of: [{ type: 'hero'}]
      },
      {
        name: 'belowTheFold',
        title: 'Below The Fold',
        type: 'object',
        group: 'content',
        description: 'Section immediately following the hero section',
        fields: [{
          name: 'title',
          title: 'Title',
          type: 'string'
        }, {
          name: 'text',
          title: 'Text',
          type: 'text'
        },
        {
          name: 'live',
          title: 'Live Events',
          type: 'text'
        },
        {
          name: 'workshop',
          title: 'Recorded Workshops',
          type: 'text'
        },
        {
          name: 'private',
          title: 'Private Events',
          type: 'text'
        }
      ]
      },
      {
        name: 'about',
        title: 'About',
        type: 'object',
        description: '"we are StudioLife" section',
        group: 'content',
        fields: [
          {
            name: 'text',
            title: 'Text',
            type: 'text'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ]
      },
      {
        name: 'partner',
        title: 'Partner with StudioLife',
        group: 'content',
        type: 'object',
        fields: [
          {
            name: 'supertext',
            title: 'Supertext',
            type: 'text'
          },
          {
            name: 'text',
            title: 'Text',
            type: 'text'
          },
          
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ]
      },
      {
        name: 'private',
        title: 'Private Events',
        group: 'content',
        type: 'text'
      },
      {
        name: 'corporate',
        title: 'Corporate Events',
        group: 'content',
        type: 'text'
      }
    ],
};