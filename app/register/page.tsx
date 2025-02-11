import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">Join the Journey</h1>
          <p className="text-gray-300 text-lg">Take the first step towards your dreams</p>
        </div>
        
        <div className="card p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="search-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="search-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="search-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select id="category" className="search-input" required>
                  <option value="">Select a category</option>
                  <option value="singing">Singing</option>
                  <option value="dancing">Dancing</option>
                  <option value="music">Music</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                Previous Experience
              </label>
              <textarea
                id="experience"
                rows={4}
                className="search-input"
                placeholder="Tell us about your journey in performing arts..."
              />
            </div>

            <button
              type="submit"
              className="w-full button py-4 text-lg font-medium justify-center"
            >
              Submit Application
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          By submitting this form, you agree to our terms and conditions.
        </div>
      </div>
    </main>
  );
}