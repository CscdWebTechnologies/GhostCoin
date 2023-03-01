import coinfull from "../images/coinfull.png";
import { socialLinks } from "../utils/constants/constants";

export const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="row">
          <div className="col-md-3">
            <img src={coinfull} alt="alt" className="coinbaseLogo" />
            <select
              aria-label="Language selector"
              class="LanguageSelector__Select-sc-1xhf8co-0 lhuSVi"
            >
              <option value="de">Deutsch</option>
              <option selected="" value="en">
                English
              </option>
              <option value="es">Español - España</option>
              <option value="es-LA">Español - América Latina</option>
              <option value="fr">Français - France</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="it">Italiano</option>
              <option value="ko">한국어</option>
              <option value="pl">Polski</option>
              <option value="pt">Português - Brasil</option>
              <option value="pt-PT">Português - Portugal</option>
              <option value="ru">Pусский</option>
              <option value="th">ไทย</option>
              <option value="tr">Türkçe</option>
            </select>
            <div class="Copyright">© 2021 Coinbase</div>
            <div class="socialMedia">
              {socialLinks.map((link, id) => {
                <a href={link.link} key={link.id}>
                  {link.name}
                </a>;
              })}
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
