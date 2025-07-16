// components/Programs.tsx
import ProgramCard from './ProgramCard'

export default function Programs() {
  const data = [
    { title: 'Education for All', description: 'Empowering youth with access to quality education.' },
    { title: 'Women Empowerment', description: 'Training and resources for self-reliance and growth.' },
    { title: 'Sustainable Villages', description: 'Clean water, electricity, and sustainability.' },
  ]

  return (
    <section className="py-20 px-8 bg-gray-50 grid md:grid-cols-3 gap-8">
      {data.map((item, i) => (
        <ProgramCard key={i} title={item.title} description={item.description} />
      ))}
    </section>
  )
}
