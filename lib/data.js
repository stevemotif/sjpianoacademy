// lib/data.js — All hardcoded content for SJ Piano Academy

export const siteConfig = {
  name: 'SJ Piano Academy',
  tagline: 'Nurturing Musical Excellence Since 2005',
  phone: '(437) 258-2131',
  email: 'stevemotif@gmail.com',
  address: '2869 Battleford Road, Mississauga, ON L5N 2S6',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
}

export const programs = [
  {
    id: 1,
    title: 'Little Fingers',
    age: 'Ages 6-7',
    icon: '🎹',
    description:
      'A gentle, playful introduction to the piano through songs, games, and rhythm activities designed for tiny hands and curious minds.',
    duration: '30 min / lesson',
    format: 'Group or Private',
  },
  {
    id: 2,
    title: 'Junior Pianist',
    age: 'Ages 8–19',
    icon: '🎵',
    description:
      'Building a solid foundation in music theory, reading, and technique. Students explore classical, contemporary, and pop repertoire.',
    duration: '30 min / lesson',
    format: 'Group or Private',
  },
  {
    id: 3,
    title: 'Teen & Adult',
    age: 'Ages 20+',
    icon: '🎼',
    description:
      'Tailored lessons for teens and adults at any level — from absolute beginners to advanced students preparing for conservatory exams.',
    duration: '30 min / lesson',
    format: 'Group or Private',
  },
  {
    id: 4,
    title: 'RCM Exam Prep',
    age: 'All Levels',
    icon: '🏆',
    description:
      'Structured preparation for Royal Conservatory of Music exams. We have a strong track record of honours and first-class distinctions.',
    duration: '30 min / lesson',
    format: 'Group or Private',
  },
]

export const whyUs = [
  {
    title: 'Experienced Faculty',
    description:
      'Our instructors hold degrees from leading music conservatories and bring decades of performance and teaching experience.',
    icon: '🎓',
  },
  {
    title: 'Personalized Learning',
    description:
      'Every student receives a customized lesson plan that respects their pace, goals, and musical interests.',
    icon: '✨',
  },
  {
    title: 'Performance Opportunities',
    description:
      'Annual recitals and community showcases give students a joyful, supportive stage to share their progress.',
    icon: '🎤',
  },
  {
    title: 'Modern Facilities',
    description:
      'Two private teaching studios, each equipped with Nord Stage 3 and digital pianos in a warm, inspiring environment.',
    icon: '🏛️',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Morning, afternoon, and evening slots available to fit around school and work commitments.',
    icon: '🗓️',
  },
  {
    title: 'Proven Results',
    description:
      'Over 85% of our RCM candidates achieve honours, with multiple students earning provincial recognition each year.',
    icon: '🥇',
  },
]

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of Emily, age 9',
    text: 'SJ Piano Academy has been a wonderful experience for our daughter. Her teacher is incredibly patient and has made Emily fall in love with music. She practises every day without being asked!',
  },
  {
    name: 'James T.',
    role: 'Adult student',
    text: 'I started at 42 with zero musical background. Within a year I was playing pieces I never dreamed possible. The instructors have a real gift for teaching adults — no judgment, just encouragement.',
  },
  {
    name: 'Priya N.',
    role: 'Parent of Rohan, age 14',
    text: 'Rohan passed his RCM Grade 8 exam with first-class honours. The preparation was thorough and the support exceptional. We couldn\'t be more proud or grateful.',
  },
]

export const stats = [
  { value: '18+', label: 'Years of Excellence' },
  { value: '400+', label: 'Active Students' },
  { value: '95%', label: 'Student Retention Rate' },
  { value: '2', label: 'Annual Recitals Hosted' },
]

