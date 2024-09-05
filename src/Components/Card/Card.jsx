import classNames from "classnames";

const Card = (props) => {
  const { variant, isDisabled, direction = "column", children } = props;

  const variantClassnamesMap = {
    info: ["bg-blue-100", "border-blue-300"],
    success: ["bg-green-100", "border-green-300"],
    warning: ["bg-orange-100", "border-orange-300"],
  };

  const cardClassNames = classNames(
    "m-4",
    "border border-slate-700",
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
    variantClassnamesMap[variant],
    {
      "opacity-50": isDisabled,
      "flex flex-col": direction === "column",
      "flex flex-row": direction === "row",
      "flex flex-row-reverse": direction === "row-reverse",
    }
  );
  return <div className={cardClassNames}>{children}</div>;
};

export default Card;
