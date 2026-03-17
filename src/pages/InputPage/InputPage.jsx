import { useState } from "react"
import Input from "../../components/Input/Input"
import InputMixed_01 from "../../components/InputMixed_01/InputMixed_01"
import InputPhone from "../../components/InputPhone/InputPhone"
// import Button from "../../components/Button/Button"

const InputPage = () => {
    // const [name, setName] = useState("");
    const [inputText, setInputText] = useState("");
    const inputPhoneProps = {
        type: "text",
        id: "inputMixed01",
        label: "주소",
        value: inputText,
        placeholder: "주소를 입력해 주세요",
    }
    const inputAdressProps = {
        type: "text",
        id: "inputMixed01",
        label: "주소",
        value: inputText,
        placeholder: "주소를 입력해 주세요",
        onChange: (e) => {setInputText(e.target.value)}
    }

    return (
        <div className="page">
            <h2 className="pageTitle">Input</h2>
            <p className="pText">Input에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                <div className="demo">
                    <p className="pText">Input</p>
                    <Input type="text" id="basicInput" placeholder="이름을 입력해 주세요" title="이름" /><br/>
                    <p className="pText">Input + label</p>
                    <Input type="text" id="basicInput02" label="나이" placeholder="나이를 입력해 주세요" /><br/>
                    <InputPhone label="전화번호" inputProps={inputPhoneProps} /><br/>
                    <p className="pText">Error</p>
                    <Input type="text" id="basicInput04" label="직업" placeholder="직업을 입력해 주세요" error="직업을 입력해 주세요" /><br/>
                    <p className="pText">Disabled</p>
                    <Input type="text" id="basicInput05" label="취미" placeholder="취미를 입력해 주세요" disabled />
                </div>
            </div>

            {/* with Gemini */}
            <div className="preview">
                <h3 className="previewTitle">Input + Button 조합</h3>
                <p className="pText">내용을 입력해주세요.</p>
                <div className="demo">
                    <InputMixed_01 id="inputMixedWrap" buttonText="저장" buttonSize="sm" inputProps={inputAdressProps} />
                    <p>입력값: {inputText}</p>{/* 리액트가 값을 관리하면 state를 활용할 수 있음 */}
                </div>
            </div>
        </div>
    )
}

export default InputPage