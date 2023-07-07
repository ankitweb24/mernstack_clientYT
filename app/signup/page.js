import style from '@/app/style/signup.module.css';
const page = () => {
  return (
    <form action="" className={style.form_}>
        <h2>Signup Form</h2>
      <div className={style.form_control}>
        <label htmlFor="user">User Name</label>
        <input type="text" id="user" placeholder="user name" />
      </div>
      <div className={style.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="email" />
      </div>
      <div className={style.form_control}>
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" placeholder="Phone" />
      </div>
      <div className={style.form_control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password" />
      </div>
      <div className={style.form_control}>
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" id="cpassword" placeholder="confim password" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default page;
