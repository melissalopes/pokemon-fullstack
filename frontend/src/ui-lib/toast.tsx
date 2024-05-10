import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--error {
  }
`;

export const showToast = ({ type, message }: any) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
