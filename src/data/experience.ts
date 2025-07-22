export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  course?: string; // Optional, used for teaching assistant roles
}

export const experienceData: Experience[] = [
  {
    date: "2021 - Present",
    title: "Teaching Assistant",
    company: "UBC",
    description:
      "7 times TA in CPSC314 and once in CPSC426.",
    course: "CPSC 314 Computer Graphics, CPSC 426 Computer Animation",
    companyUrl: "https://www.cs.ubc.ca/",
  },
  {
    date: "Sep 2022 - May 2023",
    title: "Software Developer Intern",
    company: "SAP",
    description:
      "Maintained and developed new features for a web application (<a href='https://partnerfinder.sap.com/' target='_blank' rel='noopener noreferrer'>SAP Partner Finder</a>) that searches SAP partners and products.",
    // manager: "Elise Brown",
    companyUrl: "https://www.sap.com/cmp/dg/top-5-hr-trends/index.html?campaigncode=crm-ya22-int-1517073&source=ppc-1na-googleads-pmax-71700000122846409--hxm_hxs-x-x-x&dfa=1&gad_source=1&gad_campaignid=22797522602&gbraid=0AAAAAp1XMd7jyTOU3h6qbQ4UKRMZIIvlg&gclid=Cj0KCQjwyvfDBhDYARIsAItzbZFVqsDUvtgp5b3eBzqgbQc82KCmSH3EZid-xFHf7tz7QUh_RQ9wPYQaAg0jEALw_wcB&gclsrc=aw.ds",
  },
  {
    date: "May 2021 - Dec 2021",
    title: "Software Developer Intern",
    company: "Global IQX",
    description:
      "Developed and maintained a quoting app and its templates for client insurance companies.",
    // manager: "Elise Brown",
    companyUrl: "https://www.linkedin.com/company/global-iqx/posts/?feedView=all",
  },
  {
    date: "Jan 2020 - Aug 2020",
    title: "Software Test Developer Intern",
    company: "Sierra Wireless",
    description:
      "Wrote tests and quality assurance scripts for embedded software in IoT devices.",
    // manager: "Elise Brown",
    companyUrl: "https://www.sierrawireless.com/?utm_term=sierra%20wireless&utm_campaign=Brand-NAM-EN-LG&utm_source=google&utm_medium=cpc&hsa_acc=5534429107&hsa_cam=960596284&hsa_grp=121643025295&hsa_ad=692961838768&hsa_src=g&hsa_tgt=kwd-14803090&hsa_kw=sierra%20wireless&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=960596284&gbraid=0AAAAADLpex79WbFRh6DIzv8O2VPh8IRUi&gclid=Cj0KCQjwyvfDBhDYARIsAItzbZGIliPxxXVYq3gpwdkrP0GEImRldObvyaQFGAArO-PEr3CEXBDIqPUaAmcrEALw_wcB",
  },
];
