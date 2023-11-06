import { Link } from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";

const Forbidden403 = () => {
  return (
    <div className="gx-page-error-container">
      <div className="gx-page-error-content">
        <div className="gx-error-code gx-mb-4">403</div>
        <h2 className="gx-text-center">
          <IntlMessages id="extraPages.403Msg" />
        </h2>
        <p className="gx-text-center">
          <Link className="gx-btn gx-btn-primary" to="/">
            <IntlMessages id="extraPages.goHome" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forbidden403;
