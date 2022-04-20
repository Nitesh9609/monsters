// Importing Child Components Search, CardList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';

// App Styles
import './App.css'
import React from 'react'


// Parent Component
class App extends React.Component{
 /**Step 1 */
 constructor(){
  
    super()
    this.state = {
      users: [],
      searchValue:''
    }
  }
  /**Step 4 */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    /** return result => result.json() => Array[] */
    .then(result =>result.json())
    /** return Array[] => this.state = {users:monsters} **/
    .then(monsters => this.setState(
          {
            users:monsters
          }
        )
    )
  }

  // for Onchange Function in Search
  handleOnChange = (event) => {
    this.setState({searchValue:event.target.value})
  }
  
  render(){
    const {users,searchValue } = this.state
    const filteredMonsters = users.filter(
      monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()) || monster.email.toLowerCase().includes(searchValue.toLowerCase())
    )
    
    
    /**Step 3 */
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing = {this.handleOnChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App

