import Square from '@/Pages/Home/Square.jsx';
import {useState} from 'react';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i)
    {
        const nextSquares = squares.slice();
        nextSquares[i]    = 'X';
        setSquares(nextSquares);
        console.log(nextSquares);
    }

    return <div className="board">
        <div className="row">
            <Square value={squares[0]} clickHandler={() => handleClick(0)}/>
            <Square value={squares[1]} clickHandler={() => handleClick(1)}/>
            <Square value={squares[2]} clickHandler={() => handleClick(2)}/>
        </div>
        <div className="row">
            <Square value={squares[3]} clickHandler={() => handleClick(3)}/>
            <Square value={squares[4]} clickHandler={() => handleClick(4)}/>
            <Square value={squares[5]} clickHandler={() => handleClick(5)}/>
        </div>
        <div className="row">
            <Square value={squares[6]} clickHandler={() => handleClick(6)}/>
            <Square value={squares[7]} clickHandler={() => handleClick(7)}/>
            <Square value={squares[8]} clickHandler={() => handleClick(8)}/>
        </div>
    </div>;
}
