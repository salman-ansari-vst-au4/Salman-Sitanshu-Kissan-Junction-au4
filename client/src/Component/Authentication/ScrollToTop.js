import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  console.log(history)
  useEffect(() => {
    const unlisten = history.listen(() => {
      if(history.location.pathname !== "/profile/sold" &&
      history.location.pathname !== "/profile/purchased" &&
      history.location.pathname !== "/profile/product")
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);