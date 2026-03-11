import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const SpaceParticles = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    // SVG paths for Real Estate Icons (Building, House, Growth Chart)
    const buildingPath = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5";
    const housePath = "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10";
    const chartPath = "M18 20V10 M12 20V4 M6 20v-6";

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false, zIndex: 0 },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 250,
                            links: {
                                opacity: 0.6,
                                color: "#00ffcc"
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#00ffcc", "#005f73"], // Mixed colors for icons
                    },
                    links: {
                        color: "#00ffcc",
                        distance: 200,
                        enable: true, // Enable baseline connections
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.8, // Slow float
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30, // Fewer icons to prevent visual clutter
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            sync: false
                        }
                    },
                    shape: {
                        type: "image",
                        options: {
                            image: [
                                // House Image
                                {
                                    src: "/assets/hero/house_glass.png",
                                    width: 100,
                                    height: 100
                                },
                                // Key Image
                                {
                                    src: "/assets/hero/key_glass.png",
                                    width: 100,
                                    height: 100
                                },
                                // Building Image
                                {
                                    src: "/assets/hero/building_glass.png",
                                    width: 100,
                                    height: 100
                                },
                                // Certificate Image
                                {
                                    src: "/assets/hero/certificate_glass.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                        }
                    },
                    rotate: {
                        value: { min: 0, max: 360 },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 1 // Slower rotation for premium feel
                        }
                    },
                    size: {
                        value: { min: 20, max: 40 }, // Larger for visibility
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default SpaceParticles;
