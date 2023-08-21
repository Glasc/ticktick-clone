import type { V2_MetaFunction } from "@remix-run/node"
import { useState } from "react"
import { Button } from "~/components/ui/button"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Index" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

type UseCounterProps = {
  initialValue?: number
  increaseAmount?: number
}

const useCounter = ({
  initialValue = 0,
  increaseAmount = 1,
}: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue)
  const handleCount = () => {
    setCount((prev) => prev + increaseAmount)
  }
  return { count, handleCount }
}

export default function Index() {
  const { count, handleCount } = useCounter()
  return (
    <div className="p-12">
      <Button className="text-xl" onClick={handleCount}>
        {count}
      </Button>
    </div>
  )
}
