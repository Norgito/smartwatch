import { toast } from "react-toastify";

export const notify = (id) => {
    toast('✅ Order Completed! your ID ' + id, {
        theme: 'dark',
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}