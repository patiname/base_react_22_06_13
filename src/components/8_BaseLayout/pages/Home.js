import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";

const Banner = styled.section`
  height: 800px;
  background-color: lightgray;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 400px;
`;

const Content = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightgray;
  box-shadow: 25px 25px 30px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    transform: translate(25px, 25px);
    box-shadow: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <div>
      <PageTitle text={"Home"} />

      <Banner></Banner>

      <Section>
        <Content>
          <Link to="/sub1"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
      </Section>
    </div>
  );
};
