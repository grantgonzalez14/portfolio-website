import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <>
            <section class="contact" id="contact">
                <div class="contact-form-container" data-aos="fade-down" data-aos-duration="1000">
                    <h1>Get In Touch With Me</h1>
                    <div class="contact-form">
                        <form action="https://formspree.io/f/xnqrjaoe" method="POST">
                            <div class="form-control">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="sender-name" placeholder="Enter your name" class="input-field" required/>
                            </div>
                            <div class="form-control">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="sender-email" placeholder="Enter Your Email" class="input-field" required/>
                            </div>
                            <div class="form-control">
                                <label for="message">Message</label>
                                <textarea id="message" cols="60" rows="10" placeholder="Enter Your Message" name="message" class="input-field" required></textarea>
                            </div>
                            <input type="submit" value="Submit" id="submit-btn" class="submit-btn"/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;