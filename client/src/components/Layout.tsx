import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="border-b bg-black sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 font-bold text-white hover:opacity-90 transition-opacity">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src="/bertin-tshisuaka.png"
                    alt="Bertin Tshisuaka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md p-1">
                  <img
                    src="/georgia-tech-logo.png"
                    alt="Georgia Tech"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg leading-tight hidden sm:inline">Diva Laser Software Solutions</span>
                <span className="text-xs font-normal text-white/90 italic hidden sm:inline">E-Learning Everywhere and Anytime</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium">
                {t('nav.home')}
              </Link>
              <Link href="/courses" className="text-white/90 hover:text-white transition-colors font-medium">
                {t('nav.courses')}
              </Link>
              <Link href="/about" className="text-white/90 hover:text-white transition-colors font-medium">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors font-medium">
                {t('nav.contact')}
              </Link>
              
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold">{language === 'en' ? 'FR' : 'EN'}</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-white text-blue-600 border-white"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-semibold">{language === 'en' ? 'FR' : 'EN'}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-white/20"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 bg-blue-700">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-white/90 hover:text-white transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href="/courses" 
                  className="text-white/90 hover:text-white transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.courses')}
                </Link>
                <Link 
                  href="/about" 
                  className="text-white/90 hover:text-white transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white/90 hover:text-white transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">Diva Laser Software Solutions</h3>
              <p className="text-slate-300 text-sm italic mb-2">E-Learning Everywhere and Anytime</p>
              <p className="text-slate-300 text-sm">{t('footer.description')}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </Link>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('nav.courses')}
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('nav.about')}
                </Link>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
              <div className="flex flex-col space-y-2 text-sm text-slate-300">
                <p>{t('footer.email')}: info@africaelearning.com</p>
                <p>{t('footer.phone')}: +123 456 7890</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8">
            {/* Developer Credit */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                  <img
                    src="/bertin-tshisuaka.png"
                    alt="Bertin Tshisuaka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg p-2 shadow-lg">
                  <img
                    src="/georgia-tech-logo.png"
                    alt="Georgia Tech"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 mb-1">Developed by</p>
                  <p className="font-bold text-white text-lg">Bertin Tshisuaka</p>
                  <p className="text-sm text-slate-300">Software Engineer & Full Stack Web Developer</p>
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-slate-400">
              <p>&copy; 2025 Africa E-Learning. {t('footer.rights')}.</p>
            </div>
          </div>
          
          {/* Final Signature */}
          <div className="border-t border-yellow-400/30 mt-8 pt-6">
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-lg mb-1">Bertin Tshisuaka</p>
              <p className="text-slate-300 text-sm mb-1">Software Engineer & Full Stack Web Developer</p>
              <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                <span>🇺🇸</span> Atlanta, USA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

