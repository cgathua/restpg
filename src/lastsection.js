
function lastSection(){
    const content = document.getElementById('content');// why choose us section

    // why choose us section
    const lastSection =
        `
            <section id="why_choose_us" class="trust" aria-label="why choose us">
                <figure class="container" aria-label="why choose us content">
    
                    <article class="text">
                        <h3>Why choose us?</h3>
                        <p>All of our beef & chicken comes from animals, that have not been administered hormones or
                            antibiotics.
                        </p>
                        <p>Sign up below, to receive coupons.</p>
                    </article>  
                </figure>
            </section>
        `
    content.insertAdjacentHTML('beforeend', lastSection);
}

export default lastSection;