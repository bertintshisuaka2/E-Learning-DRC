import { useState } from 'react';
import { useRoute } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { courses } from '@/data/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Play, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';

export default function CourseDetail() {
  const [, params] = useRoute('/course/:id');
  const { language, t } = useLanguage();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const course = courses.find(c => c.id === params?.id);

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <p className="text-slate-600">The course you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const currentLesson = selectedLesson
    ? course.lessons.find(l => l.id === selectedLesson)
    : course.lessons[0];

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

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

  const progress = (completedLessons.size / course.lessons.length) * 100;

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Course Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={getLevelColor(course.level)}>
                {t(`course.${course.level}`)}
              </Badge>
              <div className="flex items-center text-slate-600">
                <BookOpen className="w-4 h-4 mr-1" />
                <span className="text-sm">{course.lessons.length} {t('course.lessons')}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{course.duration}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
              {course.title[language]}
            </h1>
            <p className="text-lg text-slate-600 mb-4">
              {course.description[language]}
            </p>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Your Progress</span>
                <span className="text-sm font-medium text-slate-700">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2">
                <div className="aspect-video bg-slate-900">
                  {currentLesson && (
                    <iframe
                      src={currentLesson.videoUrl}
                      title={currentLesson.title[language]}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {currentLesson?.title[language]}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {currentLesson?.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{currentLesson?.duration}</span>
                    </div>
                    {currentLesson && (
                      <Button
                        variant={completedLessons.has(currentLesson.id) ? 'default' : 'outline'}
                        onClick={() => toggleLessonComplete(currentLesson.id)}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>
                          {completedLessons.has(currentLesson.id)
                            ? 'Completed'
                            : 'Mark as Complete'}
                        </span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lesson List */}
            <div className="lg:col-span-1">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Course Lessons</CardTitle>
                  <CardDescription>
                    {course.lessons.length} lessons • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {course.lessons.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        onClick={() => setSelectedLesson(lesson.id)}
                        className={`w-full text-left p-4 hover:bg-slate-50 transition-colors ${
                          currentLesson?.id === lesson.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {completedLessons.has(lesson.id) ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center">
                                <Play className="w-3 h-3 text-slate-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 mb-1">
                              {index + 1}. {lesson.title[language]}
                            </p>
                            <p className="text-xs text-slate-500">{lesson.duration}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

