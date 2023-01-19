export const faculties = [
  {
    name: 'agriculture',
    departments: [
      'Agricultural Economics',
      'Agricultural Extension',
      'Soil Science',
      'Animal Science',
      'Nutrition and Dietetics',
      'Home Science and Management',
      'Food Science and Technology',
      'Crop Science',
    ],
  },
  {
    name: 'arts',
    departments: [
      'History and International Studies',
      'Mass Communication',
      'Archaeology and Tourism',
      'English and Literary Studies',
      'Fine and Applied Arts',
      'Linguistics, Igbo and other Nigerian Languages',
      'Music',
      'Theatre Arts and Films Studies',
      'Foreign Languages and Literature',
    ],
  },
  {
    name: 'basic medical science',
    departments: ['Human Anatomy', 'Medical Biochemistry', 'Physiology'],
  },
  {
    name: 'biological sciences',
    departments: [
      'Biochemistry',
      'Microbiology',
      'Molecular Biology',
      'Plant Science and Biotechnology',
      'Zoology and Environmental Biology',
      'Aquaculture and marine studies',
    ],
  },
  {
    name: 'Business Administration',
    departments: ['Accountancy', 'Marketing', 'Banking Finance', 'Management'],
  },
  {
    name: 'dentistry',
    departments: [
      'Child Dental Health',
      'Oral and Maxillofacial Surgery',
      'Oral Pathology and Oral Medicine',
      'Preventive Dentistry',
      'Restorative',
    ],
  },
  {
    name: 'education',
    departments: [
      'Adult Education',
      'Arts Education',
      'Computer Education',
      'Educational Foundation',
      'Library Science',
      'Human Kinetics and Health Education',
      'Science Education',
      'Social Science',
    ],
  },
  {
    name: 'engineering',
    departments: [
      'Agric and Bio-resources Engineering',
      'Civil Engineering',
      'Electrical Engineering',
      'Electronic Engineering',
      'Mechanical Engineering',
      'Metallurgical and Materials Engineering',
    ],
  },
  {
    name: 'environmental studies',
    departments: [
      'Estate Management',
      'Architecture',
      'Urban and Regional Planning',
      'Geoinformatics and Surveying',
    ],
  },
  {
    name: 'health science',
    departments: [
      'Radiography',
      'Medical Rehabilitation',
      'Nursing Science',
      'Medical Laboratory Science',
    ],
  },
  {
    name: 'law',
    departments: [
      'International and Comparative Law',
      'Commercial and Corporate Law',
      'Customary and Indigenous Law',
      'Jurisprudence and Legal Theory',
      'Property Law',
      'Public Law',
      'Private Law',
    ],
  },
  { name: 'Medical Science', departments: ['Medicine'] },
  {
    name: 'Pharmaceutical Sciences',
    departments: [
      'Pharmaceutical and Medicinal Chemistry',
      'Pharmacology and Toxicology',
      'Pharmaceutics',
      'Pharmaceutical Technology and Industrial Pharmacy',
      'Pharmacognosy and Environmental Medicine',
      'Clinical Pharmacy and Pharmacy Management',
      'Pharmaceutical Microbiology and Biotechnology',
    ],
  },
  {
    name: 'social science',
    departments: [
      'Public Administration and Local Government',
      'Economics',
      'Political Science',
      'Social Work',
      'Religion and Cultural Studies',
      'Psychology',
      'Philosophy',
      'Geography',
      'Sociology and Anthropology',
    ],
  },
  {
    name: 'physical sciences',
    departments: [
      'Pure and Industrial Chemistry',
      'Computer Science',
      'Geology',
      'Mathematics Department',
      'Physics and Astronomy',
      'Science Laboratory Technology',
      'Statistics',
    ],
  },
  {
    name: 'Veterinary Medicine',
    departments: [
      'Veterinary Pathology and Microbiology',
      'Veterinary Obstetrics and Reproductive Diseases',
      'Veterinary Physiology and Pharmacology',
      'Veterinary Anatomy',
      'Veterinary Medicine',
      'Veterinary Animal Health and Production',
      'Veterinary Parasitology and Entomology',
      'Veterinary Public Health and Preventive Medicine',
      'Veterinary Surgery',
      'Veterinary Teaching Hospital',
    ],
  },
  {
    name: 'vocational technical education',
    departments: [
      'Agricultural Education',
      'Business Education',
      'Computer Education',
      'Industrial Technical Education',
      'Home Economics and Hospitality Management Education',
    ],
  },
];
let AllDepartments = faculties
  .map((elem) => (elem = [...elem.departments]))
  .flat(1)
  .sort(function (a, b) {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

export default AllDepartments;
