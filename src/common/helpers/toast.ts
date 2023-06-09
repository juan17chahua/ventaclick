/* eslint-disable @typescript-eslint/no-empty-function */
import { toast } from "react-toastify";

// TODO: NOTIFICATION TOAST ( SUCCESS, ERROR, WARNING, INFO )

export const notificationSuccess = (msg: string) => toast.success(msg);

export const notificationError = (msg: string) => toast.error(msg);

export const notificationWarning = (msg: string) => toast.warn(msg);

export const notificationInfo = (msg: string) => toast.info(msg);

// TODO: NOTIFICATION ACTION PROMISE

export const notificationActionPromise = (
  promise = Promise.resolve(),
  options = {},
  onSuccess = () => {},
  onError = () => {}
) => {
  toast
    .promise(promise, options)
    .then(() => {
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch(() => {
      if (onError) {
        onError();
      }
    });
};
