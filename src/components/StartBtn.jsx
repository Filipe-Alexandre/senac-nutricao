export default function StartBtn() {
    return (
        <span id="start"
        className="rounded-circle fs-3 border-0"
        onClick={() => window.scrollTo(0, 0)}>

            <i className="fa-solid fa-arrow-up"></i>
            
        </span>
    )
}
