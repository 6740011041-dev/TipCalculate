"use client";
import { useEffect, useState } from "react";

interface FooProps{
    x : number
}
const Foo = ({x}: FooProps) => {
  useEffect(() => {
    console.log(x);

    return ()=>{console.log('Bye')}
  },[x]);
  return (
    <>
      <div>Foo</div>
    </>
  );
};
const FooPage = () => {
  const [x, setX] = useState(1);
  const [isShow, setIsShow]= useState(false)
  return (
    <div>
        {x}
        <button className="bg-blue-400 rounded-xl p-2 m-2" onClick={()=>{setX(+new Date)}}>Change X</button>

      <button className="bg-amber-400 rounded-xl p-2 m-2" onClick={()=>{setIsShow(!isShow)}}>Toggle</button>
      { isShow && <Foo x={x}></Foo>}
    </div>
  );
};
export default FooPage