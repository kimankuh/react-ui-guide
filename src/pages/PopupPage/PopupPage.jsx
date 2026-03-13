import { useState } from "react"
import ModalPopup from "../../components/ModalPopup/ModalPopup"
import ModalPopupParent from "../../components/ModalPopupParent/ModalPopupParent";

const TabPage = () => {
    // mopdalPopup
    const [isOpen, setIsOpen] = useState(false);

    // modalPopup type2
    const [isPopOpen, setIsPopOpen] = useState(false);
    
    return (
        <div className="page">
            <h2 className="pageTitle">Popup</h2>
            <p className="pText">Popup에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Popup</h3>
                <p className="pText">state(상태)를 자식에서 관리</p>
                <div className="demo">
                    <button type="button" onClick={() => setIsOpen(true)}>모달 열기</button>
                    <ModalPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <h3>모달 제목</h3>
                        <p>모달 내용입니다.</p>
                    </ModalPopup>
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">Popup Type2</h3>
                <p className="pText">state(상태)를 부모에서 관리</p>
                <div className="demo">
                    <button type="button" onClick={() => setIsPopOpen(true)}>모달 열기</button>
                    {isPopOpen && (
                        <ModalPopupParent onClose={() => setIsPopOpen(false)}>
                            <h3>부모에서 state를 관리하는 모달</h3>
                            <p>모달 내용입니동.</p>
                        </ModalPopupParent>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default TabPage