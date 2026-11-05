export const PREVIEW_OPTIONS = [
  { label: "Jobs", iconName: "Briefcase", active: true },
  { label: "Crew", iconName: "Users", active: false },
  { label: "Messages", iconName: "MessageSquare", active: false },
] as const;

export const JOBS_DATA = [
  {
    name: "Riviera Wedding Editorial",
    date: "Sept 28, 2026",
    city: "Malibu, CA",
    readiness: 92,
    status: "Ready",
    statusColor: "green" as const,
    crew: [0, 1, 2],
    extra: 1,
  },
  {
    name: "TechCorp Q4 Campaign",
    date: "Oct 12, 2026",
    city: "San Francisco, CA",
    readiness: 67,
    status: "1 role open",
    statusColor: "amber" as const,
    crew: [1, 3],
    extra: 0,
  },
  {
    name: "Martínez Quinceañera",
    date: "Oct 5, 2026",
    city: "Los Angeles, CA",
    readiness: 45,
    status: "2 contracts unsigned",
    statusColor: "red" as const,
    crew: [0],
    extra: 1,
  },
  {
    name: "Blackwood Brand Portraits",
    date: "Nov 3, 2026",
    city: "Austin, TX",
    readiness: 78,
    status: "Needs attention",
    statusColor: "amber" as const,
    crew: [1, 4],
    extra: 1,
  },
  {
    name: "Coastal Lifestyle Brand",
    date: "Nov 18, 2026",
    city: "Santa Barbara, CA",
    readiness: 100,
    status: "Ready",
    statusColor: "green" as const,
    crew: [0, 1, 2],
    extra: 0,
  },
]

export const FEATURES = [
  {
    iconName: "Briefcase",
    title: "Every job, fully in view",
    text: "Track crew, contracts, gear, and details from first brief to final wrap.",
  },
  {
    iconName: "Users",
    title: "Build your go-to crew",
    text: "Keep trusted collaborators, roles, and job history in one searchable directory.",
  },
  {
    iconName: "FileCheck",
    title: "Paperwork that moves",
    text: "Know what is signed, what is missing, and who needs a nudge before shoot day.",
  },
]

export const CREW_DATA = [
  {
    name: "Sofia Chen",
    role: "Director of Photography",
    colorIdx: 0,
    jobs: 12,
  },
  { name: "Marcus Webb", role: "1st AC", colorIdx: 1, jobs: 8 },
  { name: "Priya Sharma", role: "Sound Mixer", colorIdx: 2, jobs: 6 },
  { name: "Jake Torres", role: "Gaffer", colorIdx: 3, jobs: 9 },
  { name: "Anya Kowalski", role: "Production Assistant", colorIdx: 4, jobs: 4 },
  { name: "Derek Huang", role: "Colorist", colorIdx: 5, jobs: 3 },
  { name: "Nadia Rivera", role: "Makeup Artist", colorIdx: 0, jobs: 5 },
  { name: "Tom Bradley", role: "Drone Operator", colorIdx: 1, jobs: 2 },
]