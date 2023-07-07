import "./chartbar.styles.css";
const ChartBar = (props) => {
  let initialWidth = "0%";

  if (props.maxValue > 0) {
    initialWidth =
      Math.round((props.value / props.maxValue) * 100).toString() + "%";
  }
  return (
    <div className="py-1">
      <div className="d-flex justify-content-between">
        <label className="chart-month py-1 ps-1">{props.label}</label>
        <label className="chart-month py-1 ps-1">${props.value}</label>
      </div>
      <div className="chart-fill-outline rounded-5">
        <div className="chart-fill" style={{ width: initialWidth }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
