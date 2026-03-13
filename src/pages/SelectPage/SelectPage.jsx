import { useState } from 'react'
import Select from '../../components/Select/Select'
import CustomSelect from '../../components/CustomSelect/CustomSelect';

const SelectPage = () => {
    const [fruit, setFruit] = useState("");
    const [contry, setContry] = useState("");
    const contryOptions = [
        {id:1, value:"kr", label: "한국"},
        {id:2, value:"us", label: "미국"},
        {id:3, value:"jp", label: "일본"},
        {id:4, value:"uk", label: "영국"},
    ];
    const selectedOption = contryOptions.find(opt => opt.value === contry);// opt.value가 contry랑 같은 첫번째 요소를 찾아라

    return (
        <div className="page">
            <h2 className="pageTitle">Select</h2>
            <p className="pText">Select에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Select</h3>
                <p className="pText">선택하여 주세요.</p>
                <div className="demo">
                    <Select id="selectID" label="과일 선택" value={fruit} onChange={(e) => {setFruit(e.target.value)
                    // console.log(e.target.value)
                    }} error={!fruit && "과일을 선택하세요!!!"} />
                    <p>선택값: {fruit}</p>
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Custom Select</h3>
                <p className="pText">선택하여 주세요.</p>
                <div className="demo">
                    <CustomSelect id="customSelectID" label="국가 선택" value={contry} options={contryOptions} placeholder="선택하세요~!!" onChange={setContry}
                    // onChange={(e) => {setContry(e.target.value)} => 이벤트를 넘기는 case. 커스텀 폼요소에선 비추
                    // console.log(e.target.value)
                    error={!contry && "[에러메세지]국가를 선택하세요!!!"} />
                    <p>선택값: {selectedOption ? selectedOption.label : ''}</p>
                </div>
            </div>
        </div>
    )
}

export default SelectPage