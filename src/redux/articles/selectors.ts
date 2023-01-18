import { createSelector } from "@reduxjs/toolkit";
import { IState, Article } from "./interfaces";

export const selectItems = (state: IState) => state.articles.items;
export const selectFilterStatus = (state: IState) => state.filter.value;
export const selectIsLoading = (state: IState) => state.articles.isLoading;
export const selectError = (state: IState) => state.articles.error;

export const selectVisibleArticles = createSelector(
  [selectItems, selectFilterStatus],
  (articles: Article[], filterValue: string) => {
    return articles.filter(({ title }) => {
      const normalizedTitle = title.toLowerCase();
      return normalizedTitle.includes(filterValue.toLowerCase());
    });
  }
);
