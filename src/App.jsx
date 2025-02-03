import { useRef, useState } from "react";

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [list, setTable] = useState([]);
  let inputVal = useRef();

  const depositVal = () => {
    if (inputVal.current.value != "") {
      const obj1 = {
        before: balance,
        type: "Deposit",
        val: +inputVal.current.value,
        After: balance + +inputVal.current.value,
      };
      let newList = [...list, obj1];
      setTable(newList);
      setBalance(balance + +inputVal.current.value);
      inputVal.current.value = "";
    }
  };

  const Withwraw = () => {
    if (inputVal.current.value != "") {
      if (balance >= +inputVal.current.value) {
        const obj1 = {
          before: balance,
          type: "Withwraw",
          val: +inputVal.current.value,
          After: balance - +inputVal.current.value,
        };
        let newList = [...list, obj1];
        setTable(newList);
        setBalance(balance - +inputVal.current.value);
        inputVal.current.value = "";
      } else {
        alert("your balanse is low");
      }
    }
  };
  return (
    <>
      <h1 className="text-center p-2">Your Balance is : {balance}</h1>
      <input
        ref={inputVal}
        type="text"
        placeholder="Enter the balance"
        className="form-control mt-4"
      />
      <div className="btns text-center">
        <button className="btn btn-success m-4" onClick={depositVal}>
          Deposit
        </button>
        <button className="btn btn-danger" onClick={Withwraw}>
          Withwraw
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>-</th>
            <th>Before Balance</th>
            <th>loge Type</th>
            <th>log Value</th>
            <th>After Balabce</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.before}</td>
                <td>{e.type}</td>
                <td>{e.val}</td>
                <td>{e.After}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
