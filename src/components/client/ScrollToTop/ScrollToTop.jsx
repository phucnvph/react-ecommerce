const ScrollToTop = () => {
    const handleScollToTop = () => {
        window && window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="btn-back-to-top" id="myBtn" onClick={handleScollToTop}>
                <span className="symbol-btn-back-to-top">
                    <i className="zmdi zmdi-chevron-up" />
                </span>
            </div>
        </>
    )
}

export default ScrollToTop
