const Input = ({ name, value, onChange }: InputProps) => {
  return (
    <div className="relative">
      <label htmlFor="hs-table-search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder="Buscar..."
        className="p-2 pl-10 bg-gray-100/70 border rounded-md text-gray-800 outline-none focus:border-gray-300"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="h-3.5 w-3.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </div>
  );
};

type InputProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;
