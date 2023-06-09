const EmptyData = ({ text }: EmptyDataProps) => {
  return (
    <section className="w-full h-full grid place-content-center">
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="mr-2 w-8 h-8 text-gray-200 animate-bounce dark:text-gray-600 fill-blue-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
        </svg>
        <span>{text}</span>
      </div>
    </section>
  );
};

type EmptyDataProps = {
  text: string;
};

export default EmptyData;
