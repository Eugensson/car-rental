import { IoStarOutline, IoStarHalfOutline, IoStar } from "react-icons/io5";

interface Props {
  value: number;
}

export const Rating: React.FC<Props> = ({ value }) => {
  return (
    <span className="flex gap-x-2 h-full">
      {value >= 1 ? (
        <IoStar size={16} className="text-accent" />
      ) : value >= 0.5 ? (
        <IoStarHalfOutline size={16} className="text-accent" />
      ) : (
        <IoStarOutline size={16} className="text-accent" />
      )}
      {value >= 2 ? (
        <IoStar size={16} className="text-accent" />
      ) : value >= 1.5 ? (
        <IoStarHalfOutline size={16} className="text-accent" />
      ) : (
        <IoStarOutline size={16} className="text-accent" />
      )}
      {value >= 3 ? (
        <IoStar size={16} className="text-accent" />
      ) : value >= 2.5 ? (
        <IoStarHalfOutline size={16} className="text-accent" />
      ) : (
        <IoStarOutline size={16} className="text-accent" />
      )}
      {value >= 4 ? (
        <IoStar size={16} className="text-accent" />
      ) : value >= 3.5 ? (
        <IoStarHalfOutline size={16} className="text-accent" />
      ) : (
        <IoStarOutline size={16} className="text-accent" />
      )}
      {value >= 5 ? (
        <IoStar size={16} className="text-accent" />
      ) : value >= 4.5 ? (
        <IoStarHalfOutline size={16} className="text-accent" />
      ) : (
        <IoStarOutline size={16} className="text-accent" />
      )}
    </span>
  );
};
