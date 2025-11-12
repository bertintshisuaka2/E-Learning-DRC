import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { BookOpen, Globe, Video, Zap } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 md:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-yellow-400">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                {t('hero.subtitle')}
              </p>
            </div>
            
            {/* Computer Science Learning Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/30">
              <img
                src="/african-learning-center.jpg"
                alt="Clean African Learning Center"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8">
                    {t('hero.cta')}
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold text-lg px-8">
                    {t('hero.explore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Global Software Training Centers
            </h2>
            <p className="text-lg text-yellow-400 max-w-3xl mx-auto font-semibold">
              Comparing software training infrastructure across continents and African regions
            </p>
          </div>

          {/* Global Statistics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">Training Centers by Continent</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border-2 border-yellow-400 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">15,420</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">Europe</div>
                  <div className="text-xs text-yellow-200">Training Centers</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border-2 border-yellow-400 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">18,750</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">Asia</div>
                  <div className="text-xs text-yellow-200">Training Centers</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border-2 border-yellow-400 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">12,340</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">America</div>
                  <div className="text-xs text-yellow-200">Training Centers</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border-2 border-yellow-400 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">2,850</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">Africa</div>
                  <div className="text-xs text-yellow-200">Training Centers</div>
                </div>
              </div>
            </div>
          </div>

          {/* African Regional Statistics */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">Training Centers Across Africa</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-shadow border-l-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">890</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">North Africa</div>
                  <div className="text-xs text-yellow-200">31.2% of total</div>
                  <div className="mt-3 text-xs text-yellow-100">Egypt, Morocco, Algeria, Tunisia</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-shadow border-l-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">520</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">Central Africa</div>
                  <div className="text-xs text-yellow-200">18.2% of total</div>
                  <div className="mt-3 text-xs text-yellow-100">DRC, Cameroon, Chad, CAR</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-shadow border-l-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">780</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">East Africa</div>
                  <div className="text-xs text-yellow-200">27.4% of total</div>
                  <div className="mt-3 text-xs text-yellow-100">Kenya, Ethiopia, Tanzania, Uganda</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-shadow border-l-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">660</div>
                  <div className="text-sm font-semibold text-yellow-300 mb-1">South Africa</div>
                  <div className="text-xs text-yellow-200">23.2% of total</div>
                  <div className="mt-3 text-xs text-yellow-100">South Africa, Botswana, Namibia</div>
                </div>
              </div>
            </div>

            {/* Summary - DANGER WARNING */}
            <div className="mt-8 bg-red-600 text-white rounded-xl p-6 text-center border-4 border-red-700 shadow-2xl">
              <p className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                <span className="text-3xl">⚠️</span>
                AFRICA TRAINING GAP
                <span className="text-3xl">⚠️</span>
              </p>
              <p className="text-lg font-semibold mb-2">🚨 CRITICAL SHORTAGE! 🚨</p>
              <p className="text-sm opacity-95">Africa has only <span className="font-bold text-yellow-300 text-lg">5.8%</span> of global software training centers despite having <span className="font-bold text-yellow-300 text-lg">17%</span> of the world's population</p>
              <p className="text-xs mt-3 opacity-90 italic">Diva Laser Software Solutions is bridging this gap with accessible e-learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRC Special Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* DRC Flag Colors Banner with President Photo */}
            <div className="bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 p-1 rounded-2xl mb-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                    <img
                      src="/president-tshisekedi.jpg"
                      alt="President Félix Tshisekedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-block bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 text-white px-6 py-2 rounded-full font-bold mb-3">
                      🇨🇩 Special Focus: Democratic Republic of Congo
                    </div>
                    <p className="text-lg text-gray-300 italic">Under the leadership of</p>
                    <p className="text-2xl font-bold text-yellow-400">President Félix Tshisekedi</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
              E-Learning: The Solution for DRC & Africa
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breaking barriers of time, distance, and accessibility through digital education
            </p>
          </div>

          {/* DRC Demographics Comparison */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">DRC Demographics vs. Global Leaders</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Women in Tech */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-300">
                <h4 className="text-lg font-bold text-pink-700 mb-4 text-center">Women in Technology</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">DRC</span>
                      <span className="text-sm font-bold text-pink-600">12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-pink-600 h-3 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Kenya</span>
                      <span className="text-sm font-bold text-pink-600">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-pink-500 h-3 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">USA</span>
                      <span className="text-sm font-bold text-pink-600">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-pink-400 h-3 rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">India</span>
                      <span className="text-sm font-bold text-pink-600">34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-pink-400 h-3 rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 text-center">E-learning can increase women's participation by 200%</p>
              </div>

              {/* Youth Access */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                <h4 className="text-lg font-bold text-blue-700 mb-4 text-center">Youth (18-35) with Tech Skills</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">DRC</span>
                      <span className="text-sm font-bold text-blue-600">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '18%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Nigeria</span>
                      <span className="text-sm font-bold text-blue-600">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">China</span>
                      <span className="text-sm font-bold text-blue-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-400 h-3 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Brazil</span>
                      <span className="text-sm font-bold text-blue-600">55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-400 h-3 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 text-center">Online learning reaches 5x more youth than traditional schools</p>
              </div>

              {/* Elder Learning */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
                <h4 className="text-lg font-bold text-green-700 mb-4 text-center">Lifelong Learners (45+)</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">DRC</span>
                      <span className="text-sm font-bold text-green-600">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '5%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">South Africa</span>
                      <span className="text-sm font-bold text-green-600">22%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '22%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Germany</span>
                      <span className="text-sm font-bold text-green-600">48%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-400 h-3 rounded-full" style={{width: '48%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Japan</span>
                      <span className="text-sm font-bold text-green-600">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-400 h-3 rounded-full" style={{width: '52%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 text-center">E-learning enables career transitions at any age</p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Challenges */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">Critical Challenges in DRC</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Severe Traffic Congestion</h4>
                    <p className="text-sm text-slate-700">Kinshasa residents spend <span className="font-bold text-red-600">3-5 hours daily</span> in traffic. Commuting to training centers is nearly impossible.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Limited Time Availability</h4>
                    <p className="text-sm text-slate-700">Working professionals and parents have <span className="font-bold text-red-600">no flexible schedule</span> for traditional classes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Geographic Barriers</h4>
                    <p className="text-sm text-slate-700">Only <span className="font-bold text-red-600">15% of training centers</span> are accessible to rural populations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">High Training Costs</h4>
                    <p className="text-sm text-slate-700">Traditional training costs <span className="font-bold text-red-600">$500-2000</span>, unaffordable for most Congolese.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Gender Inequality</h4>
                    <p className="text-sm text-slate-700">Women face <span className="font-bold text-red-600">cultural barriers</span> attending physical training centers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">E-Learning Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Learn from Anywhere</h4>
                    <p className="text-sm text-slate-700">No commute needed. Study from home, office, or anywhere with internet. <span className="font-bold text-green-600">Save 3-5 hours daily</span>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Flexible Schedule</h4>
                    <p className="text-sm text-slate-700">Learn at <span className="font-bold text-green-600">your own pace</span>, morning, evening, or weekend. Perfect for busy professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Reach Rural Areas</h4>
                    <p className="text-sm text-slate-700">Access quality education in <span className="font-bold text-green-600">all 26 provinces</span> of DRC via mobile or computer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Affordable for All</h4>
                    <p className="text-sm text-slate-700">E-learning costs <span className="font-bold text-green-600">80% less</span> than traditional training. Education for everyone.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Empower Women</h4>
                    <p className="text-sm text-slate-700">Private, safe learning environment. <span className="font-bold text-green-600">Women can learn</span> without social barriers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-black mb-4">E-Learning is the Future of Africa</h3>
            <p className="text-lg text-gray-900 mb-6 max-w-3xl mx-auto">
              Don't let traffic, time, or distance stop your dreams. Join thousands of Congolese learners building their tech careers online with Diva Laser Software Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="inline-block">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-400 font-bold text-lg px-8">
                  Start Learning Today
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-900 mt-4 font-semibold">🇨🇩 Proudly serving the Democratic Republic of Congo and all of Africa</p>
          </div>
        </div>
      </section>

      {/* Message from the Founder */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Message from the Founder</h2>
            <p className="text-xl text-gray-300">Bertin Tshisuaka - President, Diva Laser Software Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founder Info Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-yellow-400/30">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                    <img
                      src="/bertin-photo.png"
                      alt="Bertin Tshisuaka"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-24 h-24 flex items-center justify-center bg-white rounded-lg p-3 shadow-xl">
                    <img
                      src="/georgia-tech-logo.png"
                      alt="Georgia Tech"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Bertin Tshisuaka</h3>
                <p className="text-lg text-gray-300 mb-1">Founder & President</p>
                <p className="text-md text-gray-400 mb-4">Diva Laser Software Solutions</p>
                <p className="text-sm italic text-gray-400">Software Engineer & Full Stack Web Developer</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">About Diva Laser Software Solutions</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Founded in Atlanta, Georgia, with a mission to transform Africa through accessible, 
                  affordable software education. We're preparing the DRC and Africa for the incoming 
                  wave of international investors by training the next generation of software developers, 
                  data scientists, and digital entrepreneurs.
                </p>
              </div>
            </div>

            {/* Atlanta Skyline Card */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border-2 border-yellow-400/30">
              <img
                src="/atlanta-skyline.jpg"
                alt="Atlanta Skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Audio Message Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-black text-center mb-6">
              🎧 Listen to the Urgent Message: The Investors Are Coming!
            </h3>
            <p className="text-center text-gray-900 mb-8 text-lg">
              A critical message about the incoming investment wave and why you must prepare NOW with software education.
            </p>
            
            {/* Audio Players Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* English Audio */}
              <div className="bg-black rounded-xl p-6 border-2 border-blue-500">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl">🇬🇧</span>
                  <div>
                    <h4 className="text-2xl font-bold text-yellow-400">English</h4>
                    <p className="text-gray-400 text-sm">4 minutes</p>
                  </div>
                </div>
                <audio id="audio-english" controls className="w-full">
                  <source src="/founder-speech-english.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-gray-400 text-xs mt-3 text-center italic">
                  "The investors are coming to DRC. Will you be ready?"
                </p>
              </div>

              {/* French Audio */}
              <div className="bg-black rounded-xl p-6 border-2 border-red-500">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl">🇫🇷</span>
                  <div>
                    <h4 className="text-2xl font-bold text-yellow-400">Français</h4>
                    <p className="text-gray-400 text-sm">4 minutes</p>
                  </div>
                </div>
                <audio id="audio-french" controls className="w-full">
                  <source src="/founder-speech-french.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-gray-400 text-xs mt-3 text-center italic">
                  "Les investisseurs arrivent en RDC. Serez-vous prêt?"
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-black text-sm font-semibold">
                💡 Choose your language and listen to the urgent message about software education and incoming investors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speech Transcripts Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400">Read the Full Speech</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">The complete message about incoming investors and the urgent need for software education</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* English Speech */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 rounded-2xl p-8 border-2 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl">🇬🇧</span>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-400">English Version</h3>
                  <p className="text-gray-400">Full speech transcript</p>
                </div>
              </div>
              <div className="bg-black/50 rounded-xl p-6 max-h-96 overflow-y-auto">
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
Dear brothers and sisters of the Democratic Republic of Congo and across Africa,

My name is Bertin Tshisuaka, founder and President of Diva Laser Software Solutions. I'm speaking to you today from Atlanta, Georgia, with urgent news that will change the future of our beloved DRC, the heart of Africa.

The investors are coming. Right now, as I speak, major international companies are landing in Kinshasa. Tesla needs our cobalt. Apple needs our minerals. Microsoft, Google, Amazon, they're all looking at the DRC. The Chinese are investing billions. The Americans are coming back. The Europeans are opening offices. This is not a prediction. This is happening NOW.

But here's the critical question: Will we be ready? Will our people benefit from this investment boom, or will we watch from the sidelines as others take the opportunities that belong to us?

Let me be very clear. These investors are not coming with shovels and pickaxes. They're coming with computers, software, artificial intelligence, and digital systems. Every mining operation now runs on software. Every logistics company needs programmers. Every international business needs data analysts, web developers, and IT specialists.

And right now, today, only 12% of Congolese women have technology skills. Only 18% of our youth can work in tech. Only 5% of adults over 45 have digital literacy. This means when these investors arrive with thousands of high-paying jobs, they will bring foreign workers because we are not ready.

This is why I'm speaking to you with such urgency today. We have maybe two to three years, maximum, before this investment wave fully hits. Two to three years to prepare our people. Two to three years to train a generation of Congolese software developers, data scientists, and digital entrepreneurs who can work with these investors as equals, not as spectators.

This is where e-learning becomes not just an option, but our only hope. E-learning is the emergency response to an urgent crisis. It's the bridge between where we are and where we need to be before the investors fully arrive.

Diva Laser Software Solutions was created for this exact moment. We saw the investors coming. We saw the opportunity. And we saw the gap. So we built comprehensive courses in programming, web development, mobile apps, data science, and artificial intelligence. All in English and French. All designed for African learners. All affordable because we know time is critical.

The investors are coming. This is certain. The only question is: Will you be ready? Will your children be ready? Will the DRC benefit from its own resources, or will we watch others prosper on our land?

Don't let this moment pass. Don't let others take what belongs to you. The investors are coming. Get ready. Learn software. Transform your future. Because the DRC is rising, and you must rise with it.

Thank you, and may God bless the Democratic Republic of Congo and all who are preparing for the great opportunity ahead.
                </p>
              </div>
            </div>

            {/* French Speech */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 rounded-2xl p-8 border-2 border-red-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl">🇫🇷</span>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-400">Version Française</h3>
                  <p className="text-gray-400">Transcription complète du discours</p>
                </div>
              </div>
              <div className="bg-black/50 rounded-xl p-6 max-h-96 overflow-y-auto">
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
Chers frères et sœurs de la République Démocratique du Congo et de toute l'Afrique,

Je m'appelle Bertin Tshisuaka, fondateur et Président de Diva Laser Software Solutions. Je vous parle aujourd'hui d'Atlanta, en Géorgie, avec des nouvelles urgentes qui changeront l'avenir de notre bien-aimée RDC, le cœur de l'Afrique.

Les investisseurs arrivent. En ce moment même, alors que je parle, de grandes entreprises internationales atterrissent à Kinshasa. Tesla a besoin de notre cobalt. Apple a besoin de nos minéraux. Microsoft, Google, Amazon, ils regardent tous la RDC. Les Chinois investissent des milliards. Les Américains reviennent. Les Européens ouvrent des bureaux. Ce n'est pas une prédiction. Cela se passe MAINTENANT.

Mais voici la question critique: Serons-nous prêts? Notre peuple bénéficiera-t-il de ce boom d'investissement, ou regarderons-nous depuis la touche pendant que d'autres saisissent les opportunités qui nous appartiennent?

Soyons très clairs. Ces investisseurs ne viennent pas avec des pelles et des pioches. Ils viennent avec des ordinateurs, des logiciels, de l'intelligence artificielle et des systèmes numériques. Chaque opération minière fonctionne maintenant avec des logiciels. Chaque entreprise de logistique a besoin de programmeurs. Chaque entreprise internationale a besoin d'analystes de données, de développeurs web et de spécialistes informatiques.

Et en ce moment, aujourd'hui, seulement 12% des femmes congolaises ont des compétences technologiques. Seulement 18% de nos jeunes peuvent travailler dans la technologie. Seulement 5% des adultes de plus de 45 ans ont une alphabétisation numérique. Cela signifie que lorsque ces investisseurs arrivent avec des milliers d'emplois bien rémunérés, ils amèneront des travailleurs étrangers parce que nous ne sommes pas prêts.

C'est pourquoi je vous parle avec une telle urgence aujourd'hui. Nous avons peut-être deux à trois ans, maximum, avant que cette vague d'investissement ne frappe complètement. Deux à trois ans pour préparer notre peuple. Deux à trois ans pour former une génération de développeurs de logiciels congolais, de data scientists et d'entrepreneurs numériques qui peuvent travailler avec ces investisseurs en tant qu'égaux, pas en tant que spectateurs.

C'est là que l'apprentissage en ligne devient non seulement une option, mais notre seul espoir. L'apprentissage en ligne est la réponse d'urgence à une crise urgente. C'est le pont entre où nous sommes et où nous devons être avant que les investisseurs n'arrivent complètement.

Diva Laser Software Solutions a été créée pour ce moment précis. Nous avons vu les investisseurs arriver. Nous avons vu l'opportunité. Et nous avons vu le fossé. Alors nous avons construit des cours complets en programmation, développement web, applications mobiles, data science et intelligence artificielle. Tout en anglais et en français. Tout conçu pour les apprenants africains. Tout abordable parce que nous savons que le temps est critique.

Les investisseurs arrivent. C'est certain. La seule question est: Serez-vous prêt? Vos enfants seront-ils prêts? La RDC bénéficiera-t-elle de ses propres ressources, ou regarderons-nous les autres prospérer sur notre terre?

Ne laissez pas ce moment passer. Ne laissez pas les autres prendre ce qui vous appartient. Les investisseurs arrivent. Préparez-vous. Apprenez les logiciels. Transformez votre avenir. Parce que la RDC se lève, et vous devez vous lever avec elle.

Merci, et que Dieu bénisse la République Démocratique du Congo et tous ceux qui se préparent pour la grande opportunité à venir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>{t('features.bilingual.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('features.bilingual.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>{t('features.video.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('features.video.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>{t('features.comprehensive.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('features.comprehensive.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>{t('features.accessible.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('features.accessible.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Join thousands of learners across Africa building their tech careers
          </p>
          <Link href="/courses">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8">
              {t('hero.explore')}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

