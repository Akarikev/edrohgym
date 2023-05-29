type Props = {
  name: string;
  desc?: string;
  image: string;
};

const Class = ({ name, desc, image }: Props) => {
  const overlayStyles = `p-4 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-violet-400 text-center text-white opacity-0 transition duration-500 hover:opacity-90 rounded-lg`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={`${overlayStyles} `}>
        <p>{name}</p>
        <p>{desc}</p>
      </div>

      <img className="rounded-lg" loading="lazy" src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
