import './modal-add-data.styles.scss';

import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';

import FormInput from '../form-input/form-input.component';
import imgAddData from '../../assets/wallpapers/add-data.webp';
import Button from '../button/button.component';
import SuccessDataSend from '../success/data-send/success-data-send.component';

import SelectTime from '../elements/select-time/select-time.component';

const defaultFormFields = {
  salary: '',
  otherIncome: '',
  billsInput: '',
  otherOutcome: '',
};

const ModalAddData = ({ closeModal }) => {
  const { currentUser, year, month } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { salary, otherIncome, otherOutcome, billsInput } = formFields;
  const [bill, setBill] = useState('Electricity');
  const [succedDataSend, setSuccedDataSend] = useState(false);

  const currentSalary = currentUser?.year[year][month].income.salary;
  const currentOtherIncome = currentUser?.year[year][month].income.others;
  const currentOtherOutcome = currentUser?.year[year][month].outcome.others;
  const currentBills = currentUser?.year[year][month].outcome.bills;

  const handleSubmit = () => {
    currentSalary.push(+salary);
    currentOtherIncome.push(+otherIncome);
    currentOtherOutcome.push(+otherOutcome);
    if (billsInput !== '') currentBills[bill] = +billsInput;

    if (
      salary === '' &&
      otherIncome === '' &&
      otherOutcome === '' &&
      billsInput === ''
    )
      return;
    setSuccedDataSend(true);

    setTimeout(() => {
      setSuccedDataSend(false);
    }, 6000);

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
      {succedDataSend ? (
        <SuccessDataSend />
      ) : (
        <img src={imgAddData} alt='add data' className='modal-add-data__img' />
      )}

      <p className='p-total'>
        Would you like to complete the inputs and send them to database?
      </p>
      <div className='modal-add-data__select-time'>
        <SelectTime />
      </div>
      <form
        className='modal-add-data__container'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <section className='modal-add-data__box'>
          <div className='modal-add-data__box--income'>
            <div className='modal-add-data__box__header'>
              <h2 className='header h-large'>Income</h2>
            </div>
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
          </div>
          <div className='modal-add-data__box--outcome'>
            <div className='modal-add-data__box__header'>
              <h2 className='header h-large'>Outcome</h2>
            </div>
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
                <option>Electricity</option>
                <option>Gaz</option>
                <option>Morgage</option>
                <option>Rent</option>
                <option>Tv</option>
                <option>Internet</option>
                <option>Phone</option>
                <option>Bank</option>
                <option>Fuel</option>
                <option>Apple music</option>
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
          </div>
        </section>

        <Button className='button button__add-data mt-large' type='submit'>
          Send data
        </Button>
      </form>
      {closeModal}
    </div>
  );
};

export default ModalAddData;
