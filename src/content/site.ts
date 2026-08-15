import type { Lang } from "../providers/LanguageProvider";

/* ------------------------------------------------------------------ */
/*  Shared, language-independent data                                  */
/* ------------------------------------------------------------------ */

export const NAV_IDS = [
  "home",
  "about",
  "projects",
  "research",
  "achievements",
  "team",
  "contact",
] as const;

export type NavId = (typeof NAV_IDS)[number];

export const LINKS = {
  personal: {
    instagram: "https://www.instagram.com/alhayaly.2007",
    instagramHandle: "@alhayaly.2007",
    facebook: "https://www.facebook.com/share/185j2Wxb9f/",
    email: "ibrahempapeer@gmail.com",
  },
  team: {
    instagram: "https://www.instagram.com/ftr.ai_26",
    instagramHandle: "@ftr.ai_26",
    facebook: "https://www.facebook.com/share/14k46zPHuZK/",
    website: "https://university-assistant.github.io/uniesiy-ass/",
    tiktok: "https://www.tiktok.com/@ftr.ai5",
    tiktokHandle: "@ftr.ai5",
    email: "futureaiteam26@gmail.com",
  },
};

/** Assets the owner drops into /public/assets. Fallbacks handle absence. */
export const ASSETS = {
  certificate: "/assets/nurai-2026-certificate.png",
  researchPaper: "/assets/intelligent-study-assistant-paper.pdf",
};

export const TECH_GROUPS = [
  {
    key: "languages",
    items: ["Python", "Dart", "Flutter"],
  },
  {
    key: "backend",
    items: ["FastAPI", "On-device Deployment"],
  },
  {
    key: "ai",
    items: ["Gemma 4 E2B", "LoRA", "PyTorch", "Transformers"],
  },
  {
    key: "retrieval",
    items: ["RAG", "FAISS", "LlamaIndex", "nomic-embed-text"],
  },
] as const;

export const RESEARCH_STATS = [
  { value: 114, suffix: "", key: "questions" },
  { value: 88, suffix: "", key: "correct" },
  { value: 77.19, suffix: "%", key: "correctRate" },
  { value: 90.35, suffix: "%", key: "acceptable" },
] as const;

export const CERTIFICATE = {
  id: "8451cf3357190d311e720394",
  date: "2026-08-09",
};

/* ------------------------------------------------------------------ */
/*  Localised strings                                                  */
/* ------------------------------------------------------------------ */

interface ArchStep {
  title: string;
  desc: string;
}

