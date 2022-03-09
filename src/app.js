const root = document.querySelector("#root");
const li = React.createElement("li", {
  children: "Apple",
});

const li2 = React.createElement("li", {
  children: "orange",
});

const li3 = React.createElement("li", {
  children: "Grape",
});

const element = (
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Grape</li>
  </ul>
);

ReactDOM.render(element, root);
