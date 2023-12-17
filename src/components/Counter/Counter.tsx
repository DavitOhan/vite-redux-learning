// import { useState } from "react"
import { counterState } from "store/redux/counter/selector"
import Button from "components/Button"
import { useDispatch, useSelector } from "react-redux"
import { CounterWrapper, Count } from "./styles"
import { actions } from "store/redux/counter/counterSlice"
function Counter() {
  // // count - это само значение
  // // setCount - то,что это значение меняет и при вызове происходит updating компонента(компонент перерендеривается)
  // const [count, setCount] = useState<number>(0)

  // const onPlus = () => {
  //   setCount((prevValue: number) => prevValue + 1)
  // }

  // const onMinus = () => {
  //   setCount((prevValue: number) => prevValue - 1)
  // }

  // const onDivide = () => {
  //   setCount((prevValue: number) => prevValue / 2)
  // }

  // const onMultiply = () => {
  //   setCount((prevValue: number) => prevValue * 2)
  // }

  const dispatch = useDispatch()
  const counter = useSelector(counterState)
  console.log(counter)

  const onPlus = () => {
    dispatch(actions.add())
  }
  const onMinus = () => {
    dispatch(actions.minus())
  }
  const onMultiply = () => {
    dispatch(actions.multiply(3))
  }
  const onDivide = () => {
    dispatch(actions.divide(4))
  }

  return (
    <CounterWrapper>
      {/* <Button name="Divide"  onClick={onDivide}/>
      <Button name="Minus" onClick={onMinus} />
      <Count>{Number(count.toFixed(2))}</Count>
      <Button name="Plus" onClick={onPlus} />
      <Button name="Multiply" onClick={onMultiply} /> */}
      <Button name="Divide" onClick={onDivide} />
      <Button name="Minus" onClick={onMinus} />
      <Count>{counter.count.toFixed(2)}</Count>
      <Button name="Plus" onClick={onPlus} />
      <Button name="Multiply" onClick={onMultiply} />
    </CounterWrapper>
  )
}

export default Counter