interface Content {
  langName: string;
  altLangName: string;
  nav: Record<NavId, string>;
  meta: { title: string };
  a11y: {
    toggleTheme: string;
    toggleLang: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    toTop: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    positioning: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  credibility: {
    items: { label: string; value: string }[];
  };
  about: {
    label: string;
    title: string;
    body: string;
    focusTitle: string;
    focus: string[];
  };
  project: {
    label: string;
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    techTitle: string;
    techLabel: string;
    techGroups: Record<string, string>;
    archLabel: string;
    archTitle: string;
    archHint: string;
    steps: ArchStep[];
  };
  research: {
    label: string;
    title: string;
    subtitle: string;
    body: string;
    stats: Record<string, string>;
    cta: string;
    ctaMissing: string;
  };
  nurai: {
    label: string;
    title: string;
    subtitle: string;
    team: string;
    trackLabel: string;
    track: string;
    projectLabel: string;
    project: string;
    recognitionLabel: string;
    recognition: string;
    body: string;
    view: string;
    dateLabel: string;
    idLabel: string;
    certAlt: string;
    certMissing: string;
    close: string;
  };
  achievements: {
    label: string;
    title: string;
    items: { date: string; title: string; desc: string; tag: string }[];
  };
  team: {
    label: string;
    title: string;
    body: string;
    connect: string;
    linksLabel: string;
    visit: string;
  };
  contact: {
    label: string;
    title: string;
    body: string;
    instagram: string;
    email: string;
    socialTitle: string;
  };
  footer: {
    role: string;
    copyright: string;
    built: string;
  };
}

const en: Content = {
  langName: "English",
  altLangName: "العربية",
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    research: "Research",
    achievements: "Achievements",
    team: "Team",
    contact: "Contact",
  },
  meta: { title: "Ibrahim Al-Hayali | AI Student, Developer & Researcher" },
  a11y: {
    toggleTheme: "Toggle color theme",
    toggleLang: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    toTop: "Back to top",
  },
  hero: {
    eyebrow: "AI Student · Developer · Researcher",
    name: "Ibrahim Al-Hayali",
    title: "Artificial Intelligence Student",
    positioning: "Developer · Researcher · Builder",
    description:
      "I build AI-powered systems and turn technical ideas into practical, research-driven solutions.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "View Research",
    scroll: "Scroll",
  },
  credibility: {
    items: [
      { label: "AI Student", value: "University of Mosul" },
      { label: "Research", value: "Intelligent Study Assistant" },
      { label: "NURAI 2026", value: "Participant" },
      { label: "Future AI Team", value: "Team Member" },
    ],
  },
  about: {
    label: "About",
    title: "About Me",
    body: "Ibrahim Al-Hayali is an Artificial Intelligence student at the University of Mosul with a strong interest in AI systems, software development, research, and building practical technology solutions.",
    focusTitle: "Focus areas",
    focus: [
      "Artificial Intelligence",
      "Software Development",
      "Research",
      "Applied AI",
      "Knowledge Retrieval",
      "Local AI Systems",
    ],
  },
  project: {
    label: "Featured Project",
    tag: "AI · Education · Research",
    title: "Intelligent Study Assistant",
    p1: "The Intelligent Study Assistant (ISA) is an on-device academic support system that combines Retrieval-Augmented Generation (RAG) with the Gemma 4 E2B language model and Low-Rank Adaptation (LoRA).",
    p2: "The system retrieves relevant educational content from a curated knowledge base before generating responses, helping reduce hallucinated information and keeping responses aligned with computer science curricula.",
    p3: "The system operates locally, keeping academic data within the institutional environment.",
    techTitle: "Technology Stack",
    techLabel: "Stack",
    techGroups: {
      languages: "Languages & UI",
      backend: "Backend & Deployment",
      ai: "Models & Training",
      retrieval: "Retrieval & Embeddings",
    },
    archLabel: "Architecture",
    archTitle: "The Retrieval-Augmented Pipeline",
    archHint: "Hover a stage to learn more",
    steps: [
      {
        title: "Educational Materials",
        desc: "Curated computer-science course content forms the source knowledge base.",
      },
      {
        title: "Data Preparation",
        desc: "Raw materials are cleaned and structured for reliable downstream processing.",
      },
      {
        title: "Chunking",
        desc: "Documents are split into coherent passages suited for retrieval.",
      },
      {
        title: "Embeddings",
        desc: "Passages are encoded into vectors using nomic-embed-text.",
      },
      {
        title: "Vector Database",
        desc: "Embeddings are indexed in FAISS for fast similarity search.",
      },
      {
        title: "Semantic Retrieval",
        desc: "The most relevant passages are retrieved for each academic query.",
      },
      {
        title: "Retrieved Context",
        desc: "Grounding context is assembled to keep answers on-curriculum.",
      },
      {
        title: "Gemma 4 E2B + LoRA",
        desc: "The adapted language model generates a grounded academic response.",
      },
      {
        title: "Final Academic Response",
        desc: "An accurate, curriculum-aligned answer is returned — fully on-device.",
      },
    ],
  },
  research: {
    label: "Research",
    title: "Intelligent Study Assistant",
    subtitle: "An On-Device, Privacy-Preserving Academic Support System",
    body: "The research proposes a locally deployed academic assistant that combines Retrieval-Augmented Generation with the Gemma 4 E2B language model and LoRA, retrieving curriculum-aligned context before generating each answer.",
    stats: {
      questions: "Academic Questions",
      correct: "Fully Correct Answers",
      correctRate: "Fully Correct",
      acceptable: "Acceptable Responses",
    },
    cta: "View Research Paper",
    ctaMissing: "Research paper — coming soon",
  },
  nurai: {
    label: "Achievement",
    title: "NURAI 2026",
    subtitle:
      "National University Journal of Robotics and Artificial Intelligence",
    team: "Future AI Team — University of Mosul",
    trackLabel: "Track",
    track: "Education & Training",
    projectLabel: "Project",
    project: "Intelligent Study Assistant",
    recognitionLabel: "Recognition",
    recognition: "Good",
    body: "Ibrahim participated as a member of the Future AI Team and contributed to the Intelligent Study Assistant project.",
    view: "View certificate",
    dateLabel: "Date",
    idLabel: "Certificate ID",
    certAlt: "NURAI 2026 participation certificate",
    certMissing:
      "Certificate image will appear here once added.",
    close: "Close",
  },
  achievements: {
    label: "Timeline",
    title: "Achievements",
    items: [
      {
        date: "2026",
        tag: "NURAI 2026",
        title: "NURAI 2026 Participation",
        desc: "Participated with the Future AI Team — University of Mosul in the Education & Training track.",
      },
      {
        date: "2026",
        tag: "Research · Development",
        title: "Intelligent Study Assistant",
        desc: "Development and research project focused on privacy-preserving, on-device academic AI.",
      },
    ],
  },
  team: {
    label: "Collective",
    title: "Future AI Team",
    body: "A youth technology team working on artificial intelligence and software projects. The Intelligent Study Assistant was built within this collective.",
    connect: "Connect with the team",
    linksLabel: "Official links",
    visit: "Visit team website",
  },
  contact: {
    label: "Contact",
    title: "Let's Build Something Meaningful",
    body: "Interested in AI, research, or technology? Let's connect.",
    instagram: "Instagram",
    email: "Email",
    socialTitle: "Elsewhere",
  },
  footer: {
    role: "Artificial Intelligence Student · Developer · Researcher",
    copyright: "© 2026 Ibrahim Al-Hayali",
    built: "Designed & built with care.",
  },
};

