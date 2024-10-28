import { useState } from 'react';
import { Button } from "@mantine/core"

export function CafeMenuModal() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);

		if (!isOpen) { document.body.style.overflow = 'hidden'; }	// Disable scroll when modal is open
		else { document.body.style.overflow = 'auto'; }				// Re-enable scroll when modal is closed


	}

	return ( <>
        <Button variant="filled" color="#2F515B" radius="md" onClick={toggleModal}>Cafe menu</Button>

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
					<div class="flex flex-col gap-4 w-full">

						<div class="w-full">
							<h1 class="menu-header cafe">
								<div class="item-name"> Espresso </div>
								<div class="item-price"> Solo </div>
								<div class="item-price"> Doble </div>
							</h1>
							<div class="menu-item cafe">
								<div class="item-name"> Espresso </div>
								<div class="item-price"> ₱50 </div>
								<div class="item-price"> ₱80 </div>
							</div>
						</div>

						<div class="w-full">
							<h1 class="menu-header cafe">
								<div class="item-name"> Caliente y Frio Cafe </div>
								<div class="item-price"> Alto </div>
								<div class="item-price"> Grande </div>
							</h1>
							<div class="menu-item cafe">
								<div class="item-name"> El Americano </div>
								<div class="item-price"> ₱100 </div>
								<div class="item-price"> ₱130 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> French Vanilla </div>
								<div class="item-price"> ₱120 </div>
								<div class="item-price"> ₱160 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Hazelnut </div>
								<div class="item-price"> ₱120 </div>
								<div class="item-price"> ₱160 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Salted Caramel </div>
								<div class="item-price"> ₱120 </div>
								<div class="item-price"> ₱160 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Spanish Latte </div>
								<div class="item-price"> ₱120 </div>
								<div class="item-price"> ₱160 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Cappuccino </div>
								<div class="item-price"> ₱130 </div>
								<div class="item-price"> ₱180 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Dark Mocha </div>
								<div class="item-price"> ₱130 </div>
								<div class="item-price"> ₱180 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Dark Matcha </div>
								<div class="item-price"> ₱130 </div>
								<div class="item-price"> ₱180 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Choco Hazelnut Macchiato </div>
								<div class="item-price"> ₱130 </div>
								<div class="item-price"> ₱180 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Caramel Macchiato </div>
								<div class="item-price"> ₱130 </div>
								<div class="item-price"> ₱180 </div>
							</div>
						</div>

						<div class="w-full">
							<h1 class="menu-header cafe">
								<div class="item-name"> Coffee-Free </div>
								<div class="item-price"> Alto </div>
								<div class="item-price"> Grande </div>
							</h1>
							<div class="menu-item cafe">
								<div class="item-name"> Chocolate </div>
								<div class="item-price"> ₱100 </div>
								<div class="item-price"> ₱150 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Choco Hazelnut </div>
								<div class="item-price"> ₱100 </div>
								<div class="item-price"> ₱150 </div>
							</div>
							<div class="menu-item cafe">
								<div class="item-name"> Matcha </div>
								<div class="item-price"> ₱100 </div>
								<div class="item-price"> ₱150 </div>
							</div>
						</div>

						<div class="w-full">
							<h1 class="menu-header">
								<div class="item-name"> Frappe / Ice Blend </div>
							</h1>
							<div class="menu-item">
									<div class="item-name">Frappuccino</div>
									<div class="item-price center-important">₱220</div>
								</div>
								<div class="menu-item text-xs">
									<div class="item-name">Strawberry, Cookies and Cream, Cheesecake</div>
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