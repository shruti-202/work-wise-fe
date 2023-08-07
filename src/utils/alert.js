/*Repeated task is wriiten in utils*/
import { enqueueSnackbar } from "notistack";

export const successAlert = (message) => {
  enqueueSnackbar(message, {
    variant: "success",
    anchorOrigin: { horizontal: "right", vertical: "top" },
  });
};
export const errorAlert = (message) => {
  enqueueSnackbar(message, {
    variant: "error",
    anchorOrigin: { horizontal: "right", vertical: "top" },
  });
};
export const warningAlert = (message) => {
  enqueueSnackbar(message, {
    variant: "warning",
    anchorOrigin: { horizontal: "right", vertical: "top" },
  });
};
export const infoAlert = (message) => {
  enqueueSnackbar(message, {
    variant: "info",
    anchorOrigin: { horizontal: "right", vertical: "top" },
  });
};
export const defaultAlert = (message) => {
  enqueueSnackbar(message, {
    variant: "default",
    anchorOrigin: { horizontal: "right", vertical: "top" },
  });
};
