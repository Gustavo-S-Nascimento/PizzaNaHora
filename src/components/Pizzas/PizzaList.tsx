import PizzaCard from './PizzaCard';
import pizzasData from '../DB/pizzasData';

const PizzaList: React.FC = () => {
    return (
        <div className="card-list">
            {pizzasData.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
};

export default PizzaList;