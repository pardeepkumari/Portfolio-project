import React,{useState} from 'react';
// import DATA from './data';
import './Contact.css';


const Contact = () => {
  //CREATE STATE
  const[data,setData] = useState({
    name:'',
    email:'',
    msg:''
  })

  const eventHandler = (event) =>{
    const {name,value} = event.target;
    setData((preval)=>{
      return{
        ...preval,
        [name]: value,
      };
    })
  }
  const submitHandle =(event) =>{
   //to prevent page to reload
    event.preventDefault();
    alert( `Name:${data.name},Email:${data.email},msg:${data.msg}`)

  }

  return (
    <div>
      <div className="contact">
        <div className="row">
          <div className="col-12 text-center py-4 mb-5">
            <h1>Contact</h1>
            <hr />
          </div>
        </div>
        <div>
          <div className="row d-flex justify-content-center">
            <div >
              <form className="myform" onSubmit={submitHandle}>
              <div className="mb-3">
                  <label htmlfor="exampleInputPassword1" 
                  className="form-label">Fullname</label>
                  <input type="text" className="form-control" 
                  id="exampleInputPassword1"
                  name="name"
                  onChange={eventHandler}
                  value={data.name} />
                </div>
                <div className="mb-3">
                  <label htmlfor="exampleInputEmail1" 
                  className="form-label1">Email address</label>
                  <input type="email" className="form-control" 
                  id="exampleInputEmail1" aria-describedby="emailHelp"
                  name="email"
                  onChange={eventHandler}
                  value={data.email} />
                  <div id="emailHelp" className="form-text">
                   <p className='para'> We'll never share your email with anyone else.</p></div>
                </div>
               
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" 
                  class="form-label2">Example textarea</label>
                  <textarea class="form-control" 
                  id="exampleFormControlTextarea1" rows="3"
                  name="msg"
                  onChange={eventHandler}
                  value={data.msg}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;