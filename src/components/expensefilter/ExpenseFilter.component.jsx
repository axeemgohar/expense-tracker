import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
const ExpenseFilter = (props) => {
  const clickFilterHandler = (event) => {
    console.log(event.target.value);
    props.onParseYear(event.target.value);
  };

  const allYears = props.expenseYears.map((element) => {
    return element.date.getFullYear().toString();
  });
  const filteredYears = [...new Set(allYears)];

  return (
    <div className="d-flex justify-content-end">
      <FormControl sx={{ m: 3, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedYear}
          label="Select Year"
          onChange={clickFilterHandler}
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
