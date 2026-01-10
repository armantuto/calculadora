import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Car from "./Car";
interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const cities = [
    "TORINO",
    "CREMONA",
    "PADERNO",
    "COMO",
    "LISSONE",
    "SARONNO",
    "BERGAMO",
    "USTO ARSIZIO",
    "PAVIA",
    "MILANO",
    "LA SPEZIA",
  ];
  const cities_2 = [
    "UDINE",
    "MONFALCONE",
    "BELLUNO",
    "MESTRE",
    "VINCENZA",
    "PADOVA",
    "TREVISO",
    "USTO ARSIZIO",
  ];

  const cities_3 = ["TRENTO", "BOLZANO", "VERONA", "BRECIA", "MANTOVA"];

  return (
    <>
      <Layout />
      <Container className="mt-1">
        <div className="row">
          <div className="col">
            <Car name="1" cities={cities} />
            <Car name="2" cities={cities_2} />
          </div>
          <div className="col">
            <Car name="3" cities={cities_3} />
            <Car name="4" cities={["PARMA"]} />
            <Car name="5" cities={["MODENA", "RAVENA", "RIMINI"]} />
            <Car name="6" cities={["PRATO"]} />
            <Car name="7" cities={["BOLOGNA"]} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
