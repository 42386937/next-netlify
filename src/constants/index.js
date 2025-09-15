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
import boss1 from "../assets/boss1.jpg";
import boss3 from "../assets/boss3.jpg";
import boss2 from "../assets/boss2.jpg";
import nengshou from "../assets/honour/nengshou.jpg";
import ruanzhu from "../assets/honour/ruanzhu.png";
import wangluo from "../assets/honour/wangluo.png";
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
    id: "honour",
    title: "Feedbacks",
    path: '/',
    name: "Honour"
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
    id: "honour",
    title: "评价荣誉",
    path: '/',
    name: "Honour"
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
      "用 Vue.js、Echarts 及相关技术,开发智慧水产大数据平台。",
      "对接 UI、产品经理明确业务需求,同步提出修改意见。",
      "与后端人员协作,完成接口联调。",
      "参与代码审查,处理客户反馈的问题。",
    ],
  },
  {
    title: "APP开发",
    company_name: "深圳华骑技术有限公司",
    icon: huaqi,
    iconBg: "#E6DEDD",
    date: "1月 2014 - 2月 2015",
    points: [
      "主导医疗、教育类移动端 APP 开发,带队交付医疗健康项目与在线教育平台。",
      "以 uniapp 框架结合微信小程序低功耗蓝牙,实现医疗 APP 与手表联动的健康实时监测。",
      "采用 socket 技术实现数据与后台服务器实时传输。",
      "集成腾讯云直播接口,通过 Taro 完成在线教育平台课程直播的推流拉流。",
    ],
  },
  {
    title: "前端开发",
    company_name: "唐山微亮点科技有限公司",
    icon: weiliangdian,
    iconBg: "#E6DEDD",
    date: "2月 2015 - 5月 2018",
    points: [
      "负责 APP 及后端管理程序开发,主导交付现场检查系统、社区团购、一卡通等多系统。",
      "运用手机内置数据库SQLite、腾讯云 COS、人脸识别、直播与云点播技术开发 APP,优化用户体验。",
      "采用 vue-element-admin、antdesign pro、shadcn admin 等企业级框架开发后台,提速开发并改善体验。",
      "实施响应式设计,保障跨浏览器兼容性。",
      "参与代码审查,为其他开发人员提供建设性反馈。",
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
      "根据用户体验优化,修复 BUG 并迭代开发民爆品数量编码、电子任务书桩号等功能。"
    ],
  },
  {
    title: "React.js开发",
    company_name: "中国船舶工业集团",
    icon: cssc,
    iconBg: "#E6DEDD",
    date: "9月 2019 - 1月 2022",
    points: [
      "用 React.js、Vue.js 结合 ruoyi 框架,开发污染物管理、能碳管理等 web 管理程序。",
      "借助 three.js、React Three Fiber 等 3D 技术,开发数据可视化大屏。",
      "对接 UI、产品经理明确项目需求,提出修改建议。",
      "根据用户体验优化,修复 BUG 并迭代开发。",
    ],
  },
  {
    title: "全栈开发",
    company_name: "河钢集团有限公司",
    icon: hbis,
    iconBg: "#0075c4",
    date: "7月 2022 - 至今",
    points: [
      "负责公司信息化建设及运维,保障系统稳定高效运行。",
      "主导前端开发,运用 Vue、React 提升用户交互体验。",
      "熟练应用 vant-ui、element-ui 等 UI 框架,优化移动端及桌面端界面。",
      "借助 Node.js、Express 完成服务器接口搭建与维护。",
      "利用 react-native、Taro 开发多平台兼容混合应用,拓展使用场景。",
      "采用 VUE+echarts+three.js 开发数据可视化系统,增强数据直观性。",
      "参与技术学习实践,提升技术水平及问题解决能力。",
    ],
  },
];
const testimonialsEn = [
  {
    testimonial:
      "When faced with cross-module development requirements, he can not only express his technical ideas clearly but also listen patiently to colleagues' suggestions. The collaboration is particularly seamless, doubling the team's development efficiency!",
    name: "Supv",
    designation: "CFO",
    company: "CSSC",
    imageUrl: boss1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Liu Yan does.",
    name: "Wang Qiang",
    designation: "RM",
    company: "CNPC‌",
    imageUrl: boss3,
  },
  {
    testimonial:
      "After Liu Yan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Yue Jichuan",
    designation: "CEO",
    company: "TMBST",
    imageUrl: boss2,
  },
];
const testimonialsZh = [
  {
    testimonial:
      "面对跨模块开发需求，他既能清晰表达自己的技术思路，也能耐心倾听同事的建议，配合起来特别默契，让团队开发效率翻倍！",
    name: "张东杰",
    designation: "主管",
    company: "中国船舶",
    imageUrl: boss1,
  },
  {
    testimonial:
      "我从未见过像刘岩这样真正关心客户成功的web开发人员",
    name: "王强",
    designation: "区域经理",
    company: "中国石油",
    imageUrl: boss3,
  },
  {
    testimonial:
      "在刘岩优化我们的网站后,我们的流量增加了50%。我们感激不尽",
    name: "岳冀川",
    designation: "CEO",
    company: "微亮点科技",
    imageUrl: boss2,
  },
];
const appProjectsEn = [
  {
    name: "Smart Aquaculture",
    type: 'web',
    description: "The Smart Aquaculture Big Data Operation Platform can monitor the online status of aquaculture and meteorological equipment, track equipment locations with GPS positioning, and simultaneously enable remote online viewing via cameras.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "echarts",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  {
    name: "Carbon Management Platform",
    type: 'web',
    description: "The Energy-Carbon Platform is a comprehensive platform that leverages modern information technologies such as cloud computing, big data, the Internet of Things (IoT), and artificial intelligence (AI) to conduct real-time monitoring, analysis, management, and optimization of energy consumption and carbon emission data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Pro",
        color: "green-text-gradient",
      },
      {
        name: "Umi",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  {
    name: "Smart Campus Card",
    type: 'web',
    description: "The All-in-One Card Integrated Management Platform, Access Control System, Attendance System, Library Access Management System, and Parking Lot Management System—all these devices use a unified database for data management and maintenance, facilitating both user operations and the daily maintenance of the entire system by maintenance personnel.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Naive UI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "On site inspection system",
    type: 'App',
    description:
      "The on-site inspection management software consists of a mobile APP terminal and a backend management terminal. It enables functions such as random selection of inspection locations, dynamic process control, automatic report generation, task supervision and reminders, and problem statistics and analysis. Additionally, it supports the initiation of on-site inspection tasks even in areas without network coverage.",
    tags: [
      {
        name: "uniapp",
        color: "blue-text-gradient",
      },
      {
        name: "wot-ui",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },

];
const appProjectsZh = [
  {
    name: "智慧水产",
    type: 'web',
    description: "智慧水产大数据运营平台可监控水产与气象设备在线状态,结合 GPS 定位追踪设备位置,同时通过摄像头达成远程在线查看",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "echarts",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  {
    name: "能碳管理平台",
    type: 'web',
    description: "能碳平台是利用云计算、大数据、物联网、人工智能等现代信息技术,对能源使用情况和碳排放数据进行实时监测、分析、管理和优化的综合性平台",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Pro",
        color: "green-text-gradient",
      },
      {
        name: "Umi",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  {
    name: "智慧校园一卡通",
    type: 'web',
    description: "一卡通综合管理平台、门禁系统、考勤系统、图书馆通道管理系统及停车场管理系统,以上设备均使用统一的数据库进行数据管理及维护,方便用户操作及维护人员对整个系统的日常维护",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Naive UI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "现场检查系统",
    type: 'App',
    description:
      "现场检查管理软件,由手机APP端和后台管理端组成。可实现检查部位随机抽取,过程动态管控,报告自动生成,任务督促提醒,问题统计分析功能,还能实现无网络信号覆盖时的现场检查任务开启",
    tags: [
      {
        name: "uniapp",
        color: "blue-text-gradient",
      },
      {
        name: "wot-ui",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },
];
const projectsEn = [
  // {
  //   name: "Management of official vehicles",
  //   type: 'web',
  //   description: "The official vehicle management system covers vehicle management and two types of applications (fueling and maintenance), and is equipped with a clear user permission division mechanism to ensure data security and operational compliance. Adopting a front-end and back-end separation architecture, the system uses React for the front-end, Node.js for the back-end, and MySQL for the database, which guarantees the system's stability and scalability.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Express",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Antdesign",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gwc,

  // },
  {
    name: "Smart Aquaculture",
    type: 'web',
    description: "The Smart Aquaculture Big Data Operation Platform can monitor the online status of aquaculture and meteorological equipment, track equipment locations with GPS positioning, and simultaneously enable remote online viewing via cameras.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "echarts",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  // {
  //   name: "Circulating water monitoring system",
  //   type: 'web',
  //   description: "The circulating water system can track the energy consumption of production equipment in real time and simultaneously conduct intelligent analysis on electricity, water, and gas consumption. The system manages operations by dividing areas, and the energy consumption of each area can be clearly sorted by time dimension, making energy consumption data easily understandable at a glance.",
  //   tags: [
  //     {
  //       name: "vue3",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "element-plus",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: cac,

  // },
  // {
  //   name: "Engineering Management System",
  //   type: 'web',
  //   description: "The engineering management system is equipped with project progress analysis and tracking functions. On this basis, it can tailor optimization plans according to real-time progress and clearly define implementation milestones, providing strong support for the smooth delivery of the project.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "shadcn ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gcgl,

  // },
  {
    name: "Smart Campus Card",
    type: 'web',
    description: "The All-in-One Card Integrated Management Platform, Access Control System, Attendance System, Library Access Management System, and Parking Lot Management System—all these devices use a unified database for data management and maintenance, facilitating both user operations and the daily maintenance of the entire system by maintenance personnel.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Naive UI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "Carbon Management Platform",
    type: 'web',
    description: "The Energy-Carbon Platform is a comprehensive platform that leverages modern information technologies such as cloud computing, big data, the Internet of Things (IoT), and artificial intelligence (AI) to conduct real-time monitoring, analysis, management, and optimization of energy consumption and carbon emission data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Pro",
        color: "green-text-gradient",
      },
      {
        name: "Umi",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  // {
  //   name: "Hongbai Pawnshop",
  //   type: 'App',
  //   description: "If you have valuable items such as gold and jewelry to pawn or mortgage, you can first send them to the merchant for appraisal. The 'Hongbai Pawnshop' WeChat Mini Program not only synchronizes the express logistics status in real time, but also connects with the third-party Yiqianbao (E-Sign Bao) to support online signing of electronic contracts. At the same time, it clearly displays key information such as repayment dates and interest, making the entire process transparent and controllable.",
  //   tags: [
  //     {
  //       name: "uniapp",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "uview plus",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: hbdd,

  // },
  // {
  //   name: "Junyao Health",
  //   type: 'App',
  //   description: "Relying on Junyao Health, the system will automatically locate your city, supporting the reservation of multiple services such as car wash, maternity nurse, housekeeping, and home appliance repair. You can also independently select service staff. Meanwhile, if you want to work as a part-time hourly worker, you can submit an entry application through the program to participate in providing services.",
  //   tags: [
  //     {
  //       name: "uniapp",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "VantWeapp",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "iView WeApp",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: junxiao,

  // },
  {
    name: "Civil explosive",
    type: 'App',
    description: "The handheld device is equipped with image recognition capabilities and the function to automatically generate and print wellhead QR code information cards. Throughout the entire process from outbound delivery to detonation completion manual operations can be replaced by scanning and image recognition via this handheld device.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-elements",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: minbaopin,

  },
  {
    name: "On site inspection system",
    type: 'App',
    description:
      "The on-site inspection management software consists of a mobile APP terminal and a backend management terminal. It enables functions such as random selection of inspection locations, dynamic process control, automatic report generation, task supervision and reminders, and problem statistics and analysis. Additionally, it supports the initiation of on-site inspection tasks even in areas without network coverage.",
    tags: [
      {
        name: "uniapp",
        color: "blue-text-gradient",
      },
      {
        name: "wot-ui",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },
  // {
  //   name: "Official vehicle",
  //   type: 'App',
  //   description: "The official vehicle management program supports three core functions: official vehicle reservation, fueling application, and vehicle maintenance application. The system has three user roles: dispatcher, refueling staff, and general staff. After passing identity verification, users will be directed to their corresponding dedicated pages to handle business within their respective permissions, ensuring a clear and efficient process.",
  //   tags: [
  //     {
  //       name: "Taro",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Taro UI for React",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gwcAPP,

  // },
  {
    name: "Group buying mall",
    type: 'App',
    description: "On this group-buying mall, you can not only join in product group purchases, flash sales and lucky draws, but also gain in-depth product insights through live-streaming videos. The platform is connected to convenient payment channels, and after placing an order, you can check the express delivery status and order details with just one click, making the shopping process smooth, worry-free and efficient.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Mobile",
        color: "green-text-gradient",
      },
      {
        name: "Cloud Streaming Services",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
  },
];
const projectsZh = [
  // {
  //   name: "公务车管理",
  //   type: 'web',
  //   description: "公务车管理系统涵盖车辆管理、加油与维修双项申请,并配备清晰的用户权限划分机制,确保数据安全与操作合规。系统采用前后端分离架构,前端基于React后端采用Node.js数据库采用MySql,确保了系统的稳定性和可扩展性。",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Express",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Antdesign",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gwc,
  // },
  {
    name: "智慧水产",
    type: 'web',
    description: "智慧水产大数据运营平台可监控水产与气象设备在线状态,结合 GPS 定位追踪设备位置,同时通过摄像头达成远程在线查看",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "echarts",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: products,

  },
  // {
  //   name: "循环水监控系统",
  //   type: 'web',
  //   description: "循环水系统可实时追踪生产设备能耗,同步对电、水、气消耗展开智能分析；系统按区域划分管理,各区域耗能量能按时间维度清晰排序,能耗数据一目了然",
  //   tags: [
  //     {
  //       name: "vue3",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "element-plus",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: cac,

  // },
  // {
  //   name: "工程管理系统",
  //   type: 'web',
  //   description: "工程管理系统具备项目进度分析与追踪功能,在此基础上,能依据实时进度情况,量身定制优化方案,并清晰划分实施节点,为项目顺利落地提供有力支撑",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "shadcn ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gcgl,

  // },
  {
    name: "智慧校园一卡通",
    type: 'web',
    description: "一卡通综合管理平台、门禁系统、考勤系统、图书馆通道管理系统及停车场管理系统,以上设备均使用统一的数据库进行数据管理及维护,方便用户操作及维护人员对整个系统的日常维护",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Naive UI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yikatong,

  },
  {
    name: "能碳管理平台",
    type: 'web',
    description: "能碳平台是利用云计算、大数据、物联网、人工智能等现代信息技术,对能源使用情况和碳排放数据进行实时监测、分析、管理和优化的综合性平台",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Pro",
        color: "green-text-gradient",
      },
      {
        name: "Umi",
        color: "pink-text-gradient",
      },
    ],
    image: ntgl,

  },
  // {
  //   name: "红柏典当",
  //   type: 'App',
  //   description: "若您有黄金、首饰等贵重物品需典当或抵押,可先寄给商家鉴定；而 “红柏典当” 微信小程序,不仅能实时同步快递物流状态,还对接了第三方易签宝支持线上签订电子合同,同时会清晰展示还款日期、利息等关键信息,流程透明可控。",
  //   tags: [
  //     {
  //       name: "uniapp",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "uview plus",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: hbdd,

  // },
  // {
  //   name: "君尧健康",
  //   type: 'App',
  //   description: "依托君尧健康,系统会自动定位您的所在城市,支持洗车服务、月嫂、家政、家电维修等多项服务的预约,且服务人员可由您自主选择；同时,若您想兼职钟点工,通过程序提交入驻申请,即可参与服务提供。",
  //   tags: [
  //     {
  //       name: "uniapp",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "VantWeapp",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "iView WeApp",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: junxiao,

  // },
  {
    name: "民爆管理",
    type: 'App',
    description: "手持机具备图像识别、自动生成并打印井口二维码信息卡的功能。从出库到激发完成的全流程中,可通过手持机扫描与图像识别替代人工操作。",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-elements",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: minbaopin,

  },
  {
    name: "现场检查系统",
    type: 'App',
    description:
      "现场检查管理软件,由手机APP端和后台管理端组成。可实现检查部位随机抽取,过程动态管控,报告自动生成,任务督促提醒,问题统计分析功能,还能实现无网络信号覆盖时的现场检查任务开启",
    tags: [
      {
        name: "uniapp",
        color: "blue-text-gradient",
      },
      {
        name: "wot-ui",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: jiancha,

  },
  // {
  //   name: "公务车",
  //   type: 'App',
  //   description: "公务车管理程序支持三大核心功能：公务车预约、加油申请与车辆维修申请。系统设置调度员、加油员、工作人员三种身份，用户通过身份验证后，将进入对应专属页面，办理各自权限内的业务，流程清晰高效。",
  //   tags: [
  //     {
  //       name: "Taro",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Taro UI for React",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gwcAPP,

  // },
  {
    name: "团购商城",
    type: 'App',
    description: "在该团购商城，不仅能参与商品团购、秒杀、幸运抽奖，还可通过视频直播深入了解商品；平台对接便捷支付渠道，下单后快递动态、订单明细一键查询，让购物流程流畅无阻，省心又高效。",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design Mobile",
        color: "green-text-gradient",
      },
      {
        name: "Cloud Streaming Services",
        color: "pink-text-gradient",
      },
    ],
    image: shop,

  },

];
const honourEn = [
  {
    name: "Tangshan Craftsman Competition",
    image: nengshou,
  },
  {
    name: "Network Engineer",
    image: wangluo,
  },
  {
    name: "Software Copyright",
    image: ruanzhu,
  },
];
const honourZh = [
  {
    name: "唐山工匠大赛",
    image: nengshou,
  },
  {
    name: "网络工程师",
    image: wangluo,
  },
  {
    name: "软件著作权",
    image: ruanzhu,
  },
];

export { honourEn, honourZh, servicesEn, servicesZh, technologies, experiencesEn, experiencesZh, testimonialsEn, testimonialsZh, projectsEn, projectsZh, appProjectsEn, appProjectsZh, navEn, navZh };
