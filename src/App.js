import './App.css';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <div className="container-fluid">
      <div className='heading'>
        Simple Redux Form
      </div>
      <form onSubmit={handleSubmit} className='simpleform'>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>First Name</label>
          <div className="control">
            <Field component='input' type='text' placeholder='First Name' name='firstname'></Field>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>Last Name</label>
          <div className="control">
            <Field component='input' type='text' placeholder='Last Name' name='lastname'></Field>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>E-mail Address</label>
          <div className="control">
            <Field component='input' type='text' placeholder='E-mail Address' name='email'></Field>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>Category</label>
          <div className="control">
            <div>
              <Field component='input' type='radio' name='category' value='male'>
              </Field>
              <label htmlFor='category' className='option'>Male</label>
              <Field component='input' type='radio' name='category' value='female'>
              </Field>
              <label htmlFor='category' className='option'>Female</label>
            </div>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>Favourite Color</label>
          <div className="control">
            <Field component='select' name='color'>
              <option></option>
              <option value='#fff'>White</option>
              <option value='#ff0000'>Red</option>
              <option value='#00ff00'>Green</option>
              <option value='#0000ff'>Blue</option>
            </Field>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label' htmlFor='employee'>Employeed</label>
          <div className="control">
            <Field component='input' type='checkbox' name='employee'></Field>
          </div>
        </div>
        <div className='form-group '>
          <label className='col-sm-4 col-form-label'>About Me</label>
          <div className="control">
            <Field component='textarea' type='text' name='aboutme' placeholder='Enter details more than 100 characters...'></Field>
          </div>
        </div>
        <div className='form-group  footer'>
          <button type='submit' name='submit' className='btn btn-primary' disabled={pristine || submitting}>Submit</button>
          <button type='button' name='cancel' className='btn btn-default' disabled={pristine || submitting} onClick={reset}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm);
