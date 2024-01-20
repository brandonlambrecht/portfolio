export default function ContactPage() {
    return (
    <div className="container">
  <div className="row header">
    <h1>Contact Me</h1>
  </div>
  <div className="row body">
    <form action="#">
      <ul>
        
        <li>
          <p className="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="First name" />
          </p>
          <p className="pull-right">
            <label for="last_name">last name</label>
            <input type="text" name="last_name" placeholder="Last name" />      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">email <span className="req">*</span></label>
            <input type="email" name="email" placeholder="Email" />
          </p>
        </li>        
        <li><div className="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="46" rows="3" name="comments"></textarea>
        </li>
        
        <li>
          <input className="btn btn-submit" type="submit" value="Submit" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
</div>
    )
}