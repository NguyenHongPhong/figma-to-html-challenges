function Modal() {
    return (
        <label htmlFor="status-checkbox" className="fixed top-0 left-0 w-full h-full opacity-0 pointer-events-none
        transition-opacity duration-300 ease-in-out peer-has-checked:opacity-100 peer-has-checked:pointer-events-auto z-10
        bg-[rgba(0,0,0,0.6)]
        ">
        </label>
    )
};

export default Modal;