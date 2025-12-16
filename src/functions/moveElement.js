export const observerPhotos = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("showPhotos")
            observer.unobserve(entry.target)
        }

    })
}, {
    root: null,
    threshold: 0.5
})
