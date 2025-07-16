import Image from 'next/image';
import Link from 'next/link';

interface ProgramCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  link,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-primary font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}