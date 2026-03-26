import styled from "styled-components"
// import styles from './Footer.module.scss';

const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: #aaa;
    
    & p {
        font-size:13px;
        color: #333;
    }
`;

const Footer = ({}) => {
    return (
        <FooterWrap>
            <p>Footer</p>
        </FooterWrap>
    )
}

export default Footer