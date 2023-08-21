import { json } from "@remix-run/node"

export const loader = () => {
  return json({ count: 5 })
}

const CounterRoute = () => {
  return (
    <div className="p-12">
      <ul className="space-y-4">
        
      </ul>
    </div>
  )
}

export default CounterRoute
