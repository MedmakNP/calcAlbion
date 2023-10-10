import { useState } from 'react';
import styles from './calculator.module.css'

function Calculator () {
    const [raws, setRaws] = useState(''); // Створюємо стан для зберігання введеного тексту
    const [rawstuff, setRawstuff] = useState('');
    const [percent, setPercent] = useState('');
    const [totalraw, setTotalraw] = useState(0);
    const handleChange = (event) => {
        // Оновлюємо стан при зміні значення поля вводу
        setRaws(event.target.value);
    };
    const handleChange2 = (event) => {
        // Оновлюємо стан при зміні значення поля вводу
        setRawstuff(event.target.value);
    };
    const handleChange3 = (event) => {
        // Оновлюємо стан при зміні значення поля вводу
        setPercent(event.target.value);
    };
        let newTotalraw = 0
    const calculation = () =>{

        newTotalraw = 0
        /*for (let i = 1; i < 10 ;i++) {
            let j = corr * percent ;  
            corr = j
             totalraw = totalraw + j  
             ;
        } */
        let countMaterials = raws
        while(countMaterials > 3){
          let refined = countMaterials / 3
          let remnant = countMaterials * percent
          countMaterials = remnant
          newTotalraw += refined 
          console.log(newTotalraw)
        }
        
        setTotalraw(newTotalraw)

    }
    
    return(
        <div className = {styles.calculator} >
            <div className = {styles.container}>
                <div className = {styles.wrapper}>  
                <input type="text" value={raws} onChange={handleChange}  />
                <input type="text" value={rawstuff} onChange={handleChange2} />
                <input type="text" value={percent} onChange={handleChange3} />
                <button onClick={calculation}>Start</button>
                <div>{totalraw}</div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;