import merge from "../../node_modules/lodash-es/merge";

export const mergeOptions = (obj, src) => {
  return merge(obj, src);
};
