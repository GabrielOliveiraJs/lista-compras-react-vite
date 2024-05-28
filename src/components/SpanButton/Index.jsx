import styled from "styled-components"

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    transition: 0.4s;
    border: none;
    background-color: transparent;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        color: ${({type}) => type === 'setQuantity' ? 'var(--color-background-btn-hover)' : '#ff0011'}
    }
`

const SpanButton = ({ children, type, onClick }) => {
    return (
        <StyledSpan type={type} onClick={onClick}>
            {children}
        </StyledSpan>
    )
}

export default SpanButton