import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative h-96">
        <Image
          src="/images/about-hero.jpg"
          alt="About The Ekta Project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Learn about our journey, mission, and the team behind The Ekta Project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/about-story.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <SectionTitle
                title="Our Story"
                subtitle="How it all began"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, The Ekta Project began as a small initiative by a group of college students who wanted to make a difference in their community.
                </p>
                <p>
                  What started as weekend volunteering activities has now grown into a nationwide movement with programs in education, healthcare, and community development.
                </p>
                <p>
                  The name "Ekta" means unity in Hindi, reflecting our belief that real change happens when people come together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Team"
            subtitle="The people behind the mission"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team members would go here */}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Our Approach"
            subtitle="How we create impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Identify</h3>
              <p className="text-gray-600">
                We work closely with communities to understand their unique challenges and needs.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Empower</h3>
              <p className="text-gray-600">
                Our programs focus on building capacity and creating sustainable solutions.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Sustain</h3>
              <p className="text-gray-600">
                We ensure long-term impact through monitoring, evaluation, and community ownership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}