import Link from 'next/link'
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Projects Completed', value: '500+' },
  { name: 'Happy Clients', value: '200+' },
  { name: 'Years of Experience', value: '5+' },
  { name: 'Team Members', value: '25+' },
]

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients as partners to achieve shared success.',
  },
  {
    icon: ChartBarIcon,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring the highest quality deliverables.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'Our solutions help businesses worldwide grow and transform digitally.',
  },
]

const team = [
  {
    name: 'Alex Rodriguez',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in technology and business strategy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Technical expert specializing in cloud architecture and AI solutions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about creating scalable applications.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Emily Davis',
    role: 'Design Director',
    bio: 'UX/UI expert focused on creating beautiful and intuitive user experiences.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
]

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started with a vision to help businesses leverage technology for growth.',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Successfully delivered our first enterprise-level web application.',
  },
  {
    year: '2021',
    title: 'Mobile Focus',
    description: 'Expanded services to include mobile app development and cloud solutions.',
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Added AI and machine learning capabilities to our service portfolio.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Reached 200+ clients worldwide and established remote-first culture.',
  },
  {
    year: '2024',
    title: 'Innovation Lab',
    description: 'Launched our innovation lab focusing on emerging technologies.',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About <span className="gradient-text">Ace Tech</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We're a passionate team of technologists dedicated to helping businesses thrive in the digital age through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Empowering Digital Transformation
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Ace Tech, we believe technology should be a catalyst for growth, not a barrier. Our mission is to democratize access to cutting-edge technology solutions, making them accessible and affordable for businesses of all sizes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We combine deep technical expertise with business acumen to deliver solutions that not only meet today's needs but also position our clients for future success in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <RocketLaunchIcon className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">To be the global leader in innovative technology solutions that drive meaningful business transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Impact by the Numbers
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Trusted by businesses worldwide to deliver exceptional results
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col text-center">
                  <dt className="flex items-center justify-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-12 w-12 text-blue-600 mb-4" aria-hidden="true" />
                  </dt>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-sm font-semibold text-blue-600">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The talented individuals behind our success
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt={person.name} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-blue-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HeartIcon className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's build something amazing together. We'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/contact" 
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Start a Conversation
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-semibold leading-6 text-white"
              >
                View Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}