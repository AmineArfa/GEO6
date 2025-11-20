import React, { useEffect, useState } from 'react';

export const LogoCarousel: React.FC = () => {
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        // List of all customer logos in /public/customer folder
        const logoList = [
            '/customer/AFRM_BIG.svg',
            '/customer/APRN_BIG.svg',
            '/customer/BYND_BIG.svg',
            '/customer/CELH_BIG.svg',
            '/customer/CROX_BIG.svg',
            '/customer/EFX_BIG.svg',
            '/customer/FDS_BIG.svg',
            '/customer/G_BIG.svg',
            '/customer/HIMS.svg',
            '/customer/HUBS_BIG.svg',
            '/customer/LC_BIG.svg',
            '/customer/LULU_BIG.svg',
            '/customer/OTLY_BIG.svg',
            '/customer/ROKU_BIG.svg',
            '/customer/SOFI_BIG.svg',
            '/customer/SQSP_BIG.svg',
            '/customer/YETI_BIG.svg',
        ];
        
        setLogos(logoList);
    }, []);

    // Use logos directly
    const logosToUse = logos;
    
    // Duplicate logos multiple times for seamless infinite scroll
    const duplicatedLogos = [...logosToUse, ...logosToUse, ...logosToUse];

    if (logosToUse.length === 0) {
        return (
            <section className="py-12 bg-transparent relative overflow-hidden">
                <div className="relative">
                    <div className="flex items-center justify-center gap-16 px-8">
                        <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
                <div className="carousel-container">
                    <div className="carousel-track">
                        {duplicatedLogos.map((logo, index) => (
                            <div key={`logo-${index}`} className="carousel-item">
                                <img
                                    src={logo}
                                    alt={`Customer logo ${(index % logosToUse.length) + 1}`}
                                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 carousel-logo"
                                    style={{ minWidth: '120px', maxWidth: '180px' }}
                                    onError={(e) => {
                                        // Hide broken images
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        
            <style>{`
                .carousel-container {
                    overflow: hidden;
                    width: 100%;
                }
                
                .carousel-track {
                    display: flex;
                    gap: 4rem;
                    width: fit-content;
                    animation: scroll 40s linear infinite;
                }
                
                .carousel-track:hover {
                    animation-play-state: paused;
                }
                
                .carousel-item {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .carousel-logo {
                    filter: brightness(0) saturate(100%) invert(69%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
                }
                
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-33.333% - 4rem));
                    }
                }
            `}</style>
        </section>
    );
};
