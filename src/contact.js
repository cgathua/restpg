
function contactPage() {
    const content = document.querySelector('#content');
    const contact =
        `
<section id="contact" class="contact" aria-label="contact">
            <figure class="container" aria-label="contact content">
                <form action="contact-form" aria-label="contact-form" class="form">
                    <fieldset>
                        <legend>
                            <label 
                                for="name">Name <input id="name" type="text" aria-label="legal name"
                                autocomplete="cc-name" title="first and last name, separated by a gap"
                                pattern="(^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$)" required="full name">
                            </label>
                            <label 
                                for="email">Email <input id="email" type="email" required="current email"
                                aria-label="valid email" autocomplete="email">
                            </label>
                        </legend>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <label for="message">Message
                                <textarea name="message" id="message" cols="30" rows="5" required="valid message"></textarea>
                            </label>
                        </legend>
                    </fieldset>
                    <input type="submit" id="submit" value="Send Message" aria-label="click button">
                </form>
                <!--END OF FORM SECTION-->
        </section>
`

    content.insertAdjacentHTML('beforeend', contact);

}

export default contactPage;