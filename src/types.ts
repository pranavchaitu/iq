export type ProblemBody = {
    name : string,
    description : string,
    doubts? : any,
    tags? : string[]
}

export type UpdateProblemBody = Partial<ProblemBody>