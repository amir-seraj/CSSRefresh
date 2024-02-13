import styled from "styled-components";

const SheetContainer = styled.div`
  background-color: var(--vanilla);
  width: 100vw;
  height: 100%;
  line-height: 2;
`;
const Header = styled.header`
  background-color: var(--coffee);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 2rem 0rem;
  border-bottom: 20px double var(--tan);
  color: var(--vanilla);
  h1 {
    color: var(--vanilla);
  }
`;
const Head1 = styled.h1``;
const Head2 = styled.h2``;
const Head3 = styled.h3``;
const Para = styled.p``;
const FancyText = styled.span`
  background: linear-gradient(to left, var(--mocha), var(--tan));
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: 0 90%;
  * {
    display: inline-block;
    margin: 0rem 0.25rem;
  }
`;
const Colors = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  text-align: center;
  margin: 1rem;
  font-size: 1rem;
`;
const White = styled.div`
  background-color: var(--white);
  color: var(--coffee);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Green = styled.div`
  background-color: var(--green);
  color: var(--vanilla);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Coffee = styled.div`
  background-color: var(--coffee);
  color: var(--vanilla);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Vanilla = styled.div`
  background-color: var(--vanilla);
  color: var(--coffee);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px var(--coffee);
`;
const Lemon = styled.div`
  background-color: var(--lemon);
  color: var(--coffee);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Mocha = styled.div`
  background-color: var(--mocha);
  color: var(--vanilla);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tan = styled.div`
  background-color: var(--tan);
  color: var(--coffee);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Blue = styled.div`
  background-color: var(--blue);
  color: var(--vanilla);
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Alink = styled.a`
  font-size: var(--sm);
  color: green;
  &:hover {
    text-decoration: none;
  }
`;
const Figure = styled.figure`
  margin: 0;
`;
const Image = styled.img`
  border-radius: var(--radius);
  width: 100%;
`;
const FigCaption = styled.figcaption`
  color: var(--coffee);
  font-size: 0.75rem;
`;
const Stylesheet = () => {
  return (
    <SheetContainer>
      <Header>
        <h1>
          Coffee Masters <FancyText>Style Guide</FancyText>
        </h1>
      </Header>
      <Colors>
        <White>white</White>
        <Green>green</Green>
        <Coffee>coffee</Coffee>
        <Vanilla>vanilla</Vanilla>
        <Lemon>lemon</Lemon>
        <Mocha>mocha</Mocha>
        <Tan>tan</Tan>
        <Blue>blue</Blue>
      </Colors>

      <Head1>This is Heading 1</Head1>
      <Head2>This is Heading 2</Head2>
      <Head3>This is Heading 3</Head3>
      <Para>
        This is a paragraph. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quisquam, pariatur.
      </Para>
      <Alink href="#">A text link by itself</Alink>

      <Figure>
        <Image
          src="https://assets.codepen.io/296057/fem-capuccino.jpg"
          alt="A cup of cappuccino."
        />
        <FigCaption>It's always time for coffee.</FigCaption>
      </Figure>
    </SheetContainer>
  );
};

export default Stylesheet;
