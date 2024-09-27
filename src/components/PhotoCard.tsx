export default function PhotoCard({ photo, title, className }: { photo: string; title: string, className?: string }) {
    return (
        <div className={`w-[330px] h-[390px] p-[15px] bg-white padding shadow ${className}`}>
            <img src={photo} alt={title} className="object-center m-auto w-full h-full object-cover" />
        </div>
    )
}