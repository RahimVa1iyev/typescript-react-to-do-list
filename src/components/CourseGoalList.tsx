import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type ListProp = {
    goals: CGoal[]
    handleDelete: (id: number) => void
}

const CourseGoalList: FC<ListProp> = ({ goals, handleDelete }) => {
    let warning 

    if (goals.length === 0) {

        return <InfoBox mode="hint" >
            You have not goal
        </InfoBox>
    }

    if (goals.length > 3) {
        warning = (
            <InfoBox mode="warning" severity="medium" >
                Your goals can't be must 2
            </InfoBox>
        )
    }

    return (
        <>

          {warning}
            <ul>
                {
                    goals.map(goal => (
                        <li key={goal.id}>
                            <CourseGoal handleDelete={handleDelete} title={goal.title} id={goal.id} >
                                <p>{goal.description}</p>
                            </CourseGoal>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default CourseGoalList