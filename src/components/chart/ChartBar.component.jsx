import { styled } from "styled-components";
import "./chartbar.styles.css";

//Using Styled Components To Apply Dynamic Styling For Media Queries
const FillBar = styled.div`
  background-color: #404bdd;
  transition: width 0.5s ease-out;
  width: ${(props) => props.$fillBar};
  height: 12px;
  @media screen and (max-width: 1100px) {
    height: ${(props) => props.$fillBar};
    width: 12px;
    transition: height 0.5s ease-out;
  }

  @media screen and (max-width: 900px) {
    width: 10px;
  }

  @media screen and (max-width: 750px) {
    width: 8px;
  }
  @media screen and (max-width: 500px) {
    width: 6px;
  }
`;

const ChartBar = (props) => {
  //Getting The Percentage To Fill Chart Bar
  let initialFill = "0%";
  if (props.maxValue > 0) {
    initialFill =
      Math.round((props.value / props.maxValue) * 100).toString() + "%";
  }

  return (
    <div className="py-1 bar-fill-container">
      <div className="d-flex justify-content-between">
        <label className="chart-month py-1 ps-1">{props.label}</label>
        <label className="chart-month py-1 ps-1">${props.value}</label>
      </div>
      <div className="chart-fill-outline rounded-5">
        <FillBar $fillBar={initialFill}></FillBar>
      </div>
    </div>
  );
};

export default ChartBar;
