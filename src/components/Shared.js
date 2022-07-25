import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container =styled.div`
posiiton: relative;

`
export default function Shared() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}