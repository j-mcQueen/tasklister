import FormBtns from "./FormBtns";
export default function SignUpInputs({isActive, setIsActive}) {
    return (
        <form>
            <fieldset id="user">
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" id="uname" minLength="3" required/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required/>
                </div>
            </fieldset>

            <fieldset id="security">
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" minLength="8" required/>
                </div>

                <div>
                    <label htmlFor="c-pwd">Confirm</label>
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