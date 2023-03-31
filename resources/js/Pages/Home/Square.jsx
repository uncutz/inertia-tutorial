import {useState} from 'react';

export default function Square({value, clickHandler}) {
    return <div className="square" onClick={clickHandler}>{value}</div>;
}
