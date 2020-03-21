import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router'

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
      isAuth() && Router.push(`/`)
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
          console.log(data)
           if (data.error) {
               setValues({ ...values, error: data.error, loading: false });
           } else {

                authenticate(data, () => {
                    Router.push(`/`);
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input value={email} onChange={handleChange('email')} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input value={password} onChange={handleChange('password')} type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
      </form>
    )
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h1 class="text-center">Sign In</h1>
          {showError()}
          {showLoading()}
          {showMessage()}
          {showForm && signinForm()}
        </div>
      </div>
    </div>
  )
}

export default SigninComponent
