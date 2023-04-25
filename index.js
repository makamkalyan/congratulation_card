const element = (
  // Write your code here.
  <div className="congrats_card_container">
    <h1 className="h1">Congratulations</h1>
    <div className="congrats_card_inside_container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      ></img>
      <h1 className="h2">Kiran V</h1>
      <p className="p">
        Vishnu Institute of Computer education and technology,Bhimavaram
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
