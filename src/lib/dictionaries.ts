export type Dictionary = typeof en;

export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Theeranat Aiyarakhom",
    role: "Computer Science Student",
    tagline: "Building things with AI, Computer Vision & Software Engineering",
    viewProjects: "View Projects",
    github: "GitHub",
    contact: "Contact",
  },
  about: {
    heading: "01 — About",
    body: [
      "I'm a final-year Computer Science student at the ",
      { strong: "College of Digital Innovation Technology (DIT), Rangsit University" },
      ", with a technical foundation from a vocational background in ",
      { strong: "Information Technology" },
      " and ",
      { strong: "Embedded Systems & IoT" },
      ". I enjoy turning ideas into working software — from ",
      { strong: "computer vision" },
      " and ",
      { strong: "AI" },
      " to ",
      { strong: "object-oriented systems" },
      " and ",
      { strong: "embedded programming" },
      " — and I'm currently looking for opportunities to apply what I've learned to real-world projects.",
    ],
  },
  skills: {
    heading: "02 — Skills",
    categories: {
      languages: "Languages",
      ai: "AI & Computer Vision",
      software: "Software Engineering",
      database: "Database",
      frameworks: "Frameworks & Libraries",
      exposure: "Exposure / Learning",
      tools: "Tools & Platforms",
    },
  },
  education: {
    heading: "03 — Education",
    items: [
      {
        degree: "Bachelor's Degree",
        field: "Computer Science",
        institution: "College of Digital Innovation Technology (DIT), Rangsit University",
        period: "Year 4 · Current",
      },
      {
        degree: "Higher Vocational Certificate (ปวส.)",
        field: "Information Technology — Embedded Systems & IoT Development",
        institution: "Nakhon Si Thammarat Vocational College",
        period: "Completed",
      },
    ],
  },
  projects: {
    heading: "04 — Projects",
    empty: "Couldn't load projects right now — check back later or visit",
    noDescription: "No description provided.",
    filterAll: "All",
  },
  contact: {
    heading: "05 — Contact",
    cta: "Let's get in touch.",
    labels: {
      email: "Email",
      github: "GitHub",
      facebook: "Facebook",
      instagram: "Instagram",
      phone: "Phone",
    },
  },
  footer: {
    text: "Built with Next.js & Tailwind CSS.",
  },
};

export const th: Dictionary = {
  nav: {
    about: "เกี่ยวกับฉัน",
    skills: "ทักษะ",
    education: "การศึกษา",
    projects: "ผลงาน",
    contact: "ติดต่อ",
  },
  hero: {
    greeting: "สวัสดีครับ ผมชื่อ",
    name: "ธีรนาถ อัยราคม",
    role: "นักศึกษาวิทยาการคอมพิวเตอร์",
    tagline: "สร้างสรรค์ผลงานด้าน AI, Computer Vision และ Software Engineering",
    viewProjects: "ดูผลงาน",
    github: "GitHub",
    contact: "ติดต่อ",
  },
  about: {
    heading: "01 — เกี่ยวกับฉัน",
    body: [
      "ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ ",
      { strong: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี (DIT) มหาวิทยาลัยรังสิต" },
      " มีพื้นฐานสายอาชีพด้าน ",
      { strong: "เทคโนโลยีสารสนเทศ" },
      " และ ",
      { strong: "ระบบสมองกลฝังตัว/IoT" },
      " มาก่อน ผมชอบเปลี่ยนไอเดียให้กลายเป็นซอฟต์แวร์ที่ใช้งานได้จริง ตั้งแต่ ",
      { strong: "Computer Vision" },
      " และ ",
      { strong: "AI" },
      " ไปจนถึง ",
      { strong: "ระบบเชิงวัตถุ (OOP)" },
      " และ ",
      { strong: "การเขียนโปรแกรมฝังตัว" },
      " ตอนนี้กำลังมองหาโอกาสในการนำความรู้ไปใช้กับงานจริงครับ",
    ],
  },
  skills: {
    heading: "02 — ทักษะ",
    categories: {
      languages: "ภาษาโปรแกรม",
      ai: "AI และ Computer Vision",
      software: "วิศวกรรมซอฟต์แวร์",
      database: "ฐานข้อมูล",
      frameworks: "เฟรมเวิร์คและไลบรารี",
      exposure: "กำลังเรียนรู้ / เคยลองใช้",
      tools: "เครื่องมือและแพลตฟอร์ม",
    },
  },
  education: {
    heading: "03 — การศึกษา",
    items: [
      {
        degree: "ปริญญาตรี",
        field: "วิทยาการคอมพิวเตอร์ (Computer Science)",
        institution: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี (DIT) มหาวิทยาลัยรังสิต",
        period: "ชั้นปีที่ 4 · กำลังศึกษา",
      },
      {
        degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
        field: "เทคโนโลยีสารสนเทศ — สาขางานนักพัฒนาระบบสมองกลฝังตัวและไอโอที",
        institution: "วิทยาลัยอาชีวศึกษานครศรีธรรมราช",
        period: "สำเร็จการศึกษา",
      },
    ],
  },
  projects: {
    heading: "04 — ผลงาน",
    empty: "ตอนนี้โหลดผลงานไม่สำเร็จ ลองใหม่ภายหลัง หรือดูได้ที่",
    noDescription: "ยังไม่มีคำอธิบาย",
    filterAll: "ทั้งหมด",
  },
  contact: {
    heading: "05 — ติดต่อ",
    cta: "มาคุยกันเถอะ",
    labels: {
      email: "อีเมล",
      github: "GitHub",
      facebook: "เฟซบุ๊ก",
      instagram: "อินสตาแกรม",
      phone: "เบอร์โทร",
    },
  },
  footer: {
    text: "สร้างด้วย Next.js และ Tailwind CSS",
  },
};
