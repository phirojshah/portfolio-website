/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Phiroj Kumar Sah's Portfolio",
  description:
    "Web Application Penetration Tester and Offensive Security Researcher with hands-on experience in discovering and exploiting OWASP Top 10 vulnerabilities.",
  og: {
    title: "Phiroj Kumar Sah Portfolio",
    type: "website",
    url: "http://phirojshah.com.np/",
  },
};

//Home Page
const greeting = {
  title: "Phiroj Kumar Sah",
  logo_name: "PhirojKumarSah",
  nickname: "Offensive Security Researcher",
  subTitle:
    "Offensive Security Researcher specializing in web application penetration testing. Expert in OWASP Top 10 vulnerabilities, API security assessment, and advanced exploitation techniques. Skilled in delivering comprehensive security reports with actionable remediation strategies.",
  resumeLink: "",
  portfolio_repository: "https://github.com/phirojshah/portfolio-website",
  githubProfile: "https://github.com/phirojshah",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/phirojshah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/phiroj-shah-226563233/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:phirojshah20@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/phiroj_shah",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/phiroj.shah.138",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/phirojshah20/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Medium",
    link: "https://medium.com/@phirojshah20",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Offensive Security & Penetration Testing",
      fileName: "DesignImg",
      skills: [
        "⚡ Web Application Penetration Testing with OWASP Top 10 methodologies",
        "⚡ Vulnerability Assessment, Web Exploitation, and Secure Code Review",
        "⚡ Authentication Bypass, SSRF, IDOR, SQLi, XSS, CSRF techniques",
        "⚡ Network security assessment and infrastructure penetration testing",
        "⚡ Responsible disclosure and detailed security reporting",
      ],
      softwareSkills: [
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:hackthebox",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "OWASP ZAP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQLMap",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:metasploit",
          style: {
            color: "#2A6EBB",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#1679A7",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "simple-icons:networkmanager",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Hydra",
          fontAwesomeClassname: "simple-icons:hackaday",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "John the Ripper",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Aircrack-ng",
          fontAwesomeClassname: "simple-icons:airplayaudio",
          style: {
            color: "#7A45FF",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Redux, and modern CSS frameworks",
        "⚡ Creating robust backend systems with Node.js, Express, MongoDB (MERN stack)",
        "⚡ Designing and optimizing SQL databases (MySQL, PostgreSQL) for web applications",
        "⚡ Implementing RESTful APIs and GraphQL services for efficient data exchange",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
      ],
    },
    {
      title: "Blockchain Development",
      fileName: "BlockchainImg",
      skills: [
        "⚡ Solidity smart contract development for decentralized applications on the Ethereum blockchain",
        "⚡ Proficiency in Ethereum development tools and frameworks like Truffle, Hardhat, and Remix",
        "⚡ Integrating blockchain solutions with front-end applications using web3.js or ethers.js",
        "⚡ Developing and deploying ERC-20, ERC-721, and other token standards",
        "⚡ Understanding of DeFi protocols and concepts like liquidity pools, staking, and yield farming",
        "⚡ Collaboraing with cross-functional teams to ideate and develop innovative decentralized solutions",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Web3.js",
          fontAwesomeClassname: "simple-icons:webgl",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Ethers.js",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "simple-icons:bitcoin",
          color: "black",
        },
        {
          skillName: "Truffle",
          fontAwesomeClassname: "simple-icons:truffle",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Hardhat",
          fontAwesomeClassname: "simple-icons:hardhat",
          color: "black",
          image: "https://fontawesome.com/v5/icons/hard-hat?f=classic&s=solid",
        },

        {
          skillName: "Ganache",
          fontAwesomeClassname: "simple-icons:ganache",
          color: "black",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },

        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackTheBox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#9FEF00",
      },
      profileLink: "https://app.hackthebox.com/profile/phirojshah",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#212C42",
      },
      profileLink: "https://tryhackme.com/p/phirojshah",
    },
    {
      siteName: "BugCrowd",
      iconifyClassname: "simple-icons:bugcrowd",
      style: {
        color: "#F26822",
      },
      profileLink: "https://bugcrowd.com/phirojshah",
    },
    {
      siteName: "HackerOne",
      iconifyClassname: "simple-icons:hackerone",
      style: {
        color: "#494649",
      },
      profileLink: "https://hackerone.com/phirojshah",
    },
  ],
};

