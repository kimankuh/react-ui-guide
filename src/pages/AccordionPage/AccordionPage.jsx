import SingleAccordion from '../../../../my-app/src/components/SinlgeAccordion/SingleAccordion';
import Accodion from '../../components/Accordion/Accodion'
import styles from './AccordionPage.module.scss'

const AccordionPage = () => {
    // Accordion
    const accordionData = [
        {
            id: 'item-01',
            title: 'HTML 질문',
            content: (
                <div>
                    <p>HTML 답변 내용입니다.</p>
                    <p>HTML 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'item-02',
            title: 'CSS 질문',
            content: (
                <div>
                    <p>CSS 답변 내용입니다.</p>
                    <p>CSS 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'item-03',
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
        <div className={styles.page}>
            <h2 className={styles['page-title']}>Accordion</h2>
            <p className={styles['p-text']}>아코디언에 대한 페이지 입니다.</p>

            <div className={styles.preview}>
                <h3 className={styles['preview-title']}>1번 아코디언</h3>
                <p className={styles['p-text']}>1번 아코디언 설명설명</p>
                <div className={styles.demo}>
                    <Accodion items={accordionData} />
                </div>
            </div>

            <div className={styles.preview}>
                <h3 className={styles['preview-title']}>2번 아코디언</h3>
                <p className={styles['p-text']}>2번 아코디언 설명설명</p>
                <div className={styles.demo}>
                    <SingleAccordion items={accordionData} />
                </div>
            </div>
        </div>        
    )
}

export default AccordionPage