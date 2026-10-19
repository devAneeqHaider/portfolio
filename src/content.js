export const profile = {
  name: 'Aneeq Haider',
  role: 'Backend Engineer',
  coreStack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'AWS'],

  bio: `Two years on the half of a product nobody sees. Django REST APIs at a
    hundred thousand requests a day, Celery and RabbitMQ keeping slow work off
    the request path, and CI/CD that stops a release when a scan finds
    something.`,

  email: 'devaneeq5@gmail.com',
  phone: '+92 323 454 4880',
  resume: '/documents/Dev_Aneeq_Haider.pdf',

  github: 'https://github.com/devAneeqHaider',
  linkedin: 'https://www.linkedin.com/in/maneeq5',

  photo: '/images/aneeq.jpeg',
  photoFallback: '/images/aneeq.jpeg',
  photoAlt: 'Aneeq Haider',
}

export const work = [
  {
    company: 'Amperor Tech',
    logo: '/logos/amperortech_logo.jfif',
    role: 'Backend Engineer',
    period: 'Aug 2024 to July 2026',
    story: `Backend systems for logistics, learning, and event platforms. I built
      REST APIs for booking, inventory, shipment tracking, course delivery, and
      event management, then moved pricing and logistics workflows into Celery
      workers instead of keeping them in the request flow. I also worked on
      AI-driven inventory processing, JWT/RBAC authentication, database and API
      performance, and production deployments on AWS.`,
    diagram: {
      caption: 'Getting slow work off the request path',
      kind: 'flow',
      lanes: [
        {
          label: 'Request path, answers immediately',
          nodes: [
            { icon: 'ui:user', label: 'Client', sub: '100k+ per day' },
            { icon: 'ui:server', label: 'DRF API', sub: 'Validate, enqueue' },
            { icon: 'ui:bolt', label: 'Response', sub: 'Returns at once' },
          ],
        },
        {
          label: 'Background, takes as long as it takes',
          nodes: [
            { icon: 'ui:queue', label: 'Queue', sub: 'RabbitMQ' },
            { icon: 'ui:cog', label: 'Workers', sub: 'Celery' },
            { icon: 'ui:database', label: 'Data layer', sub: 'PostgreSQL' },
          ],
        },
        {
          label: 'Every build',
          nodes: [
            { icon: 'ui:commit', label: 'Commit', sub: 'CodeCommit, GitHub' },
            { icon: 'ui:build', label: 'Build', sub: 'CodePipeline' },
            { icon: 'ui:shield', label: 'Scan', sub: 'Vulnerabilities' },
            { icon: 'ui:release', label: 'Release', sub: 'EC2, S3' },
          ],
        },
      ],
      note: 'The API hands slow jobs to the queue and replies straight away. Nothing waits on a scrape.',
    },
    stack: ['Django REST Framework', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Docker'],
  },
]

export const projects = [
  {
    name: 'RepoRadar',
    tagline: 'AI GitHub repository architect',
    cover: {
      image: '/images/reporadar.webp',
      alt: 'RepoRadar turning a GitHub repository into an interactive architecture graph',
    },
    description: `Paste any public GitHub URL — RepoRadar downloads the repo,
      parses it with a real AST engine, and returns an interactive architecture
      graph, a deterministic code-smell report, and an AI-written onboarding
      guide. No more week-long onboarding.`,
    diagram: {
      caption: 'How a repo URL becomes an architecture map',
      kind: 'flow',
      lanes: [
        {
          label: 'One public URL, analyzed end to end',
          nodes: [
            { icon: 'ui:globe', label: 'Repo URL', sub: 'Public GitHub link' },
            { icon: 'tech:django', label: 'DRF API', sub: 'Analysis job' },
            { icon: 'ui:queue', label: 'Celery', sub: 'Download, parse, smells' },
            { icon: 'ui:database', label: 'PostgreSQL', sub: 'Graph + findings' },
            { icon: 'tech:react', label: 'Frontend', sub: 'Interactive graph' },
          ],
        },
      ],
      note: 'Deterministic analysis first, LLM second — fully useful with no API key at all.',
    },
    stack: ['React 18', 'Django REST Framework', 'Celery', 'PostgreSQL', 'Redis', 'Google Gemini'],
    links: {
      live: 'https://reporadar-ai.netlify.app',
      overview: null,
      frontend: null,
      backend: null,
      crawlers: null,
    },
    featured: true,
  },
  {
    name: 'WeMove.ai',
    tagline: 'Logistics platform APIs at scale',
    cover: {
      image: '/images/wemove.webp',
      alt: 'WeMove.ai logistics dashboard with shipment tracking',
    },
    description: `RESTful APIs for booking management, inventory tracking, and
      real-time shipment status updates. Pricing and logistics workflows run as
      asynchronous Celery tasks instead of blocking the request path, with
      AI-driven inventory processing and production deployments on AWS.`,
    diagram: {
      caption: 'How a booking moves through the system',
      kind: 'flow',
      lanes: [
        {
          label: 'Bookings, inventory, shipments',
          nodes: [
            { icon: 'ui:globe', label: 'Client', sub: 'Bookings + tracking' },
            { icon: 'tech:django', label: 'DRF API', sub: 'Validate, enqueue' },
            { icon: 'ui:queue', label: 'Celery', sub: 'Pricing, logistics' },
            { icon: 'ui:database', label: 'PostgreSQL', sub: 'Orders, inventory' },
          ],
        },
      ],
      note: 'Slow pricing and logistics work runs in the background — the request path answers immediately.',
    },
    stack: ['Django REST Framework', 'Celery', 'RabbitMQ', 'PostgreSQL', 'AWS'],
    links: {
      live: null,
      overview: null,
      frontend: null,
      backend: null,
      crawlers: null,
    },
    featured: false,
  },
  {
    name: 'Versana (MatrixLink)',
    tagline: 'Learning and performance management backend',
    cover: {
      image: '/images/versana.webp',
      alt: 'Versana learning platform dashboard with course progress',
    },
    description: `Backend services and RESTful APIs for a mobile learning
      platform, built alongside Flutter developers. User onboarding, course
      delivery, notifications, and employee performance tracking — with query
      and API performance tuned for high-concurrency enterprise usage.`,
    diagram: {
      caption: 'One backend serving thousands of learners',
      kind: 'flow',
      lanes: [
        {
          label: 'Thousands of learners, one backend',
          nodes: [
            { icon: 'ui:user', label: 'Mobile app', sub: 'Flutter client' },
            { icon: 'tech:django', label: 'DRF API', sub: 'Courses, onboarding' },
            { icon: 'ui:database', label: 'PostgreSQL', sub: 'Tuned queries' },
            { icon: 'ui:bolt', label: 'Response', sub: 'High-concurrency ready' },
          ],
        },
      ],
      note: 'Query and API performance tuned so the platform holds up at enterprise concurrency.',
    },
    stack: ['Django REST Framework', 'PostgreSQL', 'JWT', 'Docker'],
    links: {
      live: null,
      overview: null,
      frontend: null,
      backend: null,
      crawlers: null,
    },
    featured: false,
  },
  {
    name: 'Nook',
    tagline: 'Event management API with role-based access',
    cover: {
      image: '/images/nook.webp',
      alt: 'Nook event management interface with calendar and RSVPs',
    },
    description: `FastAPI REST APIs for event creation, scheduling, and
      participant management. JWT authentication with role-based access control
      keeps organizers and attendees on their own side of the API, with RSVP
      workflows, event tracking, and user interaction features.`,
    diagram: {
      caption: 'One API, two roles',
      kind: 'split',
      sourcesLabel: 'Who is asking',
      sources: [
        { icon: 'ui:briefcase', label: 'Organizer', sub: 'Creates and manages events' },
        { icon: 'ui:search', label: 'Attendee', sub: 'Discovers and RSVPs' },
      ],
      gateLabel: 'Every request passes through',
      gate: [
        { icon: 'ui:key', label: 'JWT', sub: 'Who you are' },
        { icon: 'ui:lock', label: 'RBAC', sub: 'What you may touch' },
      ],
      outputsLabel: 'What each side reaches',
      outputs: [
        { icon: 'ui:server', label: 'Organizer endpoints', sub: 'Events, attendees' },
        { icon: 'ui:globe', label: 'Attendee endpoints', sub: 'Browse, RSVP' },
      ],
      note: 'Same data underneath. The token decides which half of the API you can see.',
    },
    stack: ['FastAPI', 'PostgreSQL', 'JWT Authentication'],
    links: {
      live: null,
      overview: null,
      frontend: null,
      backend: null,
      crawlers: null,
    },
    featured: false,
  },
]


export const toolbelt = [
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'Django', icon: '/tech/django.svg' },
  { name: 'Flask', icon: '/tech/flask.svg' },
  { name: 'FastAPI', icon: '/tech/fastapi.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'MongoDB', icon: '/tech/mongodb.svg' },
  { name: 'Supabase', icon: '/tech/supabase.svg' },
  { name: 'Celery', icon: '/tech/celery.svg' },
  { name: 'RabbitMQ', icon: '/tech/rabbitmq.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'AWS', icon: '/tech/amazonwebservices.svg' },
  { name: 'Google Cloud', icon: '/tech/googlecloud.svg' },
  { name: 'GitHub Actions', icon: '/tech/githubactions.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'Selenium', icon: '/tech/selenium.svg' },
  { name: 'Swagger', icon: '/tech/swagger.svg' },
  { name: 'Postman', icon: '/tech/postman.svg' },
  { name: 'Vercel', icon: '/tech/vercel.svg' },
]

export const aitools = [
  { name: 'Claude Code', icon: '/tech/claudecode.svg' },
  { name: 'Cursor', icon: '/tech/cursor.svg' },
  { name: 'ChatGPT', icon: '/tech/chatgpt.svg' },
  { name: 'Grok', icon: '/tech/grok.svg' },
  { name: 'DeepSeek', icon: '/tech/deepseek.svg' },
]

export const background = {
  education: {
    logo: '/logos/lgu.webp',
    institution: 'Lahore Garrison University',
    degree: 'BS Software Engineering',
    period: '2020 to 2024',
  },
  community: [
    {
      role: 'Campus Director',
      org: 'AI Community of Pakistan',
      logo: '/logos/aicp.webp',
      note: 'Ran AI awareness initiatives and student tech events on campus.',
    },
    {
      role: 'Participant',
      org: 'Aspire Leaders Program',
      logo: '/logos/aspire.webp',
      note: 'Selected for a globally competitive leadership program.',
    },
  ],
}
