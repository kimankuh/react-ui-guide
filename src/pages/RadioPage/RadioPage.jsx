import { useState, useEffect } from "react"
import Radio from "../../components/Radio/Radio"
import RadioGroup from "../../components/RadioGroup/RadioGroup"

const RadioPage = () => {
    // CustomCheckboxGroup
        // 체크박스의 state를 배열로 관리하기 ==> 체크한 건 배열에 추가하고 해제한 건 배열에서 삭제
        const [checkedArray, setCheckedArray] = useState(['html']);// 초기값
    
        const [radioGroup, setRadioGroup] = useState('us');
    
        // 콘솔 찍어보자 => radioGroup 값이 바뀔 때만(추천)
        // 의존성 배열이 바뀔 때만 실행
        // 배열이 비어있으면 컴포넌트가 처음 마운트 될 때만 실행(API 처음 호출할 때 많이 씀)
        // 배열이 아예 없다면. 렌더마다 실행(무한루프 위험)
        useEffect(() => {
            console.log('radioGroup : ', radioGroup);
    
            // 콘솔 찍기
            // API 호출
            // DOM 직접 접근
            // 이벤트 등록
            // localStorage 사용
        }, [radioGroup]);
        
        // 콘솔 찍어보자 => 렌더링마다(비추)
        // console.log('radioGroup : ', radioGroup);

    return (
        <div className="page">
            <h2 className="pageTitle">Input</h2>
            <p className="pText">Input에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                <p className="pText">체크하여 주세요.</p>
                <div className="demo">
                    <Radio id="radio_01" name="originRadio" label="HTML" />
                    <Radio id="radio_02" name="originRadio" label="CSS" />
                    <Radio id="radio_03" name="originRadio" label="JS" />
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                <p className="pText">체크하여 주세요.</p>
                <div className="demo">
                    <RadioGroup name="RadioGroup" options={contryOptions} value={radioGroup} onChange={setRadioGroup} />
                    
                    {/* 상태를 기준으로 UI 제어 가능?? */}
                    <button onClick={() => console.log('radioGroup : ', radioGroup)}>제출</button>
                    <p>선택된 값: {radioGroup}</p>
                </div>
            </div>
        </div>
    )
}

export default RadioPage