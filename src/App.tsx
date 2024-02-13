import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Stylesheet, CAC } from "./pages";
import { Navbar } from "./components/";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 1.2rem;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background: #121212;
    font-family: 'Nunito', sans-serif;
    color: #fff;
  }

  .container {
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
  }   
  :root {
    /* colors */
    --white: #ffffff;
    --green: #333d29;
    --coffee: #43281c;
    --vanilla: #f1e3d3;
    --lemon: #fbf2c0;
    --mocha: #7f4f24;
    --tan: #ddb892;
    --blue: #3e80b6;
  
    /* fonts */
    --decorative: "Montserrat", sans-serif;
    --sans: "Open Sans", sans-serif;
  
    /* font scale */
    --base-size: 1.2rem;
    --scale: 1.25;
    --sm:calc(var(--base-size)/var(var(--scale)));
    --h6: var(--base-size);
    --h5: calc(var(--h6)*var(--scale));
    --h4: calc(var(--h5)*var(--scale));
    --h3: calc(var(--h4)*var(--scale));
    --h2: calc(var(--h3)*var(--scale));
    --h1: calc(var(--h2)*var(--scale));
    --lg: calc(var(--h1)*var(--scale));
    --xl: calc(var(--lg)*var(--scale));


    /* Generate sizes, element styles, and classes for h1, h2, h3, body. Generate sizes for h4-h6, a small size, and a large size (classes not needed, just variables).
    See https://codepen.io/jen4web/pen/KKGpKBM as an example */
  
    /* other variables */
    --radius: 5px;
  }
  h1,h2,h3,.h1,.h2,.h3{
  font-weight: 400;
  margin: 0;
}
h1,h2,h3,h4,h5,h6,p{
  color: var(--coffee);
}
h1,.h1{
font-size: var(--h1);
line-height: 1;
}
h2,.h2{
font-size: var(--h2);
line-height: 1.1;
}
h3,.h3{
font-size: var(--h3);
line-height: 1.2;
}
h4,.h4{
font-size: var(--h4);
}
h5,.h5{
font-size: var(--h5);

}
h6,.h6{
font-size: var(--h6);
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="Container">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="FirstRefresher" element={<Stylesheet />} />
          <Route path="CAC" element={<CAC />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
