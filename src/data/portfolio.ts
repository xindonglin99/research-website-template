export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  paperUrl?: string[];
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Learning to boulder (Ongoing)",
    description:
      "Will put some projects here soon. Stay tuned!",
    technologies: ["Python", "PyTorch", "React"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/username/project",
  },

  {
    title: "GPU-accelerated Humanoid Stepping",
    description:
      "Will put some projects here soon. Stay tuned!",
    technologies: ["Python", "PyTorch", "React"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/username/project",
  },

  {
    title: "Robot2robot: Enhance imitation trajectory transfer with reinforcement learning",
    description:
      "This project uses RL to adapt open loop imitation trajectories from a source robot to a target robot with different degrees of freedom (DOF).",
    technologies: ["Python", "C++", "RaiSim", "RL"],
    paperUrl: ["Report","/pdfs/CPSC554X_Report.pdf"],
    imageUrl:
      "/images/robot2robot.gif",
    codeUrl: "https://github.com/nickioan/robot2robot",
  },

  {
    title: "Mesh-based geometry processing algorithms implementation",
    description:
      "Basic mesh-based geometry processing algorithms implemented in C++ and OpenGL.",
    technologies: ["C++", "OpenGL"],
    paperUrl: ["Report","/pdfs/CPSC_524_report.pdf"],
    imageUrl:
      "/images/max.jpg",
    codeUrl: "https://github.com/xindonglin99/Geometric-modeling-algos",
  },
];
