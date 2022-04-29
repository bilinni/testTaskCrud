import { useEffect, useState } from "react";
import axios from "axios";
import { _apiBase } from "../server_setting";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Button,
  Container,
  Card,
  Typography,
  CardContent,
  CardActions,
  Modal
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import EditHeroForm from "./EditHeroForm";

export default function SingleHero() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { heroId } = useParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${_apiBase}/${heroId}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const deleteHero = () => {
    axios.delete(`${_apiBase}/${heroId}`).then(
        navigate("/")
    )
  };

  const renderItems = data?.images.map((item, index) => (
    <div>
      {console.log(item)}
      <img src={`${_apiBase}/files/${item}`} />
      <p className="legend">{data?.nickname}</p>
    </div>
  ));

  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", paddingY: 20, height: '100' }}
    >
      <Box sx={{ width: 360 }}>
        <Carousel>{renderItems}</Carousel>
      </Box>
      <Card sx={{ minWidth: 275, marginTop: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data?.nickname}
          </Typography>
          <Typography variant="h5" component="div">
            {data?.real_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data?.origin_description}
          </Typography>
          <Typography variant="body2">
            {data?.superpowers}
            <br />
            {data?.catch_phrase}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpen(true)} >Edit</Button>
          <Button onClick={deleteHero}>Delete</Button>
          <Button onClick={() => navigate("/")}>Go back</Button>
        </CardActions>
      </Card>
      <Modal
          open={open}
          onBackdropClick={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <EditHeroForm setOpen={setOpen}/>
          </Box>
        </Modal>
    </Container>
  );
}
