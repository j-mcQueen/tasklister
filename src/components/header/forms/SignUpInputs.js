export default function SignUpInputs() {
    return (
        <form>
            <fieldset id="names">
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname"/>
                </div>

                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname"/>
                </div>
            </fieldset>

            <fieldset id="user">
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" id="uname"/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
            </fieldset>

            <fieldset id="security">
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd"/>
                </div>

                <div>
                    <label htmlFor="conf-pwd">Confirm</label>
                    <input type="password" id="conf-pwd"/>
                </div>
            </fieldset>
        </form>
    )
}