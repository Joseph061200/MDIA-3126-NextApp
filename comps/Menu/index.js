import React, {useState, useEffect} from'react';
import styled from 'styled-components';

const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
`;

const DropDownMenu = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    overflow:hidden;

    cursor:pointer;
    background-color:#FFF;
    transition: background-color 0.5s;
    &:hover{
        background-color: #DDD;
    }
`;

const ExpandImg = styled.img`
    transform:${props=>props.expanded ? "rotate(-180deg)" : "none"};
    transition: transform 0.5s;
`;

const DropDownBox = styled.div`
    display:flex;
    width:100%;
    padding: 10px 20px;
    div {
        margin:0 10px;
    }
`;

const Expand = styled.div`
    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    max-height:${props=>props.expanded ? "auto" : "0px"};
    font-size:${props=>props.expanded ? "18px" : "0px"};
    
    opacity:${props=>props.expanded ? 1 : 0};
    transition:opacity 0.5s, height 0.5s;

    flex-direction:column;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    
    /* Sidebar Shadow */
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    margin-top:10px;
    div {
        margin:${props=>props.expanded ? "5px 0" : "0"};
        padding:${props=>props.expanded ? "10px 15px" : "0px"};
        cursor:pointer;
        &:hover{
            background-color:#DDD;

        }
    }
`;

const Menu = ({expand, onMenuSelect})=>{
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand);
    },[expand]);

    return<Container>
        <DropDownMenu onClick={()=>{
            setExpanded(!expanded);
            }}>
            <DropDownBox>
                <div><img src="/user.png"></img></div>
                <div>jondoe@bcit.ca</div>
                <div><ExpandImg expanded={expanded} src="/expand.png"></ExpandImg></div>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded={expanded}>
            <div onClick={()=>{
                onMenuSelect("bg");
            }}>Change BG Color</div>
            <div onClick={()=>{
                onMenuSelect("img");
            }}>Change BG Image</div>
            <div onClick={()=>{
                onMenuSelect("help");
            }}>Help</div>
        </Expand>
    </Container>
}

Menu.defaultProps = {
    expand:false
}

export default Menu;