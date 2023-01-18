export interface FilterState {
  value: string;
}

export interface APIError {
  message: string;
}

export interface Article {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  launches: [
    {
      id: string;
      provider: string;
    }
  ];
  events: [
    {
      id: string;
      provider: string;
    }
  ];
}

export interface ArticlesState {
  items: Article[];
  isLoading: boolean;
  error: string | null | unknown;
}

export interface IState {
  articles: ArticlesState;
  filter: FilterState;
}
