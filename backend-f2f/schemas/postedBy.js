import { defineType } from "sanity";

export default defineType({
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }],
});
