import "./Preloader.css"

export function preloader(): string {
    return `<main>
    <div class="preloader" id="preloader">
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
    </div>
    <div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
</main>`
}

