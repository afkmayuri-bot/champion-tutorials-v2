import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Trophy, Users, MapPin, Phone, Clock, GraduationCap, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselComponent from '@/components/CarouselComponent';
import CourseCard from '@/components/CourseCard';
import ToasterCard from '@/components/ToasterCard';
import StatsCounter from '@/components/StatsCounter';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import TeamMemberCard from '@/components/TeamMemberCard';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  const carouselSlides = [
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/b63934f6bcd1ee6ee1b77b9435ab8a76.jpg',
      alt: 'Outstanding Student Scores and Results',
      caption: 'Celebrating Our Champions & Their Incredible Scores!'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/898677f6d8328cc0268c8db846189496.jpg',
      alt: 'Congratulations Toppers',
      caption: 'Congratulations to Our Star Performers!'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/20ada9ecd063e95452d8b615c4ceeba9.jpg',
      alt: 'Commerce Coaching Excellence',
      caption: 'Excellence in Commerce Coaching — Step Towards Success'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/fb8fdec2106ef033d4e3a553220e5517.jpg',
      alt: 'Class X CBSE 100% Results',
      caption: 'Class X CBSE 100% Results Across the Board'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/a76da5b4270fcc572a8eb3cc6623657a.jpg',
      alt: 'Comprehensive Board Results',
      caption: 'Consistent Excellence Across All Batches'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/54e370ca62dd988e993b2b5c943d229c.jpg',
      alt: 'Admissions Open 2026',
      caption: 'Admissions Now Open — Secure Your Future!'
    }
  ];

  const courses = [
    {
      title: 'Classes VIII–X',
      boards: 'ICSE, CBSE, State Board/SSC',
      subjects: 'Maths, Science, English, Social Studies',
      focus: 'Board exam excellence + strong foundation for future success',
      highlights: ['100% Results', 'Expert Faculty', 'Small Batches'],
      icon: GraduationCap
    },
    {
      title: 'Classes XI–XII',
      boards: 'Science & Commerce Streams',
      subjects: 'Physics, Chemistry, Maths, Biology, Accounts, Economics',
      focus: 'Board preparation + entrance exam foundation',
      highlights: ['Board + Entrance', 'Concept Clarity', 'Regular Tests'],
      icon: Target
    },
    {
      title: 'JEE / NEET / CET',
      boards: 'Engineering & Medical Entrance',
      subjects: 'Physics, Chemistry, Maths, Biology',
      focus: 'Proven results: IIT AIR 4437, CET 97 Percentile. Concept clarity + exam strategy',
      highlights: ['IIT Rankers', 'Expert Mentors', 'Mock Tests'],
      icon: Award
    }
  ];

  const teamMembers = [
    {
      name: 'Sunil Kumar Sir',
      designation: 'Founder & Director',
      description: 'With over a decade of teaching experience, Sunil Sir has mentored thousands of students to academic excellence. Known for his patience, dedication, and innovative teaching methods.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/c2150e4e842554071b12d53cac625589.jpg'
    },
    {
      name: 'Vikas Sir',
      designation: 'Director',
      description: 'Brings a wealth of experience in coaching students for both board exams and competitive entrance tests. His structured approach focuses on deep concept clarity and exam strategy.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/558fd3a927ff2f5d0a0651854ee4c162.jpg'
    },
    {
      name: "Sonali Shinde Ma'am",
      designation: 'Principal',
      description: 'An exceptional educator dedicated to building strong foundations for students. Her engaging teaching style makes learning enjoyable and helps students achieve remarkable results.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/8597f853104e4339e188dc653405783f.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Arnav Pradhan',
      score: '96%',
      board: 'CBSE Class X',
      review: 'Sunil Sir and Vikas Sir made learning enjoyable. Their teaching methods helped me score 96% in boards!'
    },
    {
      name: 'Rugved Hegde',
      score: 'IIT AIR 4437',
      board: 'JEE Advanced',
      review: 'The focused preparation and personalized attention at Champions Tutorials helped me crack IIT!'
    },
    {
      name: 'Prakhar Rathore',
      score: '94%',
      board: 'CBSE Class X',
      review: 'Best coaching in Pune! The teachers genuinely care about student success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Champions Tutorials Pune | CBSE ICSE Coaching Sinhgad Road</title>
        <meta name="description" content="Best coaching classes in Pune for CBSE, ICSE & State Board. Classes 8–12 + JEE/NEET/CET. 100% board results. Call 9284707840." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-primary-light via-white to-primary-light/50 overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 text-primary font-bold text-sm border border-accent/50 shadow-sm">
                  Admissions Open 2026
                </div>
                <h1 className="heading-display mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Champions Are Not Born, They Are Made Here!
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-prose font-medium">
                  Pune's Most Trusted Coaching for CBSE, ICSE & State Board | Classes VIII–XII + JEE / NEET / CET
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-lg font-bold">
                      Enroll Now
                    </Button>
                  </Link>
                  <a href="https://wa.me/919284707840" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 font-bold">
                      Book A Free Demo
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-bold text-primary">5.0 Google Rating (107 Reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary">100% Board Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary">500+ Students Coached</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <CarouselComponent slides={carouselSlides} />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-6 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-accent" />
                <span className="font-bold tracking-wide">100% Board Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-accent" />
                <span className="font-bold tracking-wide">IIT Rankers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent" />
                <span className="font-bold tracking-wide">Pune, Sinhgad Road</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 fill-accent text-accent" />
                <span className="font-bold tracking-wide">5.0 Rated on Google</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Courses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Comprehensive coaching programs designed for academic excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20 shadow-xl bg-white overflow-hidden relative">
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 border border-primary/10 shadow-sm">
                      <span className="text-3xl">📝</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Online Exam Portal
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto md:mx-0">
                      Access our comprehensive online examination platform. Take mock tests, practice previous year papers, and get detailed performance analytics to track your progress and improve your scores.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Button asChild size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg px-8 py-6 text-lg font-bold transition-all duration-300 hover:-translate-y-1">
                      <a
  href="https://championstutorials.collegedoors.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  Go to Exam Portal
</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <WhyChooseUsSection />

        <section className="section-padding bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="heading-section text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Meet the Founders
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Experienced educators dedicated to student success and building strong foundations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamMemberCard {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What Our Students Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Real success stories from our champions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ToasterCard {...testimonial} />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-bold">
                  Read All Reviews on Google →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 pattern-triangle-top-right"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 pattern-triangle-bottom-left"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-bold mb-2 text-accent">
                  <StatsCounter end={96} suffix="%" />
                </div>
                <p className="text-primary-foreground/90 font-bold text-lg">Top Score Achieved</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-5xl font-bold mb-2 text-accent">
                  <StatsCounter end={4437} />
                </div>
                <p className="text-primary-foreground/90 font-bold text-lg">Best IIT AIR</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-5xl font-bold mb-2 text-accent">
                  <StatsCounter end={107} />
                </div>
                <p className="text-primary-foreground/90 font-bold text-lg">Happy Reviews</p>
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <Link to="/results">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 border-0 font-bold px-8 shadow-lg">
                  See All Results →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">Call Us</p>
                  <p className="text-muted-foreground font-medium">9284707840</p>
                  <p className="text-muted-foreground font-medium">9823059233</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">Visit Us</p>
                  <p className="text-muted-foreground text-sm font-medium">2nd Floor, Kudale Patil Prestige, Sinhgad Road, Pune – 411051</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">Hours</p>
                  <p className="text-muted-foreground font-medium">Open until 9 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <a
                  href="https://maps.app.goo.gl/Qm8iLoGfsxiCV6qg9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md font-bold">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
