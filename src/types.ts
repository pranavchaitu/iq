export type ProblemBody = {
    name : string,
    description : string,
    doubts? : any,
    tags? : string[]
}

export type DoubtBody = {
    query : string,
    problem_id : number,
    author_id : number
}

export type UpdateProblemBody = Partial<ProblemBody>