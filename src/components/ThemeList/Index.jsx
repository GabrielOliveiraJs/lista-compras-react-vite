import styled from "styled-components"
import themes from '../../db/themes.json'
import Item from "./Item/Index"
import { useEffect, useState } from "react"

const StyledSelect = styled.select`
    background-color: #f2f2f2;
    border: 2px solid var(--color-outline);
    appearance: none;
    padding: 2px 4px;
    font-size: 20px;
    transition: 0.4s ease;
    outline: none;
    cursor: pointer;
    
    &:focus {
        -webkit-box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
        -moz-box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
        box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
    }
`

const ThemeList = () => {
    const [themeId, setThemeId] = useState(1)
    const [className, setClassName] = useState('theme-main')
    const html = document.querySelector('html')

    useEffect(() => {
        const selectedTheme = themes.filter((theme) => {
            return theme.id === Number(themeId)
        })
        setClassName(selectedTheme[0].className)
        html.classList.toggle(className)
    }, [themeId, className])

    return (
        <StyledSelect value={themeId} onChange={e => setThemeId(e.target.value)}>
            {themes.map((theme) => (
                <Item key={theme.id} theme={theme} />
            ))}
        </StyledSelect>
    )
}

export default ThemeList