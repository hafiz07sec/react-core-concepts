import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
function App() {

  const nayoks = ['Anwar','Salman', 'Washim Jafor', 'Faruk', 'Manna', 'Alamgir','Bappi bro']
 
const products = [
  {name:'Photoshop', price:'$90.99'},
  {name:'Illustrator', price:'$60.99'},
  {name:'Premium EL', price:'$249.99'},
  {name:'PDF reader', price:'$6.99'}

]

const nayokNames = nayoks.map(nayok => nayok)
//console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          I am a react Person.
        </p>
        <Counter></Counter>
        <Users></Users>
        <Posts></Posts>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
          
        }
        {
          products.map(product=> <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Products product={pd}></Products>)
      }

      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);


  return(
    <div>
      <h1>Count: {count}</h1>
      <button  onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}
function Posts() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => setPosts(data))
  },[])

  return(
    <div>
        <h1>Dynamic Posts:{posts.length}</h1>
        <ul>
          {
            posts.map(post => <li>{post.title}</li>)
          }
        </ul>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([] )
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>

    </div>
  )
}


function Products(props) {
  const productsStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'250px',
    float:'left'
  }
 const{name,price}= props.product;
  return(
    <div style={productsStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    
    </div>
  )
}



function Person(props) {
const personStyle={
  border:'2px solid red',
  margin: '10px'
}


  return (
  <div style={personStyle} >
    <h1>Name: {props.nayok}</h1>
    <h3>Hero of the year</h3>
  </div>
  )
  
}

export default App;
