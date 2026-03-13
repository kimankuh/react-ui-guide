import { useState } from "react"
import Input from "../../components/Input/Input"
import InputMixed_01 from "../../components/InputMixed_01/InputMixed_01"
import Button from "../../components/Button/Button"

const InputPage = () => {
    // const [name, setName] = useState("");
    const [inputText, setInputText] = useState("");

    return (
        <div className="page">
            <h2 className="pageTitle">Input</h2>
            <p className="pText">Input에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                {/* <p className="pText">체크하여 주세요.</p> */}
                <div className="demo">
                    <p className="pText">Input</p>
                    <Input type="text" id="basicInput" placeholder="이름을 넣어주세요." /><br/>
                    <p className="pText">Input + label</p>
                    <Input type="text" id="basicInput02" label="직업" placeholder="직업을 넣어주세요." /><br/>
                    <p className="pText">Diabled</p>
                    <Input type="text" id="basicInput03" label="직업" placeholder="직업을 넣어주세요." disabled />

                    {/* <Input type="text" id="inputName" className="dd" title="이름?" label="이름" value={name} placeholder="이름을 입력하세요" onChange={(e) => {setName(e.target.value)}} />
                    <Button variant="primary">저장</Button>
                    <p>입력값: {name}</p> */}
                </div>
            </div>

            {/* with Gemini */}
            <div className="preview">
                <h3 className="previewTitle">Input + Button 조합</h3>
                <p className="pText">내용을 입력해주세요.</p>
                <div className="demo">
                    <InputMixed_01 type="text" id="inputName" className="dd" title="직업" label="직업" value={name} placeholder="이름을 입력하세요" onChange={(e) => {setInputText(e.target.value)}} />
                    <p>입력값: {inputText}</p>
                </div>
            </div>
        </div>
    )
}

export default InputPage