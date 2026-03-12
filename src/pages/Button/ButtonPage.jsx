import Button from '../../components/Button/Button'

const ButtonPage = () => {
    return (
        <div className="page">
            <h2 className="pageTitle">Button</h2>
            <p className="pText">Button에 대한 페이지 입니다.</p>

            <div className="preview">
                <h3 className="previewTitle">size="sm/md/lg"</h3>
                <p className="pText">크기별 버튼</p>
                <div className="demo">
                    <Button size="sm" className>small button</Button>&nbsp;
                    <Button size="md" className>midium button</Button>&nbsp;
                    <Button size="lg" className>large button</Button>
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">color="primary/secondary"</h3>
                <p className="pText">색상별 버튼</p>
                <div className="demo">
                    <Button color="primary" className>small button</Button>&nbsp;
                    <Button color="secondary" className>small button</Button>
                </div>
            </div>

            <div className="preview">
                <h3 className="previewTitle">color="primary/secondary"</h3>
                <p className="pText">색상별 버튼</p>
                <div className="demo">
                    <Button className disabled>small button</Button>&nbsp;
                    <Button>기본 버튼</Button><br/><br/>
                    <Button><span>큰 버튼</span></Button>&nbsp;
                    <Button>
                        <strong>저장</strong>
                        <span className='desc'>임시 저장</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ButtonPage