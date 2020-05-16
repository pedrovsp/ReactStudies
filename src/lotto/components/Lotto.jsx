import React, { useState } from 'react';
import generateLottoNumbers from '../lotto';
import './Lotto.scss';
import { Button, ButtonTypes } from '../../components/Button/Button';

export default (props) => {
    let [numberComponents, setNumberComponents] = useState([].fill(props.quantity || 10));

    function generateNumbers() {
        let lottoNumbers = generateLottoNumbers(props.quantity);
        let arrayReturn = lottoNumbers.map((num, i) => {
            return <div className={`Number ${i % 2 > 0 ? `Even` : `Odd`}`}>{num}</div>
        });
        return arrayReturn;
    }

    return (
        <React.Fragment>
            <div className='Box'>
                <div className='Numbers'>
                    {
                        [...numberComponents]
                    }
                </div>
                <Button type={ButtonTypes.Square} text="Generate" function={_ => setNumberComponents(generateNumbers())}></Button>
            </div>
        </React.Fragment>
    )
}