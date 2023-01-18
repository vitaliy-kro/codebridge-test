import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { selectItems } from "redux/articles/selectors";
import { setFilter } from "redux/articles/filterSlice";
import { useAppDispatch } from "redux/store";
import clsx from "clsx";
import "./Filter.css";

const Filter = () => {
  const articles = useSelector(selectItems);
  const dispatch = useAppDispatch();

  return (
    <Box component="header" className={clsx("filter")}>
      <TextField
        id="filter-input"
        variant="outlined"
        label="Filter by keywords"
        placeholder="What you want to search?"
        className={clsx("filter__search-input")}
        sx={{ mb: "40px" }}
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {articles.length > 0 && (
        <Typography component="p" variant="h6">
          Results: {articles.length}
        </Typography>
      )}
    </Box>
  );
};

export default Filter;
