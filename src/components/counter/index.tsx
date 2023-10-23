import { useState } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function Counter() {
  const [counterState, setCounterState] = useState(1)

  const handleIncrement = () => {
    setCounterState((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    if (counterState > 1) {
      setCounterState((prevState) => prevState - 1)
    }
  }

  return (
    <StyledCounter>
      <button
        className="minusPlus"
        disabled={counterState === 1}
        onClick={handleDecrement}
      >
        <Minus />
      </button>
      <span>{counterState}</span>
      <button className="minusPlus" onClick={handleIncrement}>
        <Plus />
      </button>
    </StyledCounter>
  )
}
