type Props = {
  title: string;
};

function Headline({ title }: Props) {
  return <h3 className="text-xl font-bold mb-4">{title}</h3>;
}
export default Headline;
