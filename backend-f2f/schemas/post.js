import { defineField, defineType } from "sanity";

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
        }),
        defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
              hotspot: true,
            },
        }),
        defineField({
            name: 'userId',
            title: 'UserId',
            type: 'string',
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        }),
        defineField({
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'user' }],
              },
            ],
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
        }),
        defineField({
            name: 'topic',
            title: 'Topic',
            type: 'string',
        }),
    ],
});
