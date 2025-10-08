import { Todo } from "../types";

interface Props extends Todo {
    onClickDelete: (id: number) => void;
};

export default function TodoItem(props: Props) {
    const onCLickBuutton = () => {
        props.onClickDelete(props.id);
    }
    return (
        <div>
            {props.id}번: {props.content}
            <button onClick={onCLickBuutton}>삭제</button>
        </div>
    )
}