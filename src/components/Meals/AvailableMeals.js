import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Handi Chicken',
    description: 'Our Speciality',
    price:500.00,
  },
  {
    id: 'm2',
    name: 'Masala Mushroom',
    description: 'A Vegetarian specialty!',
    price: 400.00,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'Delecious, crispy , Tasty',
    price: 250.00,
  },
  {
    id: 'm4',
    name: 'White Sauce Pasta',
    description: 'Creamy,Chessy and Italian',
    price: 320.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
