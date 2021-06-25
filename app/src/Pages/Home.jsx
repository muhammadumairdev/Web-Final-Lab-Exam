import {useEffect} from "react";
import Server from "../main/Server";

function checkAuth() {
    let token = sessionStorage.getItem('jwtToken');
    return (token != null && token !== '');
}
import React from 'react'

const Home = (props) => {
    useEffect(() => {
        Server()
            .get(`/match`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {})
    }, []);
    return (
        <div>
            HomePage
        </div>
    )
}

export default Home

