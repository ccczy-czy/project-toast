import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { deleteToast } = React.useContext(ToastContext);

  const VariantIcon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon size={24} />
      </div>
      <VisuallyHidden>{variant} - </VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => deleteToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
