export interface TStyle {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  display?: string;
  ml?: number;
  pl?: string;
  py?: number;
}

export interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
}
export interface ILink {
  sx?: TStyle;
  to: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  startIcon?: React.ReactNode;
  className?: string;
  endIcon?: React.ReactNode;
  state?: { from: ILocation };
}
