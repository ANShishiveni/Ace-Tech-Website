import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { 
  CodeBracketIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import NewsletterSignup from '@/components/NewsletterSignup'

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
  },
  {
    icon: CpuChipIcon,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence.',
  },
]

const testimonials = [
  {
    content: "Ace Tech transformed our business with their innovative web platform. The team was professional, efficient, and delivered beyond expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
  },
  {
    content: "Their cloud migration services helped us reduce costs by 40% while improving performance. Highly recommended!",
    author: "Michael Chen",
    role: "CTO, DataFlow Systems",
    rating: 5,
  },
  {
    content: "The mobile app they developed has received excellent user feedback. The development process was smooth and collaborative.",
    author: "Emily Rodriguez",
    role: "Product Manager, FinanceApp",
    rating: 5,
  },
]

const features = [
  'Expert team of developers',
  '24/7 support and maintenance',
  'Agile development methodology',
  'Quality assurance testing',
  'On-time project delivery',
  'Competitive pricing'
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Innovative <span className="gradient-text">Technology Solutions</span> for Modern Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We help businesses transform digitally with cutting-edge software development, 
              cloud solutions, and AI-powered applications. Let's build the future together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 flex items-center hover:text-blue-600 transition-colors">
                Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Built for Success
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We combine technical expertise with business acumen to deliver solutions that drive real results.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                        {feature}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss your project and see how we can help you achieve your goals with innovative technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300">
                Get Started Today
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}