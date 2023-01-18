import { FC } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { IArticleProps } from "./Article.interface";
import { Link } from "components/Link";
import clsx from "clsx";
import "./Article.css";

export const Article: FC<IArticleProps> = ({
  id,
  title,
  imageUrl,
  summary,
  updatedAt,
}) => {
  const date = format(new Date(updatedAt), "MMMM do, y ");
  const location = useLocation();

  return (
    <Card className={clsx("card")}>
      <CardMedia component="img" alt={title} height="217" image={imageUrl} />
      <Box sx={{ p: "25px" }}>
        <CardContent sx={{ p: 0 }}>
          <Box className={clsx("card__calendar-wrapper")}>
            <CalendarTodayIcon fontSize="small" />
            <Typography className={clsx("card__date")}>{date}</Typography>
          </Box>
          <Typography
            component="h1"
            sx={{
              color: "#363636",
              fontSize: "24px",
              lineHeight: "29px",
              mb: "20px",
            }}
          >
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Typography>
          <Typography sx={{ mb: "20px", fontSize: "16px", lineHeight: "150%" }}>
            {summary.slice(0, 100) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            sx={{
              color: "#363636",
              fontWeight: "700",
              fontSize: " 16px",
              lineHeight: "150%",
            }}
            to={`${id}`}
            endIcon={<ArrowForwardIcon />}
            state={{ from: location }}
          >
            Read more
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};
