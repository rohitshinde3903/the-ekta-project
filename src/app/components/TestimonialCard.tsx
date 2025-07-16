interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{content}"</p>
    </div>
  );
}