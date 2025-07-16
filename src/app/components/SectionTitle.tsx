interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
}