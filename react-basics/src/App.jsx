import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Header from './Header'
import FirstComp from './FirstComp'
import Login, { Profile, Setting, userKey } from './UserComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>Code with Nishant</h1>
      <h2>Hello, React 19 </h2>     
      <User/> 

      <h1>Counter Value: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count by 1</button>


      <br></br>
      {/* //Adding First Component...*/}
      <FirstComp/>

      {/* Understanding export and import here.. */}
      <Login/>
      <Profile/>
      <Setting/>
      <h3>{userKey}</h3>
    </>
  )
}

export default App


{/* 
  This is core javascript code not react...
  Component has to be start with capital letter to understand the difference between tags and component..


  function Apple(){
      return(
        <h1>Apple</h1>
        <h1>Banana</h1> // we cannot use this.. it starts throwing error because it need one wrapper..  

        //example to run the above one..
        <div>
          <h1>Apple</h1>
          <h1>Banana</h1> //now it will run..
        </div>
      )
    } 
    
    export default Apple
    */}