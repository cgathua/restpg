
function homePage() {
    const content = document.querySelector('#content');

// home section
const home =
    `<section id="home" class="hero" aria-label="home">
<figure class="container" aria-label="home content">

    <article class="banner">
        <h1>Organic Burgers</h1>
        <p>We are a Fast-Food Restaurant, that specializes in beef & chicken burgers.</p>
        <p> Give us a try and receive 10% 0ff your next order.</p>
        <button>
            <a class="btn" href="#"aria-label="view menu">View Menu 
                <svg
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
        </button>
    </article>

</figure>
</section>`

content.insertAdjacentHTML('beforeend', home);

}



export default homePage;