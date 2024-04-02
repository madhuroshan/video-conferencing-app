import { PlusIcon } from "lucide-react";
import { title } from "process";

type HomeCardProps = {
  img: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  handleClick?: () => void;
};

const HomeCard = ({
  img,
  title,
  description,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-2xl cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center size-12 glassmorphism rounded-lg">{img}</div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
