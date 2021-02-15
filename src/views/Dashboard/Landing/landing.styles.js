import styled from "styled-components";
import { colors} from "../../../styles";


export const AddFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:  ${({ type }) =>  type || ''} ;
    margin:  ${({ space }) =>  space || 0};
    & div.mr-10 {
       margin-right: 50px
    }

`;


export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto
`

export const TopText = styled.p`
    font-size: ${({ size }) =>  size? size: '24px'}; 
    color: ${({ color }) =>  color? color: colors.color1} ;
    letter-spacing: 0;
    margin: 0;
    font-weight: ${({ bold }) =>  bold? 'bold': 'normal'}
`;

export const DescText = styled.p`
    font-size: ${({ size }) =>  size? size: '16px'};;
    color: ${({ color }) =>  color? color: colors.color1}; 
    letter-spacing: 0;
    margin: 0;
    font-weight: normal;
    a {
        color: ${colors.color2};
        text-decoration: underline;
        }
`

export const AddButton = styled.button`
    background: ${colors.color2};
    color: ${colors.white};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
    border-radius: 4px;
    height: 44px;
    width: 171px;
    border: none;
    margin: 10px 0
`

export const AccountContainer = styled.div`
    max-width: 468px;
    background: #FFFFFF;
    box-shadow: 0 0 1px 0 rgba(131,151,171,0.16), 0 4px 6px 0 rgba(131,151,171,0.16);
    border-radius: 6px;
    height: 170px;
    width: 100%;
    font-size: 36px;
    color: #1C1335;
    text-transform: uppercase;
    padding: 13px 27px;
    position: relative;
    margin: 10px 0;
`

export const Amount = styled.div`
 font-size: 36px; 
 color: ${colors.color1};
 position: absolute;
 bottom: 7px;
 & span {
    font-size: 24px;  
 }
    
`

export const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    border-radius: 0.25rem;
`

export const ListGroupItem = styled.div`
    position: relative;
    display: block;
    padding: 0.75rem 0;
    border: 1px solid;
    background-color: inherit;
    border: none;
    display: flex;
    & div.first {
        flex: 1;
        display: flex;
        & span {
            color:#8397AB
        } 
    }
    & div.second {
        flex: 1; 
    }
`

export const IconBox = styled.span`
 border-radius: 4px;
 height: 24px;
 width: 24px;
 background-color: ${({ color }) =>  color}; 
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 12px
 
`

export const ProgressTitle = styled.span
`font-weight: bold; 
font-size: 14px; 
color: ${colors.color1};
letter-spacing: 0;`


export const CardHeader = styled.header`
padding: 32px 24px ;
margin-bottom: 0;
background-color: #fff;
font-weight: bold;
color: ${colors.color1};
font-size: 18px

`

export const Card  = styled.div`
   position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    margin-bottom: 1.5rem;
    word-wrap: break-word;
    background-clip: border-box;
    background: #FFFFFF;
    box-shadow: 0 0 1px 0 rgba(131,151,171,0.16), 0 4px 6px 0 rgba(131,151,171,0.16);
    border-radius: 6px 0 6px 6px 6px;`


    export const CardBody  = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    `