export default function Stats() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-sm uppercase tracking-wider">Active Programs</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold mb-2">200+</p>
            <p className="text-sm uppercase tracking-wider">Dedicated Volunteers</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold mb-2">10K+</p>
            <p className="text-sm uppercase tracking-wider">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}