import { Hero } from './components/Hero/Hero';
import SectionTitle from './components/SectionTitle';
import ProgramCard from './components/ProgramCard';
import TestimonialCard from './components/TestimonialCard';
import Stats from './components/Stats';
import { programs, testimonials } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Hero 
        title="Empowering Communities Together"
        subtitle="Join us in our mission to create sustainable change and uplift underprivileged communities across the nation."
        primaryActionText="Donate Now"
        primaryActionLink="/donate"
        secondaryActionText="Learn More"
        secondaryActionLink="/about"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Mission"
            subtitle="What drives us every day"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600">
            <p className="text-lg">
              The Ekta Project is dedicated to creating sustainable change through education, healthcare, and community development initiatives. We believe in the power of unity and collective action to transform lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Programs"
            subtitle="Making a difference"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Success Stories"
            subtitle="Lives we've touched"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us reach more communities and create lasting change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}