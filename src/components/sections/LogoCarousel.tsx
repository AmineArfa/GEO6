import React, { useEffect, useState } from 'react';

export const LogoCarousel: React.FC = () => {
    const [logos, setLogos] = useState<string[]>([]);
    const [loadedLogos, setLoadedLogos] = useState<string[]>([]);

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
        
        // Preload logos and filter out any that fail to load
        const preloadLogos = async () => {
            const validLogos: string[] = [];
            
            await Promise.all(
                logoList.map((logo) => {
                    return new Promise<void>((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            validLogos.push(logo);
                            resolve();
                        };
                        img.onerror = () => {
                            // Silently skip broken images
                            resolve();
                        };
                        img.src = logo;
                    });
                })
            );
            
            setLoadedLogos(validLogos);
        };
        
        preloadLogos();
    }, []);

    // Use loaded logos, fallback to all logos if preloading hasn't completed
    const logosToUse = loadedLogos.length > 0 ? loadedLogos : logos;
    
    // Duplicate logos multiple times for seamless infinite scroll
    const duplicatedLogos = [...logosToUse, ...logosToUse, ...logosToUse];

    if (logosToUse.length === 0) {
        return (
            <section className="py-12 bg-transparent relative overflow-hidden">
                <div className="relative">
                    {/* Left gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    {/* Right gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    
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
                {/* Left gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                {/* Right gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
                
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

