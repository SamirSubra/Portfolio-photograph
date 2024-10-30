const HeroSection = () => {
    // Définir les styles en tant qu'objet
    const videoStyle: React.CSSProperties = {
        cursor: 'auto',
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        display: 'block',
        objectFit: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        objectPosition: '50% 50%',

    };

    return (
        <section className="hero-section">
            <div className="video-container">
                <video
                    src="https://framerusercontent.com/assets/ZqwCIWSNfIeP0gpjU0LjzXqEDU.mp4"
                    preload="auto"
                    style={videoStyle} // Utiliser l'objet pour le style
                />
                <div className="red-overlay"></div>
                <div className="image"></div>
            </div>

        </section>
    );
};

export default HeroSection;
