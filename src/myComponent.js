import React from 'react';

class myComponent extends React.Component{
    componentDidMount(){
        const apiUrl= 'https://spaceflightnewsapi.net/api/v2/articles';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log("This  is, ", data));

    }
    render(){
        return (
        <h1>my components is done 'console'</h1>
        )
    }
}
export default myComponent;