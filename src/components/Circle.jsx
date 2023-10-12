import PropTypes from 'prop-types'

Circle.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
}

export function Circle({ min, max, value, changed }) {
  let size = value * 20 + "px";
  let circleStyles = { width: size, height: size };
  let canDec = value > min;
  let canInc = value < max;
  
  function increase(){
    if(canInc){
      changed(value + 1);
    }
  }
  
  function decrease(){
    if(canDec){
      changed(value - 1);
    }
  }
  
  return <div className="container my-2">
    <div>
      <button onClick={decrease} className="btn btn-danger app-decrease" disabled={!canDec}>-</button>
      <strong className="app-value mx-2">{ value }</strong>
      <button onClick={increase} className="btn btn-success app-increase" disabled={!canInc}>+</button>
    </div>
    <hr />
    <div className="app-circle my-3" style={circleStyles}></div>
    {
      ( !canDec || !canInc ) &&
      <div className="alert alert-danger mt-3">
        { !canDec && 'Minimum now!' }
        { !canInc && 'Maximum now!' }
      </div>
    }
  </div>;
}