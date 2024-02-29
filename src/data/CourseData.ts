import thumbnail1 from "/thumbnail1.png";
import avatar1 from "/avatar1.png";
import thumbnail2 from "/thumbnail2.png";
import avatar2 from "/avatar2.png";
import thumbnail3 from "/thumbnail3.png";
import avatar3 from "/avatar3.png";
import thumbnail4 from "/thumbnail4.png";
import avatar4 from "/avatar4.png";

export interface CourseProps {
  id: number;
  thumbnail: string;
  avatar: string;
  authourName: string;
  profession: string;
  title: string;
  description: string;
  review: string;
  slug: string;
  totalLesson: number;
  price: number;
  youWillLearn: string[];
  materialInclude: string[];
  courseRequirement: string[];
}

const courses: CourseProps[] = [
  {
    id: 1,
    thumbnail: `${thumbnail1}`,
    avatar: `${avatar1}`,
    authourName: "Lorem Ipsum 1",
    profession: "Lorem Ipsum 1",
    title: "Lorem ipsum dolor sit amet 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 1",
    review: "44k",
    slug: "elevate-your-mind-1",
    totalLesson: 4,
    price: 20,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 2,
    thumbnail: `${thumbnail2}`,
    avatar: `${avatar2}`,
    authourName: "Lorem Ipsum 2",
    profession: "Lorem Ipsum 2",
    title: "Lorem ipsum dolor sit amet 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 2",
    review: "57k",
    slug: "elevate-your-mind-2",
    totalLesson: 6,
    price: 38,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 3,
    thumbnail: `${thumbnail3}`,
    avatar: `${avatar3}`,
    authourName: "Lorem Ipsum 3",
    profession: "Lorem Ipsum 3",
    title: "Lorem ipsum dolor sit amet 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 3",
    review: "10k",
    slug: "elevate-your-mind-3",
    totalLesson: 3,
    price: 15,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 4,
    thumbnail: `${thumbnail4}`,
    avatar: `${avatar4}`,
    authourName: "Lorem Ipsum 4",
    profession: "Lorem Ipsum 4",
    title: "Lorem ipsum dolor sit amet 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 4",
    review: "47k",
    slug: "elevate-your-mind-4",
    totalLesson: 5,
    price: 25,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 5,
    thumbnail: `${thumbnail1}`,
    avatar: `${avatar1}`,
    authourName: "Lorem Ipsum 5",
    profession: "Lorem Ipsum 5",
    title: "Lorem ipsum dolor sit amet 5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.5",
    review: "5k",
    slug: "elevate-your-mind-5",
    totalLesson: 1,
    price: 10,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 6,
    thumbnail: `${thumbnail2}`,
    avatar: `${avatar2}`,
    authourName: "Lorem Ipsum 6",
    profession: "Lorem Ipsum 6",
    title: "Lorem ipsum dolor sit amet 6",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 6",
    review: "25k",
    slug: "elevate-your-mind-6",
    totalLesson: 4,
    price: 22.5,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 7,
    thumbnail: `${thumbnail3}`,
    avatar: `${avatar3}`,
    authourName: "Lorem Ipsum 7",
    profession: "Lorem Ipsum 7",
    title: "Lorem ipsum dolor sit amet 7",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 7",
    review: "30k",
    slug: "elevate-your-mind-7",
    totalLesson: 6,
    price: 35,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  },
  {
    id: 8,
    thumbnail: `${thumbnail4}`,
    avatar: `${avatar4}`,
    authourName: "Lorem Ipsum 8",
    profession: "Lorem Ipsum 8",
    title: "Lorem ipsum dolor sit amet 8",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient. 8",
    review: "24k",
    slug: "elevate-your-mind-8",
    totalLesson: 2,
    price: 14,
    youWillLearn: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    materialInclude: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ],
    courseRequirement: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Maiores quibusdam impedit saepe amet ipsa sapiente maxime",
      "dolorum aliquid alias delectus sed doloremque voluptate",
      "expedita, porro reiciendis hic illo cum volup tatum"
    ]
  }
];

export default courses;
