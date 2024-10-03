interface PhotoCardProps {
  photo: string;
  title: string;
  className?: string;
}

export default function PhotoCard({ photo, title, className }: PhotoCardProps) {
  return (
    <div
      className={`h-[390px] w-[330px] bg-white p-[15px] shadow dark:bg-comet-950 dark:shadow-comet-100/5 ${className}`}
    >
      <img
        src={photo}
        alt={title}
        className="m-auto h-full w-full object-cover object-center"
      />
    </div>
  );
}
