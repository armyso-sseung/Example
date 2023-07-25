import { Component } from "react";
import Square from "./Square";


export class Board extends Component {
    // renderSquare(i) {
    //     return <Square />
    // }

    render () {
        return (
            <>
                <div className="status">Next Player: X, O</div>
                <div className="board-row"></div>
                <div className="board-row"></div>
                <div className="board-row"></div>
            </>
        )
    }
}