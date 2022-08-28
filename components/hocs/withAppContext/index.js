import React, { useContext } from "react";

const AppContext = React.createContext([]);

const withAppContext = (WrappedComponent) => {
  const Component = ({ context, ...props }) => {
    return (
      <AppContext.Provider value={context}>
        <WrappedComponent {...props} />
      </AppContext.Provider>
    );
  };

  return Component;
};

export const useAppContext = () => {
  const { referenceImages } = useContext(AppContext);
  return { referenceImages };
};

export default withAppContext;
