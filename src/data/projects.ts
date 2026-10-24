import type { ProjectSummary, ProjectDetail } from "@/types";

// ─────────────────────────────────────────────
// Home page project cards
// ─────────────────────────────────────────────
export const projectSummaries: ProjectSummary[] = [
  {
    slug: "b4due",
    title: "B4Due",
    tags: ["Flutter", "Dart", "Drift", "SQLite", "Riverpod"],
    description:
      "An open-source Android app that tells you before a bill is due. You choose your main currency from 31 currencies. Each bill is a coloured card in a wallet. The app counts loan payments, warns you when you go over your monthly budget, and has a home-screen widget. It has no account and no server, so your bills stay on your phone.",
    image: {
      src: "/images/projects/b4due/cover.webp",
      alt: "B4Due home page, home-screen widget, and dark subscription list",
    },
  },
  {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "Full-stack IoT monitoring platform supporting 2000+ connected devices and 500+ active users, rebuilt from a legacy PHP system with 98% CPU load reduction.",
    image: {
      src: "/images/projects/smartcool-monitoring/smartcool_thumbnail.webp",
      alt: "Smartcool Monitoring",
    },
  },
  {
    slug: "servio",
    title: "Servio",
    tags: ["React", "Express", "Supabase", "Midtrans", "Docker"],
    description:
      "Full-stack restaurant management platform with a touch-first POS, kitchen display, and role-based workflows for waiters, kitchen, cashiers, and admins — built on React, Express, and Supabase, with Midtrans-powered online payments.",
    image: {
      src: "/images/projects/servio/servio_thumbnail.webp",
      alt: "Servio Restaurant Management System",
    },
  },
];

