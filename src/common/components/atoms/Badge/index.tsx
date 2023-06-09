const Badge = ({ count }: BadgeProps) => {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-white bg-red-500 rounded-full absolute -top-2 -right-2">
      {count}
    </span>
  );
};

type BadgeProps = {
  count: number;
};

export default Badge;
