import { useEffect, useState } from 'react';
import BackgroundImage from '../src/assets/resources/bg-cafe-lg.jpg';
import Tab from '../src/Tab';
import Card from '../src/Card';

export interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: string | null;
    votes: number;
    popular: boolean;
    available: boolean;
}

function App() {
    const [data, setdata] = useState<Product[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'available'>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json',
        )
            .then((response) => response.json())
            .then((data) => {
                setdata(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Filter products based on tab
    const filteredProducts = data ? (activeTab === 'all' ? data : data.filter((p: Product) => p.available)) : [];

    return (
        <div className="relative min-h-screen font-bold">
            {/* Fixed hero background */}
            <div
                className="fixed top-0 left-0 w-full h-[40vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>

            {/* Scrollable content */}
            <div className="relative w-[90%] max-w-6xl mx-auto bg-[#1B1D1F]/90 rounded-lg shadow-lg pt-[5vh] pb-10 px-5 lg:px-10 mt-20">
                {/* Vector decoration */}
                <img
                    src="../src/assets/resources/vector.svg"
                    alt="decoration"
                    className="fixed top-10 right-0 h-[30%] w-auto -z-10 opacity-40"
                />
                {/* Heading */}
                <div className="text-white flex items-center justify-center p-4">
                    <h1 className="text-4xl font-bold text-center">Our Collection</h1>
                </div>

                {/* Description */}
                <span className="text-[#4D5562] flex items-center justify-center w-[90%] lg:max-w-[500px] mx-auto text-center">
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and
                    origins, expertly roasted in small batches and shipped fresh weekly.
                </span>

                {/* Tabs */}
                <div className="flex gap-4 items-center justify-center mt-10 mb-5 flex-wrap">
                    <Tab label="All Products" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                    <Tab
                        label="Available Now"
                        active={activeTab === 'available'}
                        onClick={() => setActiveTab('available')}
                    />
                </div>

                {/* Products Grid */}
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 pb-10">
                        {loading && <p className="text-white text-center col-span-full">Loading...</p>}
                        {!loading &&
                            filteredProducts.map((product: Product) => (
                                <Card
                                    key={product.id}
                                    image={product.image}
                                    popular={product.popular}
                                    label={product.name}
                                    value={product.price}
                                    rating={product.rating}
                                    votes={product.votes}
                                    available={product.available}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
