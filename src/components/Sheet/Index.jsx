import styled from 'styled-components'
import SheetItem from './SheetItem/Index'

const StyledSheet = styled.ul`
        width: 100%;
        height: 600px;
        max-width: 600px;
        background-color: var(--color-sheet);
        margin: 10px 0;
        overflow-y: scroll;
        padding: 20px;
        border-radius: 20px;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: var(--color-background-btn);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-text-btn);
            border-radius: 20px;
        }
    `

const Sheet = ({ itens, deletedSelectedItem }) => {

    const deleteItem = (id) => {
        deletedSelectedItem(id)
    }

    return (
        <StyledSheet>
            {
                itens.map(item =>
                    <SheetItem
                        key={item.id}
                        id={item.id}
                        text={item.itemName}
                        quantity={item.quantity}
                        deleteItem={deleteItem}
                    />
                )
            }
        </StyledSheet>
    )
}

export default Sheet