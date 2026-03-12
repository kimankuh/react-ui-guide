import SingleAccordion from '../../components/SingleAccordion/SingleAccordion';
import Accodion from '../../components/Accordion/Accordion'
// import styles from './AccordionPage.module.scss'

const AccordionPage = () => {
    // Accordion
    const accordionData = [
        {
            id: 'item01',
            title: 'HTML 질문',
            content: (
                <div>
                    <p>HTML 답변 내용입니다.</p>
                    <p>HTML 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'item02',
            title: 'CSS 질문',
            content: (
                <div>
                    <p>CSS 답변 내용입니다.</p>
                    <p>CSS 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'item03',
            title: 'JS 질문',
            content: (
                <div>
                    <p>JS 답변 내용입니다.</p>
                    <p>JS 답변 내용입니다.</p>
                </div>
            )
        }
    ];

    return (
        <div className="page">
            <h2 className="pageTitle">Accordion</h2>
            <p className="pText">아코디언에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">1번 아코디언</h3>
                <p className="pText">1번 아코디언 설명설명</p>
                <div className="demo">
                    <Accodion items={accordionData} />
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">2번 아코디언</h3>
                <p className="pText">2번 아코디언 설명설명</p>
                <div className="demo">
                    <SingleAccordion items={accordionData} />
                </div>
            </div>
        </div>        
    )
}

export default AccordionPage