export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Web' | 'Desktop' | 'Mobile' | 'SaaS';
  technologies: string[];
  screenshots: string[];
  liveUrl?: string;
  liveLabel?: string;
  sourceUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  highlights?: string[];
  status?: 'Live' | 'In Development' | 'Beta';
};

export const projects: Project[] = [
  {
    id: 'sokobiz',
    name: 'SokoBiz',
    tagline: 'Multi-tenant business & inventory SaaS',
    description:
      'A complete business management platform for retailers and wholesalers. Includes inventory, sales, customer management, reports and multi-branch support. Serving live tenants across Kenya.',
    category: 'SaaS',
    technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    screenshots: [
      '/images/Screenshot 2025-08-09 185316.jpg',
      '/images/Screenshot 2025-08-09 193305.jpg',
    ],
    liveUrl: 'https://sokobiz.co.ke',
    liveLabel: 'sokobiz.co.ke',
    highlights: [
      'Multi-tenant architecture serving live customers',
      'Real-time sales and inventory reporting',
      'Branch, staff & role-based access control',
    ],
    status: 'Live',
  },
  {
    id: 'dukapro-pos',
    name: 'DukaPro POS',
    tagline: 'Cross-platform point of sale system',
    description:
      'A full-stack point of sale solution with a Django backend, Next.js admin dashboard, a PyQt6 desktop cashier app for offline-first billing, and a companion mobile app. Handles products, sales, receipts, payments (M-Pesa) and reports.',
    category: 'SaaS',
    technologies: ['Django REST', 'Next.js', 'PyQt6', 'React Native', 'PostgreSQL'],
    screenshots: [
      '/images/WhatsApp Image 2025-06-25 at 09.10.12_b08999e2.jpg',
      '/images/WhatsApp Image 2025-06-25 at 09.10.24_9b4891bb.jpg',
      '/images/WhatsApp Image 2025-06-30 at 15.16.57_731be8cf.jpg',
    ],
    highlights: [
      'Offline-capable desktop cashier (PyQt6)',
      'Central web dashboard & analytics',
      'M-Pesa integration and receipt printing',
      'Companion mobile app for on-the-go sales',
    ],
    status: 'Beta',
  },
  {
    id: 'schoolmaster',
    name: 'SchoolMaster',
    tagline: 'Multi-tenant school management SaaS',
    description:
      'A hosted school management platform with subdomain-per-tenant onboarding. Manages student records, exams, grading, ranking, report cards, fees, staff and parent communication.',
    category: 'SaaS',
    technologies: ['Django', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    screenshots: ['/images/Home.jpg', '/images/Exam.jpg', '/images/Result.jpg'],
    liveUrl: 'https://lilian.schoolmaster.co.ke',
    liveLabel: 'lilian.schoolmaster.co.ke (tenant demo)',
    highlights: [
      'Live onboarded tenant (Lilian)',
      'Automatic report card generation & ranking',
      'Fee tracking and parent portal',
    ],
    status: 'Live',
  },
  {
    id: 'dukapro-mobile',
    name: 'DukaPro Mobile',
    tagline: 'Sales & inventory on Android',
    description:
      'A React Native mobile companion for shop owners — quick sale capture, product lookup, low-stock alerts and daily summaries. Syncs with the DukaPro backend in real time.',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    screenshots: [
      '/images/WhatsApp Image 2025-06-05 at 18.17.31_f4dda977.jpg',
      '/images/WhatsApp Image 2025-06-05 at 18.17.39_928b2b20.jpg',
      '/images/WhatsApp Image 2025-06-05 at 18.17.45_9695a3b3.jpg',
    ],
    highlights: [
      'Barcode-friendly quick sale flow',
      'Offline queue with background sync',
      'Push notifications for low stock',
    ],
    status: 'Beta',
  },
  {
    id: 'dukapro-desktop',
    name: 'DukaPro Desktop',
    tagline: 'PyQt6 desktop cashier for shops',
    description:
      'A native desktop point-of-sale application built with PyQt6. Fast keyboard-driven billing, thermal printer receipts, day-close reports and local caching for uninterrupted sales.',
    category: 'Desktop',
    technologies: ['Python', 'PyQt6', 'SQLite', 'Qt Stylesheet'],
    screenshots: [
      '/images/WhatsApp Image 2025-05-18 at 21.19.49_455668f9.jpg',
      '/images/Image.jpg',
    ],
    highlights: [
      'Offline-first with local SQLite cache',
      'Thermal printer & barcode scanner support',
      'Keyboard-driven cashier UX',
    ],
    status: 'Beta',
  },
  {
    id: 'timetable',
    name: 'School Timetable Generator',
    tagline: 'Automated timetable builder',
    description:
      'A Windows desktop application that generates conflict-free school timetables based on subjects, teachers and available slots. Ships as a signed installer.',
    category: 'Desktop',
    technologies: ['Python', 'PyQt', 'Algorithms', 'Windows Installer'],
    screenshots: ['/images/timetable-icon.png'],
    downloadUrl: '/downloads/SchoolTimetableGeneratorSetup.exe',
    downloadLabel: 'Download for Windows',
    highlights: [
      'Constraint-based scheduling engine',
      'Exports printable PDF timetables',
      'Windows installer included',
    ],
    status: 'Live',
  },
];
