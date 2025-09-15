import React, { Component } from "react";

import Counter from "./counter";

class Counter extends Component {
    render() {
        const { onReset, onIncrement, onDelete, onDecrement, counters, onRestart } = this.props;

        return (
            <div>
                <di className="row">
                    <div className="">
                        <button 
                        className="btn btn-success m-2"
                        onClick={onReset}
                        disabled={counters.length === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-refersh" aria-hidden="true" />
                            
                        </button>
                        <button 
                        className="btn btn-primary m-5"
                        onClick={onRestart}
                        disabled={counters.length !== 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-recycle" aira-hidden="true" />
                            

                        </button>
                    </div>
                </div>
                {counters.map((counter) => (
                    key={counter.id}
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                    />

                ))}
            </div>
        );
    }


}

export default Counters;