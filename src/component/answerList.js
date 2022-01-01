

export default function answerList(props) {
    const questionAnswer = props.answer.map((answer) => (
            <div>
                <input name = {props.id} type = "radio" />
                {answer}
            </div>
    ));
    return (
        <div>
            {questionAnswer}
        </div>
    );
}