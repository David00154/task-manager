import React, { FC, ReactElement, useRef } from 'react'
import { useEffect } from 'react'

const PopupCard: FC<{ children: ReactElement }> = ({ children }) => {

    return (
        <>
            <div

                className='popup-modal popup-modal-fade-in'>
                <div className="popup-modal-container">
                    <div className="popup-modal-wrapper">
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>{`
            
            .popup-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                transition: opacity linear 150ms;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1040;
                overflow-y: auto;
            }

            .popup-modal.popup-modal-fade-in {
                opacity: 1;
            }

            .popup-modal-button-close {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 18px;
                right: 18px;
                padding: 12px;
                cursor: pointer;
                background: #1a1f2e;
                border: none;
                border-radius: 50%;
            }

            .popup-modal-button-close:focus-visible {
                outline-color: white;
            }

            .popup-modal-button-close svg {
                fill: #777;
                transition: fill 200ms ease 0s;
            }

            {/* .popup-modal-button-close:hover svg {
                fill: #fff;
            } */}

            .popup-modal-overlay {
                background: rgba(0, 0, 0, 0.5);
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;  
                right: 0;
            }

            .popup-modal-container {
                display: flex;
                margin: 3rem;
                min-height: calc(100vh - 6rem); /* 100vh - 2 * margin*/
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 480px) {
                .popup-modal-container {
                    margin: 1rem;
                    min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
                }
            }

            .popup-modal-wrapper {
                box-sizing: border-box;
                position: relative;
                display: flex;
                {/* align-items: center; */}
                flex-direction: column;
                z-index: 1050;
                max-width: 400px;
                border-radius: 6px;
                background: #1a1f2e;
                {/* background: #10141f; */}
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
                /* font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
                flex: 1;
            }    
        `}</style>
        </>
    )
}

export default PopupCard