// ─────────────────────────────────────────────
// Full project detail data (one entry per slug)
// ─────────────────────────────────────────────
const projectDetails: Record<string, ProjectDetail> = {
  b4due: {
    slug: "b4due",
    title: "B4Due",
    tags: ["Flutter", "Dart", "Drift", "SQLite", "Riverpod"],
    description:
      "B4Due is an Android app that tells you before a bill is due. It shows electricity, insurance, vehicle tax, loans, streaming, and subscriptions. You choose your main currency from 31 currencies. You can enter each bill in its own currency, and the app shows the amount in your main currency. The app reminds you 7 days, 3 days, and 1 day before the due date, and on the due date. You can mark a bill as paid from the reminder. Each bill is a coloured card in a wallet, and the most urgent card is at the front. For a loan, the app counts the payments and stops after the last payment. If you set a monthly budget, the home page shows a warning when your bills are more than the budget. A widget on the home screen shows how much you must pay this month and the next bill. The app has no account and no server, so it is free for all users. It is in English and Indonesian, and it has a light theme and a dark theme.",
    sourceUrl: "https://github.com/ryanffirdaus/b-4-due",
    downloadUrl: "https://github.com/ryanffirdaus/b-4-due/releases",
    platform: "mobile",
    heroImage: {
      src: "/images/projects/b4due/cover.webp",
      alt: "B4Due home page, home-screen widget, and dark subscription list",
    },
    gallery: [
      {
        src: "/images/projects/b4due/home.webp",
        alt: "Home with wallet cards and the monthly budget",
      },
      {
        src: "/images/projects/b4due/widget.webp",
        alt: "Home-screen widget",
      },
      {
        src: "/images/projects/b4due/currency_setting.webp",
        alt: "Main currency setting",
      },
      {
        src: "/images/projects/b4due/currency_list.webp",
        alt: "Currency list with 31 currencies",
      },
      {
        src: "/images/projects/b4due/bill_form.webp",
        alt: "Bill form",
      },
      {
        src: "/images/projects/b4due/loan_detail.webp",
        alt: "Instalment plan on the bill detail page",
      },
      {
        src: "/images/projects/b4due/budget_sheet.webp",
        alt: "Setting the monthly budget",
      },
      {
        src: "/images/projects/b4due/budget_warning_dark.webp",
        alt: "Over-budget warning in dark mode",
      },
      {
        src: "/images/projects/b4due/bills_dark.webp",
        alt: "Subscriptions in dark mode",
      },
      {
        src: "/images/projects/b4due/calendar_day.webp",
        alt: "Bill calendar with a day sheet",
      },
      {
        src: "/images/projects/b4due/spending.webp",
        alt: "Spending statistics",
      },
      {
        src: "/images/projects/b4due/reminder.webp",
        alt: "Reminder with Paid and Remind me tomorrow actions",
      },
    ],
    challenge: [
      "A reminder app is only useful if each reminder comes on time. B4Due has no server, so the phone must schedule every reminder. The reminders must stay after the phone restarts. They must also get past the battery savers on Xiaomi, OPPO, vivo, and other phones. The Paid button on a reminder works when the app is closed. It must never record the same payment two times. People pay bills in many currencies, so the app also needs current exchange rates. It must get them without an account and continue to work offline.",
      "One function makes the full list of reminders from the bills, the settings, and the time. Each reminder gets a fixed ID. The app compares this list with the reminders on the phone and changes only the differences, so a reminder never shows two times. A tap on a reminder uses the same database as the app and records a payment in one safe step. Each bill keeps its own price, so a change of the main currency never loses an amount. The app keeps the exchange rates on the phone, so the totals stay correct offline.",
    ],
    architecture: {
      cards: [
        {
          title: "Reminders That Come on Time",
          description:
            "Your phone keeps the schedule, not a server. The app does not need the internet for reminders. After a restart, an update, or a change to a bill, the app makes the schedule again. You never get the same reminder two times.",
        },
        {
          title: "Pay From the Reminder",
          description:
            "Tap Paid on the reminder. You do not have to open the app. The app records the payment and moves the bill to the next due date. If you tap two times, the app records the payment only one time.",
        },
        {
          title: "Your Data Stays With You",
          description:
            "There is no account, no server, and no ads. All bills and payments stay on your phone. The app uses the internet only to get exchange rates, and it sends no personal data. You keep your backups in your own storage.",
        },
      ],
    },
    keyResults: [
      { prefix: "$", target: 0, label: "Cost to use. No account, no ads" },
      { target: 31, label: "Currencies you can use" },
      { target: 4, label: "Reminders before each due date" },
      { target: 1, label: "Tap to mark a bill as paid" },
      { target: 291, label: "Automated tests on each change" },
    ],
    techStack: [
      {
        number: "01",
        title: "Flutter + Riverpod",
        description:
          "The app uses Flutter, with Riverpod for state and go_router for the five tabs. The business rules do not use Flutter. Thus, tests can check dates and reminders without a phone.",
      },
      {
        number: "02",
        title: "Own UI Kit",
        description:
          "The app uses no Material or Cupertino widgets. It has its own wallet cards, buttons, text fields, date and time pickers, sheets, and messages. Tests check that no Material import comes back. Tests also check the colour contrast (WCAG AA) and compare screenshots in the light theme and the dark theme.",
      },
      {
        number: "03",
        title: "Drift / SQLite",
        description:
          "Drift keeps the data in SQLite on the phone. Each change to the database structure has a migration. Tests check each migration from every earlier version with real data. The build makes SQLite from its source code, as F-Droid requires.",
      },
      {
        number: "04",
        title: "Local Notifications",
        description:
          "Exact alarms schedule the reminders for the next 120 days on Android. A guide for each phone brand helps users stop battery savers. A test button and optional calendar alarms give more safety.",
      },
      {
        number: "05",
        title: "Home-Screen Widget",
        description:
          "A 4x2 Android widget shows the amount to pay this month, a bar for the paid amount, and the most urgent bill. A tap opens that bill. Dart calculates the text, and the widget updates each time the reminders change. The widget needs no more permissions.",
      },
      {
        number: "06",
        title: "Background Isolates",
        description:
          "Reminder actions and background tasks run in separate isolates. All of them use one shared database. Thus, a payment from a reminder shows on the open home page immediately. A test sends the same action six times at the same time and checks for one payment.",
      },
      {
        number: "07",
        title: "Currencies and Exchange Rates",
        description:
          "You choose a main currency from the 31 currencies of the European Central Bank. Each bill can use its own currency. The app gets the daily rates, keeps them on the phone, and updates them every 12 hours. Each bill keeps its own price, and each payment keeps its currency. Thus, a change of the main currency never loses an amount.",
      },
      {
        number: "08",
        title: "GitHub Actions",
        description:
          "Each change runs the analysis, the unit tests, the migration tests, and the screenshot tests. Then CI builds the APK and checks its permissions. Each green build on main gives a signed test version, and users can update with Obtainium.",
      },
    ],
  },
  smartcool: {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "A full-stack IoT monitoring platform migrated from a legacy PHP dashboard to a modern React and Laravel architecture. The system supports 2000+ connected devices across 5+ sensor metrics in real time, serves 500+ active users, and is powered by 7 Node.js microservices handling data pipelines, background jobs, and third-party integrations.",
    heroImage: {
      src: "/images/projects/smartcool-monitoring/smartcool_thumbnail.webp",
      alt: "Smartcool Monitoring Dashboard",
    },
    gallery: [
      {
        src: "/images/projects/smartcool-monitoring/homepage_monitoring_1.webp",
        alt: "Homepage Monitoring",
      },
      {
        src: "/images/projects/smartcool-monitoring/homepage_monitoring_2.webp",
        alt: "Homepage Monitoring Detail",
      },
      {
        src: "/images/projects/smartcool-monitoring/device_monitoring_1.webp",
        alt: "Device Monitoring",
      },
      {
        src: "/images/projects/smartcool-monitoring/device_monitoring_2.webp",
        alt: "Device Monitoring Detail",
      },
      {
        src: "/images/projects/smartcool-monitoring/summary.webp",
        alt: "Summary",
      },
      {
        src: "/images/projects/smartcool-monitoring/report_energy.webp",
        alt: "Energy Report",
      },
      {
        src: "/images/projects/smartcool-monitoring/work_order_schedule.webp",
        alt: "Work Order Schedule",
      },
      {
        src: "/images/projects/smartcool-monitoring/work_order_tracker.webp",
        alt: "Work Order Tracker",
      },
    ],
    challenge: [
      "The original system was a legacy PHP-based IoT dashboard that had grown unmaintainable over time. It suffered from high CPU utilization, slow database queries, and a tightly coupled architecture that made adding new features risky. The business needed a stable platform capable of scaling to hundreds of connected devices and users simultaneously.",
      "We migrated the front end to React and the back end to Laravel, redesigned the database schema, and introduced Redis caching to address memory and query bottlenecks. Separately, a real-time telemetry layer was built using 7 dedicated Node.js microservices, each responsible for a distinct concern — from data ingestion and processing pipelines to external system integrations and payment handling via Midtrans.",
    ],
    architecture: {
      cards: [
        {
          title: "IoT Device Layer",
          description:
            "2000+ connected devices stream live telemetry across 5+ sensor metrics. Node.js microservices handle ingestion, processing pipelines, and real-time delivery to the front end.",
        },
        {
          title: "Laravel Back End",
          description:
            "REST APIs, third-party integrations, database schema design, and service layers are built in Laravel. Redis caching reduces memory usage by ~75% and accelerates frequent queries.",
        },
        {
          title: "Infrastructure",
          description:
            "Containerized with Docker and deployed on Linux servers via automated pipelines, ensuring consistent environments across development and production.",
        },
      ],
    },
    keyResults: [
      { target: 600, suffix: "+", label: "Connected Devices" },
      { target: 500, suffix: "+", label: "Active Users" },
      { target: 98, suffix: "%", label: "CPU Load Reduction" },
      { target: 75, suffix: "%", label: "Memory Usage Reduction" },
      { target: 7, label: "Node.js Microservices" },
    ],
    techStack: [
      {
        number: "01",
        title: "Laravel",
        description:
          "Powers the core back-end: REST APIs, service layers, database schema design, third-party API integrations, and the Midtrans payment gateway. Chosen for its expressive ORM, robust structure, and rapid development cycle.",
      },
      {
        number: "02",
        title: "Node.js",
        description:
          "Seven dedicated microservices built with Node.js handle real-time telemetry ingestion, data processing pipelines, background jobs, and integrations with external systems.",
      },
      {
        number: "03",
        title: "React",
        description:
          "The front end was fully migrated from legacy PHP views to React, enabling a component-driven UI with live data updates and a significantly improved user experience.",
      },
      {
        number: "04",
        title: "Redis",
        description:
          "Introduced as a caching layer for frequent database reads, reducing memory usage by approximately 75% and improving response times across high-traffic endpoints.",
      },
      {
        number: "05",
        title: "Docker",
        description:
          "All services are containerized and deployed on Linux servers through automated pipelines, ensuring environment parity and enabling reliable horizontal scaling.",
      },
    ],
  },
  servio: {
    slug: "servio",
    title: "Servio",
    tags: ["React", "Express", "Supabase", "Midtrans", "Docker"],
    description:
      "Servio is a full-stack restaurant management system that runs front-of-house and back-of-house operations from a single platform. It coordinates the entire service lifecycle — seating a table, opening an order session, sending tickets to the kitchen, serving, and settling the bill — across dedicated interfaces for admins, waiters, kitchen staff, and cashiers. A React and Vite front end talks to a TypeScript Express API backed by Supabase (PostgreSQL with Row Level Security), with online payments handled through the Midtrans payment gateway and confirmed via webhook.",
    liveUrl: "https://rms.ryanffirdaus.my.id",
    demoCredentials: [
      { role: "Admin", email: "admin@omni.com", password: "admin123" },
      { role: "Waiter", email: "waiter@omni.com", password: "waiter123" },
      { role: "Kitchen", email: "chef@omni.com", password: "chef123" },
      { role: "Cashier", email: "cashier@omni.com", password: "cashier123" },
    ],
    heroImage: {
      src: "/images/projects/servio/servio_thumbnail.webp",
      alt: "Servio Restaurant Management System",
    },
    gallery: [
      {
        src: "/images/projects/servio/dashboard_analytics.webp",
        alt: "Dashboard & Analytics",
      },
      {
        src: "/images/projects/servio/menu_management.webp",
        alt: "Menu Management",
      },
      {
        src: "/images/projects/servio/order_management.webp",
        alt: "Order Management",
      },
      {
        src: "/images/projects/servio/table_floor_plan.webp",
        alt: "Table & Floor Plan",
      },
      {
        src: "/images/projects/servio/waiter_order_creation.webp",
        alt: "Waiter Order Creation",
      },
      {
        src: "/images/projects/servio/kitchen_display.webp",
        alt: "Kitchen Display",
      },
      {
        src: "/images/projects/servio/point_of_sale.webp",
        alt: "Point of Sale",
      },
    ],
    challenge: [
      "Restaurant service is a high-pressure, multi-role choreography: waiters take orders at the table, the kitchen works a queue of tickets, and cashiers close out bills — often all at once during a busy hour. Generic point-of-sale tools rarely model these handoffs cleanly, leaving staff to reconcile state by shouting across the pass. Servio needed to give each role a purpose-built view while maintaining a single, authoritative order state that everyone can trust.",
      "The system is organised around an explicit order lifecycle — Pending → Preparing → Ready → Completed, with Cancelled as an escape hatch — enforced by the Express API. Each interface polls for the latest order and payment state on a short interval, so the kitchen, waiter, and cashier screens stay current through a busy shift. Access is scoped by role through Supabase Row Level Security, online checkout runs through the Midtrans payment gateway with server-side webhook confirmation before an order is marked paid, and the stack is containerised with Docker behind an Nginx reverse proxy for consistent, reproducible deployments.",
    ],
    architecture: {
      cards: [
        {
          title: "Role-Based Operations",
          description:
            "Purpose-built interfaces for admins, waiters, kitchen, and cashiers — from a touch-first POS and table floor plan to a kitchen display — each surfacing only what that role needs to keep service moving.",
        },
        {
          title: "Orders & Payments",
          description:
            "A server-enforced order lifecycle (Pending → Preparing → Ready → Completed) drives the floor, with checkout handled through the Midtrans payment gateway and confirmed by webhook before an order is marked paid.",
        },
        {
          title: "Data & Infrastructure",
          description:
            "A TypeScript Express API on Supabase PostgreSQL with Row Level Security, containerised with Docker behind an Nginx reverse proxy for a reproducible production deployment.",
        },
      ],
    },
    keyResults: [
      { target: 4, label: "User Roles" },
      { target: 10, suffix: "+", label: "Feature Modules" },
      { target: 5, label: "Order Statuses" },
      { target: 5, label: "Menu Categories" },
      { target: 3, label: "Dockerized Services" },
    ],
    techStack: [
      {
        number: "01",
        title: "React + Vite",
        description:
          "A component-driven front end with role-based routing, a touch-first point-of-sale, an interactive table floor plan, and operational dashboards — bundled with Vite for fast builds and a lean static production output.",
      },
      {
        number: "02",
        title: "Express.js",
        description:
          "A TypeScript Express API owns business logic and the order state machine, exposing REST endpoints for menus, orders, tables, payments, and staff while gating actions by role. Client screens poll these endpoints to stay current during a shift.",
      },
      {
        number: "03",
        title: "Supabase / PostgreSQL",
        description:
          "Cloud-hosted PostgreSQL via Supabase provides the relational data model and authentication, with Row Level Security policies enforcing role-scoped access to orders, inventory, and reports.",
      },
      {
        number: "04",
        title: "Midtrans",
        description:
          "Online payments are processed through the Midtrans payment gateway: the cashier initiates a transaction and the backend confirms settlement via a server-side webhook before the order is marked paid.",
      },
      {
        number: "05",
        title: "Docker & Nginx",
        description:
          "The frontend and backend are containerised and served behind an Nginx reverse proxy that routes traffic between the React app and the Express API, giving a consistent, reproducible production deployment.",
      },
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
