import { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Stethoscope,
  Sparkles,
  AlignCenter,
  Baby,
  AlertCircle,
  CircleDot,
  Award,
  Settings,
  Heart,
  DollarSign,
  CalendarClock,
  ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import './App.css';

// Navigation Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl bg-white/90 shadow-dental'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
            style={{ perspective: '500px' }}
          >
            <div className="w-10 h-10 bg-dental-blue rounded-xl flex items-center justify-center transform group-hover:rotate-y-12 transition-transform duration-300">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-semibold text-xl text-dental-dark">
              Dr Naeem Dental <span className="text-dental-blue">or Aesthetic Clinic</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-dental-blue transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dental-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-dental-blue hover:bg-dental-dark text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-dental-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dental-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dental-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-slide-up">
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-dental-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-dental-blue hover:bg-dental-dark text-white w-full mt-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '3000+', label: 'Happy Patients' },
    { value: '10+', label: 'Awards Won' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dental-light via-white to-dental-secondary">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dental-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dental-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-dental-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-dental-dark leading-tight">
                Your Smile{' '}
                <span className="text-dental-blue relative">
                  Our Passion
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2" stroke="#4da7ff" strokeWidth="4" strokeLinecap="round" className="animate-pulse"/>
                  </svg>
                </span>
              </h1>
              <p className="text-sm md:text-lg text-gray-600 max-w-xl leading-relaxed">
                Experience world-class dental care with cutting-edge technology and compassionate expertise. 
                Your journey to a perfect smile starts here.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-dental-blue hover:bg-dental-dark text-white px-4 py-3 md:px-8 md:py-6 rounded-full text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-dental-xl group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Visit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white px-4 py-3 md:px-8 md:py-6 rounded-full text-sm md:text-lg transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-dental-blue">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-dental-blue/20 to-dental-green/20 rounded-3xl blur-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-dental-xl h-[450px] md:h-[520px]">
                <img 
                  src="/hero-dentist.jpg" 
                  alt="Professional Dentist" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-dental-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-dental-green/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-dental-dark">Certified Expert</div>
                    <div className="text-sm text-gray-500">3+ Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-dental-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-dental-yellow text-dental-yellow" />
                    ))}
                  </div>
                  <span className="font-semibold text-dental-dark">4.9</span>
                </div>
                <div className="text-sm text-gray-500">500+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'General Dentistry',
      description: 'Regular checkups, cleanings, and preventive care to keep your smile healthy.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers for a confident you.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <AlignCenter className="w-8 h-8" />,
      title: 'Orthodontics',
      description: 'Braces and aligners to straighten teeth and correct bite issues.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Pediatric Dentistry',
      description: 'Gentle, child-friendly dental care for your little ones.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Emergency Dental Care',
      description: 'Urgent care for toothaches, broken teeth, and dental emergencies.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <CircleDot className="w-8 h-8" />,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel natural.',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-dental-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-dark mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 shadow-dental hover:shadow-dental-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 rounded-lg md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="scale-75 md:scale-100">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xs md:text-lg lg:text-xl font-semibold text-dental-dark mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="hidden md:block text-xs md:text-sm text-gray-600 mb-2 md:mb-4 lg:mb-6 leading-tight md:leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href="#contact" 
                className="hidden md:inline-flex items-center text-dental-blue font-medium text-xs md:text-sm group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    'State-of-the-art equipment and facilities',
    'Gentle, pain-free procedures',
    'Personalized treatment plans',
    'Friendly, experienced staff',
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-dental-blue/10 rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-dental-xl">
                <img 
                  src="/about-clinic.jpg" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-dental-blue rounded-2xl shadow-dental-lg p-6 text-white">
                <div className="text-4xl font-bold">3+</div>
                <div className="text-sm opacity-90">Years of<br/>Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-dark leading-tight">
              Providing Quality Dental Care for Over 3 Years
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our clinic combines advanced technology with compassionate care to deliver exceptional 
                dental experiences. Led by Dr. Naeem, we are dedicated to helping you achieve and 
                maintain optimal oral health.
              </p>
              <p>
                We believe in personalized treatment plans, transparent communication, and creating a 
                comfortable environment where patients of all ages feel welcome.
              </p>
            </div>

            <div className="rounded-2xl border border-dental-blue/20 bg-dental-blue/5 p-5">
              <div className="text-sm font-medium text-dental-blue uppercase tracking-wider">Experience</div>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                <li>4-month internship experience at DHQ Hospital, Mirpurkhas.</li>
                <li>1-year clinical experience of house job from Bhitai Dental and Medical Hospital, Mirpurkhas.</li>
                <li>1-year clinical experience at Huzaifa Dental Care, Talagang.</li>
                <li>1-year clinical experience (MSc Oral and Maxillofacial Surgery) at LUMHS, Jamshoro.</li>
              </ul>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-dental-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-dental-green" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

