import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-yellow-300 max-w-2xl mx-auto">
              {t('contact.getInTouch')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-yellow-400 bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-400">{t('contact.send')}</CardTitle>
                  <CardDescription className="text-base text-yellow-200">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-yellow-300">
                        {t('contact.name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-gray-700 border-yellow-400 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-yellow-300">
                        {t('footer.email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full bg-gray-700 border-yellow-400 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-yellow-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="w-full bg-gray-700 border-yellow-400 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-yellow-300">
                        {t('contact.message')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="w-full bg-gray-700 border-yellow-400 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
                      {t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-yellow-400 bg-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-yellow-400">{t('footer.email')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:bertintshisuaka@hotmail.com" className="text-yellow-300 hover:text-yellow-400 block">
                    bertintshisuaka@hotmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-400 bg-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-yellow-400">{t('footer.phone')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+16789796811" className="text-yellow-300 hover:text-yellow-400 block">
                    +1 (678) 979-6811
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-400 bg-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-yellow-400">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-200">
                    Diva Laser Software Solutions<br />
                    Atlanta, Georgia<br />
                    United States of America 🇺🇸
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

