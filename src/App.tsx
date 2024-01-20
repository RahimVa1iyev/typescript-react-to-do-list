import CourseGoal from "./components/CourseGoal"
import Header from "./components/Header"
import goalImg from '../src/assets/goals.jpg'
import { useState } from "react"

type CourseGoal = {
  id: number;
  title: string;
  description: string;
}
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = () => {
    setGoals(prevGoal => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'lorem ipsum dor'
      }
      return [...prevGoal, newGoal]
    })
  }

  return (
    <>
      <main>
        <Header image={{ src: goalImg, alt: 'Goal-img' }} >
          <h1>Your Course Goal</h1>
        </Header>
        <button onClick={handleAddGoal} >Add Goal</button>
        <ul>
          {
            goals.map(goal => (
              <li key={goal.id}>
                <CourseGoal title={goal.title} >
                  <p>{goal.description}</p>
                </CourseGoal>
              </li>
            ))
          }
        </ul>

      </main>
    </>
  )
}

export default App
