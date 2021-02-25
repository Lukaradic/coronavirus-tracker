interface Props {
  num: number;
  className?: string;
}
export default function Result({ num, className }: Props) {
  function numberFormat(num: number): string {
    return num
      .toString()
      .split(/(?=(?:\d{3})+(?:\.|$))/g)
      .join(" ");
  }
  return (
    <div>
      <h4 className="confirmed-title title">Confirmed:</h4>
      <span className="confirmed-number number">{numberFormat(num)}</span>
    </div>
  );
}
