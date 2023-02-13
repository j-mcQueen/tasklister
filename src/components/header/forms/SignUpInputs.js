export default function SignUpInputs() {
    return (
        <form>
            <fieldset id="names">
                <div>
                    <label htmlFor="fname">first name</label>
                    <input type="text" id="fname"/>
                </div>

                <div>
                    <label htmlFor="lname">last name</label>
                    <input type="text" id="lname"/>
                </div>
            </fieldset>

            <fieldset id="user">
                <div>
                    <label htmlFor="uname">username</label>
                    <input type="text" id="uname"/>
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email"/>
                </div>
            </fieldset>

            <fieldset id="security">
                <div>
                    <label htmlFor="pwd">password</label>
                    <input type="password" id="pwd"/>
                </div>

                <div>
                    <label htmlFor="conf-pwd">confirm</label>
                    <input type="password" id="conf-pwd"/>
                </div>
            </fieldset>
        </form>
    )
}