interface PhotoCardProps {
  photo: string;
  title: string;
  className?: string;
}

export default function PhotoCard({ photo, title, className }: PhotoCardProps) {
  return (
    <div
      className={`padding h-[390px] w-[330px] bg-white p-[15px] shadow ${className}`}
    >
      <img
        src={photo}
        alt={title}
        className="m-auto h-full w-full object-cover object-center"
      />
    </div>
  );
}
