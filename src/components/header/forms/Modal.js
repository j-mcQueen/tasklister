import Tabs from "./Tabs"
import FormBtns from "./FormBtns"
import "./form.css";

export default function Modal({current, updater}) {
    return (
        <div id="modal">
            <Tabs/>
            {/* login/ sign-up inputs displayed here */}
            <FormBtns
                current={current}
                updater={updater}
            />
        </div>
    )
}