const ar: Content = {
  langName: "العربية",
  altLangName: "English",
  nav: {
    home: "الرئيسية",
    about: "نبذة",
    projects: "المشاريع",
    research: "البحث",
    achievements: "الإنجازات",
    team: "الفريق",
    contact: "تواصل",
  },
  meta: { title: "إبراهيم الحيالي | طالب ذكاء اصطناعي ومطور وباحث" },
  a11y: {
    toggleTheme: "تبديل المظهر",
    toggleLang: "تغيير اللغة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    skipToContent: "تخطٍ إلى المحتوى",
    toTop: "العودة للأعلى",
  },
  hero: {
    eyebrow: "طالب ذكاء اصطناعي · مطور · باحث",
    name: "إبراهيم الحيالي",
    title: "طالب ذكاء اصطناعي",
    positioning: "مطور · باحث · صانع حلول",
    description:
      "أبني أنظمة تعتمد على الذكاء الاصطناعي، وأحوّل الأفكار التقنية إلى حلول عملية قائمة على البحث والتجربة.",
    ctaPrimary: "استكشف أعمالي",
    ctaSecondary: "عرض البحث",
    scroll: "مرّر",
  },
  credibility: {
    items: [
      { label: "طالب ذكاء اصطناعي", value: "جامعة الموصل" },
      { label: "بحث علمي", value: "المساعد الدراسي الذكي" },
      { label: "NURAI 2026", value: "مشارك" },
      { label: "فريق Future AI", value: "عضو في الفريق" },
    ],
  },
  about: {
    label: "نبذة",
    title: "نبذة عني",
    body: "إبراهيم الحيالي طالب في مجال الذكاء الاصطناعي بجامعة الموصل، مهتم بتطوير أنظمة الذكاء الاصطناعي والبرمجيات والبحث العلمي وبناء حلول تقنية عملية.",
    focusTitle: "مجالات التركيز",
    focus: [
      "الذكاء الاصطناعي",
      "تطوير البرمجيات",
      "البحث العلمي",
      "الذكاء الاصطناعي التطبيقي",
      "استرجاع المعرفة",
      "أنظمة الذكاء الاصطناعي المحلية",
    ],
  },
  project: {
    label: "المشروع المميز",
    tag: "ذكاء اصطناعي · تعليم · بحث",
    title: "المساعد الدراسي الذكي",
    p1: "المساعد الدراسي الذكي (ISA) هو نظام دعم أكاديمي يعمل على الجهاز محليًا، يجمع بين التوليد المعزّز بالاسترجاع (RAG) ونموذج اللغة Gemma 4 E2B وتقنية التكييف منخفض الرتبة (LoRA).",
    p2: "يسترجع النظام المحتوى التعليمي ذا الصلة من قاعدة معرفية منسّقة قبل توليد الإجابات، مما يساعد على تقليل المعلومات المُهلوَسة وإبقاء الإجابات متوافقة مع مناهج علوم الحاسوب.",
    p3: "يعمل النظام محليًا، مع الحفاظ على البيانات الأكاديمية ضمن البيئة المؤسسية.",
    techTitle: "الحزمة التقنية",
    techLabel: "التقنيات",
    techGroups: {
      languages: "اللغات والواجهات",
      backend: "الخادم والنشر",
      ai: "النماذج والتدريب",
      retrieval: "الاسترجاع والتضمين",
    },
    archLabel: "المعمارية",
    archTitle: "منظومة التوليد المعزّز بالاسترجاع",
    archHint: "مرّر فوق أي مرحلة لمعرفة المزيد",
    steps: [
      {
        title: "المواد التعليمية",
        desc: "محتوى مناهج علوم الحاسوب المنسّق يشكّل قاعدة المعرفة المصدرية.",
      },
      {
        title: "تحضير البيانات",
        desc: "تُنظّف المواد الخام وتُهيكل لضمان معالجة موثوقة لاحقًا.",
      },
      {
        title: "التقطيع",
        desc: "تُقسّم الوثائق إلى مقاطع متماسكة مناسبة للاسترجاع.",
      },
      {
        title: "التضمينات",
        desc: "تُرمّز المقاطع إلى متجهات باستخدام nomic-embed-text.",
      },
      {
        title: "قاعدة البيانات المتجهية",
        desc: "تُفهرَس التضمينات في FAISS لبحث تشابُه سريع.",
      },
      {
        title: "الاسترجاع الدلالي",
        desc: "تُسترجع أكثر المقاطع صلة بكل سؤال أكاديمي.",
      },
      {
        title: "السياق المسترجَع",
        desc: "يُجمَع السياق الداعم لإبقاء الإجابات ضمن المنهج.",
      },
      {
        title: "Gemma 4 E2B + LoRA",
        desc: "يولّد النموذج المُكيَّف إجابة أكاديمية مستندة إلى السياق.",
      },
      {
        title: "الإجابة الأكاديمية النهائية",
        desc: "تُعاد إجابة دقيقة متوافقة مع المنهج — بالكامل على الجهاز.",
      },
    ],
  },
  research: {
    label: "البحث",
    title: "المساعد الدراسي الذكي",
    subtitle: "نظام دعم أكاديمي يعمل محليًا ويحافظ على الخصوصية",
    body: "يقترح البحث مساعدًا أكاديميًا يُنشَر محليًا يجمع بين التوليد المعزّز بالاسترجاع ونموذج Gemma 4 E2B وتقنية LoRA، حيث يسترجع سياقًا متوافقًا مع المنهج قبل توليد كل إجابة.",
    stats: {
      questions: "سؤال أكاديمي",
      correct: "إجابة صحيحة تمامًا",
      correctRate: "صحيحة تمامًا",
      acceptable: "استجابات مقبولة",
    },
    cta: "عرض ورقة البحث",
    ctaMissing: "ورقة البحث — قريبًا",
  },
  nurai: {
    label: "إنجاز",
    title: "NURAI 2026",
    subtitle: "المجلة الوطنية الجامعية للروبوتات والذكاء الاصطناعي",
    team: "فريق Future AI — جامعة الموصل",
    trackLabel: "المسار",
    track: "التعليم والتدريب",
    projectLabel: "المشروع",
    project: "المساعد الدراسي الذكي",
    recognitionLabel: "التقدير",
    recognition: "جيد",
    body: "شارك إبراهيم كعضو في فريق Future AI وساهم في مشروع المساعد الدراسي الذكي.",
    view: "عرض الشهادة",
    dateLabel: "التاريخ",
    idLabel: "معرّف الشهادة",
    certAlt: "شهادة المشاركة في NURAI 2026",
    certMissing: "ستظهر صورة الشهادة هنا بعد إضافتها.",
    close: "إغلاق",
  },
  achievements: {
    label: "المسار الزمني",
    title: "الإنجازات",
    items: [
      {
        date: "2026",
        tag: "NURAI 2026",
        title: "المشاركة في NURAI 2026",
        desc: "شارك مع فريق Future AI — جامعة الموصل ضمن مسار التعليم والتدريب.",
      },
      {
        date: "2026",
        tag: "بحث · تطوير",
        title: "المساعد الدراسي الذكي",
        desc: "مشروع تطوير وبحث يركّز على ذكاء اصطناعي أكاديمي يعمل محليًا ويحافظ على الخصوصية.",
      },
    ],
  },
  team: {
    label: "الفريق",
    title: "فريق Future AI",
    body: "فريق تقني شبابي يعمل على مشاريع الذكاء الاصطناعي والبرمجيات. بُني المساعد الدراسي الذكي ضمن هذا الفريق.",
    connect: "تواصل مع الفريق",
    linksLabel: "الروابط الرسمية",
    visit: "زيارة موقع الفريق",
  },
  contact: {
    label: "تواصل",
    title: "لنبنِ شيئًا ذا قيمة",
    body: "إذا كنت مهتمًا بالذكاء الاصطناعي أو البحث أو التقنية، يسعدني التواصل معك.",
    instagram: "إنستغرام",
    email: "البريد الإلكتروني",
    socialTitle: "روابط أخرى",
  },
  footer: {
    role: "طالب ذكاء اصطناعي · مطور · باحث",
    copyright: "© 2026 إبراهيم الحيالي",
    built: "صُمّم وبُني بعناية.",
  },
};

export const CONTENT: Record<Lang, Content> = { en, ar };

export function useT(lang: Lang) {
  return CONTENT[lang];
}
