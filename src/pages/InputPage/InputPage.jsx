import { useState } from "react"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

const InputPage = () => {
    const [name, setName] = useState("");

    return (
        <div className="page">
            <h2 className="pageTitle">Input</h2>
            <p className="pText">Input에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Basic</h3>
                <p className="pText">체크하여 주세요.</p>
                <div className="demo">
                    <Input type="text" id="inputName" className="dd" title="이름?" label="이름" value={name} placeholder="이름을 입력하세요" onChange={(e) => {setName(e.target.value)}} />
                    <Button variant="primary">저장</Button>
                    <p>입력값: {name}</p>
                </div>
            </div>
        </div>
    )
}

export default InputPage