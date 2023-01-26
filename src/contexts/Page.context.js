import { useState, createContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const PageContext = createContext();

const PageProvider = (props) => {
  const [firstToReach, setFirstToReach] = useLocalStorageState('first', false);
  const [cashAmount, setCashAmount] = useLocalStorageState('cash', 0);
  const [isShowingMsg, setIsShowingMsg] = useState(false);

  return (
    <PageContext.Provider
      value={{
        firstToReach,
        setFirstToReach,
        cashAmount,
        setCashAmount,
        isShowingMsg,
        setIsShowingMsg,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
