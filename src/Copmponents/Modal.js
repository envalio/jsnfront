import React from 'react';

function Modal(props) {
    let {modal, setModal} = props

    if(modal) {
        return (
            <div
            onClick={() => setModal(false)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.15)"
            }}
          >
            <div
              className="modal"
              style={{
                position: "absolute",
                background: "#fff",
                top: 25,
                left: "10%",
                right: "10%",
                padding: 15,
                border: "2px solid #444"
              }}
            >
              <button type="button" 
                onClick={() => setModal(false)}
              >
                Set
              </button>
              <button type="button" 
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
      );
    }
    else {
        return null
    }
  
}

export default Modal;