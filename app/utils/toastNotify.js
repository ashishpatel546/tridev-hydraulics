import { toast } from 'react-toastify';

const Notify = (data,type) => {

    let toastOptions = {
        position: "top-right",
        autoClose: 4000,    
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    if(type === 'error'){
        return toast.error(data,toastOptions);
    }else if(type === 'warn'){
        return toast.warn(data,toastOptions);
    }else if(type === 'success'){
        return toast.success(data,toastOptions);
    }

    return toast(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: type
    });
}

export default Notify;