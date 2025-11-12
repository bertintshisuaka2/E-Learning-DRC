export interface Lesson {
  id: string;
  title: { en: string; fr: string };
  duration: string;
  videoUrl: string;
  description: { en: string; fr: string };
}

export interface Course {
  id: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  thumbnail: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  // Programming Fundamentals
  {
    id: 'python-basics',
    title: {
      en: 'Python Programming Basics',
      fr: 'Bases de la Programmation Python'
    },
    description: {
      en: 'Learn Python from scratch. Perfect for beginners with no programming experience.',
      fr: 'Apprenez Python à partir de zéro. Parfait pour les débutants sans expérience en programmation.'
    },
    category: 'programming',
    level: 'beginner',
    duration: '8 hours',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'py-1',
        title: { en: 'Introduction to Python', fr: 'Introduction à Python' },
        duration: '45 min',
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        description: {
          en: 'Learn what Python is and why it\'s one of the most popular programming languages.',
          fr: 'Découvrez ce qu\'est Python et pourquoi c\'est l\'un des langages de programmation les plus populaires.'
        }
      },
      {
        id: 'py-2',
        title: { en: 'Variables and Data Types', fr: 'Variables et Types de Données' },
        duration: '60 min',
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        description: {
          en: 'Understanding variables, strings, numbers, and basic data types in Python.',
          fr: 'Comprendre les variables, les chaînes, les nombres et les types de données de base en Python.'
        }
      },
      {
        id: 'py-3',
        title: { en: 'Control Flow and Loops', fr: 'Flux de Contrôle et Boucles' },
        duration: '75 min',
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        description: {
          en: 'Master if statements, for loops, and while loops to control program flow.',
          fr: 'Maîtrisez les instructions if, les boucles for et while pour contrôler le flux du programme.'
        }
      },
      {
        id: 'py-4',
        title: { en: 'Functions and Modules', fr: 'Fonctions et Modules' },
        duration: '90 min',
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        description: {
          en: 'Create reusable code with functions and organize your programs with modules.',
          fr: 'Créez du code réutilisable avec des fonctions et organisez vos programmes avec des modules.'
        }
      }
    ]
  },
  {
    id: 'javascript-fundamentals',
    title: {
      en: 'JavaScript Fundamentals',
      fr: 'Fondamentaux de JavaScript'
    },
    description: {
      en: 'Master JavaScript basics and become ready for web development.',
      fr: 'Maîtrisez les bases de JavaScript et préparez-vous au développement web.'
    },
    category: 'programming',
    level: 'beginner',
    duration: '10 hours',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'js-1',
        title: { en: 'JavaScript Introduction', fr: 'Introduction à JavaScript' },
        duration: '50 min',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        description: {
          en: 'Learn the basics of JavaScript and how it powers the modern web.',
          fr: 'Apprenez les bases de JavaScript et comment il alimente le web moderne.'
        }
      },
      {
        id: 'js-2',
        title: { en: 'DOM Manipulation', fr: 'Manipulation du DOM' },
        duration: '80 min',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        description: {
          en: 'Learn to interact with HTML elements using JavaScript.',
          fr: 'Apprenez à interagir avec les éléments HTML en utilisant JavaScript.'
        }
      },
      {
        id: 'js-3',
        title: { en: 'Events and Event Handling', fr: 'Événements et Gestion des Événements' },
        duration: '70 min',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        description: {
          en: 'Handle user interactions with event listeners and callbacks.',
          fr: 'Gérez les interactions utilisateur avec les écouteurs d\'événements et les callbacks.'
        }
      }
    ]
  },
  
  // Web Development
  {
    id: 'html-css-basics',
    title: {
      en: 'HTML & CSS Fundamentals',
      fr: 'Fondamentaux HTML & CSS'
    },
    description: {
      en: 'Build beautiful websites from scratch with HTML and CSS.',
      fr: 'Créez de beaux sites web à partir de zéro avec HTML et CSS.'
    },
    category: 'web',
    level: 'beginner',
    duration: '12 hours',
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'html-1',
        title: { en: 'HTML Basics', fr: 'Bases HTML' },
        duration: '60 min',
        videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
        description: {
          en: 'Learn HTML structure, tags, and semantic markup.',
          fr: 'Apprenez la structure HTML, les balises et le balisage sémantique.'
        }
      },
      {
        id: 'css-1',
        title: { en: 'CSS Styling Basics', fr: 'Bases du Style CSS' },
        duration: '90 min',
        videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
        description: {
          en: 'Style your web pages with colors, fonts, and layouts.',
          fr: 'Stylisez vos pages web avec des couleurs, des polices et des mises en page.'
        }
      },
      {
        id: 'css-2',
        title: { en: 'Responsive Design', fr: 'Design Responsive' },
        duration: '100 min',
        videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
        description: {
          en: 'Make your websites look great on all devices with responsive design.',
          fr: 'Faites en sorte que vos sites web soient superbes sur tous les appareils avec le design responsive.'
        }
      }
    ]
  },
  {
    id: 'react-development',
    title: {
      en: 'React Web Development',
      fr: 'Développement Web React'
    },
    description: {
      en: 'Build modern web applications with React, the most popular JavaScript library.',
      fr: 'Créez des applications web modernes avec React, la bibliothèque JavaScript la plus populaire.'
    },
    category: 'web',
    level: 'intermediate',
    duration: '15 hours',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'react-1',
        title: { en: 'React Basics', fr: 'Bases de React' },
        duration: '90 min',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        description: {
          en: 'Learn React components, JSX, and the virtual DOM.',
          fr: 'Apprenez les composants React, JSX et le DOM virtuel.'
        }
      },
      {
        id: 'react-2',
        title: { en: 'State and Props', fr: 'État et Props' },
        duration: '120 min',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        description: {
          en: 'Master state management and component communication in React.',
          fr: 'Maîtrisez la gestion de l\'état et la communication entre composants dans React.'
        }
      }
    ]
  },
  
  // Mobile Development
  {
    id: 'react-native',
    title: {
      en: 'React Native Mobile Apps',
      fr: 'Applications Mobile React Native'
    },
    description: {
      en: 'Create cross-platform mobile apps for iOS and Android with React Native.',
      fr: 'Créez des applications mobiles multiplateformes pour iOS et Android avec React Native.'
    },
    category: 'mobile',
    level: 'intermediate',
    duration: '18 hours',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'rn-1',
        title: { en: 'React Native Setup', fr: 'Configuration React Native' },
        duration: '60 min',
        videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
        description: {
          en: 'Set up your React Native development environment.',
          fr: 'Configurez votre environnement de développement React Native.'
        }
      },
      {
        id: 'rn-2',
        title: { en: 'Mobile UI Components', fr: 'Composants UI Mobile' },
        duration: '120 min',
        videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
        description: {
          en: 'Build beautiful mobile interfaces with React Native components.',
          fr: 'Créez de belles interfaces mobiles avec les composants React Native.'
        }
      }
    ]
  },
  
  // Data Science & AI
  {
    id: 'python-data-science',
    title: {
      en: 'Python for Data Science',
      fr: 'Python pour la Science des Données'
    },
    description: {
      en: 'Learn data analysis and visualization with Python, Pandas, and Matplotlib.',
      fr: 'Apprenez l\'analyse de données et la visualisation avec Python, Pandas et Matplotlib.'
    },
    category: 'data',
    level: 'intermediate',
    duration: '14 hours',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'ds-1',
        title: { en: 'Introduction to Data Science', fr: 'Introduction à la Science des Données' },
        duration: '45 min',
        videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
        description: {
          en: 'Understand what data science is and its applications.',
          fr: 'Comprenez ce qu\'est la science des données et ses applications.'
        }
      },
      {
        id: 'ds-2',
        title: { en: 'Data Analysis with Pandas', fr: 'Analyse de Données avec Pandas' },
        duration: '150 min',
        videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
        description: {
          en: 'Master data manipulation and analysis using Pandas library.',
          fr: 'Maîtrisez la manipulation et l\'analyse de données avec la bibliothèque Pandas.'
        }
      }
    ]
  },
  {
    id: 'machine-learning-basics',
    title: {
      en: 'Machine Learning Basics',
      fr: 'Bases de l\'Apprentissage Automatique'
    },
    description: {
      en: 'Introduction to machine learning concepts and practical applications.',
      fr: 'Introduction aux concepts d\'apprentissage automatique et applications pratiques.'
    },
    category: 'data',
    level: 'advanced',
    duration: '20 hours',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'ml-1',
        title: { en: 'What is Machine Learning?', fr: 'Qu\'est-ce que l\'Apprentissage Automatique?' },
        duration: '60 min',
        videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU',
        description: {
          en: 'Learn the fundamentals of machine learning and AI.',
          fr: 'Apprenez les fondamentaux de l\'apprentissage automatique et de l\'IA.'
        }
      },
      {
        id: 'ml-2',
        title: { en: 'Supervised Learning', fr: 'Apprentissage Supervisé' },
        duration: '180 min',
        videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU',
        description: {
          en: 'Build your first machine learning models with supervised learning.',
          fr: 'Construisez vos premiers modèles d\'apprentissage automatique avec l\'apprentissage supervisé.'
        }
      }
    ]
  },
  
  // Office Software
  {
    id: 'excel-mastery',
    title: {
      en: 'Excel Mastery',
      fr: 'Maîtrise d\'Excel'
    },
    description: {
      en: 'Master Microsoft Excel from basic formulas to advanced data analysis.',
      fr: 'Maîtrisez Microsoft Excel des formules de base à l\'analyse de données avancée.'
    },
    category: 'office',
    level: 'beginner',
    duration: '10 hours',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'excel-1',
        title: { en: 'Excel Basics', fr: 'Bases d\'Excel' },
        duration: '60 min',
        videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE',
        description: {
          en: 'Learn Excel interface, cells, rows, columns, and basic operations.',
          fr: 'Apprenez l\'interface Excel, les cellules, les lignes, les colonnes et les opérations de base.'
        }
      },
      {
        id: 'excel-2',
        title: { en: 'Formulas and Functions', fr: 'Formules et Fonctions' },
        duration: '120 min',
        videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE',
        description: {
          en: 'Master essential Excel formulas and functions for calculations.',
          fr: 'Maîtrisez les formules et fonctions Excel essentielles pour les calculs.'
        }
      },
      {
        id: 'excel-3',
        title: { en: 'Data Visualization', fr: 'Visualisation de Données' },
        duration: '90 min',
        videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE',
        description: {
          en: 'Create charts and graphs to visualize your data effectively.',
          fr: 'Créez des graphiques pour visualiser vos données efficacement.'
        }
      }
    ]
  },
  
  // Database Management
  {
    id: 'sql-fundamentals',
    title: {
      en: 'SQL Database Fundamentals',
      fr: 'Fondamentaux des Bases de Données SQL'
    },
    description: {
      en: 'Learn SQL to manage and query databases effectively.',
      fr: 'Apprenez SQL pour gérer et interroger les bases de données efficacement.'
    },
    category: 'database',
    level: 'beginner',
    duration: '12 hours',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'sql-1',
        title: { en: 'Introduction to Databases', fr: 'Introduction aux Bases de Données' },
        duration: '45 min',
        videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY',
        description: {
          en: 'Understand what databases are and why they are important.',
          fr: 'Comprenez ce que sont les bases de données et pourquoi elles sont importantes.'
        }
      },
      {
        id: 'sql-2',
        title: { en: 'SQL Queries', fr: 'Requêtes SQL' },
        duration: '120 min',
        videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY',
        description: {
          en: 'Learn to write SQL queries to retrieve and manipulate data.',
          fr: 'Apprenez à écrire des requêtes SQL pour récupérer et manipuler des données.'
        }
      },
      {
        id: 'sql-3',
        title: { en: 'Database Design', fr: 'Conception de Base de Données' },
        duration: '100 min',
        videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY',
        description: {
          en: 'Design efficient database schemas and relationships.',
          fr: 'Concevez des schémas de base de données et des relations efficaces.'
        }
      }
    ]
  },
  {
    id: 'mongodb-basics',
    title: {
      en: 'MongoDB NoSQL Database',
      fr: 'Base de Données NoSQL MongoDB'
    },
    description: {
      en: 'Learn MongoDB, the popular NoSQL database for modern applications.',
      fr: 'Apprenez MongoDB, la base de données NoSQL populaire pour les applications modernes.'
    },
    category: 'database',
    level: 'intermediate',
    duration: '10 hours',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    lessons: [
      {
        id: 'mongo-1',
        title: { en: 'Introduction to MongoDB', fr: 'Introduction à MongoDB' },
        duration: '50 min',
        videoUrl: 'https://www.youtube.com/embed/c2M-rlkkT5o',
        description: {
          en: 'Learn about NoSQL databases and MongoDB basics.',
          fr: 'Découvrez les bases de données NoSQL et les bases de MongoDB.'
        }
      },
      {
        id: 'mongo-2',
        title: { en: 'CRUD Operations', fr: 'Opérations CRUD' },
        duration: '90 min',
        videoUrl: 'https://www.youtube.com/embed/c2M-rlkkT5o',
        description: {
          en: 'Master Create, Read, Update, and Delete operations in MongoDB.',
          fr: 'Maîtrisez les opérations Créer, Lire, Mettre à jour et Supprimer dans MongoDB.'
        }
      }
    ]
  }
];

export const categories = [
  { id: 'all', name: { en: 'All Courses', fr: 'Tous les Cours' } },
  { id: 'programming', name: { en: 'Programming Fundamentals', fr: 'Fondamentaux de la Programmation' } },
  { id: 'web', name: { en: 'Web Development', fr: 'Développement Web' } },
  { id: 'mobile', name: { en: 'Mobile Development', fr: 'Développement Mobile' } },
  { id: 'data', name: { en: 'Data Science & AI', fr: 'Science des Données & IA' } },
  { id: 'office', name: { en: 'Office Software', fr: 'Logiciels de Bureau' } },
  { id: 'database', name: { en: 'Database Management', fr: 'Gestion de Base de Données' } }
];

