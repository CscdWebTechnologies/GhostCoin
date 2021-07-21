import coinfull from '../images/coinfull.png';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <img src={coinfull} alt="alt" className="coinbaseLogo"/>
                        <select aria-label="Language selector" class="LanguageSelector__Select-sc-1xhf8co-0 lhuSVi">
                            <option value="de">Deutsch</option>
                            <option selected="" value="en">English</option>
                            <option value="es">Español - España</option>
                            <option value="es-LA">Español - América Latina</option>
                            <option value="fr">Français - France</option>
                            <option value="id">Bahasa Indonesia</option>
                            <option value="it">Italiano</option>
                            <option value="ko">한국어</option>
                            <option value="pl">Polski</option>
                            <option value="pt">Português - Brasil</option>
                            <option value="pt-PT">Português - Portugal</option>
                            <option value="ru">Pусский</option><option value="th">ไทย</option>
                            <option value="tr">Türkçe</option>
                        </select>
                        <div class="Copyright">© 2021  Coinbase</div>
                        <div class="socialMedia">
                            <a href="https://blog.coinbase.com/" title="The Coinbase Blog" class="Link__A-eh4rrz-0 hfBqui FooterLink__StyledLink-sc-1alprlm-0 ctoibS" color="slate" rel="noopener" target="_blank">Blog</a>
                            <span class="spacer">•</span>
                            <a href="https://twitter.com/coinbase" title="Coinbase Twitter account" class="Link__A-eh4rrz-0 hfBqui FooterLink__StyledLink-sc-1alprlm-0 ctoibS" color="slate" rel="noopener" target="_blank">Twitter</a>
                            <span class="spacer">•</span><a href="https://www.facebook.com/Coinbase" title="Coinbase Facebook page" class="" color="slate" rel="noopener" target="_blank">Facebook</a>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;