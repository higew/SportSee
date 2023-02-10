import iconCal from '../../assets/pictos/calories-icon.svg'
import iconCarb from '../../assets/pictos/carbs-icon.svg'
import iconFat from '../../assets/pictos/fat-icon.svg'
import iconProt from '../../assets/pictos/protein-icon.svg'
import "./dataCount.css"
import PropTypes from "prop-types"

function DataCount({datas}) {
    return (
        <div className='data-box'>
            <div className='box-icon'>
                <img src={iconCal} alt="icon-calories"/>
                    <div className='box-info'>{datas.user?.keyData.calorieCount}kCal
                        <p className='p-data'>Calories</p>
                    </div>
            </div>
            
            <div className='box-icon'>
                <img src={iconProt} alt="icon-Protein"/>
                    <div className='box-info'>{datas.user?.keyData.proteinCount}g
                        <p className='p-data'>Protéines</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconCarb} alt="icon-carb"/>
                    <div className='box-info'>{datas.user?.keyData.carbohydrateCount}g
                        <p className='p-data'>Glucides</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconFat} alt="icon-fat"/>
                    <div className='box-info'>{datas.user?.keyData.lipidCount}g
                        <p className='p-data'>Lipides</p>
                    </div>
            </div>
        </div>
    );
};

export default DataCount;

DataCount.propTypes = {
    datas: PropTypes.shape({
        user: PropTypes.shape({
            keyData: PropTypes.any.isRequired,
            calorieCount: PropTypes.number,
            proteinCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number
        })
    })
}