import styled, { css } from "styled-components";// css함수 임포트 : ${props => ...} 안에서 css 뭉치를 쓰려면 필요
// import styles from "./CustomCheckbox.module.scss";

const CustomCheckboxWrap = styled.div`
    display: inline-block;

    ${props => props.$disabled && css`
        opacity: 0.5;
        pointer-events: none;
    `}
`;

const UiInput = styled.input`
    position: absolute;
    opacity: 0;
    pointer-events: none;// 포인터 이벤트(클릭, 호버)의 대상이 되지 않고 아래에 있는 요소로 이벤트가 전달됨
`;

const Box = styled.span`
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    background: #fff;

    // 인접선택자 방법2-1 : css 뭉탱이로 사용
    ${props => props.$checked && css`
        background: #333;    
    `}

    // 인접선택자 방법2-2 : css 각 속성마다 선언
    background: ${props => props.$checked ? "#333" : "#fff"};
`;

const UiLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    // 인접선택자 방법1 : UiInput이 체크되었을 때, 인접한 Box를 찾아라
    // ${UiInput}:checked + & ${Box} {
    //     background: #333;
    // }
`;



const LabelText = styled.span``;

export default function CustomCheckbox ({
    id,
    label,
    checked,
    onChange,
    disabled,
}){
    // input change 이벤트 처리
    const handleChange = (e) => {
        onChange(e.target.checked);
    }
    return (
        // $diabled처럼 $가 포함된 prop은 css전용 속성 => 부모에게 받은 disabled 상태값이 true면 특정 css 적용해줘
        <CustomCheckboxWrap $disabled={disabled}>
            {/* 실제 상태를 가진 input - 바뀌지 않는 건 type, 그 외엔 props로 받기 */}
            <UiInput type="checkbox" id={id} checked={checked} onChange={handleChange} disabled={disabled} />

            {/* 클릭용 label + 커스텀 UI */}
            <UiLabel htmlFor={id}>
                <Box $checked={checked}></Box>
                <LabelText>{label}</LabelText>
            </UiLabel>
        </CustomCheckboxWrap>
    );
}