import { Container } from "@mui/material";
import HeroCards from "../components/HeroCards";
import Header from "../components/utils/HeaderTitle"
import AddHeroButton from "../components/AddHeroButton";

function HomePage() {
  return (
      <Container>
        <AddHeroButton />
        <Header />
        <HeroCards />
      </Container>
  );
}

export default HomePage;
