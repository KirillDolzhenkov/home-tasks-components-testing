import React, {useState} from 'react';
import styles from './App.module.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [on, setOn] = useState(false);

    const setOnOff = (value: boolean) => {
        setOn(value);
    }

    return (
        <div className={styles.App}>
            <Rating/>
            <Accordion
                titleValue={'Menu'}

            />
            <OnOff
                on={on}
                setOnOff={setOnOff}
            />
        </div>
    );
}


export default App;
