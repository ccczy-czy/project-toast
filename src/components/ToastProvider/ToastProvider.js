import React from 'react';

import useEscapeKey from '../../hooks/use-escape-key.hook';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => deleteAllToasts());

  const addToast = React.useCallback(
    (newToast) => {
      setToasts([...toasts, newToast]);
    },
    [toasts, setToasts]
  );

  const deleteToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => {
        return toast.id !== id;
      });
      setToasts(nextToasts);
    },
    [toasts, setToasts]
  );

  const deleteAllToasts = React.useCallback(() => {
    setToasts([]);
  }, [setToasts]);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, deleteToast, deleteAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
