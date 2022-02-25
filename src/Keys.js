import "bootstrap/dist/css/bootstrap.min.css";

function KeyPad( {updateDisp, dispValue} ) {

    const keyList = [
      {keyname: '1', id: 'one'},
      {keyname: '2', id: 'two'},
      {keyname: '3', id: 'three'},
      {keyname: '+', id: 'add'},
      {keyname: '4', id: 'four'},
      {keyname: '5', id: 'five'},
      {keyname: '6', id: 'six'},
      {keyname: '-', id: 'substract'},
      {keyname: '7', id: 'seven'},
      {keyname: '8', id: 'eight'},
      {keyname: '9', id: 'nine'},
      {keyname: '*', id: 'multiply'},
      {keyname: '0', id: 'zero'},
      {keyname: '/', id: 'divide'},
      {keyname: '.', id: 'decimal'}
    ];
  
    const keyPad = keyList.map((item) => {
      return <Key keyname={item.keyname} id={item.id} key={item.id} updateDisp={updateDisp} dispValue={dispValue} />
    })
  
    return (
      <div id='keypad'>
        {keyPad}
      </div>
    );
  }
  
  function Key( {keyname, id, updateDisp, dispValue} ) {
  
    const operations = ['+', '-', '*', '/'];
  
    const getNumbers = (str) => {
      return str.split(/\*|\-|\/|\+/);
    }
  
    // 5 * - +
    // -4  -3  -2   -1
    const handleClick = () => {
      if (dispValue === '0') {
        updateDisp(keyname);
      } else if (getNumbers(dispValue).at(-1).includes('.') && keyname === '.') {
        updateDisp(dispValue);
      } else if (dispValue.charAt(dispValue.length - 1) === '-' && operations.includes(dispValue.charAt(dispValue.length - 2)) && operations.includes(keyname)) {
        updateDisp(dispValue.slice(0, -2) + keyname);
      } else if (operations.includes(dispValue.slice(-1)) && operations.includes(keyname) && keyname !== '-') {
        updateDisp(dispValue.slice(0, -1) + keyname);
      } else {
        updateDisp(dispValue + keyname);
      }
    }
  
    return (
      <div className='key' id={id} onClick={handleClick}>
        {keyname}
      </div>
    );
  }

export default KeyPad;