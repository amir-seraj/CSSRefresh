import styled from "styled-components";

const CACContainer = styled.div`
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
    font-size: var(--h3);
  }
`;
const FancyText = styled.span`
  background: linear-gradient(to left, var(--mocha), var(--tan));
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: 0 90%;
  font-size: var(--h1);
  * {
    display: inline-block;
    margin: 0rem 0.25rem;
  }
`;
const CACContent = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
  }
`;
const ArticleHeader = styled.h2`
  font-size: var(--h3);
  padding-bottom: 1rem;
  @media (max-width: 600px) {
    order: 1;
  }
`;
const ArticleText = styled.p`
  font-size: var(--sm);
  @media (max-width: 600px) {
    order: 3;
  }
  @media (min-width: 600px) {
    order: 2;
  }
`;
const ArticleImage = styled.img`
  border-radius: var(--radius);
  @media (max-width: 600px) {
    order: 2;
  }
`;
const ArticleInfo = styled.p`
  margin-top: 3rem;
  @media (max-width: 600px) {
    order: 4;
  }
`;
const CAC = () => {
  return (
    <CACContainer>
      <Header>
        <h1>
          <FancyText>Instant</FancyText> Coffee Facts
        </h1>
      </Header>
      <CACContent>
        <ArticleHeader>
          Coffee, instantly: Coffee convenience, but at what cost to flavor?
        </ArticleHeader>
        <ArticleText>
          Many products are sold for the convenience of consumers who do not
          want to prepare their coffee or who do not have access to coffeemaking
          equipment. Instant coffee is dried into soluble powder or freeze-dried
          into granules that can be quickly dissolved in hot water. A New
          Zealand invention and staple, instant coffee was originally invented
          in Invercargill 1890, by food chemist David Strang. It rapidly gained
          in popularity in many countries in the post-war period, with Nescafé
          being the most popular product. Many consumers determined that the
          convenience of preparing a cup of instant coffee more than made up for
          a perceived inferior taste, although, since the late 1970s, instant
          coffee has been produced differently in such a way that is similar to
          the taste of freshly brewed coffee. Paralleling (and complementing)
          the rapid rise of instant coffee was the coffee vending machine
          invented in 1947 and widely distributed since the 1950s.
          <br /> Canned coffee has been popular in Asian countries for many
          years, particularly in China, Japan, South Korea, and Taiwan. Vending
          machines typically sell varieties of flavored canned coffee, much like
          brewed or percolated coffee, available both hot and cold. Japanese
          convenience stores and groceries also have a wide availability of
          bottled coffee drinks, which are typically lightly sweetened and
          pre-blended with milk. Bottled coffee drinks are also consumed in the
          United States.
          <br /> Liquid coffee concentrates are sometimes used in large
          institutional situations where coffee needs to be produced for
          thousands of people at the same time. It is described as having a
          flavor about as good as low-grade robusta coffee and costs about 10¢ a
          cup to produce. The machines can process up to 500 cups an hour, or
          1,000 if the water is preheated.
        </ArticleText>
        <ArticleImage
          src="https://assets.codepen.io/296057/fem-instant-coffee.jpg"
          alt="Packets of instant coffee on a table."
        />
        <ArticleInfo>
          From <em>Coffee: Instant Coffee</em> at{" "}
          <cite>
            <a
              href="https://en.wikipedia.org/wiki/Coffee#Instant_coffee"
              target="_blank"
            >
              Wikipedia
            </a>
            .
          </cite>{" "}
          Photo by{" "}
          <a
            href="https://www.pexels.com/photo/coffee-in-sachets-15812210/"
            target="_blank"
          >
            Psalmnoel Figueroa
          </a>
          .
        </ArticleInfo>
      </CACContent>
    </CACContainer>
  );
};

export default CAC;
