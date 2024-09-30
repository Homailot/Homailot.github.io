interface PhotoCardProps {
  photo: string;
  title: string;
  className?: string;
}

export default function PhotoCard({ photo, title, className }: PhotoCardProps) {
  return (
    <div
      className={`padding h-[390px] w-[330px] bg-white dark:bg-comet-950 p-[15px] dark:shadow-comet-100/5 shadow ${className}`}
    >
      <img
        src={photo}
        alt={title}
        className="m-auto h-full w-full object-cover object-center"
      />
    </div>
  );
}
