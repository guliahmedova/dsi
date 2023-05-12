
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-card">
                    <div className="logo">
                        <div className="big-text">
                            <span style={{ color: "#85171a" }}>D</span>
                            <span style={{ color: "#dc2025" }}>S</span>
                            <span style={{ color: "#feba08" }}>I</span>
                        </div>
                        <div className="small-texts">
                            <span style={{ fontWeight: 500 }}>dwidasa</span>
                            <span style={{ fontWeight: 600 }}>samsara</span>
                            <span style={{ fontWeight: 700 }}>indonesia</span>
                        </div>
                    </div>
                    <h4 className="first-card-title">PT Dwidasa Samsara Indonesia</h4>
                    <p>Ruko Jalur Sutera 29A No. 53 <br />
                        Alam Sutera Serpong, Tangerang 15323
                    </p>
                </div>
                <div className="footer-card">
                    <h3 className="second-card-title">Contact</h3>
                    <ul>
                        <li>Phone : +62.21.5314.1135</li>
                        <li>Fax : +62.21.5314.1135</li>
                        <li>Email : community@dwidasa.com</li>
                    </ul>
                </div>
                <div className="footer-card">
                    <img className="footer-img" src="./images/footer.png" alt="" />
                </div>
            </footer>
            <div className="copy-right">
                Copyright © 2015 - Dwidasa Samsara Indonesia
            </div>
        </>
    )
}

export default Footer