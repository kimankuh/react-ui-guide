import React from "react";
import styled, { css } from "styled-components";
// import styles from "./Button.module.scss";

const sizeStyles = {
    small : css`padding: 5px 5px;min-width:40px;font-size: 12px;`,
    medium : css`min-width:60px;font-size: 14px;`,
    large : css`font-size: 16px;padding: 14px 20px;`,
}

const colorStyles = {
    primary : css`background: $color-primary;color: #fff;`,
    secondary : css` background: $color-secondary;color: #fff;`,
}

const Btn = styled.button`
    padding: 10px 16px;    
    border-radius: 4px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${props => sizeStyles[props.$size || 'medium']}
    ${props => colorStyles[props.$color || 'primary']}
`;

export default function Button({
    children, // 버튼에 들어갈 텍스트. 'children'은 React에서 약속된 prop명. 문자열, jsx 둘 다 가능. 닫는 태그가 있는 요소에는 children이 자동제공됨. 태그 사이에 들어가는 텍스트에 모두 해당.
    size = "medium",
    color = "primary",
    title,
    onClick, // 클릭 이벤트
    type="button",
    disabled = false,
    // className,
    ...rest
}){
    // const classes = [styles.btn, styles[type], styles[size], styles[color]].filter(Boolean).join(" ");
    return (
    <Btn type={type} title={title} onClick={onClick} disabled={disabled} $size={size} $color={color} {...rest}>{children}</Btn>
)} 

