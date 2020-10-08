import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100%;
    background-color:${props=>props.bgcolor?props.bgcolor : "#DEFECD"};
    background:${props=>props.bgimage?props.bgimage : ""};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height:10px;
`;

const Content = ({children, bgcolor, bgimage}) =>{
    return <Container bgcolor={bgcolor} bgimage={bgimage}>
        {children}
    </Container>
}

Content.defaultProps = {
    bgcolor:"#DEFECD",
    bgimage: "#DDD"
}

export default Content