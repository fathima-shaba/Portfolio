/**
 * UI utility functions
 */

export const classNameMerge = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const getSectionId = (sectionName: string): string => {
  return sectionName.toLowerCase().replace(/\s+/g, "-");
};
