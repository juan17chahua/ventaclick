const ListCategoryProduct = ({
  categories,
  numSlice = 2,
}: ListCategoryProductProps) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center text-sm text-gray-600">
      {categories.slice(0, numSlice).map((text, index) => (
        <span key={index} className="bg-gray-100 px-1.5 py-1 rounded">
          {text}
        </span>
      ))}
    </div>
  );
};

type ListCategoryProductProps = {
  categories: string[];
  numSlice?: number;
};

export default ListCategoryProduct;
