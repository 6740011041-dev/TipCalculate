'use client';
import { type ChangeEventHandler, useState } from "react";

  interface BillFromProps {
    addBill: (bill: number) => void;
  }

  const BillFrom = ({addBill} : BillFromProps) => {
    const [bill, setBill] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setBill(e.target.value);
    };

    const handleAddBill = () => {
      addBill(Number(bill));
      setBill('');
    }

    return (
      <>
      <h1>Bill Form</h1>
      <input type="text" onChange={handleChange} value={bill} />
      <button onClick={handleAddBill}>Add Bill</button>
    </>
    );
  }

 interface ResultProps {
  bill: number,
  tip: number,
  total: number;
}

const Result = ({bill, tip, total}: ResultProps) => {
  return (
    <>
    <h1>Result</h1>
    <li>bill: {bill}</li>
    <li>tip 5%: {tip}</li>
    <li>total: {total}</li>
    </>
  )
}

  const IndexPage = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const addbill = (bill: number) => {
    setBill(bill);
    setTip(bill * 0.05);
    setTotal(bill  + tip);
  }

  return (
    <>
      <BillFrom addBill={addbill}></BillFrom>
      <Result bill={bill} tip={tip} total={total}></Result>
    </>
  )
  
}
export default IndexPage;
