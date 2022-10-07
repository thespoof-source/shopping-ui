import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 600;
`;
const ImageContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Newarrival = () => {
  return (
    <Container>
      <Title>New Arrivals</Title>
      <ImageContainer>
        <marquee style={{ padding: "20px" }}>
          <img src="https://lp2.hm.com/hmgoepprod?set=source[/7f/91/7f9197247b6dbef01a46f416a01968954f569a1b.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" />

          <img src="https://lp2.hm.com/hmgoepprod?set=source[/52/d3/52d30514079f0904d3da577f732c30b1dc49fa91.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" />

          <img src="https://lp2.hm.com/hmgoepprod?set=source[/c6/34/c6344e4dfa03eded3e37dbe3f1824ae902b05588.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[3]&call=url[file:/product/main]" />
        </marquee>
      </ImageContainer>
    </Container>
  );
};
export default Newarrival;
