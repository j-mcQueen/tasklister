export default function LoginInputs() {
    return(
        <form>
            <fieldset>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" id="uname"/>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd"/>
                </div>
            </fieldset>
        </form>
    )
}