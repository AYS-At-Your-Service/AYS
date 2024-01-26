import './style.css'


const Modal = ({ closeModal }) => {


    return (
        <div className='modal_listing-vendors'>
            <div className="modal modal-cross-outer" style={{ backgroundColor: "black" }} onClick={closeModal} >
                <div className="modal-cross">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="#0F0F0F"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.586 12l-6.043 6.043 1.414 1.414L12 13.414l6.043 6.043 1.414-1.414L13.414 
                12l6.043-6.043-1.414-1.414L12 10.586 5.957 4.543 4.543 5.957 10.586 12z"
                            fill="#0F0F0F"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="modal modal-container" style={{ backgroundColor: "black" }}>
                <div>
                    <div>Image</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Modal