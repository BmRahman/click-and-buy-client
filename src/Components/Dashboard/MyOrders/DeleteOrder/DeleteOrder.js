import React from 'react';

const DeleteOrder = ({closeDeleteModal, handleDeleteOrder, title, message, modalData}) => {
    return (
        <div>
            <div>                
            <input type="checkbox" id="order-delete" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                  <label onClick={() => handleDeleteOrder(modalData)} htmlFor="order-delete" className="btn">Yes</label>
                  <button onClick={closeDeleteModal} className='btn btn-primary btn-outline'>Cancel</button>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default DeleteOrder;