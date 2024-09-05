const CardCover = (props) => {
  const { url } = props;
  return <img src={url} alt="" className="w-full object-cover" />;
};

export default CardCover;
