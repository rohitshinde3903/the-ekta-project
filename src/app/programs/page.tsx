import DonationForm from '../components/DonationForm';
import SectionTitle from '../components/SectionTitle';

export default function DonatePage() {
  return (
    <div className="bg-white">
      <section className="relative h-96">
        <div className="absolute inset-0 bg-primary flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Cause</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your donation helps us continue our mission to empower communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <SectionTitle
                  title="Make a Donation"
                  subtitle="Every contribution matters"
                />
                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    Your generous donation will directly support our programs in education, healthcare, and community development.
                  </p>
                  <p>
                    The Ekta Project is a registered non-profit organization, and all donations are tax-exempt under Section 80G of the Income Tax Act.
                  </p>
                  <p>
                    For large donations or corporate partnerships, please contact us directly.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Other Ways to Give</h3>
                  <ul className="space-y-2">
                    <li>• Bank Transfer (Details available on request)</li>
                    <li>• Cheque payable to "The Ekta Project"</li>
                    <li>• Monthly giving program</li>
                    <li>• Corporate matching gifts</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Where Your Money Goes"
            subtitle="Transparency in action"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <h3 className="text-lg font-bold mb-2">Programs</h3>
              <p className="text-gray-600">
                Directly funds our education, healthcare, and community initiatives
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <h3 className="text-lg font-bold mb-2">Administration</h3>
              <p className="text-gray-600">
                Supports our team and operational costs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">5%</div>
              <h3 className="text-lg font-bold mb-2">Fundraising</h3>
              <p className="text-gray-600">
                Helps us reach more supporters
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}