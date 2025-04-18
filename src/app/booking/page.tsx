export default function Page() { 
  	return (
		<div className="App bg-gray-900 text-white">
			<main className="p-4">
				<section id="booking" className="my-8">
					<h2 className="text-2xl font-semibold">Book a Room</h2>
					<form action="/book" method="post" className="space-y-4">
						<div>
							<label htmlFor="room" className="block">Select Room:</label>
							<select id="room" name="room" className="border rounded p-2 w-full bg-gray-700 text-white">
							<option value="conference">Conference Room</option>
							<option value="meeting">Meeting Room</option>
							</select>
						</div>
						
						<div>
							<label htmlFor="date" className="block">Select Date:</label>
							<input type="date" id="date" name="date" className="border rounded p-2 w-full bg-gray-700 text-white" />
						</div>
						
						<div>
							<label htmlFor="time" className="block">Select Time:</label>
							<input type="time" id="time" name="time" className="border rounded p-2 w-full bg-gray-700 text-white" />
						</div>
						
						<div>
							<label htmlFor="services" className="block">Additional Services:</label>
							<div className="flex space-x-4">
							<label>
								<input type="checkbox" id="catering" name="services" value="catering" className="mr-2" /> Catering
							</label>
							<label>
								<input type="checkbox" id="audiovisual" name="services" value="audiovisual" className="mr-2" /> Audiovisual Equipment
							</label>
							</div>
						</div>
						
						<button type="submit" className="bg-blue-600 text-white p-2 rounded">Book Now</button>
					</form>
				</section>
			</main>
		</div>
  	)
}
