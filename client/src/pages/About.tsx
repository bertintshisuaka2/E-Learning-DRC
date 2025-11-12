import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Users, Award, Globe, BookOpen } from 'lucide-react';
import Layout from '@/components/Layout';

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
              About Diva Laser Software Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering Africa through quality software education. We're bridging the digital skills gap and preparing the next generation for the incoming investment wave.
            </p>
          </div>

          {/* About Us Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center">
              About Us
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border-2 border-yellow-400/20">
              <p className="text-white text-lg leading-relaxed mb-6">
                Diva Laser Software Solutions is a pioneering e-learning platform founded by Bertin Tshisuaka, a Software Engineer and Full Stack Web Developer based in Atlanta, USA. We are on a mission to transform Africa's digital landscape by providing world-class software education to learners across the continent.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                Born from the urgent need to prepare African professionals for the massive wave of international investment coming to the Democratic Republic of Congo and across Africa, our platform addresses the critical shortage of software skills in the region. With major companies like Tesla, Apple, Microsoft, Google, and Amazon investing billions in African resources, the demand for skilled software developers, data scientists, and IT professionals has never been higher.
              </p>
              <p className="text-white text-lg leading-relaxed">
                We understand the unique challenges faced by African learners: limited access to quality education, language barriers, traffic congestion in major cities, high training costs, and geographic isolation. That's why we've built a comprehensive e-learning platform that makes software education accessible everywhere and anytime, in both English and French.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 rounded-2xl p-8 border-2 border-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-yellow-400">Our Mission</h2>
              </div>
              <p className="text-white text-lg leading-relaxed">
                To empower every African with the software skills needed to seize the opportunities created by incoming global investments. We provide affordable, accessible, and comprehensive software training that prepares learners to work with international companies as equals, not spectators. Our mission is to ensure that when investors arrive with high-paying tech jobs, Africans are ready to fill them.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-2xl p-8 border-2 border-purple-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-yellow-400">Our Vision</h2>
              </div>
              <p className="text-white text-lg leading-relaxed">
                To become Africa's leading software education platform, creating a generation of world-class developers, data scientists, and tech entrepreneurs who drive innovation and prosperity across the continent. We envision an Africa where digital skills are accessible to all, where women and youth are empowered through technology, and where every learner can transform their future regardless of location or background.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <div className="text-5xl font-bold mb-2 text-black">10,000+</div>
                <div className="text-gray-900 font-semibold">Active Learners</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <BookOpen className="w-10 h-10 text-black" />
                </div>
                <div className="text-5xl font-bold mb-2 text-black">10+</div>
                <div className="text-gray-900 font-semibold">Comprehensive Courses</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-10 h-10 text-black" />
                </div>
                <div className="text-5xl font-bold mb-2 text-black">26</div>
                <div className="text-gray-900 font-semibold">DRC Provinces Reached</div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
              Why Choose Diva Laser Software Solutions?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">🌍 Bilingual Support</h3>
                <p className="text-white">
                  All courses available in English and French, ensuring language is never a barrier to learning.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">💰 Affordable Pricing</h3>
                <p className="text-white">
                  80% less expensive than traditional training centers, making quality education accessible to all.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">🎥 Video-Based Learning</h3>
                <p className="text-white">
                  Comprehensive video lessons with real-world examples and hands-on projects.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">⏰ Learn Anytime, Anywhere</h3>
                <p className="text-white">
                  Save 3-5 hours daily by learning from home, avoiding traffic and geographic barriers.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">👩‍💻 Empowering Women</h3>
                <p className="text-white">
                  Special focus on increasing women's participation in technology from 12% to global standards.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">🎯 Industry-Relevant Skills</h3>
                <p className="text-white">
                  Courses designed to meet the demands of incoming international investors and companies.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-4">
                The Investors Are Coming. Are You Ready?
              </h3>
              <p className="text-gray-900 text-lg mb-6">
                Join thousands of Africans preparing for the investment wave. Start your software education journey today.
              </p>
              <a 
                href="/courses" 
                className="inline-block bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors"
              >
                Explore Our Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

