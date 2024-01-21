import  { useRef, type FormEvent,type FC } from 'react'

type NewGoalProps = {
    onAddGoal : (goal : string , summary :string) => void
}

const NewGoal : FC<NewGoalProps> = ({onAddGoal}) => {

    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
     e.preventDefault()

     const enteredGoal = goal.current?.value
     const enteredSummary = goal.current?.value

     onAddGoal(enteredGoal ,enteredSummary)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="">New Gaol</label>
                <input  id='goal' type="text" name='goal' ref={goal}  />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input  id='summary' type="text" name='summary' ref={summary} />
            </p>
            <button>Add Goal</button>

        </form>
    )
}

export default NewGoal