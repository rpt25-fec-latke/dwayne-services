import React from 'react'

const InfoPanel = (props) => {
    return (
        <div>
            <div className="game_details">
                <div className="block_content">
                    <div className="block_content_inner">
                        <div className="details_block">
                            <b>Title:</b>
                            {props.infoPanel[0]}
                            <br />
                            <b>Genre:</b>
                            {props.infoPanel[1]}
                            <br />
                            <b>Developer:</b>
                            {props.infoPanel[2]}
                            <br />
                            <b>Publisher:</b>
                            {props.infoPanel[3]}
                            <br />
                            <b>Franchise:</b>
                            {props.infoPanel[4]}
                            <br />
                            <b>Release Date:</b>
                            {props.infoPanel[5].toLocaleString()}
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel;