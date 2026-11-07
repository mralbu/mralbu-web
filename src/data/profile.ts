// Everything on the home page that isn't a post, project or publication lives here.
export const profile = {
  name: 'Marcelo Albuquerque',
  shortName: 'mralbu',
  role: 'Petrophysics Researcher',
  organization: { name: 'Petrobras', url: 'https://petrobras.com.br' },
  description:
    'Petrophysics researcher at the Digital Rocks Lab, CENPES/Petrobras. Machine learning, data visualization and petrophysical characterization.',
  bio: [
    'I am a petrophysics researcher at the Digital Rocks Lab, at CENPES/Petrobras. My research interests include petrophysical characterization, data science and machine learning.',
  ],
  // The three slides from the old carousel, shown as focus areas in the hero.
  focus: [
    { title: 'Petrophysics', text: 'Digital Rock Physics' },
    { title: 'Data Science', text: 'Python ♥ R ♥ Julia' },
    { title: 'Open Data', text: 'Free as in speech!' },
  ],
  interests: ['Petrophysics', 'Data Science', 'Machine Learning'],
  education: [
    { course: 'MEng in Computer Science', institution: 'UFRJ', year: 2020 },
    { course: 'BSc in Electronics Engineering', institution: 'Instituto Tecnológico de Aeronáutica', year: 2008 },
  ],
  skills: [
    { name: 'Python', level: 90 },
    { name: 'R', level: 80 },
    { name: 'Statistics', level: 70 },
  ],
  social: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/mralbu' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/mralbu/' },
    { label: 'CV', icon: 'cv', url: 'https://mralbu.github.io/cv' },
  ],
} as const;
