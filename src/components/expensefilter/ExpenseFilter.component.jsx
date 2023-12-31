import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import "./expensefilter.styles.css";
const ExpenseFilter = (props) => {
  //Sending Selected Year To The Parent
  const clickFilterHandler = (event) => {
    props.onParseYear(event.target.value);
  };

  //Sending Selected Order To The Parent
  const sortFilterHandler = (event) => {
    props.onParseOrder(event.target.value);
  };

  //Extracting Unique Values To Avoid Duplication Of Years
  const allYears = props.expenseYears.map((element) => {
    return element.date.getFullYear().toString();
  });
  const filteredYears = [...new Set(allYears)];

  return (
    <div className="d-flex justify-content-end filters-container">
      <FormControl sx={{ my: 3, mr: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedOrder}
          label="Sort By"
          onChange={sortFilterHandler}
          size="small"
        >
          <MenuItem value="None">None</MenuItem>

          <MenuItem value="low-to-high">Low to High</MenuItem>
          <MenuItem value="high-to-low">High to Low</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 3, ml: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedYear}
          label="Select Year"
          onChange={clickFilterHandler}
          size="small"
        >
          <MenuItem value="Year">Show All</MenuItem>
          {filteredYears.map((element) => {
            return (
              <MenuItem value={element} key={element}>
                {element}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ExpenseFilter;
