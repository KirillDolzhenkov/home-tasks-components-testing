import React from 'react';
import styles from './App.module.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className={styles.App}>
            <Rating/>
            <Accordion
                titleValue={'Menu'}
            />
            <OnOff on={true}/>
        </div>
    );
}


export default App;
