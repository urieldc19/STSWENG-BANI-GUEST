import { useState } from 'react';
import { Button } from "@mantine/core"

export function MenuModal() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);

		if (!isOpen) { document.body.style.overflow = 'hidden'; }	// Disable scroll when modal is open
		else { document.body.style.overflow = 'auto'; }				// Re-enable scroll when modal is closed


	}

	return ( <>
        <Button variant="filled" color="#2F515B" radius="md" onClick={toggleModal}>See menu</Button>

		{isOpen && (
        <div className="fixed inset-0 w-full z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-slate-200 p-6 w-2/3 h-5/6 rounded-lg shadow-lg relative opacity-100 z-60 overflow-y-scroll">
				{/* Close Button */}
				<button
				className="absolute text-black top-2 left-2 hover:text-gray-700"
				onClick={toggleModal}
				>
				&#x2715;
				</button>

				<div>

				<div class="flex flex-col m-6 gap-4">
					<div class="flex flex-col gap-4 md:flex-row w-full">
						<div class="w-full md:w-9/12">
							<h1 class="menu-header">Appetizers</h1>
							<div class="menu-item">
								<div class="item-name">Club Paradise Sandwich <small>w/ drinks</small></div>
								<div class="item-price">₱450</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Hidden Dynamite</div>
								<div class="item-price">₱50</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Calamares</div>
								<div class="item-price">₱300</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Onion Rings</div>
								<div class="item-price">₱250</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Crispy Kangkong</div>
								<div class="item-price">₱160</div>
							</div>
							<div class="menu-item">
								<div class="item-name">French Fries</div>
								<div class="item-price">₱180</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Cheese Stick</div>
								<div class="item-price">₱180</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Nachos <small>w/ dip</small></div>
								<div class="item-price">₱300</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Kilawin</div>
								<div class="item-price">₱350</div>
							</div>
							<div class="menu-item">
								<div class="item-name">French Fries</div>
								<div class="item-price">₱400</div>
							</div>
						</div>

						<div class="w-full md:w-3/12 py-4 md:py-0">
							<img src="./images/restaurants/slideshow2.png" class="w-full h-full object-cover rounded-lg" />
						</div>
					</div>
					<div class="flex flex-col md:flex-row w-full gap-8">
						<div class="flex flex-col md:w-6/12 gap-4">

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Paradise Delight</h1>
								<div class="menu-item">
									<div class="item-name">California Maki</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Paradise Volcano Maki</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Sashimi</div>
									<div class="item-price">₱350</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Shrimp Tempura</div>
									<div class="item-price">₱550</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Vegetable Tempura</div>
									<div class="item-price">₱450</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Seafood</h1>
								<div class="menu-item">
									<div class="item-name">Sweet and Sour Fish</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Fusion Buttered Shrimp</div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Sinigang na Hipon</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Halabos na Hipon</div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Ginataang Alimango</div>
									<div class="item-price">₱750</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Fried Bangus</div>
									<div class="item-price">₱300</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Sizling Rice Meals <small>(solo)</small></h1>
								<div class="menu-item">
									<div class="item-name">Chicken Inasal</div>
									<div class="item-price">₱250</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Porkchop</div>
									<div class="item-price">₱250</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Tapa <small>w/ egg</small></div>
									<div class="item-price">₱250</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Tocino <small>w/ egg</small></div>
									<div class="item-price">₱250</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Hotdog <small>w/ egg</small></div>
									<div class="item-price">₱200</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Longanisa <small>w/ egg</small></div>
									<div class="item-price">₱200</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Sizzling Sisig</div>
									<div class="item-price">₱250</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Extra Rice</h1>
								<div class="menu-item">
									<div class="item-name">Plain Rice</div>
									<div class="item-price">₱25 <small>per cup</small></div>
								</div>
								<div class="menu-item">
									<div class="item-name">Garlic Rice</div>
									<div class="item-price">₱35 <small>per cup</small></div>
								</div>
								<div class="menu-item">
									<div class="item-name">Seafood Rice</div>
									<div class="item-price">₱350 <small>per platter</small></div>
								</div>
								<div class="menu-item">
									<div class="item-name">Egg Fried Rice</div>
									<div class="item-price">₱250 <small>per platter</small></div>
								</div>
							</div>
							<img src="./images/restaurants/slideshow3.png" class="w-full h-full object-cover rounded-lg" />

						</div>
						<div class="flex flex-col md:w-6/12 gap-4">

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Salad</h1>
								<div class="menu-item">
									<div class="item-name">Toasted Paradise Salad</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Kani Salad</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Chef Salad</div>
									<div class="item-price">₱400</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Pasta and Noodles</h1>
								<div class="menu-item">
									<div class="item-name">Pancit Bihon</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Pancit Canton</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Traditional Spaghetti</div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Special Carbonara</div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Lomi</div>
									<div class="item-price">₱300</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Beef</h1>
								<div class="menu-item">
									<div class="item-name">Beef Steak</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Beef Nilaga</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Bulalo</div>
									<div class="item-price">₱600</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Pigar-Pigar</div>
									<div class="item-price">₱500</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Pork</h1>
								<div class="menu-item">
									<div class="item-name">Menudo</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Crispy Pata</div>
									<div class="item-price">₱700</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Crispy Kare-Kare</div>
									<div class="item-price">₱600</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Pork Steak</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Pork Sinigang</div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Patatim</div>
									<div class="item-price">₱700</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Bicol Express</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Liempo Inasal</div>
									<div class="item-price">₱400</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Chicken</h1>
								<div class="menu-item">
									<div class="item-name">Native Chicken Binacol</div>
									<div class="item-price">₱700</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Afritada</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Chicken Inasal</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Fried Chicken <small>(whole)</small></div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Fried Chicken <small>(half)</small></div>
									<div class="item-price">₱350</div>
								</div>
							</div>

							<div class="flex flex-col w-full">
								<h1 class="menu-header">Vegetable</h1>
								<div class="menu-item">
									<div class="item-name">Pinakbet <small>w/ Bagnet</small></div>
									<div class="item-price">₱450</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Chopsuey</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Ginataang Gulay</div>
									<div class="item-price">₱400</div>
								</div>
								<div class="menu-item">
									<div class="item-name">Buttered Veggies</div>
									<div class="item-price">₱400</div>
								</div>
							</div>

						</div>
					</div>

					
					<div class="flex flex-col md:flex-row w-full gap-8">
						<div class="flex flex-col md:w-6/12">
							<h1 class="menu-header">Beverages</h1>
							<div class="menu-item">
								<div class="item-name">Lemonade Pitcher</div>
								<div class="item-price">₱180</div>
							</div>
							<div class="menu-item-multiline">
								<div class="menu-item">
									<div class="item-name">Glass</div>
									<div class="item-price">₱65</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Flavors: Cucumber Lemonade, House Blend, Blue Lemonade</div>
								</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Pineapple Juice in Can</div>
								<div class="item-price">₱80</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Brewed Coffee</div>
								<div class="item-price">₱50</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Hot Tea</div>
								<div class="item-price">₱50</div>
							</div>
							<div class="menu-item">
								<div class="item-name">3 in 1 Coffee</div>
								<div class="item-price">₱35</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Soft Drinks <small>1 L</small></div>
								<div class="item-price">₱120</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Bottled Water <small>500 mL</small></div>
								<div class="item-price">₱50</div>
							</div>
						</div>
						
						<div class="flex flex-col md:w-6/12">
						<h1 class="menu-header">Hard Drinks / Beers</h1>
							<div class="menu-item">
								<div class="item-name">Jack Daniel's <small>1 L</small></div>
								<div class="item-price">₱1,900</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Red Label <small>1 L</small></div>
								<div class="item-price">₱1,800</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Black Label <small>1 L</small></div>
								<div class="item-price">₱2,000</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Jose Cuervo</div>
								<div class="item-price">₱2,000</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Ginebra 2x2</div>
								<div class="item-price">₱90</div>
							</div>
							<div class="menu-item">
								<div class="item-name">Alfonso Light <small>1L</small></div>
								<div class="item-price">₱420</div>
							</div>
							<div class="menu-item-multiline">
								<div class="menu-item">
									<div class="item-name">Redhorse Stallion</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bucket</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bottle</div>
									<div class="item-price">₱90</div>
								</div>
							</div>
							<div class="menu-item-multiline">
								<div class="menu-item">
									<div class="item-name">San Mig Light/Apple</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bucket</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bottle</div>
									<div class="item-price">₱90</div>
								</div>
							</div>
							<div class="menu-item-multiline">
								<div class="menu-item">
									<div class="item-name">San Mig Pale Pilsen</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bucket</div>
									<div class="item-price">₱500</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Bottle</div>
									<div class="item-price">₱90</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				</div>
			</div>
        </div>
    )}

	</> )
}