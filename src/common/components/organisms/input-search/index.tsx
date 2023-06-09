import Input from "@atoms/input";

const InputSearch = ({ name, value, onChange }: InputSearchProps) => {
  return <Input name={name} value={value} onChange={onChange} />;
};

type InputSearchProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default InputSearch;
