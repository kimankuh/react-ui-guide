import Input from "../Input/Input"
import styled from "styled-components"
// import styles from "./InputPhone.module.scss"

const InputPhoneWrap = styled.div`
    display: flex;
    align-items: center;
`;

const LabelText = styled.label`
    padding-right: 20px;
    min-width: 90px;
    font-size: 14px;
    font-weight:bold;
    color: $color-gray-700;
`;

const PhoneWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Dash = styled.span`
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    width: 10px;
    text-align: center;
`;


const InputPhone = ({id, label}) => {
    return (
        <InputPhoneWrap>
            {label && <LabelText htmlFor={id}>{label}</LabelText>}
            <PhoneWrap>
                <Input id={id} title="전화번호 앞 세자리" placeholder="" />
                <Dash>-</Dash>
                <Input title="전화번호 가운데 세자리" placeholder="" />
                <Dash>-</Dash>
                <Input title="전화번호 뒤 세자리" placeholder="" />
            </PhoneWrap>            
        </InputPhoneWrap>
    )
}

export default InputPhone