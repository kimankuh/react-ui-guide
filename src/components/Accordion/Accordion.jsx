import { useState } from "react";
import styled from "styled-components";
// import styles from './Accordion.module.scss';

const AccordionWrap = styled.div``;
const AccordionItem = styled.div``;
const AccordionHeader = styled.button`
    position:relative;
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;

    &:before {
        content:'';
        position: absolute;
        top: 50%;
        right:10px;
        width: 15px;
        height: 2px;
        background-color: #999;
    }
    &:after {
        content:'';
        position: absolute;
        top: 50%;
        right:10px;
        width: 15px;
        height: 2px;
        transform: rotate(-90deg);
        background-color: #999;
    }
    &[aria-expanded="true"]:after {
        display: none;
    }
`;
const AccordionContent = styled.div``;

export default function Accordion ({ items }){
    // 열려있는 index만 저장
    const [openIndexes, setOpenIndexes] = useState([]);

    // title 클릭시 패널들의 열림/닫힘    
    const toggle = (index) => {// 배열에 추가할 index
        // 클릭하면 열려있는 패널들의 상태를 업데이트 시켜야함
        setOpenIndexes((prev) => {
            // 상태 업테이트를 어떻게 시킬거냐면. 조건이 있어
            if(prev.includes(index)){// 클릭한 패널의 index가 이미 있으면 true
                return prev.filter((i) => i !== index);// filter는 함수 테스트를 통과한 요소만 필터링 => 배열에서 제거(index랑 다른 것만 배열에 넣기)
            }
            // false인 경우는 이거 리턴
            return [...prev, index];
        });

    }
    return (
        <AccordionWrap>
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);// state 배열에 index와 같은 값이 있다면 true

                return (
                    <AccordionItem key={item.id}>
                        <AccordionHeader type="button" id={`accordion-${item.id}`} aria-expanded={isOpen} onClick={() => toggle(index)}>{item.title}</AccordionHeader>
                        {/* onClick={toggle(index)} : 클릭할 때 실행되는 것이 아니라 렌더링될 때 바로 실행됨. 그래서 undefined가 반환되므로 이땐 화살표 함수 형태로 전달한다. */}

                        <AccordionContent id={`panel-${item.id}`} aria-labelledby={`accordion-${item.id}`} hidden={!isOpen}>{item.content}</AccordionContent>
                    </AccordionItem>
                )
            })}
        </AccordionWrap>
    )
}