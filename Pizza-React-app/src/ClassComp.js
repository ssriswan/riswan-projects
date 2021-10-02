import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


// import img from './images/img1.jpg'

export class ClassComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pizzalist: props.pizz
        };

    }
    onTrigger = (event) => {
        this.props.parentcall(this.state.pizzalist);
        // event.preventDefault();
    }
    inc(index) {

        let pizzalistnew = [...this.state.pizzalist];

        let pizza = this.state.pizzalist[index];
        if (pizza['count'] < 10) {
            pizza['count'] = parseInt(pizza['count']) + 1;
            pizza['total'] = parseInt(pizza['count']) * parseInt(pizza['rs']);
        }

        pizzalistnew[index] = pizza;

        this.setState({ pizzalist: pizzalistnew });
    }
    dec(index) {

        let pizzavalue = [...this.state.pizzalist];
        let tempvalue = this.state.pizzalist[index];
        if (tempvalue['count'] > 0) {
            tempvalue['count'] = tempvalue['count'] - 1;
            tempvalue['total'] = parseInt(tempvalue['total']) - parseInt(tempvalue['rs'])
        }
        pizzavalue[index] = tempvalue;
        this.setState({ pizzalist: pizzavalue });


    }

    render() {

        return (
            <div>

                <marquee style={{ width: "100%", behavior: "alternate", direction: "right", bgcolor: "red" }} >

                    <h1>WELCOME TO ABC PIZZA HUT</h1></marquee>
                {this.state.pizzalist.map((pizza, index) => {
                    return (
                        <div style={{ border: "3px solid red", width: "213px", height: "229px", "border-radius": " 20px", "margin-top": "20px", float: "left", overflow: "hidden", "margin-left": " 10px" }} >
                            <img src={require("./images/img1.jpg").default} className="imgsize" />
                            <h3 style={{
                                "margin-top": " 2px",
                                "display": "inline"
                            }}>{pizza.name}</h3>
                            <button style={{
                                "margin-left": " 138px",
                                "margin-top": " 12px"
                            }}
                                onClick={() => this.inc(index)}>+</button> <p style={{ display: "inline", "margin-top": "-21px" }}>{pizza.count}</p><button style={{ "margin-left": "5px" }} onClick={() => this.dec(index)}>-</button>
                            <h3 style={{

                                "margin-top": " -20px"
                            }}>RS:<span>{pizza.rs}</span></h3>
                            <h3 style={{
                                "margin-left": "49px",
                                "margin-top": " -6px"
                            }}>TOTAL: <span>{pizza.total}</span> Rs</h3>

                        </div>

                    )

                })}

            <div     style={{ "margin-top": "290px",   }}>    <Link to="/about"><button onClick={this.onTrigger} type="button" >Cart page</button></Link> </div >
            </div >

        );
    }
}