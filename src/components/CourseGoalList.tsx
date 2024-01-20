import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type ListProp = {
    goals : CGoal[]
    handleDelete : (id: number) => void
}

const CourseGoalList : FC<ListProp> = ({goals , handleDelete}) => {
    return (
        <>
            <ul>
                {
                    goals.map(goal => (
                        <li key={goal.id}>
                            <CourseGoal handleDelete = {handleDelete}  title={goal.title} id={goal.id} >
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