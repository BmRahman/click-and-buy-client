import React from 'react';

const BuyerDelete = ({closeDeleteModal, handleDeleteBuyer, title, message, modalData}) => {
    return (
        <div>                
            <input type="checkbox" id="buyer-delete" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                  <label onClick={() => handleDeleteBuyer(modalData)} htmlFor="buyer-delete" className="btn">Yes</label>
                  <button onClick={closeDeleteModal} className='btn btn-primary btn-outline'>Cancel</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default BuyerDelete;