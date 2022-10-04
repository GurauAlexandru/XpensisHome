import './modal-add-data.styles.scss';

import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import FormInput from '../form-input/form-input.component';
import imgAddData from '../../assets/wallpapers/add-data.webp';
import Button from '../button/button.component';

const defaultFormFields = {
  salary: '',
  otherIncome: '',
  billsInput: '',
  otherOutcome: '',
};

const ModalAddData = ({ closeModal }) => {
  const { currentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { salary, otherIncome, otherOutcome, billsInput } = formFields;
  const [bill, setBill] = useState('Haine');

  // This is working (YEEEE)
  // I have to make it more dynamic and add all fields
  const currentSalary = currentUser?.year[2022].august.income.salary;
  const currentOtherIncome = currentUser?.year[2022].august.income.others;
  const currentOtherOutcome = currentUser?.year[2022].august.outcome.others;
  const currentBills = currentUser?.year[2022].august.outcome.bills;

  const handleSubmit = () => {
    currentSalary.push(+salary);
    currentOtherIncome.push(+otherIncome);
    currentOtherOutcome.push(+otherOutcome);
    currentBills[bill] = +billsInput;

    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: +value });
  };

  const handleSelectBill = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className='modal-add-data'>
      <h2 className='header h-xLarge'>Add data to database</h2>
      <img src={imgAddData} alt='add data' className='modal-add-data__img' />
      <p className='p-total'>
        Would you like to complete the inputs and send them to database?
      </p>
      <form
        className='modal-add-data__container'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label='Monthly salary'
          type='number'
          placeholder='ex. 1.000€'
          onChange={handleChange}
          name='salary'
          value={salary}
        />
        <FormInput
          label='Other income'
          type='number'
          placeholder='ex. 1.000€'
          onChange={handleChange}
          name='otherIncome'
          value={otherIncome}
        />
        <div className='modal-add-data__options'>
          <FormInput
            label='Bills'
            type='number'
            placeholder='ex. 1.000€'
            onChange={handleChange}
            name='billsInput'
            value={billsInput}
          />
          <select
            className='modal-add-data__options--select'
            onChange={handleSelectBill}
          >
            <option>Haine</option>
            <option>Incaltari</option>
          </select>
        </div>
        <FormInput
          label='Other outcome'
          type='number'
          placeholder='ex. 1.000€'
          onChange={handleChange}
          name='otherOutcome'
          value={otherOutcome}
        />
        <Button className='button button__add-data mt-large' type='submit'>
          Send data
        </Button>
      </form>

      {closeModal}
    </div>
  );
};

export default ModalAddData;
