import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Article } from "components/Article/Article";
import { fetchArticles } from "redux/articles/operations";
import { selectItems, selectFilterStatus } from "redux/articles/selectors";
import { useAppDispatch } from "redux/store";
import { useDebounce } from "hooks/useDebounce";
import clsx from "clsx";
import "./Articles.css";

export const Articles = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(selectItems);
  const filterStatus = useSelector(selectFilterStatus);
  const debouncedFilter = useDebounce(filterStatus, 500);

  useEffect(() => {
    dispatch(fetchArticles(debouncedFilter));
  }, [dispatch, debouncedFilter]);

  return (
    <Box className={clsx("container")}>
      {articles.length > 0 && (
        <Grid container spacing="45px">
          {articles.map(({ id, title, imageUrl, summary, updatedAt }) => (
            <Grid item xs={4} key={id}>
              <Article
                id={id}
                title={title}
                imageUrl={imageUrl}
                summary={summary}
                updatedAt={updatedAt}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {debouncedFilter && <b>No news with title {debouncedFilter}</b>}
    </Box>
  );
};
