import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { selectItems } from "redux/articles/selectors";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "components/Link";

const ReadMorePage = () => {
  const { id } = useParams();
  const articles = useSelector(selectItems);
  const imageToMarkup = articles.find((a) => a.id === Number(id));
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Card>
      <CardMedia
        component="img"
        alt="title"
        height="217"
        image={imageToMarkup?.imageUrl}
      />
      <CardContent
        sx={{
          backgroundColor: "white",
          border: "1px solid #EAEAEA",
          mt: "-5%",
          mx: "auto",
          mb: "35px",
          width: "50%",
          px: "75px",
          pt: "35px",
          pb: "50px",
          borderRadius: "5px",
          position: "relative",
          zIndex: "100",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "24px",
            lineHeight: "29px",
            color: "#363636",
            mb: "50px",
          }}
        >
          {imageToMarkup?.title}
        </Typography>
        <Typography sx={{ fontSize: "18px", lineHeight: "150%" }}>
          {imageToMarkup?.summary}
        </Typography>
      </CardContent>
      <Box sx={{ px: "150px", pb: "45px" }}>
        <Link
          sx={{
            color: "#363636",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "150%",
          }}
          to={backLinkHref}
          startIcon={<ArrowBackIcon />}
        >
          Back to homepage
        </Link>
      </Box>
    </Card>
  );
};

export default ReadMorePage;
