import "./login.css"

const Login = () => {
    
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form >
          <input type="text" placeholder="Email" name="Email" />
          <input type="text" placeholder="Password" name="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seprator"></div>
      <div className="item">
      <h2>Create An Account</h2>
        <form >
          <label htmlFor="file">Upload An image</label>
          <input type="file"  id="file" />
          <input type="text" placeholder="Username" name="Username" />
          <input type="text" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login