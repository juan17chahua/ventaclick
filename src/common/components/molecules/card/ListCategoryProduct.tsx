const ListCategoryProduct = ({ categories }: ListCategoryProductProps) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center text-sm text-gray-600">
      {categories.map((text, index) => (
        <span key={index} className="bg-gray-100 px-1.5 py-1 rounded">
          {text}
        </span>
      ))}
    </div>
  );
};

type ListCategoryProductProps = {
  categories: string[];
};

export default ListCategoryProduct;
