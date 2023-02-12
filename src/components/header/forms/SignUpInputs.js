export default function SignUpInputs() {
    return (
        <form>
            <fieldset>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname"/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname"/>
            </fieldset>

            <div>
                <label htmlFor="uname">username</label>
                <input type="text" id="uname"/>
            </div>

            <fieldset>
                <label htmlFor="pwd">password</label>
                <input type="text" id="pwd"/>

                <label htmlFor="conf-pwd">confirm password</label>
                <input type="text" id="conf-pwd"/>
            </fieldset>
        </form>
    )
}