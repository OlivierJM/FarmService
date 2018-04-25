import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Supplier extends Component {

    render() {
        return (<>
            <h2>Choose from a list of suppliers</h2>
            <div className="rows d-flex" style={{ textAlign: "center", marginTop: "100px" }}>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "220px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/johndeere.jpeg"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "220px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/martin.png"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "220px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/newholland.jpg"></img>

                </div>
                <div style={{ marginRight: "50px", display: "inline" }}>
                    <img style={{ width: "220px", height: "200px" }}
                        src="https://storage.googleapis.com/ubuntu-meal-image-storage.appspot.com/ZedMemesApp/tractorporvider.png"></img>

                </div>
            </div>
        </>)
    };
}