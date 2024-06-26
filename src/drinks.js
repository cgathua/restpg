
function drinks() {
    const content = document.getElementById('content');

    // drinks section
    const drinks = 
        `
            <section id="drinks" aria-label="drinks">
                <h2>Drinks</h2>
                <figure class="container" aria-label="drinks content"> 

                    <svg 
                        aria-hidden="true" height="96px" width="96px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" class="drinks"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52.644 52.644" xml:space="preserve"
                        fill="#e8eddf" stroke="currentColor">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <g>
                        <path style="fill:#030104;"
                        d="M44.198,7.625c-0.307,0.459-0.927,0.582-1.387,0.277l-7.347-4.897 c-0.46-0.307-1.038-0.157-1.293,0.333l-5.372,10.33c-0.255,0.49-0.014,0.888,0.539,0.888h2.286c0.553,0,1.113,0.434,1.253,0.968 l0.195,0.75c0.14,0.534-0.194,0.968-0.747,0.968H11.442c-0.552,0-0.836-0.417-0.635-0.932l0.322-0.822 c0.201-0.515,0.811-0.932,1.363-0.932h12.59c0.553,0,1.207-0.398,1.461-0.888L33.37,0.539c0.132-0.252,0.364-0.437,0.639-0.508 c0.276-0.069,0.568-0.02,0.804,0.137l9.108,6.07C44.381,6.545,44.505,7.165,44.198,7.625z M35.375,19.991c0,0.553-0.447,1-1,1 h-0.43c-0.237,0-0.483,0.444-0.547,0.993l-3.505,29.667c-0.064,0.549-0.564,0.993-1.117,0.993h-13.78 c-0.552,0-1.056-0.444-1.125-0.992l-3.737-29.669c-0.069-0.548-0.289-0.992-0.492-0.992c-0.202,0-0.366,0-0.366,0 c-0.553,0-1-0.447-1-1s0.447-1,1-1h25.099C34.928,18.991,35.375,19.438,35.375,19.991z M31.149,23.985 c0.064-0.549-0.33-0.993-0.883-0.993H13.277c-0.552,0-0.944,0.444-0.875,0.992l3.233,25.669c0.069,0.548,0.573,0.992,1.125,0.992 H27c0.552,0,1.052-0.445,1.117-0.993L31.149,23.985z">
                        </path>
                        </g>
                        </g>
                    </svg> 

                    <figcaption class="item">
                        <p class="flavor">Soda</p><p class="price">$ 2.99</p>
                    </figcaption>
                    <figcaption class="item">
                        <p class="flavor">Lemonade</p><p class="price">$ 3.99</p>
                    </figcaption>
                    <figcaption class="item">
                        <p class="flavor">Vanilla Milkshake</p><p class="price">$ 4.99</p>
                    </figcaption>
                    <figcaption class="item">
                        <p class="flavor">Chocolate Milkshake</p><p class="price">$ 4.99</p>
                    </figcaption>
                    <figcaption class="item">
                        <p class="flavor">Strawberry Milkshake</p><p class="price">$ 4.99</p>
                    </figcaption>

                </figure>
            </section>
        `
    content.insertAdjacentHTML('beforeend', drinks);
}

export default drinks;