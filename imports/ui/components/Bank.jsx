import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Bank extends Component {

    render() {
        return (<>
            <h2>Choose from the following banks</h2>
            <div className="rows d-flex" style={{ textAlign: "center", marginTop: "100px" }}>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "200px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/fnb.png"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "200px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/ecobank.jpeg"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "200px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/zanaco.jpeg"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "200px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/investrust.png"></img>

                </div>
            </div>
        </>)
    };
}