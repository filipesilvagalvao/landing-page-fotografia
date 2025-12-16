import styles from "./ScrollDown.module.css"

function ScrollDown() {
    function scrollToPortfolio() {
        window.scrollBy({
        top:window.innerHeight * 1
    });
    }
    return (
        <button className={styles.scrollDown } onClick={scrollToPortfolio}>
            <i className="fa-solid fa-angle-down"></i>
        </button>
    )
}

export default ScrollDown