const Button = props => {
  return (
    <>
      {/* {props.type === "submit" ? 
        <button 
          type={props.type}
          onClick={props.handleClick}
        >
          {props.children}
        </button>
        :
        <button 
          type={props.type}
        >
          {props.children}
        </button>

      } */}
      <button 
        type={props.type}
        onClick={props.handleClick}
      >
        {props.children}
      </button>
    </>
  )
}

export default Button