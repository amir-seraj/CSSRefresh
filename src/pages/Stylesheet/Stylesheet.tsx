import "./Stylesheet.css";

const Stylesheet = () => {
  return (
    <div className="SheetContainer">
      <header>
        <h1>
          Coffee Masters <span className="fancy-text">Style Guide</span>
        </h1>
      </header>
      <div className="colors">
        <div className="white">white</div>
        <div className="green">green</div>
        <div className="coffee">coffee</div>
        <div className="vanilla">vanilla</div>
        <div className="lemon">lemon</div>
        <div className="mocha">mocha</div>
        <div className="tan">tan</div>
        <div className="blue">blue</div>
      </div>

      <h1>This is Heading 1</h1>
      <h2>This is Heading 2</h2>
      <h3>This is Heading 3</h3>
      <p>
        This is a paragraph. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quisquam, pariatur.
      </p>
      <a href="#">A text link by itself</a>

      <figure>
        <img
          src="https://assets.codepen.io/296057/fem-capuccino.jpg"
          alt="A cup of cappuccino."
        />
        <figcaption>It's always time for coffee.</figcaption>
      </figure>
    </div>
  );
};

export default Stylesheet;