// ── About ──────────────────────────────────────────────
export const aboutContent = {
  story: `SJ Piano Academy was founded in 2007 by Stephen Jebakumar with a single teaching studio and a deep belief that music has the power to transform lives. What began as a small neighbourhood music school has grown into one of the most trusted piano academies in the Greater Toronto Area, now welcoming over 400 students each year across six fully-equipped studios.

From the very beginning, our philosophy has been simple: great teaching is personal. We take the time to understand each student's learning style, musical goals, and pace — whether they dream of performing on a concert stage, passing RCM exams with distinction, or simply playing their favourite songs at home.

Over the years, SJ Piano Academy students have graced stages at Roy Thomson Hall, competed in provincial piano festivals, and gone on to study at leading conservatories across North America. Yet our greatest achievement is not measured in trophies — it is measured in the joy we see on a child's face when they play their first song, or in the quiet pride of an adult who discovers music for the first time.

We are proud to be a community, and we look forward to welcoming you into ours.`,
  instructor: {
    name: 'Margaret Chen',
    title: 'Founder & Principal Instructor',
    bio: `Margaret Chen holds a Master of Music in Piano Performance from the Royal Conservatory of Music and has over 25 years of teaching experience. A graduate of the Glenn Gould School, Margaret performed extensively across Canada and Europe before dedicating herself fully to music education in 2005.

A certified RCM teacher and examiner, Margaret is known for her warmth, precision, and her uncanny ability to connect with students of all ages and backgrounds. Under her guidance, dozens of students have achieved first-class honours in RCM examinations, and several have pursued careers as professional musicians and music educators.

Outside the studio, Margaret serves on the board of the Ontario Registered Music Teachers' Association and is a frequent adjudicator at regional piano festivals.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    credentials: [
      'M.Mus, Royal Conservatory of Music',
      'Glenn Gould School Graduate',
      'RCM Certified Teacher & Examiner',
      'ORMTA Board Member',
    ],
  },
  team: [
    {
      name: 'David Park',
      title: 'Senior Instructor',
      speciality: 'Classical & Jazz',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Sophie Lefebvre',
      title: 'Instructor',
      speciality: 'Early Childhood Music',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Arun Kapoor',
      title: 'Instructor',
      speciality: 'Contemporary & RCM Prep',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
  ],
}

// ── Recitals ───────────────────────────────────────────
export const recitals = [
  {
    year: 2024,
    title: 'Spring Serenade 2024',
    date: 'May 18, 2024',
    venue: 'Mississauga Grand Hall',
    description:
      'Our most attended recital to date, featuring 62 students performing works from Bach to Einaudi across two glorious evenings.',
    coverImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
    performers: 62,
    videos: [
      {
        id: 'v1',
        title: 'Opening — Für Elise (Beethoven) | Lily Zhang',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'Moonlight Sonata, Mvt. I (Beethoven) | Aiden Park',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v3',
        title: 'Clair de Lune (Debussy) | Sophie Tremblay',
        thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v4',
        title: 'Nocturne Op.9 No.2 (Chopin) | Ethan Patel',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    ],
  },
  {
    year: 2025,
    title: 'Melodies of Spring 2025',
    date: 'May 20, 2025',
    venue: 'Port Credit Community Centre',
    description:
      'A warm celebration of student achievement featuring 54 performers ranging from our youngest Little Fingers graduates to advanced senior students.',
    coverImage: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    performers: 54,
    videos: [
      {
        id: 'v1',
        title: 'Turkish March (Mozart) | Ryan Kim',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'Maple Leaf Rag (Joplin) | Isabelle Nguyen',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v3',
        title: 'Fantaisie-Impromptu (Chopin) | Lucas Ferreira',
        thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
      'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=800&q=80',
    ],
  },
  {
    year: 2022,
    title: 'Harmony Showcase 2022',
    date: 'June 4, 2022',
    venue: 'Mississauga Living Arts Centre',
    description:
      'Our first in-person recital after two years of virtual events — an emotional and joyful return to the stage for 48 students.',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    performers: 48,
    videos: [
      {
        id: 'v1',
        title: 'Gymnopédie No.1 (Satie) | Mia Okonkwo',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'Ballade No.1 (Chopin) | James Huang',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    ],
  },
  {
    year: 2021,
    title: 'Virtual Recital 2021',
    date: 'May 29, 2021',
    venue: 'Online (YouTube Live)',
    description:
      'Our second virtual showcase, produced with broadcast-quality recording kits loaned to students. 41 performers from the comfort of their homes.',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    performers: 41,
    videos: [
      {
        id: 'v1',
        title: 'La Campanella (Liszt) | Angela Wu',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'River Flows in You (Yiruma) | Noah Santos',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v3',
        title: 'Für Elise (Beethoven) | Grace Miller',
        thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
    ],
  },
  {
    year: 2020,
    title: 'Virtual Spring Concert 2020',
    date: 'June 13, 2020',
    venue: 'Online (Zoom)',
    description:
      'Pivoting to virtual in our first pandemic year, 38 students performed from home in a heartwarming Zoom concert that brought our community together.',
    coverImage: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=800&q=80',
    performers: 38,
    videos: [
      {
        id: 'v1',
        title: 'Prelude in C Major (Bach) | Olivia Chen',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'He\'s a Pirate (Badelt) | Ben Taylor',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    ],
  },
  {
    year: 2019,
    title: 'Spring Showcase 2019',
    date: 'May 25, 2019',
    venue: 'Mississauga Grand Hall',
    description:
      'A landmark recital celebrating our 14th year, with 56 students performing to a sold-out audience of over 300 guests.',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    performers: 56,
    videos: [
      {
        id: 'v1',
        title: 'Rondo Alla Turca (Mozart) | Ella Thompson',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v2',
        title: 'Waltz in A minor (Chopin) | Samuel Brown',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v3',
        title: 'Consolation No.3 (Liszt) | Maya Patel',
        thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
      {
        id: 'v4',
        title: 'Impromptu Op.90 No.2 (Schubert) | Kevin Zhou',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=800&q=80',
    ],
  },
]
