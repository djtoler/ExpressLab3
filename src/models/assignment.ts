interface Assignment {
    id: number
    assignment: string;
    score: number | string;
    total: number;
    completed: boolean;
    action: any
}

export default Assignment;