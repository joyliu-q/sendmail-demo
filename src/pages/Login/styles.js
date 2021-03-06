import styled from "styled-components";
import { Colors } from "@/styles";
import { device } from "@/theme";

export const Button = styled.div`
  display: inline-block;
  background-color: ${Colors.HACKOR_TURQOUISE};
  color: white;
  padding: 12.5px 25px 12.5px 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  transition: 0.15s;
  margin-bottom: 2rem;

  & p {
    margin: 0px;
    font-size: 1.2em;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
`;

export const Title = styled.div`
  flex-grow: 4;
  flex-basis: 0;
  flex-wrap: wrap;
`;

export const Heading = styled.div`
  flex-grow: 3;
  flex-basis: 0;
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

export const NewsLetter = styled.div`
  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
  display: flex;
  flex-direction: column;

  & h2 {
    color: #2684ff;
  }
`;
