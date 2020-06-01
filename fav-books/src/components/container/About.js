import React from 'react';
import RandomQuotes from '../presentational/RandomQuotes';
import '../../styles/About.scss';
import book from '../../images/book.png';


function About(){
    return (
        <section className="about">
            <div className="about-book">
                <img src={book} alt="open book"/>
            </div>
            <div className="about-book-content">
                <div className="about-text">
                    <h2>About</h2>
                    <p>
                        Here you can find any kind of books..<br/>
                        Sort them as you like,<br/>
                        Read their descriptions,<br/>
                        Find your Fav-Books<br/>
                        and make your Fav-List..
                    </p>
                </div>
                <RandomQuotes />
            </div>
        </section>
    );
};

export default About;