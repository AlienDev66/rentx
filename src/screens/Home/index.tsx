import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent } from "./styles";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

export function Home() {
  const cardData = {
    name: "57 Coupé",
    brand: "AUDI",
    rent: { period: "Ao dia", price: 5000 },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };
  const cardData1 = {
    brand: "Porche",
    name: "Cayenne",
    rent: { period: "Ao dia", price: 100000 },
    thumbnail:
      "https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={cardData} />
      <Car data={cardData1} />
    </Container>
  );
}
