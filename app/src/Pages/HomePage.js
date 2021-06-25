import {useEffect} from "react";
import Server from "../utils/Server";

function checkAuth() {
    let token = sessionStorage.getItem('jwtToken');
    return (token != null && token !== '');
}

export default function HomePage(props) {

    useEffect(() => {
        Server()
            .get(`/match`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {})
    }, []);

    return (<div>Home</div>);
}
