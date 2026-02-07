import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Khalid",
  lastName: "Shaikh",
  name: "Khalid Shaikh",
  role: "Product Security Engineer",
  avatar: "/images/avatar.jpg",
  email: "khalid06188@gmail.com",
  location: "America/Los_Angeles",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: `Subscribe to ${person.firstName}'s Newsletter`,
  description: "My weekly newsletter",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kks12",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/khalid-k-shaikh/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio of ${person.name}, a ${person.role} focused on application security, PSIRT, and cloud security.`,
  headline: <>Securing web apps and cloud systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projects
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m Khalid, a{" "}
      <Text as="span" size="xl" weight="strong">
        Product Security Engineer
      </Text>{" "}
      with hands-on experience in AppSec, vulnerability triage (PSIRT), secure code review, and WAF rule engineering.
      <br />
      I focus on practical security outcomes: reducing risk, preventing abuse, and improving resilience in production systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Product Security Engineer focused on application security and vulnerability management. I’ve assessed and triaged CVEs
        for product impact, collaborated with engineering on remediation, performed secure code reviews, and supported incident response
        and WAF tuning for production web apps and APIs.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "A10 Networks, Inc",
        timeframe: "Jun 2025 – Present",
        role: "Product Security Engineer",
        achievements: [
          <>Performed dual responsibilities across Product Security and SOC functions: incident investigation, log analysis, and response coordination.</>,
          <>Assessed 100+ CVEs for product impact and coordinated remediation with 10+ engineering teams via PSIRT workflows.</>,
          <>Conducted code reviews and manual validation testing to confirm patch effectiveness and secure coding alignment.</>,
          <>Used n8n to automate threat simulation inputs and detection validation, improving WAF/SIEM feedback loops.</>,
        ],
        images: [],
      },
      {
        company: "ThreatX (A10 Networks, Inc)",
        timeframe: "Jun 2024 – Jun 2025",
        role: "Security Engineer",
        achievements: [
          <>Developed and optimized NGINX firewall rule sets to defend 100+ API endpoints against OWASP Top 10 threats.</>,
          <>Handled monitoring and incident response for 200+ web apps and APIs; supported customers while tracking new CVEs.</>,
          <>Automated OpenVAS deployment using Terraform on DigitalOcean, cutting setup time ~80% and expanding coverage to 50+ assets.</>,
          <>Built dashboards using MongoDB, Prometheus, Grafana, and Metabase to visualize traffic metrics and threat trends.</>,
          <>Developed internal tools (Python/Bash/Terraform) for blacklist updates, log parsing, and IP enrichment workflows.</>,
        ],
        images: [],
      },
      {
        company: "Synopsys Inc",
        timeframe: "May 2023 – Aug 2023",
        role: "Security Engineer Intern",
        achievements: [
          <>Performed white-box security assessments on 7 client web apps and produced reports with remediation guidance.</>,
          <>Built a CTF training platform (CTFd) on AWS; provisioned infrastructure with Terraform (EC2, RDS, S3).</>,
          <>Supported threat modeling and architecture reviews with senior consultants.</>,
        ],
        images: [],
      },
      {
        company: "Tracelay Networks",
        timeframe: "Jun 2021 – Sept 2021",
        role: "Cyber Security Engineer Intern",
        achievements: [
          <>Threat hunted across large event volumes using Wazuh SIEM and identified anomalies across multiple client environments.</>,
          <>Supported SOC 2 compliance by collecting logs, validating access controls, and assisting remediation across multiple clients.</>,
          <>Helped assess access policies for Zero Trust improvements within an MXDR platform.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      { name: "Syracuse University (M.S. Cyber Security)", description: <>May 2024</> },
      { name: "Mumbai University (B.E. Information Technology)", description: <>Jun 2022</> },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AppSec & PSIRT",
        description: <>Secure code review, OWASP Top 10, CVE triage, vulnerability assessment, API security, WAF configuration.</>,
        tags: [
          { name: "AppSec", icon: "github" },
          { name: "PSIRT", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>AWS, NGINX, Terraform, Docker, Kubernetes, Prometheus/Grafana, MongoDB.</>,
        tags: [
          { name: "AWS", icon: "github" },
          { name: "Kubernetes", icon: "github" },
          { name: "Terraform", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Security Tooling",
        description: <>Burp Suite, Splunk, Nmap, Wireshark, Nessus, Trivy, Qualys, SIEM/SOAR.</>,
        tags: [
          { name: "Burp Suite", icon: "github" },
          { name: "Splunk", icon: "github" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Security notes",
  description: `Writing about AppSec, PSIRT, and practical security work.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected security projects and engineering work by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
