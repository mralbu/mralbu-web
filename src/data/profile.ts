// Everything on the home page that isn't a post, project or publication lives here.
export const profile = {
  name: 'Marcelo Albuquerque',
  authorNames: ['Marcelo Albuquerque', 'Marcelo Ramalho Albuquerque'],
  shortName: 'mralbu',
  role: 'Petrophysicist & Data Scientist',
  organization: { name: 'Petrobras Research Center (CENPES)', url: 'https://petrobras.com.br' },
  description:
    'Petrophysicist and data scientist at the Petrobras Research Center (CENPES). Applied machine learning, statistics, reservoir engineering, and petrophysical characterization.',
  bio: [
    'I am a petrophysicist and data scientist at the Petrobras Research Center (CENPES) with skills in applied machine learning, statistics, and reservoir engineering.',
    'My work spans Special Core Analysis (SCAL), microtomographic image workflows, Bayesian history matching, and building data visualization and machine learning tools for reservoir modeling.',
  ],
  // The three focus areas in the hero banner.
  focus: [
    { title: 'Petrophysics', text: 'Digital Rock Physics & SCAL' },
    { title: 'Data Science', text: 'Python ♥ R ♥ Julia' },
    { title: 'Open Data', text: 'Free as in speech!' },
  ],
  interests: ['Petrophysics & SCAL', 'Data Science', 'Machine Learning', 'Reservoir Engineering'],
  education: [
    { course: 'MSc in Computer Science', institution: 'UFRJ · Rio de Janeiro, RJ', period: '2018–2020' },
    { course: 'BSc in Electronics Engineering', institution: 'Instituto Tecnológico de Aeronáutica (ITA)', period: '2003–2008' },
  ],
  skills: [
    { name: 'Python', level: 92 },
    { name: 'R', level: 88 },
    { name: 'SQL', level: 60 },
    { name: 'Julia', level: 50 },
    { name: 'JavaScript', level: 46 },
    { name: 'Bash', level: 40 },
  ],
  experience: [
    {
      role: 'Data Scientist',
      organization: 'Petrobras Research Center (CENPES)',
      period: '2018–Present',
      summary:
        'ML models for petrophysical prediction, REST APIs and Python/R packages, microtomographic image workflows, data visualization apps, and Bayesian history matching.',
    },
    {
      role: 'Petrophysicist',
      organization: 'Petrobras Research Center (CENPES)',
      period: '2015–Present',
      summary:
        'Coordination and analysis of Routine and Special Core Analysis (SCAL) data for pre-salt and strategic fields, physical simulation, and data acquisition improvements.',
    },
    {
      role: 'Reservoir Engineer',
      organization: 'Petrobras (UO-SEAL)',
      period: '2010–2015',
      summary:
        'Management of mature oil and gas fields in the Sergipe-Alagoas basin, including production and reserves forecasting.',
    },
    {
      role: 'Diplomand Researcher',
      organization: 'German Aerospace Center (DLR)',
      period: '2007',
      summary:
        'Implemented a time-domain back-projection Synthetic Aperture Radar (SAR) processor in IDL and C/pthreads and researched Circular SAR.',
    },
  ],
  awards: [
    {
      title: 'Plínio Cantanhede Award',
      organization: 'Rio Oil & Gas',
      year: 2024,
      summary: 'Best paper in the Upstream Section at the 2024 Rio Oil & Gas Conference.',
    },
    {
      title: '1st Place, Hackathon Semana Petrobras de Dados e Analytics',
      organization: 'Petrobras',
      year: 2024,
      summary: 'Trained semantic segmentation models to identify turbidite channels in 3D seismic cubes.',
    },
  ],
  social: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/mralbu' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/mralbu/' },
    { label: 'CV', icon: 'cv', url: 'https://mralbu.github.io/cv/' },
  ],
} as const;
