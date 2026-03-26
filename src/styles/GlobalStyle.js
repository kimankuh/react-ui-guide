import styled, { createGlobalStyle, css } from "styled-components";// styled-components에서 제공
import reset from "styled-reset";// 이 패키지의 정체는 머지?

// 브라우저 전체(body, html, *)에 영향을 주는 전역 스타일
const GlobalStyle = createGlobalStyle`
    ${reset} // 기본 브라우저 스타일 초기화

    // 커스텀 전역 스타일, 전역에 사용할 폰트
    // 클래스 기반
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Pretendard', sans-serif;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font: inherit; // 버튼에서도 부모 폰트 상속받기
    }
`;

// 변수기반(component기반) 관리 방식
// 1. 스타일 뭉치(Mixin) 정의 - 소문자로 시작. 다른 스타일컴포넌트의 내부에서 쓸 용도. 변수처럼 => ${errorTextStyle}
export const errorTextStyle = css`
`;

// 2. 컴포넌트로 정의 - 대문자로 시작 jsx에서 바로 선언해서 쓸 용도
export const UiError = styled.p`
    ${errorTextStyle}
    margin-top: 4px;
    padding-left: 90px;
    width: 100%;
    color: $color-danger;
    font-size: 12px;
`;



export default GlobalStyle;