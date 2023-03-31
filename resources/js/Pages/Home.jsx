import { Link, Head } from '@inertiajs/react';
import Board from '@/Pages/Home/Board.jsx';

export default function Home({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <h1>hi</h1>
            <Board />
        </>
    );
}
