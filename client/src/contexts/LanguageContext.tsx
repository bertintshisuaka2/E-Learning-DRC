import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Africa Software Training Hub',
    'hero.subtitle': 'Empowering Africa through Quality Software Education',
    'hero.description': 'Learn programming, web development, data science, and more with comprehensive video courses designed for African learners.',
    'hero.cta': 'Start Learning',
    'hero.explore': 'Explore Courses',
    
    // Features
    'features.title': 'Why Choose Our Platform?',
    'features.bilingual.title': 'Bilingual Support',
    'features.bilingual.desc': 'Learn in English or French - switch anytime',
    'features.video.title': 'Video-Based Learning',
    'features.video.desc': 'High-quality video tutorials with practical examples',
    'features.comprehensive.title': 'Comprehensive Curriculum',
    'features.comprehensive.desc': 'From basics to advanced topics in software development',
    'features.accessible.title': 'Accessible Anywhere',
    'features.accessible.desc': 'Learn at your own pace on any device',
    
    // Course Categories
    'categories.title': 'Course Categories',
    'categories.all': 'All Courses',
    'categories.programming': 'Programming Fundamentals',
    'categories.web': 'Web Development',
    'categories.mobile': 'Mobile Development',
    'categories.data': 'Data Science & AI',
    'categories.office': 'Office Software',
    'categories.database': 'Database Management',
    
    // Course Details
    'course.lessons': 'lessons',
    'course.duration': 'Total Duration',
    'course.level': 'Level',
    'course.beginner': 'Beginner',
    'course.intermediate': 'Intermediate',
    'course.advanced': 'Advanced',
    'course.startCourse': 'Start Course',
    'course.continueCourse': 'Continue Learning',
    'course.watchVideo': 'Watch Video',
    
    // Footer
    'footer.description': 'Quality software education for Africa',
    'footer.quickLinks': 'Quick Links',
    'footer.categories': 'Categories',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.rights': 'All rights reserved',
    
    // About
    'about.title': 'About Us',
    'about.mission': 'Our Mission',
    'about.missionText': 'To provide accessible, high-quality software training to learners across Africa, empowering the next generation of tech professionals.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To become Africa\'s leading e-learning platform for software education, bridging the digital skills gap and fostering innovation.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.getInTouch': 'Get in Touch',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.courses': 'Cours',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Centre de Formation Logicielle Africain',
    'hero.subtitle': 'Autonomiser l\'Afrique par une Éducation Logicielle de Qualité',
    'hero.description': 'Apprenez la programmation, le développement web, la science des données et plus encore avec des cours vidéo complets conçus pour les apprenants africains.',
    'hero.cta': 'Commencer à Apprendre',
    'hero.explore': 'Explorer les Cours',
    
    // Features
    'features.title': 'Pourquoi Choisir Notre Plateforme?',
    'features.bilingual.title': 'Support Bilingue',
    'features.bilingual.desc': 'Apprenez en anglais ou en français - changez à tout moment',
    'features.video.title': 'Apprentissage par Vidéo',
    'features.video.desc': 'Tutoriels vidéo de haute qualité avec des exemples pratiques',
    'features.comprehensive.title': 'Programme Complet',
    'features.comprehensive.desc': 'Des bases aux sujets avancés en développement logiciel',
    'features.accessible.title': 'Accessible Partout',
    'features.accessible.desc': 'Apprenez à votre rythme sur n\'importe quel appareil',
    
    // Course Categories
    'categories.title': 'Catégories de Cours',
    'categories.all': 'Tous les Cours',
    'categories.programming': 'Fondamentaux de la Programmation',
    'categories.web': 'Développement Web',
    'categories.mobile': 'Développement Mobile',
    'categories.data': 'Science des Données & IA',
    'categories.office': 'Logiciels de Bureau',
    'categories.database': 'Gestion de Base de Données',
    
    // Course Details
    'course.lessons': 'leçons',
    'course.duration': 'Durée Totale',
    'course.level': 'Niveau',
    'course.beginner': 'Débutant',
    'course.intermediate': 'Intermédiaire',
    'course.advanced': 'Avancé',
    'course.startCourse': 'Commencer le Cours',
    'course.continueCourse': 'Continuer l\'Apprentissage',
    'course.watchVideo': 'Regarder la Vidéo',
    
    // Footer
    'footer.description': 'Éducation logicielle de qualité pour l\'Afrique',
    'footer.quickLinks': 'Liens Rapides',
    'footer.categories': 'Catégories',
    'footer.contact': 'Nous Contacter',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    'footer.rights': 'Tous droits réservés',
    
    // About
    'about.title': 'À Propos de Nous',
    'about.mission': 'Notre Mission',
    'about.missionText': 'Fournir une formation logicielle accessible et de haute qualité aux apprenants à travers l\'Afrique, en autonomisant la prochaine génération de professionnels de la technologie.',
    'about.vision': 'Notre Vision',
    'about.visionText': 'Devenir la principale plateforme d\'apprentissage en ligne d\'Afrique pour l\'éducation logicielle, en comblant le fossé des compétences numériques et en favorisant l\'innovation.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.name': 'Nom',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

