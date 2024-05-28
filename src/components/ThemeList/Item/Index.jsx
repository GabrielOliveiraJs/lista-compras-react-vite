import styled from "styled-components"

const StyledOption = styled.option`

`

const Item = ({ theme }) => {
    return (
        <StyledOption value={theme.id}>
                {theme.name}
        </StyledOption>
    )
}

export default Item