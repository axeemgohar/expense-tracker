import "./chart.styles.css";
import Card from "../UI wrappers/Card.component";
import ChartBar from "./ChartBar.component";

const ChartGraph = (props) => {
  //Extracting The Array Of Amount
  const datavalues = props.chartData.map((element) => {
    return element.wholeMonthExpense;
  });

  //Extracting The Maximum Amount From The Array
  const maximumVal = Math.max(...datavalues);

  return (
    <Card className="px-3 py-2 chart-card">
      {props.chartData.map((element) => {
        return (
          <ChartBar
            maxValue={maximumVal}
            label={element.label}
            value={element.wholeMonthExpense}
            key={element.label}
          />
        );
      })}
    </Card>
  );
};

export default ChartGraph;
