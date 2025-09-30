import StarFill from '../src/assets/resources/Star_fill.svg';

interface ProductCardProps {
    image: string;
    popular?: boolean;
    label: string;
    value: string;
    rating: string | null;
    votes: number;
    available: boolean;
}

export default function ProductCard({
    image,
    popular = false,
    label,
    value,
    rating,
    votes,
    available,
}: ProductCardProps) {
    return (
        <div className="w-full max-w-xs flex flex-col">
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden">
                <img src={image} alt={label} className="w-full h-auto rounded-lg" />
                {popular && (
                    <span className="absolute top-2 left-2 bg-[#F6C768] text-black text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                    </span>
                )}
            </div>

            {/* Label / Value */}
            <div className="flex justify-between items-center mt-2 px-1">
                <span className="text-white text-md font-dm-bold">{label}</span>
                <span className="text-black font-bold text-sm bg-[#BEE3CC] rounded px-2 py-1 font-dm-bold">
                    {value}
                </span>
            </div>

            {/* Rating */}
            <div className="flex justify-between items-center mt-1 px-1 gap-1">
                {/* Left: star + rating */}
                <div className="flex items-center gap-1">
                    {rating ? (
                        <>
                            <img src={StarFill} alt="star_filled" className="w-5 h-5" />
                            <span className="text-white font-medium">{rating}</span>
                            <span className="text-[#4D5562] text-sm">({votes})</span>
                        </>
                    ) : (
                        <>
                            <img src="../src/assets/resources/Star.svg" alt="star" className="w-5 h-5" />
                            <span className="text-gray-500 text-sm">No ratings</span>
                        </>
                    )}
                </div>

                {/* Right: Sold out */}
                {!available && (
                    <div>
                        <span className="text-[#ED735D] text-sm font-dm-bold">Sold out</span>
                    </div>
                )}
            </div>
        </div>
    );
}