// Courses and Workshops Section
function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: 'Master Class on Parotid Surgery & Facial Nerve Preservation',
      organizer: 'LUMHS, Hyderabad (6th International Dental Conference)',
      date: '05 Jan 2026',
    },
    {
      title: 'Orbital Floor Reconstruction Skill Lab',
      organizer: 'LUMHS, Jamshoro',
      date: '24 Dec 2025',
    },
    {
      title: 'Primary Surgical Skills Course',
      organizer: 'Bhitai Dental and Medical College',
      date: '31 May 2023',
    },
    {
      title: 'Basic Life Support (BLS)',
      organizer: 'Bhitai Dental and Medical College',
      date: '24 Oct 2023',
    },
    {
      title: 'Clinical Dentistry (3 Months Hands-on)',
      organizer: 'Naeem and Almas Dental Clinics and School',
      date: 'Dec 2022 - Mar 2023',
    },
    {
      title: 'Dental Implantology (C-Implant)',
      organizer: 'HealthCure (Held at Bhitai Dental College)',
      date: 'Date not specified',
    },
  ];

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-dental-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">Courses & Workshops</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-dark mt-3 mb-4">
            Professional Training
          </h2>
          <p className="text-gray-600 text-lg">
            Recent courses, workshops, and skill labs
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`rounded-xl md:rounded-2xl border border-dental-blue/10 bg-white shadow-dental p-4 md:p-6 transition-all duration-500 hover:shadow-dental-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-sm md:text-lg font-semibold text-dental-dark">
                  {course.title}
                </h3>
                <div className="hidden md:block text-sm text-gray-600">
                  {course.organizer}
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-dental-blue font-medium">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  {course.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      number: '01',
      icon: <Award className="w-8 h-8" />,
      title: 'Experienced Dentists',
      description: 'Our team has over 50 years of combined experience in various dental specialties.',
    },
    {
      number: '02',
      icon: <Settings className="w-8 h-8" />,
      title: 'Advanced Technology',
      description: 'We use the latest dental technology for accurate diagnoses and comfortable treatments.',
    },
    {
      number: '03',
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient Comfort',
      description: 'Relaxing environment with sedation options for anxious patients.',
    },
    {
      number: '04',
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Transparent pricing and flexible payment plans to fit your budget.',
    },
    {
      number: '05',
      icon: <CalendarClock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Early morning, evening, and weekend appointments available.',
    },
    {
      number: '06',
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Emergency Services',
      description: 'Same-day emergency appointments when you need urgent care.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-dental-light to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">Our Advantages</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-dark mt-3 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            What makes us different from other dental clinics
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`group relative bg-white rounded-lg md:rounded-2xl p-3 md:p-6 lg:p-8 shadow-dental hover:shadow-dental-lg transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number Badge */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-dental-blue rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm lg:text-lg shadow-dental animate-pulse-glow">
                {feature.number}
              </div>

              {/* Icon */}
              <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 bg-dental-blue/10 rounded-lg md:rounded-2xl flex items-center justify-center text-dental-blue mb-2 md:mb-4 lg:mb-6 group-hover:bg-dental-blue group-hover:text-white transition-all duration-300">
                <div className="scale-75 md:scale-100">{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xs md:text-lg lg:text-xl font-semibold text-dental-dark mb-1 md:mb-3">
                {feature.title}
              </h3>
              <p className="hidden md:block text-xs md:text-sm text-gray-600 leading-tight md:leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Rehan Malik',
      rating: 5,
      quote: "My RCT was smooth and almost painless. Dr. Naeem explained everything clearly and my tooth feels perfect now.",
      treatment: 'RCT',
    },
    {
      name: 'Aqsa Leghari',
      rating: 5,
      quote: "Scaling and polishing went very well. My teeth look clean and fresh, and the care was gentle and professional.",
      treatment: 'Scaling and Polishing',
    },
    {
      name: 'Sahib Khanzada',
      rating: 5,
      quote: "I was nervous about the extraction, but it was quick and comfortable. Pain was minimal and recovery was easy.",
      treatment: 'Extraction',
    },
    {
      name: 'Saifullah Achakzai',
      rating: 5,
      quote: "My partial denture fits perfectly and looks natural. I can eat and smile with confidence again.",
      treatment: 'Partial Denture',
    },
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-dental-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-300 text-lg">
            Real stories from real patients
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
                    {/* Quote Icon */}
                    <div className="text-dental-blue text-6xl font-serif mb-6">"</div>
                    
                    {/* Quote */}
                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-dental-yellow text-dental-yellow" />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">| {testimonial.treatment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-dental-blue w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Preferred Date:* ${formData.date}%0A*Message:* ${formData.message || 'N/A'}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/923123980694?text=${whatsappMessage}`, '_blank');
    
    toast.success('Opening WhatsApp to send your appointment request!');
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Call Us',
      value: '+92 3123980694',
      subtext: 'Sat-Sun 10am-5pm',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email Us',
      value: 'info@dentalcare.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Visit Us',
      value: 'Dr Naeem Dental or Aesthetic Clinic',
      subtext: 'Near Civil Hospital, Digri',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-dental-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-dental-blue font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-dark mt-3 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to schedule your appointment? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {contactInfo.map((info, index) => (
              <div 
                key={info.label}
                className="bg-white rounded-2xl p-6 shadow-dental hover:shadow-dental-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center text-dental-blue group-hover:bg-dental-blue group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="font-semibold text-dental-dark text-lg">{info.value}</div>
                    <div className="text-sm text-gray-400">{info.subtext}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="bg-dental-blue rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <span className="font-semibold text-lg">Working Hours</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-80">Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Sunday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Monday - Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-dental-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input 
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 rounded-xl border-gray-200 focus:border-dental-blue focus:ring-dental-blue/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 rounded-xl border-gray-200 focus:border-dental-blue focus:ring-dental-blue/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input 
                    type="tel"
                    placeholder="+92 3123980694"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 rounded-xl border-gray-200 focus:border-dental-blue focus:ring-dental-blue/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="h-12 rounded-xl border-gray-200 focus:border-dental-blue focus:ring-dental-blue/20"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Tell us about your dental concerns..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px] rounded-xl border-gray-200 focus:border-dental-blue focus:ring-dental-blue/20 resize-none"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full mt-8 bg-dental-blue hover:bg-dental-dark text-white py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-dental-xl"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-dental-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-dental-blue rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-semibold text-xl">
                Dr Naeem Dental <span className="text-dental-blue">or Aesthetic Clinic</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Providing quality dental care with compassion and expertise. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: 'https://www.facebook.com/naeem.jarwar.908' },
                { Icon: Instagram, link: 'https://www.instagram.com/naeem_jarwar2/' },
                { Icon: Twitter, link: '#' },
                { Icon: Linkedin, link: 'https://www.linkedin.com/in/naeem-ullah-jarwar-92252b188/' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target={social.link !== '#' ? '_blank' : undefined}
                  rel={social.link !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-blue transition-all duration-300 hover:-translate-y-1"
                  onClick={(e) => {
                    if (social.link === '#') {
                      e.preventDefault();
                      toast.success('Social media coming soon!');
                    }
                  }}
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-dental-blue transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-dental-blue transition-all duration-300 group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'General Dentistry',
                'Cosmetic Dentistry',
                'Orthodontics',
                'Pediatric Dentistry',
                'Emergency Care',
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-dental-blue transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-dental-blue transition-all duration-300 group-hover:w-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-dental-blue mt-0.5" />
                <span className="text-gray-400">+92 3123980694</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-dental-blue mt-0.5" />
                <span className="text-gray-400">info@dentalcare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dental-blue mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/cCDvCPzFiUAKTzdLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-dental-blue transition-colors"
                >
                  Get Directions on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Dr Naeem Dental or Aesthetic Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors" onClick={(e) => { e.preventDefault(); toast.success('Privacy policy coming soon!'); }}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors" onClick={(e) => { e.preventDefault(); toast.success('Terms of service coming soon!'); }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
