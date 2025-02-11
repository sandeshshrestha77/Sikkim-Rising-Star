import { UserIcon, EnvelopeIcon, PhoneIcon, CameraIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

export default function RegisterPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative text-center py-16 px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-display">Register Now</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Take the first step towards your dreams. Join Sikkim Rising Star 2024.
            </p>
          </div>
        </div>

        <Section className="mb-24">
          <Card className="p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input type="text" className="form-input" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input type="email" className="form-input" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input type="tel" className="form-input" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <select className="form-input">
                  <option>Select category</option>
                  <option>Singing</option>
                  <option>Dancing</option>
                  <option>Music</option>
                </select>
              </div>
              <button type="submit" className="button w-full justify-center">
                Submit Registration
              </button>
            </form>
          </Card>
        </Section>
      </div>
    </main>
  );
}