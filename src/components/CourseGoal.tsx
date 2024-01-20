// interface CourseGoalProps { title: string; children : ReactNode }

import { type FC, type PropsWithChildren } from "react"
import { type CourseGoal } from "../App"

type CourseGoalProps = PropsWithChildren<{ title: string ,handleDelete : (id: number) => void ,id :number }>

const CourseGoal: FC<CourseGoalProps> = ({ title,handleDelete, id,children }) => {

    return (<article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </article>)

}
export default CourseGoal

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//     return (<article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>)
// }