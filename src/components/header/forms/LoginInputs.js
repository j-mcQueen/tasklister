export default function LoginInputs() {
    return(
        <form>
            <div>
                <label htmlFor="uname">username</label>
                <input type="text" id="uname"/>
            </div>

            <div>
                <label htmlFor="pwd">password</label>
                <input type="text" id="pwd"/>
            </div>
        </form>
    )
}