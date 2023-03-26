import FormBtns from "./FormBtns"
export default function LoginInputs({isActive, setIsActive}) {
    return(
        <form>
            <fieldset>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" id="uname" required/>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" required/>
                </div>
            </fieldset>

            <FormBtns
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </form>
    )
}