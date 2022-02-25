import "bootstrap/dist/css/bootstrap.min.css";
import {evaluate} from 'mathjs';

function Functions( {updateDisp, dispValue, setLastVal} ) {

    const evaluateExp = () => {
      let evaluated = evaluate(dispValue);
      setLastVal(String(evaluated));
      updateDisp(String(evaluated));
    }
  
    const clear = () => {
      setLastVal('');
      updateDisp('');
    }
  
    const deleteLast = () => {
      const newVal = dispValue.slice(0, -1);
      updateDisp(newVal);
    }
  
    return (
      <div className='d-flex flex-row flex-row-reverse'>
        <div className='key' id='equals' onClick={evaluateExp}>
          =
        </div>
        <div className='key' id='clear' onClick={clear}>
          C
        </div>
        <div className='key' onClick={deleteLast}>
          DEL
        </div>
      </div>
    );
  }

export default Functions;