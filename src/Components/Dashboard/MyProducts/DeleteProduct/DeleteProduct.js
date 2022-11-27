import React from 'react';

const DeleteProduct = ({closeDeleteModal, handleDeleteProduct, title, message, modalData}) => {
    return (
        <div>
            <div>                
            <input type="checkbox" id="product-delete" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                  <label onClick={() => handleDeleteProduct(modalData)} htmlFor="product-delete" className="btn">Yes</label>
                  <button onClick={closeDeleteModal} className='btn btn-primary btn-outline'>Cancel</button>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default DeleteProduct;