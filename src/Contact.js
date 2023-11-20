function Contact(){
    return(
        <div>
                    <section id="contact-section">
                        <div className="contact-container">
                            <h2 className="contact-head">CONTACT</h2>
                            <p className="contact-para">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            <div className="contact-row">
                                <div className="contact-col">
                                    <div className="contact-card">
                                        <div className="location">
                                            <div className="loc-icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <div className="loc-details">
                                                <h5 className="loc-head">Location:</h5>
                                                <p className="loc-para">A108 Adam Street, New York, NY 535022</p>

                                            </div>

                                        </div>

                                        <div className="email">
                                            <div className="mail-icon">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            </div>
                                            <div className="mail-details">
                                                <h5 className="mail-head">Email:</h5>
                                                <p className="mail-para">info@example.com</p>

                                            </div>

                                        </div>

                                        
                                        <div className="call">
                                            <div className="mail-icon">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <div className="call-details">
                                                <h5 className="call-head">Call:</h5>
                                                <p className="call-para">+1 5589 55488 55s</p>

                                            </div>

                                        </div>

                                        <div className="maps">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.306659302532!2d77.37185729462247!3d8.918888606581582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042627cf85f8b3%3A0xf54111296f455f1b!2sPavoorchatram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1696653728788!5m2!1sen!2sin" Style={{ height:"200px", width:"200px" , border:0, allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

                                        </div>

                                    </div>

                                </div>

                                <div className="contact-col2">
                                    <form>
                                        <div className=" form-row">
                                            <div className="form-col">
                                                <div className="input-box">
                                                    <span>Your Name</span>
                                                    <label for="name"></label>
                                                    <input id="name" type="text" />
                                                
                                                </div>
                                                
                                                <div className="input-email">
                                                    <span>Your Email</span>
                                                    <label for="email"></label>
                                                    <input id="email"type="text" />
                                                </div>
                                            </div>
                                            
                                                <div className="sub">
                                                    <span>Subject</span>
                                                <label for="name"></label>
                                                <input id="name" type="text" />
                                                </div>
                                                
                                                <div className="meg">
                                                    <span>Message</span>
                                                <label for="address"></label>
                                                <textarea id="address" rows="10" cols="73"></textarea>
                                                </div>
                                                <div className="form-bt">
                                                <button className="form-btn">Send Message</button>
                                                </div>
                                            
                                        </div>
                                        
                                        
                                    </form>	

                                </div>

                            </div>

                        </div>

                       </section>
        </div>
    )
}

export default Contact