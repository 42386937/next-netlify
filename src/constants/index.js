import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  threejs,
} from "../assets";
import hbis from "../assets/company/hbis.png";
import zgsy from "../assets/company/zgsy.png";
import huaqi from "../assets/company/huaqi.png";
import weiliangdian from "../assets/company/weiliangdian.png";
import cssc from "../assets/company/cssc.png";
import hzsr from "../assets/company/hzsr.png";
import vue from "../assets/tech/vue.png";
import mysql from "../assets/tech/mysql.png";
import uniapp from "../assets/tech/uniapp.png";
import gwc from "../assets/projects/gwc.png";
import products from "../assets/projects/products.png";
import cac from "../assets/projects/cac.png";
import gcgl from "../assets/projects/gcgl.png";
import yikatong from "../assets/projects/yikatong.png";
import ntgl from "../assets/projects/ntgl.png";
import hbdd from "../assets/projects/hbdd.png";
import junxiao from "../assets/projects/junxiao.png";
import minbaopin from "../assets/projects/minbaopin.png";
import jiancha from "../assets/projects/jiancha.png";
import gwcAPP from "../assets/projects/gwcAPP.png";
import shop from "../assets/projects/shop.png";
const servicesEn = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Vue Developer",
    icon: creator,
  },
];
const servicesZh = [
  {
    title: "全栈 开发",
    icon: web,
  },
  {
    title: "RN 开发",
    icon: mobile,
  },
  {
    title: "React 开发",
    icon: backend,
  },
  {
    title: "Vue 开发",
    icon: creator,
  },
];
const navEn = [
  {
    id: "about",
    title: "About",
    path: '#about',
    name: "About"
  },
  {
    id: "work",
    title: "Work",
    path: '#work',
    name: "Work"
  },
  {
    id: "contact",
    title: "Contact",
    path: '/',
    name: "Contact"
  },
]
const navZh = [
  {
    id: "about",
    title: "个人信息",
    path: '#about',
    name: "About"
  },
  {
    id: "work",
    title: "工作经历",
    path: '#work',
    name: "Work"
  },
  {
    id: "contact",
    title: "联系方式",
    path: '/',
    name: "Contact"
  },
]
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "uniapp",
    icon: uniapp,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "vue",
    icon: vue,
  },
];
const experiencesEn = [
  {
    title: "VUE.js Developer",
    company_name: "Hangzhou Sirun Information Technology Co., Ltd",
    icon: hzsr,
    iconBg: "#FFF",
    date: "Oct 2012 - Jan 2014",
    points: [
      "Develop intelligent aquatic product big data platforms using Vue.js, Echarts and related technologies.",
      "Connect with UI designers and product managers to clarify business requirements and put forward modification suggestions simultaneously.",
      "Collaborate with back-end personnel to complete interface joint debugging.",
      "Participate in code reviews and handle issues from customer feedback.",
    ],
  },
  {
    title: "APP Developer",
    company_name: "Shenzhen Huaqi Technology Co., Ltd",
    icon: huaqi,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Feb 2015",
    points: [
      "Led the development of mobile apps for medical and educational purposes, and led the team to deliver medical and health projects and online education platforms.",
      "Combined UniApp framework with WeChat Mini Program's low-power Bluetooth to realize real-time health monitoring through the linkage between medical APP and smartwatch.",
      "Adopted Socket technology to achieve real-time data transmission with backend servers.",
      "Integrated Tencent Cloud live broadcast API and completed push and pull streaming for course live broadcasts on the online education platform via Taro.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tangshan Micro Bright Technology Co., Ltd",
    icon: weiliangdian,
    iconBg: "#E6DEDD",
    date: "Feb 2015 - Mar 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Developer",
    company_name: "China National Petroleum Corporation Limited",
    icon: zgsy,
    iconBg: "#E6DEDD",
    date: "July 2018 - Sept 2019",
    points: [
      "Responsible for the development of the explosive materials management APP and its corresponding system.",
      "Developed the APP using UniApp, enabling functions such as image recognition on tablet handheld devices, and automatic generation and printing of wellhead QR code information cards.",
      "Optimized based on user experience, fixed bugs, and iteratively developed functions including civil explosive quantity coding and electronic task order stake numbers."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "China National Petroleum Corporation Limited",
    icon: cssc,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - Jan 2022",
    points: [
      "Develop web management programs such as pollutant management and energy-carbon management using React.js, Vue.js combined with the Ruoyi framework.",
      "Develop data visualization dashboards with the help of 3D technologies like three.js and React Three Fiber.",
      "Coordinate with UI designers and product managers to clarify project requirements and put forward modification suggestions.",
      "Optimize based on user experience, fix bugs and carry out iterative development."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Hegang Group Co., Ltd",
    icon: hbis,
    iconBg: "#0075c4",
    date: "Jul 2022 - Present",
    points: [
      "Responsible for the company's information construction and operation and maintenance to ensure the stable and efficient operation of systems.",
      "Led front-end development, using Vue and React to enhance user interaction experience.",
      "Proficient in applying UI frameworks such as vant-ui and Element UI to optimize mobile and desktop interfaces.",
      "Completed the construction and maintenance of server interfaces with the help of Node.js and Express.",
      "Used React Native and Taro to develop cross-platform compatible hybrid applications and expand usage scenarios.",
      "Adopted VUE + ECharts + Three.js to develop data visualization systems and enhance data intuitiveness.",
      "Participated in technical learning and practice to improve technical capabilities and problem-solving skills."
    ],
  },
];
const experiencesZh = [
  {
    title: "VUE.js开发",
    company_name: "杭州思软信息技术有限公司",
    icon: hzsr,
    iconBg: "#FFF",
    date: "10月 2012 - 1月 2014",
    points: [
      "用 Vue.js、Echarts 及相关技术，开发智慧水产大数据平台。",
      "对接 UI、产品经理明确业务需求,同步提出修改意见。",
      "与后端人员协作，完成接口联调。",
      "参与代码审查，处理客户反馈的问题。",
    ],
  },
  {
    title: "APP开发",
    company_name: "深圳华骑技术有限公司",
    icon: huaqi,
    iconBg: "#E6DEDD",
    date: "1月 2014 - 2月 2015",
    points: [
      "主导医疗、教育类移动端 APP 开发，带队交付医疗健康项目与在线教育平台。",
      "以 uniapp 框架结合微信小程序低功耗蓝牙，实现医疗 APP 与手表联动的健康实时监测。",
      "采用 socket 技术实现数据与后台服务器实时传输。",
      "集成腾讯云直播接口，通过 Taro 完成在线教育平台课程直播的推流拉流。",
    ],
  },
  {
    title: "前端开发",
    company_name: "唐山微亮点科技有限公司",
    icon: weiliangdian,
    iconBg: "#E6DEDD",
    date: "2月 2015 - 5月 2018",
    points: [
      "负责 APP 及后端管理程序开发，主导交付现场检查系统、社区团购、一卡通等多系统。",
      "运用手机内置数据库SQLite、腾讯云 COS、人脸识别、直播与云点播技术开发 APP，优化用户体验。",
      "采用 vue-element-admin、antdesign pro、shadcn admin 等企业级框架开发后台，提速开发并改善体验。",
      "实施响应式设计，保障跨浏览器兼容性。",
      "参与代码审查，为其他开发人员提供建设性反馈。",
    ],
  },
  {
    title: "APP开发",
    company_name: "中国石油天然气集团有限公司",
    icon: zgsy,
    iconBg: "#E6DEDD",
    date: "7月 2018 - 9月 2019",
    points: [
      "负责易爆品管理 APP 及系统开发。",
      "以 uniapp 开发 APP,实现 pad 手持机图像识别、井口二维码信息卡自动生成与打印。",
      "根据用户体验优化，修复 BUG 并迭代开发民爆品数量编码、电子任务书桩号等功能。"
    ],
  },
  {
    title: "React.js开发",
    company_name: "中国船舶工业集团",
    icon: cssc,
    iconBg: "#E6DEDD",
    date: "9月 2019 - 1月 2022",
    points: [
      "用 React.js、Vue.js 结合 ruoyi 框架，开发污染物管理、能碳管理等 web 管理程序。",
      "借助 three.js、React Three Fiber 等 3D 技术，开发数据可视化大屏。",
      "对接 UI、产品经理明确项目需求，提出修改建议。",
      "根据用户体验优化，修复 BUG 并迭代开发。",
    ],
  },
  {
    title: "全栈开发",
    company_name: "河钢集团有限公司",
    icon: hbis,
    iconBg: "#0075c4",
    date: "7月 2022 - 至今",
    points: [
      "负责公司信息化建设及运维，保障系统稳定高效运行。",
      "主导前端开发，运用 Vue、React 提升用户交互体验。",
      "熟练应用 vant-ui、element-ui 等 UI 框架，优化移动端及桌面端界面。",
      "借助 Node.js、Express 完成服务器接口搭建与维护。",
      "利用 react-native、Taro 开发多平台兼容混合应用，拓展使用场景。",
      "采用 VUE+echarts+three.js 开发数据可视化系统，增强数据直观性。",
      "参与技术学习实践，提升技术水平及问题解决能力。",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projectsEn = [
  {
    name: "Car Rent",
    type: 'web',
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gwc,

  },
  {
    name: "Job IT",
    type: 'web',
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cac,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gcgl,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hbdd,
  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: junxiao,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: minbaopin,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gwcAPP,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
  },

];
const projectsZh = [
  {
    name: "Car Rent",
    type: 'web',
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gwc,

  },
  {
    name: "Job IT",
    type: 'web',
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cac,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gcgl,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "Trip Guide",
    type: 'web',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hbdd,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: junxiao,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: minbaopin,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gwcAPP,

  },
  {
    name: "Trip Guide",
    type: 'App',
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,

  },

];

export { servicesEn, servicesZh, technologies, experiencesEn, experiencesZh, testimonials, projectsEn, projectsZh, navEn, navZh };
