import octocat from "../../media/logos/github-mark-white.png";

export default function Logo() {
    return (
        <div id="logo">
            <a href="https://github.com/j-mcQueen" target="_blank" rel="noopener noreferrer">
                <img
                    id="cat"
                    src={octocat}
                    alt="The Github cat logo"
                />
            </a>
        </div>
    )
}