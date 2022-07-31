export default {
  name: "postedBy",
  title: "Posted By",
  type: "reference",
  to: [{ type: "user" }],
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "string",
    },
  ],
};
