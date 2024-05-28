import './normalize.css'
import { useState } from 'react'
import list from './db/list.json'
import styled from 'styled-components'
import Form from './components/Form/Index'
import Sheet from './components/Sheet/Index'

const StyledWrapContainer = styled.div`
    align-items: center;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: 0.5s;
  `

function App() {
  const [itens, setItens] = useState(list)
  const [sheetStyle, setSheetStyle] = useState()

  const addNewitem = (item) => {
    setItens([...itens, item])
  }

  const deletedSelectedItem = (id) => {
    setItens(itens.filter(item => item.id !== id))
  }

  return (
    <StyledWrapContainer>
      <h1>Lista de compras</h1>
      <Form createdItem={item => addNewitem(item)} />
      <Sheet itens={itens} deletedSelectedItem={deletedSelectedItem} />
    </StyledWrapContainer>
  )
}

export default App
