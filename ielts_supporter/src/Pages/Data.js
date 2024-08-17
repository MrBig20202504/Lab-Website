import React from "react";

class Check extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an api in react</h3>
            </div>
        );
    }
}
 
export default Check;