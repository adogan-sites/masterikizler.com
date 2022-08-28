import { compose } from "ramda";

import withAppContext from "../withAppContext/index";
import withTranslation from "../withTranslation/index";

const withAppHocs = (WrappedComponent) =>
  compose(withAppContext, withTranslation)(WrappedComponent);

export default withAppHocs;
