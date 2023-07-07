import "./card.styles.css";
const Card = (props) => {
  const classes = "card-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
