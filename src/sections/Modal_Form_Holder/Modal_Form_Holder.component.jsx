
import React from 'react';
import'./Modal_Form_Holder.styles.css';
import Connect_Form from '../Connect_Form/Connect_Form.component';


const Modal_Form_Holder = props => {
  const divStyle = {
    display: props.isShown ? 'block' : 'none'
  };
  function closeModal(e){
    e.stopPropagation()
    props.setShown(false)
  }
  
  return(
    <div 
      className='modal'
      style={divStyle} >
      <div 
        className="modal-content"
        onClick = { e => e.stopPropagation()}>
        <span className="close" 
        onClick={ closeModal } >&times;</span>
          <Connect_Form />
      </div>
    </div>
  )
}
export default Modal_Form_Holder;
