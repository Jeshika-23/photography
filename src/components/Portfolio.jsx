import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Portfolio.css';

const categories = ["All", "Weddings", "Portraits", "Travel", "Events"];

// Placeholder data - in a real app, this would be imported or fetched
const portfolioItems = [
    { id: 1, category: "Weddings", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop", title: "Eternal Vows" },
    { id: 2, category: "Portraits", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop", title: "Grace" },
    { id: 3, category: "Travel", src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop", title: "Swiss Alps" },
    { id: 4, category: "Events", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop", title: "Gala Night" },
    { id: 5, category: "Weddings", src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2536&auto=format&fit=crop", title: "The First Dance" },
    { id: 6, category: "Portraits", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop", title: "Urban Soul" },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <h4 className="section-label">Selected Works</h4>
                    <h2 className="section-title">A Visual <span className="italic">Archive</span></h2>
                </div>

                {/* Filter Categories */}
                <div className="portfolio-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="portfolio-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="portfolio-item" onClick={() => setSelectedImage(item)}>
                            <div className="image-wrapper">
                                <img src={item.src} alt={item.title} />
                                <div className="item-overlay">
                                    <h3>{item.title}</h3>
                                    <span>{item.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="close-lightbox"><X size={32} /></button>
                    <img src={selectedImage.src} alt={selectedImage.title} onClick={(e) => e.stopPropagation()} />
                    <div className="lightbox-caption">
                        <h3>{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
