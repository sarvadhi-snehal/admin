import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import * as toastr from "toastr";
//You need style and css loader installed and set

export default function AlertComponent({}) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.open);
  const notify = () => toastr["info"]("lorem ipsum est lt ist", "Welcome");
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
