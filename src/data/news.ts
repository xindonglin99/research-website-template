export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Jul 2025",
    title: "Upcoming internship at HighTorque Robotics",
    description: "I'll be working with the HighTorque Robotics team on their humanoid robots Mini-Pi/Mini-Hi during September.",
    link: "https://www.hightorquerobotics.com/",
  }
];
