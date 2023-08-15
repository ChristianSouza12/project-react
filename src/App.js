import  React, { useState, useRef } from "react"
import { Container, H1, Image, Container2, InputLabel, Input, Button, User } from "./styles"
import People from "./assets/conversa.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import axios from "axios"
// JSX = HTML COM JS 
const App = () => {
  const inputName = useRef()
  const inputAge = useRef()

  // const users = []

  const [users, setUsers] = useState([]);

 
  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,

        age: inputAge.current.value
      });
    
    console.log(data)
  
  }

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


  return (
    <Container>

      <Image alt="logo-image" src={People} />

      <Container2>



        <H1>Olá !</H1>

        <InputLabel>Nome</InputLabel>

        <Input ref={inputName} type="text" placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar<img alt="seta" src={Arrow}></img></Button>


        <ul>{
          users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Lata" /></button>
            </User>
          ))


        }
        </ul>
      </Container2>

    </Container>


  )

}

export default App