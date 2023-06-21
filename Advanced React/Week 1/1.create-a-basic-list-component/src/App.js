import logo from './logo.svg';
import './App.css';
import DessersList from './DessertsList';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const filteredDessert = desserts.filter(dessert => {
    return dessert.calories<=500
  })
  filteredDessert.sort((a, b) => b.calories - a.calories);
  return (
    <div className="">
      <h2>List of low calorie desserts:</h2>
      <DessersList data={filteredDessert}/>
    </div>
  );
}

export default App;
