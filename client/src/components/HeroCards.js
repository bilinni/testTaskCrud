import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { _apiBase } from "../server_setting";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function HeroCards() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    axios
      .get(`${_apiBase}/?offset=${(page*5)-5}&limit=5`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [page]);

  const renderItems = data?.map((item, index) => (
    <Card
      sx={{ width: 345, margin: 5 }}
      key={index}
      onClick={() => navigate(`/${item._id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image={`${_apiBase}/files/${item?.images[0]}`}
          alt="superhero"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {item?.nickname}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {renderItems}
      </Container>
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          bottom: -80,
          left: "50%",
          transform: "translate(-50%, 0)",
          marginY: 15,
        }}
      >
        <Pagination
          count={10}
          shape="rounded"
          onChange={(event) => setPage(event.target.outerText)}
        />
      </Stack>
    </Container>
  );
}
