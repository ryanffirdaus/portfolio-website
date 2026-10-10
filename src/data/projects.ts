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
      "An open-source Android app that reminds you before bills and subscriptions are due. No account and no server: bills and payments stay on the phone, and the only network request fetches exchange rates for bills priced in foreign currencies.",
    image: {
      src: "/images/projects/b4due/b4due_cover.webp",
      alt: "B4Due home, statistics, and dark-mode home screens",
    },
  },
  {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "Full-stack IoT monitoring platform supporting 600+ connected devices and 500+ active users, rebuilt from a legacy PHP system with 98% CPU load reduction.",
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
      "B4Due is a bill and subscription reminder for Android, built for Indonesian households: electricity, BPJS, vehicle tax, instalments, streaming, and subscriptions billed in dollars. It reminds you 7, 3 and 1 day before a bill is due and on the day itself, and you can mark the bill as paid straight from the notification. A calendar view and spending statistics show where the money goes. There is no account and no server, so it costs nothing to run for anyone. The interface ships in Bahasa Indonesia and English, in light and dark mode.",
    sourceUrl: "https://github.com/ryanffirdaus/b-4-due",
    downloadUrl: "https://github.com/ryanffirdaus/b-4-due/releases",
    platform: "mobile",
    heroImage: {
      src: "/images/projects/b4due/b4due_cover.webp",
      alt: "B4Due home, statistics, and dark-mode home screens",
    },
    gallery: [
      { src: "/images/projects/b4due/home_light.webp", alt: "Home" },
      { src: "/images/projects/b4due/calendar.webp", alt: "Bill calendar" },
      {
        src: "/images/projects/b4due/statistics.webp",
        alt: "Spending statistics",
      },
      {
        src: "/images/projects/b4due/bill_form_usd.webp",
        alt: "Bill form in US dollars",
      },
      {
        src: "/images/projects/b4due/notification.webp",
        alt: "Notification actions",
      },
      { src: "/images/projects/b4due/home_dark.webp", alt: "Home dark mode" },
    ],
    challenge: [
      "Bill reminders only matter if they fire. Without a server there is no push service to fall back on, so every reminder has to be scheduled on the device itself, survive reboots, and get past the aggressive battery savers on Xiaomi, OPPO, vivo and similar phones. The \"Mark as paid\" button on a notification also runs while the app is closed, in a separate isolate, and must never record the same payment twice. And because many subscriptions are billed in dollars, the app needs current exchange rates without giving up its offline, account-free design.",
      "Scheduling is a pure function: bills, settings and the current time go in, and a list of notifications with deterministic IDs comes out. A sync step reconciles the OS queue against that list, so re-running it is idempotent and can never duplicate a reminder. Notification actions share one Drift database server across isolates and pay a bill inside a single idempotent transaction. Recurring dates are civil dates on an anchor day, so a bill due on the 31st stays on the 31st after February. Exchange rates are an anonymous request to the European Central Bank's reference rates, cached locally, so reminders, totals and statistics keep working in rupiah when the phone is offline.",
    ],
    architecture: {
      cards: [
        {
          title: "Pure Scheduling Planner",
          description:
            "planNotifications() turns bills, settings and the current time into reminders keyed by bill, due date and offset, hashed to stable IDs. ReminderSync cancels what is no longer planned and reschedules the rest on launch, resume, every data change, restore, and a 12-hourly WorkManager task.",
        },
        {
          title: "Background Isolate Actions",
          description:
            "Notification actions run with the app closed. All isolates connect to one shared Drift database server, and paying a bill is a single write-locked transaction that ignores double taps, duplicate deliveries, and stale notifications for an earlier period.",
        },
        {
          title: "Offline First, Private by Default",
          description:
            "No account, backend or analytics. The only network call is a GET for exchange rates that carries no user data, with a timeout, size cap and local cache. Backups are JSON files the user keeps in their own storage, and CI rejects any APK that asks for a permission outside an allowlist.",
        },
      ],
    },
    keyResults: [
      { target: 0, label: "Accounts or Servers" },
      { target: 148, label: "Automated Tests" },
      { target: 16, label: "Foreign Currencies" },
      { target: 23, label: "Bill Templates" },
      { target: 2, label: "Languages (ID, EN)" },
    ],
    techStack: [
      {
        number: "01",
        title: "Flutter + Riverpod",
        description:
          "A feature-first Flutter app with Riverpod for state and a five-tab go_router shell. Domain code has no Flutter imports, so date rules and the scheduler are unit-tested without a device.",
      },
      {
        number: "02",
        title: "Drift / SQLite",
        description:
          "Local SQLite through Drift with UUID keys, soft deletes, and step-by-step migrations tested from every earlier schema version with real rows. SQLite is compiled from a vendored amalgamation so release builds download no prebuilt binaries, as F-Droid requires.",
      },
      {
        number: "03",
        title: "Local Notifications",
        description:
          "flutter_local_notifications with exact alarms schedules a rolling horizon of reminders (120 days on Android, 64 notifications on iOS). Per-brand battery guidance, a test-notification button, and optional calendar alarms cover phones that kill background work.",
      },
      {
        number: "04",
        title: "Background Isolates",
        description:
          "Notification actions and WorkManager tasks run in their own isolates but connect to one shared Drift server, so a payment made from the notification updates the open home screen immediately. Tests run six simultaneous deliveries of the same action against one SQLite file.",
      },
      {
        number: "05",
        title: "Exchange Rates",
        description:
          "Bills can be priced in 16 foreign currencies. Daily ECB reference rates come from Frankfurter, are cached in SQLite and refreshed every 12 hours, and each foreign bill keeps its original amount so the rupiah estimate is recomputed after every refresh.",
      },
      {
        number: "06",
        title: "GitHub Actions",
        description:
          "CI runs analyze, unit, widget, migration and golden tests in light and dark mode, then audits the built APK's permissions. release-please cuts semver releases from Conventional Commits, every green build on main ships a signed nightly APK, and users can auto-update through Obtainium.",
      },
    ],
  },
  smartcool: {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "A full-stack IoT monitoring platform migrated from a legacy PHP dashboard to a modern React and Laravel architecture. The system supports 600+ connected devices across 5+ sensor metrics in real time, serves 500+ active users, and is powered by 7 Node.js microservices handling data pipelines, background jobs, and third-party integrations.",
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
            "600+ connected devices stream live telemetry across 5+ sensor metrics. Node.js microservices handle ingestion, processing pipelines, and real-time delivery to the front end.",
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
