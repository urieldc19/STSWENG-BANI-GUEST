import { Slideshow } from "../components/Slideshow";

export function Restaurants() {

  const images = [
    './images/restaurants/slideshow1.png',
  ];

  return (
    <>
      <div className="flex flex-col m-6 gap-4">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-9/12">

            <h1 className="menu-header">Appetizers</h1>
            <div className="menu-item">
              <div className="item-name">Club Paradise Sandwich <small>w/ drinks</small></div>
              <div className="item-price">₱450</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Hidden Dynamite</div>
              <div className="item-price">₱50</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Calamares</div>
              <div className="item-price">₱300</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Onion Rings</div>
              <div className="item-price">₱250</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Crispy Kangkong</div>
              <div className="item-price">₱160</div>
            </div>
            <div className="menu-item">
              <div className="item-name">French Fries</div>
              <div className="item-price">₱180</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Cheese Stick</div>
              <div className="item-price">₱180</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Nachos <small>w/ dip</small></div>
              <div className="item-price">₱300</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Kilawin</div>
              <div className="item-price">₱350</div>
            </div>
            <div className="menu-item">
              <div className="item-name">French Fries</div>
              <div className="item-price">₱400</div>
            </div>
          </div>

          <div className="w-full md:w-3/12 py-4 md:py-0 md:px-4">
            <img src="./images/restaurants/slideshow2.png" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="flex flex-col md:w-6/12 gap-4">

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Paradise Delight</h1>
              <div className="menu-item">
                <div className="item-name">California Maki</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Paradise Volcano Maki</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Sashimi</div>
                <div className="item-price">₱350</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Shrimp Tempura</div>
                <div className="item-price">₱550</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Vegetable Tempura</div>
                <div className="item-price">₱450</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Seafood</h1>
              <div className="menu-item">
                <div className="item-name">Sweet and Sour Fish</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Fusion Buttered Shrimp</div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Sinigang na Hipon</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Halabos na Hipon</div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Ginataang Alimango</div>
                <div className="item-price">₱750</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Fried Bangus</div>
                <div className="item-price">₱300</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Sizling Rice Meals <small>(solo)</small></h1>
              <div className="menu-item">
                <div className="item-name">Chicken Inasal</div>
                <div className="item-price">₱250</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Porkchop</div>
                <div className="item-price">₱250</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Tapa <small>w/ egg</small></div>
                <div className="item-price">₱250</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Tocino <small>w/ egg</small></div>
                <div className="item-price">₱250</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Hotdog <small>w/ egg</small></div>
                <div className="item-price">₱200</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Longanisa <small>w/ egg</small></div>
                <div className="item-price">₱200</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Sizzling Sisig</div>
                <div className="item-price">₱250</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Extra Rice</h1>
              <div className="menu-item">
                <div className="item-name">Plain Rice</div>
                <div className="item-price">₱25 <small>per cup</small></div>
              </div>
              <div className="menu-item">
                <div className="item-name">Garlic Rice</div>
                <div className="item-price">₱35 <small>per cup</small></div>
              </div>
              <div className="menu-item">
                <div className="item-name">Seafood Rice</div>
                <div className="item-price">₱350 <small>per platter</small></div>
              </div>
              <div className="menu-item">
                <div className="item-name">Egg Fried Rice</div>
                <div className="item-price">₱250 <small>per platter</small></div>
              </div>
            </div>
            <img src="./images/restaurants/slideshow3.png" className="w-full h-full object-cover rounded-lg" />

          </div>
          <div className="flex flex-col md:w-6/12 gap-4">

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Salad</h1>
              <div className="menu-item">
                <div className="item-name">Toasted Paradise Salad</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Kani Salad</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Chef Salad</div>
                <div className="item-price">₱400</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Pasta and Noodles</h1>
              <div className="menu-item">
                <div className="item-name">Pancit Bihon</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Pancit Canton</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Traditional Spaghetti</div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Special Carbonara</div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Lomi</div>
                <div className="item-price">₱300</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Beef</h1>
              <div className="menu-item">
                <div className="item-name">Beef Steak</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Beef Nilaga</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Bulalo</div>
                <div className="item-price">₱600</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Pigar-Pigar</div>
                <div className="item-price">₱500</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Pork</h1>
              <div className="menu-item">
                <div className="item-name">Menudo</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Crispy Pata</div>
                <div className="item-price">₱700</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Crispy Kare-Kare</div>
                <div className="item-price">₱600</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Pork Steak</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Pork Sinigang</div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Patatim</div>
                <div className="item-price">₱700</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Bicol Express</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Liempo Inasal</div>
                <div className="item-price">₱400</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Chicken</h1>
              <div className="menu-item">
                <div className="item-name">Native Chicken Binacol</div>
                <div className="item-price">₱700</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Afritada</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Chicken Inasal</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Fried Chicken <small>(whole)</small></div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Fried Chicken <small>(half)</small></div>
                <div className="item-price">₱350</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="menu-header">Vegetable</h1>
              <div className="menu-item">
                <div className="item-name">Pinakbet <small>w/ Bagnet</small></div>
                <div className="item-price">₱450</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Chopsuey</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Ginataang Gulay</div>
                <div className="item-price">₱400</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Buttered Veggies</div>
                <div className="item-price">₱400</div>
              </div>
            </div>

          </div>
        </div>

        
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="flex flex-col md:w-6/12">
            <h1 className="menu-header">Beverages</h1>
            <div className="menu-item">
              <div className="item-name">Lemonade Pitcher</div>
              <div className="item-price">₱180</div>
            </div>
            <div className="menu-item-multiline">
              <div className="menu-item">
                <div className="item-name">Glass</div>
                <div className="item-price">₱65</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Flavors: Cucumber Lemonade, House Blend, Blue Lemonade</div>
              </div>
            </div>
            <div className="menu-item">
              <div className="item-name">Pineapple Juice in Can</div>
              <div className="item-price">₱80</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Brewed Coffee</div>
              <div className="item-price">₱50</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Hot Tea</div>
              <div className="item-price">₱50</div>
            </div>
            <div className="menu-item">
              <div className="item-name">3 in 1 Coffee</div>
              <div className="item-price">₱35</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Soft Drinks <small>1 L</small></div>
              <div className="item-price">₱120</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Bottled Water <small>500 mL</small></div>
              <div className="item-price">₱50</div>
            </div>
          </div>
          
          <div className="flex flex-col md:w-6/12">
          <h1 className="menu-header">Hard Drinks / Beers</h1>
            <div className="menu-item">
              <div className="item-name">Jack Daniel's <small>1 L</small></div>
              <div className="item-price">₱1,900</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Red Label <small>1 L</small></div>
              <div className="item-price">₱1,800</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Black Label <small>1 L</small></div>
              <div className="item-price">₱2,000</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Jose Cuervo</div>
              <div className="item-price">₱2,000</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Ginebra 2x2</div>
              <div className="item-price">₱90</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Alfonso Light <small>1L</small></div>
              <div className="item-price">₱420</div>
            </div>
            <div className="menu-item-multiline">
              <div className="menu-item">
                <div className="item-name">Redhorse Stallion</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bucket</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bottle</div>
                <div className="item-price">₱90</div>
              </div>
            </div>
            <div className="menu-item-multiline">
              <div className="menu-item">
                <div className="item-name">San Mig Light/Apple</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bucket</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bottle</div>
                <div className="item-price">₱90</div>
              </div>
            </div>
            <div className="menu-item-multiline">
              <div className="menu-item">
                <div className="item-name">San Mig Pale Pilsen</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bucket</div>
                <div className="item-price">₱500</div>
              </div>
              <div className="menu-item text-xs">
                <div className="item-name">Bottle</div>
                <div className="item-price">₱90</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
