import styled from "styled-components"
import themes from '../../db/themes.json'
import Item from "./Item/Index"
import { useEffect, useState } from "react"

const StyledSelect = styled.select`
    
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