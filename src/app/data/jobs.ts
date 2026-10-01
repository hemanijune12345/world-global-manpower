export type Job = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  category: string;
  location: string;
};

export const jobs: Job[] = [
  {
    slug: "scanner-barcode-operator",
    title: "Scanner / Barcode Operator",
    shortDescription:
      "Opportunities for candidates interested in warehouse scanning and barcode operations.",
    icon: "▣",
    category: "Warehouse",
    location: "Russia",
  },
  {
    slug: "packing-worker",
    title: "Packing Worker",
    shortDescription:
      "Packing and warehouse-related employment opportunities in Russia.",
    icon: "📦",
    category: "Warehouse",
    location: "Russia",
  },
  {
    slug: "construction-worker",
    title: "Construction Worker",
    shortDescription:
      "Construction-related employment opportunities for skilled and experienced workers.",
    icon: "🏗️",
    category: "Construction",
    location: "Russia",
  },
  {
    slug: "general-labour",
    title: "General Labour",
    shortDescription:
      "General labour opportunities across different work environments in Russia.",
    icon: "👷",
    category: "Labour",
    location: "Russia",
  },
  {
    slug: "driver",
    title: "Driver",
    shortDescription:
      "Driving opportunities for eligible candidates with the required driving experience.",
    icon: "🚛",
    category: "Transport",
    location: "Russia",
  },
  {
    slug: "cook",
    title: "Cook",
    shortDescription:
      "Cooking and kitchen-related employment opportunities in Russia.",
    icon: "👨‍🍳",
    category: "Hospitality",
    location: "Russia",
  },
  {
    slug: "tailor",
    title: "Tailor",
    shortDescription:
      "Tailoring and garment-related employment opportunities in Russia.",
    icon: "🧵",
    category: "Garment",
    location: "Russia",
  },
];