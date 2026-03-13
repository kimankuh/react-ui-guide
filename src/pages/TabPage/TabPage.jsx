import Tab from "../../components/Tab/Tab"

const TabPage = () => {
    // tab
    const tabData = [
        {
            id: 'tab-01',
            label: 'HTML',
            content: (
                <div>
                    <h2>HTML</h2>
                    <p>HTML에 대한 글임</p>
                </div>
            ),
        },
        {
            id: 'tab-02',
            label: 'CSS',
            content: (
                <div>
                    <h2>CSS</h2>
                    <p>CSS에 대한 글임</p>
                </div>
            ),
        },        
        {
            id: 'tab-03',
            label: 'JS',
            content: (
                <div>
                    <h2>JS</h2>
                    <p>JS에 대한 글임</p>
                </div>
            ),
        },
    ];

    return (
        <div className="page">
            <h2 className="pageTitle">Tab</h2>
            <p className="pText">Tab에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">Tab</h3>
                {/* <p className="pText">선택하여 주세요.</p> */}
                <div className="demo">
                    <Tab tabs={tabData} />
                </div>
            </div>
        </div>
    )
}

export default TabPage