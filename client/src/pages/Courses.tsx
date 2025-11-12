import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { courses, categories } from '@/data/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Clock, BookOpen } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Courses() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              {t('categories.title')}
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name[language]}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title[language]}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={getLevelColor(course.level)}>
                        {t(`course.${course.level}`)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">
                      {course.title[language]}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-base">
                      {course.description[language]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons.length} {t('course.lessons')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500">No courses found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

