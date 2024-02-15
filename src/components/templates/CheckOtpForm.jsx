import React from 'react';
import { checkOtp } from '../../services/auth';


function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (code.length !== 5) return

    const { response, error } = await checkOtp(mobile, code)

    if (response) {
      console.log(response);
    }
    if (error) console.log(error.response);

    console.log({response,error});
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد ارسال شده به شماره {mobile}را وارد کنید.</span>
      <label htmlFor='input'>کد تایید را وارد کنید </label>
      <input
        type='text'
        placeholder='کد تایید'
        value={code}
        onChange={e => setCode(e.target.value)} />
      <button type='submit'>ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
