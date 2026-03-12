import { useState } from "react"
import Textarea from "../../components/Textarea/Textarea";

const TextareaPage = () => {
    const [desc, setDesc] = useState("");

    return (
        <div className="page">
            <h2 className="pageTitle">Textarea</h2>
            <p className="pText">Textarea에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Textarea</h3>
                <p className="pText">내용을 작성해 주세요.</p>
                <div className="demo">
                    <Textarea id="textareaName" label="설명" value={desc} onChange={(e) => {setDesc(e.target.value)}} />
                </div>
            </div>
        </div>
    )
}

export default TextareaPage