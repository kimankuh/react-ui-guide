import { useState } from "react"
import Checkbox from "../../components/Checkbox/Checkbox"
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox"
import CustomCheckbox_02 from "../../components/CustomCheckbox_02/CustomCheckbox_02"
import CustomCheckboxGroup from "../../components/CustomCheckboxGroup/CustomCheckboxGroup"

const CheckboxPage = () => {
    // 체크박스의 state를 객체로 관리하기 ==> 약관에서처럼 개별적으로 체크박스를 그려줘야 하는 경우
    const [checked, setChecked] = useState({// 체크박스가 여러개인 경우, 객체 형태로 관리.
        agree: true,// 체크 상태를 state를 통해 알게됨(조건문 사용시)
        agree2: false,
        agree3: false,// 초기값은 여기서 설정
        agree4: true,// 초기값은 여기서 설정
        toggle1: false,// 초기값은 여기서 설정
    });

    // 함수로 state를 추가해서 사용하는 방법(객체 state) ==> 기존 객체를 복사하고, 값이 변경된 key 하나만 바꿔라
    // 어떤 key를 바꿀지 먼저 알아야하기 때문에 고차함수를 사용함. 어떤 key를 바꾼다는 건 객체라는 뜻
    // state key를 반환하는 함수
    // 부모 onChange에서 handleChange함수 실행시 key를 주면, 자식에게 넘어갈 때 실행시킬 수 있는(value를 받는) 함수를 하나 줄게
    function handleChange(key){// state 객체의 key. handleChange의 매개변수key("agree")를 먼저 받고 함수를 하나 더 실행해라
        return function(value) {// state 객체의 value. 실제 버튼 클릭(onChange)시 자식에서 실행되는 함수에서 받는 값(true/false) ==> 자식에서 이 부분. onChange(e.target.checked)
            setChecked(prev => ({// 소괄호를 한 번 더 싸준건 "객체"를 자동 리턴한다는 의미. 이건 함수 블록 아님. 이 checked라는 state는 객체로 관리되니까.
                ...prev,// 1. 기존 객체를 복사하고 
                [key]: value,// 2. 이 추가된 요소랑 합체한다. 대괄호는 객체의 key를 매개변수 값으로 설정하겠다는 뜻. 계산된 프로퍼티 이름(?)
            }));
        };
    }

    const handleChange2 = (key) => (value) => {
        setChecked(prev => ({
            ...prev,
            [key]:value,
        }));
    }

    const checkboxOptions = [
        {value: "html", label: "HTML"},
        {value: "css", label: "CSS"},
        {value: "react", label: "React"},
    ];

    // CustomCheckboxGroup
    // 체크박스의 state를 배열로 관리하기 ==> 체크한 건 배열에 추가하고 해제한 건 배열에서 삭제
    const [checkedArray, setCheckedArray] = useState(['html']);// 초기값

    return (
        <div className="page">
            <h2 className="pageTitle">Checkbox</h2>
            <p className="pText">Checkbox에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                <p className="pText">체크하여 주세요.</p>
                <div className="demo">
                    <Checkbox id="chk01" label="사과" />
                    <Checkbox id="chk02" label="포도" />
                    <Checkbox id="chk03" label="당근" disabled />
                    <Checkbox id="chk04" label="귤" checked disabled />
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Custom Checkbox(Controlled, useState)</h3>
                <p className="pText">React가 state를 관리합니다.</p>
                <div className="demo">
                    <CustomCheckbox id="cstm_chk01" label="동의합니다." onChange={handleChange("agree")} checked={checked.agree} />
                    <CustomCheckbox id="cstm_chk02" label="동의합니다." onChange={handleChange("agree2")} checked={checked.agree2} />
                    <CustomCheckbox id="cstm_chk03" label="동의합니다." onChange={handleChange("agree3")} checked={checked.agree3} disabled />
                    <CustomCheckbox id="cstm_chk04" label="동의합니다." onChange={handleChange("agree4")} checked={checked.agree4} disabled />
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Toggle Button</h3>
                <p className="pText">Button을 활용한 Toggle button</p>
                <div className="demo">
                    <CustomCheckbox_02 id="toggle01" label="선택" onChange={handleChange("toggle1")} checked={checked.toggle1} />
                </div>
                <p>체크상태 : {checked.toggle1 ? "체크됨" : "체크안됨"}</p>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Group Checkbox</h3>
                <p className="pText">Button을 활용한 Group Checkbox</p>
                <div className="demo">
                    <CustomCheckboxGroup options={checkboxOptions} value={checkedArray} onChange={setCheckedArray} />
                </div>
            </div>
        </div>
    )
}

export default CheckboxPage