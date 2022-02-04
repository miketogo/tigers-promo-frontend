
import './Header.css';



function Header() {
    return (
        <header className="header">
            <div className="header__logo-container">
                <svg className="header__logo-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_834_21823)">
                        <rect width="60" height="60" rx="12" fill="white" />
                        <circle cx="1.5" cy="1.5" r="7.5" fill="url(#paint0_angular_834_21823)" />
                        <circle cx="1.5" cy="58.5" r="7.5" fill="url(#paint1_angular_834_21823)" />
                        <circle cx="58.5" cy="1.5" r="7.5" fill="url(#paint2_angular_834_21823)" />
                        <circle cx="58.5" cy="58.5" r="7.5" fill="url(#paint3_angular_834_21823)" />
                        <circle cx="29.5" cy="30.5" r="7.5" transform="rotate(90 29.5 30.5)" fill="url(#paint4_linear_834_21823)" />
                        <circle cx="6" cy="30" r="12" transform="rotate(90 6 30)" fill="url(#paint5_linear_834_21823)" />
                        <circle cx="54" cy="30" r="12" transform="rotate(90 54 30)" fill="url(#paint6_linear_834_21823)" />
                        <circle cx="30" cy="6" r="12" fill="url(#paint7_angular_834_21823)" />
                        <circle cx="30" cy="54" r="12" fill="url(#paint8_angular_834_21823)" />
                    </g>
                    <defs>
                        <radialGradient id="paint0_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 1.67442) rotate(180) scale(7.5)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <radialGradient id="paint1_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 58.6744) rotate(180) scale(7.5)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <radialGradient id="paint2_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.5 1.67442) rotate(180) scale(7.5)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <radialGradient id="paint3_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.5 58.6744) rotate(180) scale(7.5)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <linearGradient id="paint4_linear_834_21823" x1="37" y1="30.6744" x2="22" y2="30.6744" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_834_21823" x1="18" y1="30.2791" x2="-6" y2="30.2791" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_834_21823" x1="66" y1="30.2791" x2="42" y2="30.2791" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </linearGradient>
                        <radialGradient id="paint7_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 6.27907) rotate(180) scale(12)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <radialGradient id="paint8_angular_834_21823" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 54.2791) rotate(180) scale(12)">
                            <stop stopColor="#E250E5" />
                            <stop offset="0.482292" stopColor="#4B50E6" />
                            <stop offset="0.982292" stopColor="#E250E5" />
                        </radialGradient>
                        <clipPath id="clip0_834_21823">
                            <rect width="60" height="60" rx="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p className="header__logo-text">Higgs field</p>
            </div>

        </header>
    );
}

export default Header;