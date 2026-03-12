import React from "react";
import styles from "./Button.module.scss";

export default function Button({
    children, // 버튼에 들어갈 텍스트. 'children'은 React에서 약속된 prop명. 문자열, jsx 둘 다 가능. 닫는 태그가 있는 요소에는 children이 자동제공됨. 태그 사이에 들어가는 텍스트에 모두 해당.
    size = "", // 버튼 크기(sm, md, lg)
    color = "primary", // 색상(primary, secondary 등)
    onClick, // 클릭 이벤트
    type="default",
    disabled = false,
    className=""
}){
    return (
    <button type="button" className={`${styles.btn} ${styles[type]} ${styles[size]} ${styles[color]}`} onClick={onClick} disabled={disabled}>{children}</button>
)}

