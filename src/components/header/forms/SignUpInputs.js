import FormBtns from "./FormBtns";
export default function SignUpInputs({isActive, setIsActive}) {
    return (
        <form>
            <fieldset>
                <div>
                    <label htmlFor="uname">Username <span>*</span></label>
                    <input type="text" id="uname" minLength="3" required/>
                </div>

                <div>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" id="email" required/>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="pwd">Password <span>*</span></label>
                    <input type="password" id="pwd" minLength="8" required/>
                </div>

                <div>
                    <label htmlFor="c-pwd">Confirm <span>*</span></label>
                    <input type="password" id="c-pwd" required/>
                </div>
            </fieldset>

            <FormBtns
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </form>
    )
}