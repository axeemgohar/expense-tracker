import "./chart.styles.css";
import Card from "../UI wrappers/Card.component";
import ChartBar from "./ChartBar.component";

const ChartGraph = (props) => {
  const datavalues = props.chartData.map((element) => {
    return element.wholeMonthExpense;
  });

  const maximumVal = Math.max(...datavalues);

  return (
    <Card className="p-3 chart-card">
      {props.chartData.map((element) => {
        return (
          <ChartBar
            maxValue={maximumVal}
            label={element.label}
            value={element.wholeMonthExpense}
          />
        );
      })}
    </Card>
  );
};

export default ChartGraph;
