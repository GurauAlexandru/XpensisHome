import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => (
  <div className='form-group'>
    <label className='form-label'>{label}</label>
    <input className='form-input' {...otherProps} />
  </div>
);

export default FormInput;
