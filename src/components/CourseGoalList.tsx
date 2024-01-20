import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type ListProp = {
    goals : CGoal[]
}

const CourseGoalList : FC<ListProp> = ({goals}) => {
    return (
        <>
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
        </>
    )
}

export default CourseGoalList