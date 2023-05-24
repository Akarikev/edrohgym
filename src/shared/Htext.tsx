type Props = {
  children: React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <h1 className="font-3xl basis-3/5 font-[inter] font-bold">{children} </h1>
  );
};

export default Htext;
