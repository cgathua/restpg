
function menu() {
    const content = document.getElementById('content');

    // menu section
    const menu =
        `
            <section id="menu" aria-label="menu">
                <h2>Menu</h2>
                <figure class="container" aria-label="menu content">
                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-chicken-mackay-5474836.avif" type="image/avif">
                            <img 
                                src="./images/pexels-chicken-mackay-5474836.jpg" 
                                width="640" 
                                height="427"
                                alt="chicken burger" 
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Chicken Burger</figcaption>
                        <small>Ingredients: boneless chicken breasts, flour, lettuce, mayo & buns.</small>
                        <small class="details">
                            <s>$8.99</s>
                            <p>$6.99</p>
                        </small>
                    </figure>

                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-pixabay-60616.avif" type="image/avif">
                            <img 
                                src="./images/pexels-pixabay-60616.jpg" 
                                width="640" 
                                height="427" 
                                alt="chicken nuggets"
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Chicken Nuggets</figcaption>
                        <small>Ingredients: boneless chicken breasts, bread crumbs, parmesan cheese & lettuce.</small>
                        <small class="details">
                            <s>$9.99</s>
                            <p>$7.99</p>
                        </small>
                    </figure>

                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-caricatte-2336673.avif" type="image/avif">
                            <img 
                                src="./images/pexels-caricatte-2336673.jpg" 
                                width="640" 
                                height="427" 
                                alt="roast beef"
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Roast Beef</figcaption>
                        <small>Ingredients: beef eye of round roast, garlic powder & freshly ground black pepper.</small>
                            <small class="details">
                                <s>$8.99</s>
                                <p>$6.99</p>
                            </small>
                    </figure>

                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-rajesh-tp-1600711.avif" type="image/avif">
                            <img 
                                src="./images/pexels-rajesh-tp-1600711.jpg" 
                                width="640" 
                                height="427" 
                                alt="club sandwich"
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Club Sandwich</figcaption>
                        <small>Ingredients: turkey, bacon, sliced bread, tomatoes & mayonnaise.</small>
                        <small class="details">
                            <s>$8.99</s>
                            <p>$6.99</p>
                        </small>
                    </figure>

                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-engin-akyurt-3219483.avif" type="image/avif">
                            <img 
                                src="./images/pexels-engin-akyurt-3219483.jpg" 
                                width="640" 
                                height="427" 
                                alt="beef burger"
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Beef Burger</figcaption>
                        <small>Ingredients: lean ground beef, cheddar cheese, tomatoes, lettuce & buns.</small>
                        <small class="details">
                            <s>$8.99</s>
                            <p>$6.99</p>
                        </small>
                    </figure>

                    <figure class="menu-items" aria-label="menu items">
                        <picture class="thumbnail">
                            <source srcset="./images/pexels-rajesh-tp-1600732.avif" type="image/avif">
                            <img 
                                src="./images/pexels-rajesh-tp-1600732.jpg" 
                                width="640" 
                                height="427" 
                                alt="chicken sandwich"
                                loading="lazy"
                            >
                        </picture>
                        <figcaption>Chicken Sandwich</figcaption>
                        <small>Ingredients: boneless chicken breasts, lettuce, mayo & footlong bun.</small>
                        <small class="details">
                            <s>$9.99</s>
                            <p>$8.99</p>
                        </small>
                    </figure>

                </figure>
            </section>
        `
    content.insertAdjacentHTML('beforeend', menu);
}

export default menu;