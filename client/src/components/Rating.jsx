import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className="game_rating_details">
                <div className="game_rating_icon">
                    <img src="" />
                </div>
                <div>
                    <div className="game_rating_descriptors">
                        <p>
                            Blood and Gore
                            <br/>
                            Partial Nudity
                            <br/>
                            Sexual Content
                            <br/>
                            Strong Language
                            <br/>
                            Violence
                        </p>
                    </div>
                </div>
            </div>
            <div className="game_rating_agency"></div>
        </div>
    )
}

export default Rating;