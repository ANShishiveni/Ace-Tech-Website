import Link from 'next/link'
import { 
  CodeBracketIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    features: [
      'React, Next.js, Vue.js development',
      'Progressive Web Applications (PWA)',
      'E-commerce platforms',
      'Content Management Systems',
      'API development and integration',
      'Performance optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL']
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: [
      'Native iOS and Android development',
      'React Native applications',
      'Flutter development',
      'Mobile UI/UX design',
      'App Store optimization',
      'Push notifications and analytics'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    features: [
      'AWS, Azure, Google Cloud setup',
      'Cloud migration strategies',
      'Serverless architecture',
      'Container orchestration',
      'DevOps and CI/CD pipelines',
      'Infrastructure as Code'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    icon: CpuChipIcon,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence.',
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision applications',
      'Predictive analytics',
      'AI chatbots and virtual assistants',
      'Data science consulting'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn']
  },
  {
    icon: CogIcon,
    title: 'DevOps & Automation',
    description: 'Streamline your development and deployment processes.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure automation',
      'Monitoring and logging',
      'Performance optimization',
      'Security implementation',
      'Team collaboration tools'
    ],
    technologies: ['Jenkins', 'GitLab', 'Ansible', 'Prometheus', 'ELK Stack']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions.',
    features: [
      'Security audits and assessments',
      'Penetration testing',
      'Compliance consulting',
      'Identity and access management',
      'Incident response planning',
      'Security training programs'
    ],
    technologies: ['OWASP', 'OAuth', 'JWT', 'SSL/TLS', 'SIEM']
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals and technical requirements through detailed consultation.'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team creates detailed designs and technical architecture tailored to your specific needs.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodology with continuous testing and quality assurance.'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support, maintenance, and optimization.'
  }
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Get Started <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/contact" 
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn About Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}