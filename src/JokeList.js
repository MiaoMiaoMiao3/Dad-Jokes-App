import React, {Component} from 'react';
import axios from 'axios';
class JokeList extends Component{
    constructor(props){
        super(props);
        this.state ={user:[]}
    }
    async componentDidMount() {
        let response = await axios.get(
            'https://icanhazdadjoke.com/',{headers: {Accept: "application/json"}});
        let user = response.data
        this.setState({ user });
        console.log(user)
    }

    render(){

        return(
            <div>This is from the jokelist!</div>
        )
    }
}

export default JokeList