import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class BuyTractor extends Component {

    changeRoute = (e, path) => {
        console.log(path)
        switch (path) {
            case 'delivery_task':
                FlowRouter.go(`/${path}`);
                break;
            default:
                FlowRouter.go(`/${path}`);
                break;
        }
    }


    render() {
        return (<>
            <h2>How would you like to acquire a tractor and other farming equipment</h2>
            <div className="rows d-flex" style={{ textAlign: "center" }}>
                <div style={{ borderStyle: "solid", width: "500px", height: "500px", marginRight: "50px" }}>
                    <div style={{ height: "150px", marign: "0" }}><h4>Buy or Hire Directly through a supplier</h4></div><br></br>
                    <button className="btn btn-lg " style={{ marginTop: "100px" }}
                        onClick={e => this.changeRoute(e, 'supplier')}
                    >Proceed</button></div>
                <div style={{ borderStyle: "solid", width: "500px", height: "500px" }} >
                    <div style={{ height: "150px", marign: "0" }}><h4>Buy or Hire through a Bank</h4></div><br></br>
                    <button className="btn btn-lg " style={{ marginTop: "100px" }}
                        onClick={e => this.changeRoute(e, 'bank')}
                    >Proceed</button></div>
            </div>
        </>)
    };
}