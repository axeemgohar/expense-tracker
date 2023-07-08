import "./card.styles.css";
const Card = (props) => {
  const classes = "card-wrapper " + props.className;
  return (
    <div className={classes} style={props.style && props.style}>
      {props.children}
    </div>
  );
};

export default Card;
