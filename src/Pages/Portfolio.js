import React,{ Component } from "react";
class Portfolio extends Component {

    render() {
        return (
            <div>
                <div className="container">	
                    <div id="bl-main" className="bl-main">
                        <section>
                            <div className="bl-box">
                                <h2 className="bl-icon bl-icon-about">About</h2>
                            </div>
                            <div className="bl-content">
                                <h2>About this layout</h2>
                                <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
                                <p>
                                    <a href="http://tympanus.net/Development/ResponsiveMultiLevelMenu/"><strong>&laquo; Previous Demo</strong></a> |
                                    <a href="http://tympanus.net/codrops/?p=14783"><strong>Back to the Codrops Article</strong></a>
                                </p>
                            </div>
                            <span className="bl-icon bl-icon-close"></span>
                        </section>
                        <section id="bl-work-section">
                            <div className="bl-box">
                                <h2 className="bl-icon bl-icon-works">Works</h2>
                            </div>
                            <div className="bl-content">
                                <h2>My Works</h2>
                                <p>Mung bean maize dandelion sea lettuce catsear bunya nuts ricebean tatsoi caulie horseradish pea.</p>
                                <ul id="bl-work-items">
                                    <li data-panel="panel-1"><a href="#"><img src="images/1.jpg" /></a></li>
                                    <li data-panel="panel-2"><a href="#"><img src="images/2.jpg" /></a></li>
                                    <li data-panel="panel-3"><a href="#"><img src="images/3.jpg" /></a></li>
                                    <li data-panel="panel-4"><a href="#"><img src="images/4.jpg" /></a></li>
                                </ul>
                                <p>Illustrations by <a href="http://dribbble.com/isaac317/click">Isaac Montemayor</a></p>
                            </div>
                            <span className="bl-icon bl-icon-close"></span>
                        </section>
                        <section>
                            <div className="bl-box">
                                <h2 className="bl-icon bl-icon-blog">Blog</h2>
                            </div>
                            <div className="bl-content">
                                <h2>My Musings</h2>
                                <article>
                                    <h3>Being a Freelance Designer</h3>
                                    <p>Stumptown helvetica cardigan, odd future seitan tattooed flannel. Kale chips direct trade cray beard. 8-bit etsy butcher post-ironic blog lo-fi mcsweeney's, sustainable pickled umami flexitarian DIY ethical plaid trust fund. Wolf cred organic, terry richardson aesthetic four loko occupy vegan chillwave readymade deep... <a href="#">Read more</a></p>
                                </article>
                                <article>
                                    <h3>Working with Photoshop</h3>
                                    <p>Cosby sweater odd future gluten-free actually dreamcatcher. Fixie cray vice sriracha disrupt, lo-fi pitchfork mcsweeney's swag YOLO meh chambray etsy. Keytar sriracha fanny pack church-key hashtag vice blog. 3 wolf moon VHS helvetica, raw denim deep v shoreditch seitan twee... <a href="#">Read more</a></p>
                                </article>
                                <article>
                                    <h3>Making use of Icon Fonts</h3>
                                    <p>Locavore irony gastropub chillwave, butcher meggings flexitarian pinterest master cleanse godard. Intelligentsia pop-up neutra, williamsburg gastropub godard pinterest swag deep v umami lomo. Butcher next level 90's wolf bushwick, narwhal photo booth YOLO kale chips whatever small batch. Meh viral ethical hella cardigan portland, street art mlkshk meggings mixtape kale chips cliche messenger bag pitchfork... <a href="#">Read more</a></p>
                                </article>
                                <article>
                                    <h3>Being a Freelance Designer</h3>
                                    <p>Stumptown helvetica cardigan, odd future seitan tattooed flannel. Kale chips direct trade cray beard. 8-bit etsy butcher post-ironic blog lo-fi mcsweeney's, sustainable pickled umami flexitarian DIY ethical plaid trust fund. Wolf cred organic, terry richardson aesthetic four loko occupy vegan chillwave readymade deep... <a href="#">Read more</a></p>
                                </article>
                                <article>
                                    <h3>Working with Photoshop</h3>
                                    <p>Cosby sweater odd future gluten-free actually dreamcatcher. Fixie cray vice sriracha disrupt, lo-fi pitchfork mcsweeney's swag YOLO meh chambray etsy. Keytar sriracha fanny pack church-key hashtag vice blog. 3 wolf moon VHS helvetica, raw denim deep v shoreditch seitan twee... <a href="#">Read more</a></p>
                                </article>
                                <article>
                                    <h3>Making use of Icon Fonts</h3>
                                    <p>Locavore irony gastropub chillwave, butcher meggings flexitarian pinterest master cleanse godard. Intelligentsia pop-up neutra, williamsburg gastropub godard pinterest swag deep v umami lomo. Butcher next level 90's wolf bushwick, narwhal photo booth YOLO kale chips whatever small batch. Meh viral ethical hella cardigan portland, street art mlkshk meggings mixtape kale chips cliche messenger bag pitchfork... <a href="#">Read more</a></p>
                                </article>
                            </div>
                            <span className="bl-icon bl-icon-close"></span>
                        </section>
                        <section>
                            <div className="bl-box">
                                <h2 className="bl-icon bl-icon-contact">Contact</h2>
                            </div>
                            <div className="bl-content">
                                <h2>Get in touch</h2>
                                <p>Pinterest semiotics single-origin coffee craft beer thundercats irony, tumblr bushwick intelligentsia pickled. Narwhal mustache godard master cleanse street art, occupy ugh selfies put a bird on it cray salvia four loko gluten-free shoreditch. Occupy american apparel freegan cliche. Mustache trust fund 8-bit jean shorts mumblecore thundercats. Pour-over small batch forage cray, banjo post-ironic flannel keffiyeh cred ethnic semiotics next level tousled fashion axe. Sustainable cardigan keytar fap bushwick bespoke.</p>
                            </div>
                            <span className="bl-icon bl-icon-close"></span>
                        </section>
                        <div className="bl-panel-items" id="bl-panel-work-items">
                            <div data-panel="panel-1">
                                <div>
                                    <img src="images/1.jpg" />
                                    <h3>Fixie bespoke</h3>
                                    <p>Iphone artisan direct trade ethical Austin. Fixie bespoke banh mi ugh, deep v vinyl hashtag. Tumblr gentrify keffiyeh pop-up iphone twee biodiesel. Occupy american apparel freegan cliche. Mustache trust fund 8-bit jean shorts mumblecore thundercats. Pour-over small batch forage cray, banjo post-ironic flannel keffiyeh cred ethnic semiotics next level tousled fashion axe. Sustainable cardigan keytar fap bushwick bespoke.</p>
                                </div>
                            </div>
                            <div data-panel="panel-2">
                                <div>
                                    <img src="images/2.jpg" />
                                    <h3>Chillwave mustache</h3>
                                    <p>Squid vinyl scenester literally pug, hashtag tofu try-hard typewriter polaroid craft beer mlkshk cardigan photo booth PBR. Chillwave 90's gentrify american apparel carles disrupt. Pinterest semiotics single-origin coffee craft beer thundercats irony, tumblr bushwick intelligentsia pickled. Narwhal mustache godard master cleanse street art, occupy ugh selfies put a bird on it cray salvia four loko gluten-free shoreditch.</p>
                                </div>
                            </div>
                            <div data-panel="panel-3">
                                <div>
                                    <img src="images/3.jpg" />
                                    <h3>Austin hella</h3>
                                    <p>Ethical cray wayfarers leggings vice, seitan banksy small batch ethnic master cleanse. Pug chillwave etsy, scenester meh occupy blue bottle tousled blog tonx pinterest selvage mixtape swag cosby sweater. Synth tousled direct trade, hella Austin craft beer ugh chambray.</p>
                                </div>
                            </div>
                            <div data-panel="panel-4">
                                <div>
                                    <img src="images/4.jpg" />
                                    <h3>Brooklyn dreamcatcher</h3>
                                    <p>Fashion axe 90's pug fap. Blog wayfarers brooklyn dreamcatcher, bicycle rights retro YOLO. Wes anderson lomo 90's food truck 3 wolf moon, twee jean shorts. Iphone small batch twee wolf yr before they sold out. Brooklyn echo park cred, portland pug selvage flannel seitan tousled mcsweeney's.</p>
                                </div>
                            </div>
                            <nav>
                                <span className="bl-next-work">&gt; Next Project</span>
                                <span className="bl-icon bl-icon-close"></span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio