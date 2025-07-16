// components/Programs.tsx
import ProgramCard from './ProgramCard'

export default function Programs() {
  const data = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Empowering youth with access to quality education.',
      image: '/images/programs/education.jpg',
      link: '/programs/education',
    },
    {
      id: 2,
      title: 'Women Empowerment',
      description: 'Training and resources for self-reliance and growth.',
      image: '/images/programs/women.jpg',
      link: '/programs/women',
    },
    {
      id: 3,
      title: 'Sustainable Villages',
      description: 'Clean water, electricity, and sustainability.',
      image: '/images/programs/villages.jpg',
      link: '/programs/villages',
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 grid md:grid-cols-3 gap-8">
      {data.map((item) => (
        <ProgramCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </section>
  );
}
