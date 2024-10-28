import { RestaurantMenuModal } from "../components/MenuModalRestaurant";
import { CafeMenuModal } from "../components/MenuModalCafe";
import { Button } from "@mantine/core"
import MenuPdf from "/files/BANI-Hidden Paradise Menu.pdf"

export function Restaurants() {

  const images = [
    './images/restaurants/slideshow1.png',
    './images/restaurants/slideshow2.png',
    './images/restaurants/slideshow3.png',
    './images/restaurants/slideshow4.png',
    './images/restaurants/slideshow5.png',
  ];

  return (
    <>
		<div class="image-header">
			<img src="../images/restaurants/slideshow1.png"></img>
			<span>el KAPe'TAN and Restaurant </span>
		</div>

		<div class="flex flex-col">
			<div>
				<div class="flex flex-col gap-2 px-24 py-8">
					<h1 class="header">Fresh Delicacy</h1>
					<div> From all around Pangasinan </div>
					<div>
						A delicacy is usually a rare or expensive food item that is considered highly desirable, sophisticated or peculiarly distinctive, within a given culture.
						Irrespective of local preferences, such a label is typically pervasive throughout a region.
					</div>
					<div class="flex flex-row gap-4 w-full">
						<img src="../images/restaurants/food/delicacy1.png" class="w-4/12 object-cover rounded-lg"></img>
						<img src="../images/restaurants/food/delicacy2.png" class="w-4/12 object-cover rounded-lg"></img>
						<img src="../images/restaurants/food/delicacy3.png" class="w-4/12 object-cover rounded-lg"></img>
					</div>
				</div>
			</div>

			<div class="px-24 py-8 flex flex-row gap-8 bg-slate-200">
				<div class="w-3/12">
					<img src="../images/restaurants/chef.avif" class="object-cover w-full h-full rounded-lg max-h-96"></img>
				</div>
				<div class="w-9/12 flex flex-col justify-center gap-2">
					<h1 class="header">The Best Chef</h1>
					<div> For food made with love and passion </div>
					<div>
						A cuisine is a style of cooking characterized by distinctive ingredients, techniques and dishes, and usually associated with a specific culture or geographic region.
						Regional food preparation traditions, customs and ingredients often combine to create dishes unique to a particular region.
						A cuisine is primarily influenced by the ingredients that are available locally or through trade, they can even be made into distinct ingredients themselves when they become popular within a region, take for example Japanese rice in Japanese cuisine and New Mexico chile in New Mexican cuisine.
						And here Philippines cuisine.
					</div>
				</div>
			</div>

			<div class="px-24 py-8 flex flex-row gap-8">
				<div class="w-7/12 flex flex-col gap-2 justify-center">
					<h1 class="header">Menu</h1>
					<div>
						Welcome to El Kapetan at Hidden Paradise Beach Resort, Bani, where we combine the best of tropical flavors with café classics to create a truly unique experience.
						Our menu is designed to offer something for every palate, whether you're looking for a refreshing iced beverage by the beach or a cozy, warm brew to start your day.
						Indulge in our handcrafted coffee, specialty drinks, and light bites, all prepared with fresh, high-quality ingredients.
					</div>
					<div class="flex flex-row gap-4">
            <RestaurantMenuModal />
            <CafeMenuModal />
			<a href={MenuPdf} download="BANI-Hidden Paradise Menu">
            	<Button variant="outline" color="#2F515B" radius="md">Download PDF</Button>
			</a>
					</div>
				</div>
				<div class="w-5/12 flex flex-col gap-y-4 justify-center">
					<div class="flex flex-row gap-x-4 justify-center h-32">
						<img src="../images/restaurants/food/menu1.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
						<img src="../images/restaurants/food/menu2.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
					</div>
					<div class="flex flex-row gap-x-4 justify-center h-32">
						<img src="../images/restaurants/food/menu3.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
						<img src="../images/restaurants/food/menu4.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
					</div>
				</div>
			</div>

			<div class="px-24 py-8 flex flex-row gap-8 items-center bg-orange-50">
				<div class="w-5/12 flex flex-col gap-y-4 justify-center">
					<div class="flex flex-row gap-x-4 justify-center h-32">
						<img src="../images/restaurants/food/reservation1.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
						<img src="../images/restaurants/food/reservation2.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
					</div>
					<div class="flex flex-row gap-x-4 justify-center h-32">
						<img src="../images/restaurants/food/reservation3.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
						<img src="../images/restaurants/food/reservation4.png" class="object-cover w-6/12 max-w-64 rounded-lg"></img>
					</div>
				</div>
				<div class="w-7/12 flex flex-col gap-2">
					<h1 class="header">Reservation</h1>
					<div>
					Looking to enjoy a meal or coffee with a stunning view of the beach at Hidden Paradise Beach Resort, Bani?
					Reserve your spot at El Kapetan Café & Restaurant today!
					</div>
					<div class="flex flex-row gap-4">
            <Button component="a" variant="outline" color="#2F515B" radius="md" href="./reservations">Reserve now</Button>
					</div>
				</div>
			</div>

			<div class="px-24 py-8 flex flex-col gap-4">
				<h1 class="header">Our Food</h1>
				<div>
					Savor the taste of paradise with every sip—crafted with care and the finest beans, surrounded by the serene beauty of the sea at El Kapetan, Bani Hidden Paradise Beach Resort.
					Indulge in authentic cooked meals from Pangasinan, rich in flavors that tell a story of tradition and love.
					Let the flavors transport you to a tropical escape, where every cup and bite is a moment of pure bliss.
				</div>
				<div class="bg-orange-100 p-4 rounded-lg large-footer-gallery">
						<img src="../images/restaurants/food/gallery1.png"></img>
						<img src="../images/restaurants/food/gallery2.png"></img>
						<img src="../images/restaurants/food/gallery3.png"></img>
						<img src="../images/restaurants/food/gallery4.png"></img>
						<img src="../images/restaurants/food/gallery5.png"></img>
						<img src="../images/restaurants/food/gallery6.png"></img>
						<img src="../images/restaurants/food/gallery7.png"></img>
						<img src="../images/restaurants/food/gallery8.png"></img>
						<img src="../images/restaurants/food/gallery9.png"></img>
						<img src="../images/restaurants/food/gallery10.png"></img>
						<img src="../images/restaurants/food/gallery11.png"></img>
						<img src="../images/restaurants/food/gallery12.png"></img>
						<img src="../images/restaurants/food/gallery13.png"></img>
						<img src="../images/restaurants/food/gallery14.png"></img>
						<img src="../images/restaurants/food/gallery15.png"></img>
						<img src="../images/restaurants/food/gallery16.png"></img>
						<img src="../images/restaurants/food/gallery17.png"></img>
						<img src="../images/restaurants/food/gallery18.png"></img>
						<img src="../images/restaurants/food/gallery19.png"></img>
						<img src="../images/restaurants/food/gallery20.png"></img>
						<img src="../images/restaurants/food/gallery21.png"></img>
				</div>
			</div>

		</div>
    </>
  );
}
