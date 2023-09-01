<script lang="ts">
	let rankingNumber: number = 1; // Replace with the actual ranking number
	let animeTitle: string = 'Article Name'; // Replace with your anime title
	let animeDetails: string =
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate temporibus labore ex tempore! Iure doloremque earum voluptatem provident, dolorum labore cupiditate odit perferendis, praesentium ab soluta id illo aliquam cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate temporibus labore ex tempore! Iure doloremque earum voluptatem provident, dolorum labore cupiditate odit perferendis, praesentium ab soluta id illo aliquam cumque?'; // Replace with your anime details

	const MAX_DETAILS_LENGTH = 200;
	const truncatedDetails =
		animeDetails.length > MAX_DETAILS_LENGTH
			? animeDetails.substring(0, MAX_DETAILS_LENGTH) + '...'
			: animeDetails;
</script>

<div class="card mb-2 border border-primary" style="height: 150px;">
	<div class="row g-2">
		<!-- Add the badge inside the row -->
		<!-- <div class="badge bg-success">{`#${rankingNumber}`}</div> -->

		<div class="col-md-2" style="width: auto;">
			<img
				src="https://cdn.myanimelist.net/images/anime/1188/136926.jpg"
				class="img-fluid rounded-start"
				alt="..."
				style="width: 100px; height: 140px; padding-left: 6px; padding-top: 6px"
			/>
		</div>
		<div class="col-lg-10 pt-3">
			<div class="card-body" style="padding: 8px;">
				<h5 class="card-title text-primary fw-bold mb-1">{animeTitle}</h5>
				<p class="card-text text-black">
					<small>
						{animeDetails}
					</small>
				</p>
				<a href="#link" class="card-link text-primary"><small>Read more</small></a>
			</div>
		</div>
	</div>
</div>

<style>
	/* Your existing styles here */

	/* Add ellipsis for text overflow */
	.card-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
