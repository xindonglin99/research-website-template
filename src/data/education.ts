export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "University of British Columbia",
    degree: "Master of Science in Computer Science",
    advisor: "Prof. Michiel van de Panne",
  },
  {
    year: "2017—2023",
    institution: "University of British Columbia",
    degree: "Bachelor of Science in Computer Science and Mathematics",
    advisor: "Prof. Dinesh K. Pai",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
