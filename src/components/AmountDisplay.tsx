import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
};

function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold ">
      {label && `${label}: `}
      <span className="font-black text-black px-2">
        {formatCurrency(amount)}
      </span>
    </p>
  );
}

export default AmountDisplay;
