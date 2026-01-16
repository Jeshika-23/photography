import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Portfolio.css';

const categories = ["All", "Newborn", "Milestones", "Toddler", "Family"];

// Placeholder data - in a real app, this would be imported or fetched
const portfolioItems = [
    { id: 1, category: "Newborn", src: "https://images.unsplash.com/photo-1544126566-47535b6c31bf?q=80&w=2670&auto=format&fit=crop", title: "Baby Leo" },
    { id: 2, category: "Questions", src: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=2670&auto=format&fit=crop", title: "First Steps" },
    { id: 3, category: "Family", src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop", title: "The Smiths" },
    { id: 4, category: "Toddler", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2541&auto=format&fit=crop", title: "Joyful Play" },
    { id: 5, category: "Newborn", src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop", title: "Sleeping Angel" },
    { id: 6, category: "Milestones", src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=2664&auto=format&fit=crop", title: "First Birthday" },
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
