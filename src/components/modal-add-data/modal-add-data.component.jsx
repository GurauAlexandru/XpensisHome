import './modal-add-data.styles.scss';

const ModalAddData = ({ closeModal }) => {
  return (
    <div className='modal-add-data'>
      <h1>Add data to database</h1>
      {closeModal}
    </div>
  );
};

export default ModalAddData;
