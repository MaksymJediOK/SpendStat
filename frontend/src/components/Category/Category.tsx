import { RoundIcon } from "../../UI/RoundIcon";
import { HiShoppingCart } from "react-icons/hi";

interface CategoryProps {
  title: string,
  expenses: number
}

export const Category = ({title, expenses}: CategoryProps) => {
  return (
    <div className='flex flex-col gap-2 w-12 items-center'>
      <h2 className='font-semibold text-black'>{title}</h2>
      <RoundIcon color={'light-blue'} icon={<HiShoppingCart size={24} color='white' />} />
      <span className='text-gray-400'>{expenses} $</span>
    </div>
  );
};
