import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Lock, Phone } from 'lucide-react';

export default function Login() {
  const [, setLocation] = useLocation();
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if PIN is correct
    if (pin === '3495') {
      toast.success('Login successful! Welcome to the platform.');
      setTimeout(() => {
        setLocation('/');
      }, 1000);
    } else {
      toast.error('Invalid PIN code. Please try again or contact Bertin Tshisuaka for assistance.');
      setIsLoading(false);
      setPin('');
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 4) {
      setPin(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-yellow-400/20 p-8">
          {/* Logo/Photo Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <img
                src="/login-photo.png"
                alt="Bertin Tshisuaka"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-2">
              Diva Laser Software Solutions
            </h1>
            <p className="text-gray-300 text-sm">
              E-Learning Everywhere and Anytime
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-yellow-400 mb-2">
                Enter 4-Digit PIN Code
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={handlePinChange}
                  placeholder="••••"
                  maxLength={4}
                  required
                  className="pl-10 text-center text-2xl tracking-widest bg-gray-900/50 border-yellow-400/30 text-white placeholder:text-gray-500 focus:border-yellow-400"
                  autoFocus
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={pin.length !== 4 || isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 text-lg"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-yellow-400/20">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 mb-2">
                    <span className="font-semibold text-yellow-400">Need assistance?</span>
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    Text Bertin Tshisuaka for help:
                  </p>
                  <a 
                    href="sms:+16789796811" 
                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm block"
                  >
                    📱 +1 (678) 979-6811
                  </a>
                  <a 
                    href="mailto:bertintshisuaka@hotmail.com" 
                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm block mt-1"
                  >
                    ✉️ bertintshisuaka@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            © 2025 Diva Laser Software Solutions
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Atlanta, Georgia, USA 🇺🇸
          </p>
        </div>
      </div>
    </div>
  );
}

