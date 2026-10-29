import type { CopySectionId, SectionCopy } from "@/types/section";

// Draft headings for every section after the hero. The CEO can reword any of them.
export const sectionCopyMock: Record<CopySectionId, SectionCopy> = {
  chairman: {
    index: "01",
    eyebrow: "The Man",
    title: "He sells technology. What he really builds is trust.",
    lede: "A founder who started with distribution, then built the stores, the brands and the people around them.",
  },
  group: {
    index: "02",
    eyebrow: "The Group",
    title: "Four ventures, one hand.",
    lede: "Distribution, retail, fashion and mobility, each held to the same promise: genuine products and care after the sale.",
  },
  journey: {
    index: "03",
    eyebrow: "The Journey",
    title: "From one warehouse to a group of companies.",
    lede: "The moments that shaped the group, in order.",
  },
  numbers: {
    index: "04",
    eyebrow: "By the Numbers",
    title: "Scale, measured honestly.",
    lede: "What the group moves, serves and supports today.",
  },
  trust: {
    index: "05",
    eyebrow: "Trust",
    title: "Recognised by the people who certify the industry.",
    lede: "Certifications, authorisations and the brands that chose to partner with the group.",
  },
  presence: {
    index: "06",
    eyebrow: "Presence",
    title: "Where to find the group.",
    lede: "Stores, showrooms and the online channels that serve the whole country.",
  },
  letter: {
    index: "07",
    eyebrow: "A Letter",
    title: "From the Chairman's desk.",
    lede: "A few words, in his own voice.",
  },
  connect: {
    index: "08",
    eyebrow: "Connect",
    title: "Start a conversation.",
    lede: "For partnerships, press and distribution enquiries.",
  },
};
