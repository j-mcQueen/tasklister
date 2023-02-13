export default function LoginInputs() {
    return(
        <form>
            <fieldset>
                <label htmlFor="uname">username</label>
                <input type="text" id="uname"/>
            </fieldset>

            <fieldset>
                <label htmlFor="pwd">password</label>
                <input type="password" id="pwd"/>
            </fieldset>
        </form>
    )
}