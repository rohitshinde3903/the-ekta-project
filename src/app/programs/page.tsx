import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import { programs } from '@/lib/constants';

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      <section className="relative h-96">
        <div className="absolute inset-0 bg-primary flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover how we're making a difference across various sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Focus Areas"
            subtitle="Creating impact through targeted programs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <SectionTitle
                title="Program Impact"
                subtitle="Measuring our success"
              />
              <div className="space-y-6 text-gray-700">
                <p>
                  We believe in transparency and accountability. Each of our programs has clear metrics to measure impact and effectiveness.
                </p>
                <p>
                  Our monitoring and evaluation team works closely with community partners to track progress and make data-driven improvements.
                </p>
                <p>
                  Annual impact reports are shared with all our stakeholders and donors.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary p-2 rounded-full mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>500+ children enrolled in our education programs this year</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary p-2 rounded-full mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>10,000+ patients treated through our healthcare initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary p-2 rounded-full mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>200 women trained and employed through our empowerment program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}