const degrees = [
  {
    title: "Kathmandu University, Nepal",
    subtitle: "Bachelor's in Computer Engineering",
    logo_path: "ku_logo.png",
    alt_name: "Kathmandu University",
    duration: "Expected 2025",
    descriptions: [
      "⚡ Cybersecurity & Networking Coordinator - KUCC (Kathmandu University Computer Club)",
      "⚡ Studying computer engineering with focus on cybersecurity and network security",
      "⚡ Participating in various security competitions and workshops",
    ],
    website_link: "https://ku.edu.np/",
  },
  {
    title: "Kathmandu Model College, Nepal",
    subtitle: "+2, Science",
    logo_path: "kmc_logo.png",
    alt_name: "Kathmandu Model College",
    duration: "2019 - 2021",
    descriptions: [
      "⚡ Completed higher secondary education with focus on Science",
      "⚡ Participated in various coding competitions and hackathons",
      "⚡ Developed foundation in mathematics and computer science",
    ],
    website_link: "https://ktmmodelcollege.edu.np/",
  },
];

const workExperience = [
  {
    title: "Professional Experience",
    experiences: [
      {
        title: "CTO",
        company: "QuantAI Investment Pvt. Ltd.",
        company_url: "https://www.quantainvestment.com.np/",
        logo_path: "quanta_logo.svg",
        duration: "2022 - Present",
        location: "Kathmandu, Nepal",
        description:
          "At QuantAI, I lead security and product development of fintech tools for investment analysis and risk management.",
        color: "#0879bf",
      },
      {
        title: "Co-Founder",
        company: "Yagya InfoTech",
        company_url: "https://yagya.tech",
        logo_path: "yagya_logo.svg",
        duration: "2024 - Present",
        location: "Kathmandu, Nepal",
        description:
          "At Yagya InfoTech, I lead project planning and implement secure software architectures.",
        color: "#9b1578",
      },
      {
        title: "Security Researcher",
        company: "Freelance/Bug Bounty",
        company_url: "",
        logo_path: "freecopy_logo.png",
        duration: "2022 - Present",
        location: "Remote",
        description:
          "I report XSS, LFI, IDOR, and other bugs via responsible disclosure programs.",
        color: "#fc1f20",
      },
    ],
  },
];

