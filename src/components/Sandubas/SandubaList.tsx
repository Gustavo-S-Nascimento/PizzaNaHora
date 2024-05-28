import SanduicheCard from './SandubaCard';
import Sanduiche from '../DB/sanduicheData';

const SanduicheList: React.FC = () => {
    return (
        <div className="sanduiche-list">
            {Sanduiche.map((sanduiche) => (
                <SanduicheCard key={sanduiche.id} sanduiche={sanduiche} />
            ))}
        </div>
    );
};

export default SanduicheList;