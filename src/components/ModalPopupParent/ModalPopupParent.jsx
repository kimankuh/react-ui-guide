import { useEffect } from "react";
import './ModalPopupParent.scss';

// state(상태)를 부모에서 관리
export default function ModalPopupParent ({
    children,
    onClose,
}){
    useEffect(() => {
        const handleEsc = (e) => {
            if(e.key === "Escape"){
                onClose();
            }
        }

        // keydown 감지
        document.addEventListener('keydown', handleEsc);

        // 언마운트시 실행되는 코드. 팝업 꺼지면 실행되지 않도록 이벤트 제거. 메모리에서 제거됨(실행속도).
        return () => {
            document.removeEventListener('keydown', handleEsc);
        }
    }, [onClose]);
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" role="dialog" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )
}