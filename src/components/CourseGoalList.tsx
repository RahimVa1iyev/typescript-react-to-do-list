import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type ListProp = {
    goals: CGoal[]
    handleDelete: (id: number) => void
}

const CourseGoalList: FC<ListProp> = ({ goals, handleDelete }) => {

    if (goals.length === 0) {

        return <InfoBox mode="hint" >
            You have not goal
        </InfoBox>
    }

    return (
        <>
            {
                goals.length > 2 ?
                <InfoBox mode="warning" >
                    Your goals can't be must 2
                </InfoBox> : null
            }

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