const certifications = {
  certifications: [
    {
      title: "Certified AppSec Practitioner (CAP)",
      subtitle: "- The SecOps Group",
      logo_path: "secops_logo.png",
      certificate_link: "",
      alt_name: "The SecOps Group",
      color_code: "#8C151599",
    },
    {
      title: "ePTXv2 - In Progress",
      subtitle: "- eLearnSecurity",
      logo_path: "secops_logo.png",
      certificate_link: "",
      alt_name: "eLearnSecurity",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Professional Experience",
  description:
    "I have worked in cybersecurity roles focusing on web application security, penetration testing, and secure software development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Co-Founder & CTO",
          company: "QuantA Investment Pvt. Ltd.",
          company_url: "https://www.quantainvestment.com.np/",
          logo_path: "quanta_logo.svg",
          duration: "2025 - Present",
          location: "Kathmandu, Nepal",
          description:
            "At QuantA, I lead security and product development of fintech tools for investment analysis and risk management.",
          color: "#0879bf",
        },
        {
          title: "Co-Founder",
          company: "Yagya InfoTech",
          company_url: "https://yagya.tech",
          logo_path: "yagya_logo.svg",
          duration: "2024 - Present",
          location: "Kathmandu, Nepal",
          description:
            "At Yagya InfoTech, I lead project planning and implement secure software architectures.",
          color: "#9b1578",
        },
        {
          title: "Security Researcher",
          company: "Freelance/Bug Bounty",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "2022 - Present",
          location: "Remote",
          description:
            "I report XSS, LFI, IDOR, and other bugs via responsible disclosure programs.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on security tools, vulnerability assessment, and secure application development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I have worked on and published security research and tools.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzc=",
      name: "QuantAI Investment Platform",
      createdAt: "2023-11-06T16:26:54Z",
      description:
        "A fintech platform providing investment analysis and risk management tools for Nepali investors",
      url: "https://www.quantainvestment.com.np/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "WordPress Security Scanner with AI-Powered Analysis",
      createdAt: "2023-01-06T16:26:54Z",
      description:
        "An automated tool for WordPress vulnerability scanning with AI analysis",
      url: "https://github.com/phirojshah",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "401 Bypass Toolkit",
      createdAt: "2023-03-06T16:26:54Z",
      description:
        "A comprehensive toolkit for bypassing 401 authentication mechanisms",
      url: "https://github.com/phirojshah",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Blind XSS Auto Exploiter",
      createdAt: "2023-05-06T16:26:54Z",
      description:
        "Automated tool for detecting and exploiting blind cross-site scripting vulnerabilities",
      url: "https://github.com/phirojshah",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Home Intrusion Detection System",
      createdAt: "2023-07-06T16:26:54Z",
      description:
        "IoT-based security system for home intrusion detection with real-time alerts",
      url: "https://github.com/phirojshah",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "SydneyShine Project",
      createdAt: "2023-09-06T16:26:54Z",
      description: "Web development project - https://sydneyshine.au",
      url: "https://sydneyshine.au",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Microsoft for Startups – Accepted (Yagya InfoTech)",
      createdAt: "2023-09-06T16:26:54Z",
      description:
        "Yagya InfoTech was accepted into the Microsoft for Startups program, providing access to Microsoft technologies and resources.",
      url: "https://yagya.tech",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "I am available for security consulting, penetration testing, and secure development projects. Feel free to reach out!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write about cybersecurity, penetration testing techniques, and vulnerability research.",
    link: "https://phirojshah.vercel.app/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kathmandu, Nepal",
    locality: "Kathmandu",
    country: "NP",
    region: "Bagmati",
    postalCode: "44600",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/WvKFhcLwtd4qmMSq9",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+977-9819642608",
  },
};

// Awards & Achievements
const achievementSection = {
  title: "Awards & Achievements",
  subtitle: "Recognitions and accomplishments in cybersecurity and technology",
  achievements: [
    {
      id: "1",
      title: "Certificate of Appreciation – NASA",
      subtitle: "Vulnerability Disclosure",
      description:
        "Recognized for responsible disclosure of security vulnerabilities in NASA systems",
      date: "2025",
    },
    {
      id: "2",
      title: "Multiple Responsible Disclosures",
      subtitle:
        "National-level medical portals, banks (BPKIHS, Muktinath Bikas Bank)",
      description:
        "Successfully identified and reported critical security vulnerabilities in national infrastructure",
      date: "2022-2025",
    },
    {
      id: "3",
      title: "Best Poster Presentation – ICANOPT 2025",
      subtitle: "YOLOv8 Forest Fire Detection",
      description:
        "Recognized for innovative research in forest fire detection using AI",
      date: "2025",
    },
    {
      id: "4",
      title: "Winner – MLH Hackathon",
      subtitle: "ViewAR – AR Cultural Heritage",
      description:
        "Developed an augmented reality application for cultural heritage preservation",
      date: "2025",
    },
    {
      id: "5",
      title: "Winner – ProtoBytes Hackathon",
      subtitle: "",
      description: "First place in the ProtoBytes hackathon competition",
      date: "2024",
    },
    {
      id: "6",
      title: "Winner – Nepal's First AI Hackathon",
      subtitle: "Health Track – Team MastiskaTrack",
      description: "Developed AI solutions for healthcare challenges",
      date: "2023",
    },
    {
      id: "7",
      title: "Microsoft for Startups – Accepted",
      subtitle: "Yagya InfoTech",
      description: "Selected for the Microsoft for Startups program",
      date: "2025",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  workExperience,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  achievementSection,
};
