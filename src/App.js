import React, { Component }  from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users=>this.setState({robots: users}));

	}
onsearchChange=(event)=>{
this.setState({searchfield: event.target.value})
}
   render(){
     const filterRobots=this.state.robots.filter(robots =>{
     	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     })

	return(
         <div className='tc'>
           <h1 className='f2'>RoboFriends</h1>
           <SearchBox searchChange={this.onsearchChange}/> 
           <Scroll>
		<CardList robots={filterRobots}/>
		</Scroll>
		</div>

		);
	}
}
export default App;