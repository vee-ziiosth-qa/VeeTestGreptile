import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">🍳 KitchenFlow</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</Link>
              <Link href="#solutions" className="text-gray-700 hover:text-primary-600 transition">Solutions</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary-600 transition">Pricing</Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-primary-600 hover:text-primary-700 transition">Sign In</button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Restaurant & Kitchen Management Solution
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your restaurant operations from kitchen to table with our comprehensive SaaS platform.
            Manage orders, inventory, staff, and analytics all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg text-lg font-semibold hover:bg-primary-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Powerful Features for Modern Restaurants</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Everything you need to run a successful restaurant operation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kitchen Display System */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kitchen Display System</h3>
              <p className="text-gray-600 mb-4">
                Real-time order routing from all channels directly to kitchen stations. Prioritize orders, track prep times, and eliminate paper tickets.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Multi-station order routing</li>
                <li>✓ Order prioritization & timing</li>
                <li>✓ Real-time status updates</li>
                <li>✓ Recipe standardization</li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Inventory & Procurement</h3>
              <p className="text-gray-600 mb-4">
                Track ingredient levels in real-time, automate reordering, and prevent waste with intelligent stock management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Real-time stock tracking</li>
                <li>✓ Automated reorder triggers</li>
                <li>✓ Supplier management</li>
                <li>✓ Cost control & waste prevention</li>
              </ul>
            </div>

            {/* Order Management */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Channel Orders</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly process dine-in, takeout, delivery, and online orders from a unified dashboard with POS integration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Unified order management</li>
                <li>✓ POS integration</li>
                <li>✓ Third-party delivery sync</li>
                <li>✓ Mobile ordering support</li>
              </ul>
            </div>

            {/* Staff Scheduling */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Staff Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Automated staff scheduling, time tracking, and task management. Optimize labor costs while maintaining service quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Auto-schedule generation</li>
                <li>✓ Shift swapping & time tracking</li>
                <li>✓ Task assignments</li>
                <li>✓ Labor cost optimization</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Make data-driven decisions with comprehensive reports on sales, costs, performance, and customer trends.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Sales & revenue analytics</li>
                <li>✓ Menu performance tracking</li>
                <li>✓ Cost analysis & forecasting</li>
                <li>✓ Custom report builder</li>
              </ul>
            </div>

            {/* Customer Management */}
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Experience</h3>
              <p className="text-gray-600 mb-4">
                Build loyalty with reservation management, feedback collection, and personalized marketing campaigns.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Loyalty programs</li>
                <li>✓ Reservation management</li>
                <li>✓ Guest feedback capture</li>
                <li>✓ Personalized marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Tailored Solutions for Every Restaurant Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4 text-center">🍕</div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">Quick Service</h3>
              <p className="text-gray-600 text-center">
                Perfect for fast-casual restaurants, food trucks, and quick-service establishments needing speed and efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4 text-center">🍽️</div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">Fine Dining</h3>
              <p className="text-gray-600 text-center">
                Sophisticated tools for upscale restaurants focusing on guest experience, complex recipes, and premium service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4 text-center">🏢</div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">Multi-Location</h3>
              <p className="text-gray-600 text-center">
                Enterprise features for restaurant chains with centralized management and location-specific customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose KitchenFlow?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2">Cloud-Based</h3>
              <p className="text-primary-100">Access from anywhere, anytime. No hardware required.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
              <p className="text-primary-100">Lower upfront costs with flexible subscription pricing.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Always Updated</h3>
              <p className="text-primary-100">Automatic updates with latest features and security.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-primary-100">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Choose the plan that fits your restaurant size</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Up to 2 locations</li>
                <li>✓ Basic KDS</li>
                <li>✓ Order management</li>
                <li>✓ Staff scheduling</li>
                <li>✓ Email support</li>
              </ul>
              <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">
                Start Free Trial
              </button>
            </div>

            <div className="border-2 border-primary-600 rounded-xl p-8 hover:shadow-xl transition relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$249</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Up to 10 locations</li>
                <li>✓ Advanced KDS</li>
                <li>✓ Inventory management</li>
                <li>✓ Analytics & reporting</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
                Start Free Trial
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Unlimited locations</li>
                <li>✓ Full feature access</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom training</li>
              </ul>
              <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of restaurants already using KitchenFlow to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
              Get Started – 30-Day Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Schedule a Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🍳 KitchenFlow</h3>
              <p className="text-gray-400">Complete restaurant management solution for modern businesses.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#solutions" className="hover:text-white transition">Solutions</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 KitchenFlow. All rights reserved. | <Link href="#" className="hover:text-white transition">Privacy Policy</Link> | <Link href="#" className="hover:text-white transition">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
