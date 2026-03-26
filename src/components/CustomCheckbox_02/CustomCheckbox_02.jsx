import styled, { css } from "styled-components";
import Button from "../Button/Button";
// import styles from "./CustomCheckbox_02.module.scss";

// checked가 ture일 때만 추가되는 스타일
const ToggleButton = styled(Button)`
    ${props => props.$checked && css`
        color: #fff;
        background-color: $color-warning;
    `}
`;
const ToggleSpan = styled.span`
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    background: #fff;
`;

export default function CustomCheckbox_02({
    // children,
    label,
    checked,
    onChange,
    ...rest
}){
    // input change 이벤트 처리
    const handleClick = () => {
        onChange(!checked);// 클릭할 때마다 상태 바꿔줘~ 부모에 요청 ==> true/false만 체크하는 건 단일 체크박스(토글)용
        // console.log('클릭???', checked)       
    }
    
    // const classes = [styles.toggleButton, checked && styles.checked].filter(Boolean).join(' ');

    return (
        // 부모에서 Button 컴포넌트에서 사용하는 props들을 사용할 수 있음 : size="large", color="primary"
        <ToggleButton type="button" onClick={handleClick} $checked={checked} {...rest}>
            {/* <ToggleSpan>{children}</ToggleSpan> */}
            <span>{label}</span>
        </ToggleButton>
    );
}
