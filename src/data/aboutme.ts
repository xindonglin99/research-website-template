export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Xindong Lin",
  title: "Graduate Student",
  institution: "University of British Columbia",
  // Note that links work in the description
  description:
    "Hi, I'm on my final year of MSc in Computer Science at UBC, where I work with Professor <a href='https://www.cs.ubc.ca/~van/'>Michiel van de Panne</a> on character animation and robotics. Most of the time, I teaches humanoid robots in simulation to do different motions using deep reinforcement learning (RL). Besides, I'm also broadly interested in embodied AI and computer graphics. My ultimate goal is to create universal intelligent agents that can replace humans for dangerous tasks. Previously during my undergrad, I worked with Professor <a href='https://sensorimotor.cs.ubc.ca/pai/'>Dinesh K. Pai</a> on motion capture topics. <br> <br> Before I dived into academia, I worked in the industry as a software engineer, where I created Web Apps with JavaScript and Python. During my leisure time, I do sports and play competitive FPS games such as Valorant, CS:GO and Apex Legends. Fun fact: I'm an Immortal (<a href='https://tracker.gg/valorant/profile/riot/social%20phobia%23OvO/overview?platform=pc&playlist=competitive&season=ac12e9b3-47e6-9599-8fa1-0bb473e5efc7/'>NA top 0.5%</a>) player in Valorant. <br> <br> <b><u>Update:</u></b> I'll be looking for internships from the start of 2026, anything related to robotics, character animation, or embodied AI is welcome. If you are interested in my profile, please feel free to contact me via email.",
  email: "xindong@cs.ubc.ca",
  funDescription: "I am a competitive fps gamer.",
  imageUrl:
    "/images/profile.jpg",
  googleScholarUrl: "https://scholar.google.ca/citations?user=Dhfl1TEAAAAJ&hl=en",
  githubUsername: "xindonglin99",
  linkedinUsername: "xindonglin",
  twitterUsername: "linx1ndong",
  // blogUrl: "https://",
  // cvUrl: "/pdfs/cv.pdf",
  institutionUrl: "https://www.cs.ubc.ca/",
  // altName: "Character animation and robotics",
  secretDescription: "'Good artists copy; great artists steal.' - Pablo Picasso",
};
