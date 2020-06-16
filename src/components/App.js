import React from 'react';
import Header from './Header';
import List from './List';
import AddList from './AddList';
import Welcome from './Welcome';

class App extends React.Component{
    constructor(props){
        super(props);
        this.getName = this.getName.bind(this);
        this.getListName = this.getListName.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.state = {
            display: false,
            name: '',
            listNames: []
        };
    }
    componentDidMount(){
        this.setState(() => {
            return {
                display: true
            };
        })
    }
    getName(name){
        this.setState(() => {
            return {
                display: false,
                name
            };
        })
    }
    getListName(name){
        this.setState((prevState) => {
            return {
                listNames: prevState.listNames.concat(name)
            };
        })
    }
    deleteList(name){
        this.setState((prevState) => {
            return {
                listNames: prevState.listNames.filter((list) => {
                    return list!==name;
                })
            };
        });
    }
    render(){
        return (
            <React.Fragment>
                {(this.state.display)?<Welcome getName={this.getName}/>:
                <div>
                <Header name={this.state.name}/>
                <AddList getListName={this.getListName}/>
                {this.state.listNames.length===0?<p className="some-text">Add some lists!</p>:
                this.state.listNames.map((listname) => {
                    return <List key={listname} listName={listname} deleteList={this.deleteList} />;
                })}
                </div>
                }
            </React.Fragment>
        );
    }
}

export default App;