// Everything on the home page that isn't a post, project or publication lives here.
export const profile = {
  name: 'Marcelo Albuquerque',
  authorNames: ['Marcelo Albuquerque', 'Marcelo Ramalho Albuquerque'],
  shortName: 'mralbu',
  role: 'Petrophysicist, Data Scientist & PhD Candidate',
  description:
    'Petrophysicist, data scientist, and PhD candidate in Electrical Engineering. Applied machine learning, statistics, reservoir engineering, and petrophysical characterization.',
  bio: [
    'I am a petrophysicist, data scientist, and PhD candidate in Electrical Engineering working at the intersection of applied machine learning, statistics, and reservoir engineering.',
    'My work spans Special Core Analysis (SCAL), microtomographic image workflows, Bayesian history matching, and building data visualization and machine learning tools for reservoir modeling.',
  ],
  interests: ['Petrophysics & SCAL', 'Data Science', 'Machine Learning', 'Reservoir Engineering'],
  education: [
    { course: 'PhD in Electrical Engineering', institution: 'PUC-Rio · Rio de Janeiro, RJ', period: '2025–Present' },
    { course: 'MSc in Computer Science', institution: 'UFRJ · Rio de Janeiro, RJ', period: '2018–2020' },
    { course: 'BSc in Electronics Engineering', institution: 'Instituto Tecnológico de Aeronáutica (ITA)', period: '2003–2008' },
  ],
  social: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/mralbu' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/mralbu/' },
    { label: 'CV', icon: 'cv', url: 'https://mralbu.github.io/cv/' },
  ],
} as const;
