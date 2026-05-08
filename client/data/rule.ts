interface QuizRule{
    id:number;
    rule:string[];
}

export const quizRules:QuizRule[]=[
    {
        id:1,
        rule:['Each question has multiple choice answers']
    },
    {
        id:2,
        rule:['You have 5 minutes to complete all questions']
    },
    {
        id:3,
        rule:["Once you select an answer, you'll see the explaination"]
    },
    {
        id:4,
        rule:['You can navigate back to previous questions']
    }
]