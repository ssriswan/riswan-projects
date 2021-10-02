import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function About(props) {
    var Gtotal=0;
    for( var i=0;i<props.call.length;i++)
    {
     Gtotal+= parseInt(props.call[i].total);
    }
    return (
        <div>
            <h1>Your Ordered Items</h1>
            <span>Bill Details</span>

            {props.call.map((templist, index) => {
                return (
                    <div>
                        <h4>
                            <table>
                                {templist.count > 0 ?

                                    <tr>
                                        <td>{templist.name}</td>
                                        <td>{templist.rs}</td>
                                        <td>{templist.count}</td>
                                        <td>{templist.total}</td>
                                    </tr>
                                    : ""}
                            </table>

                        </h4>


                    </div>)
            }
            )}

            <h1>Grand Total:{Gtotal}</h1>
            <Link to="/" ><button type="button">Home Page</button></Link>
        </div>
    );
}

export default About;