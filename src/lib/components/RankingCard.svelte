<script lang="ts">
	let rankingNumber: number = 1; // Replace with the actual ranking number
	let animeTitle: string = 'Anime Title'; // Replace with your anime title
	let animeDetails: string = 'Studio: Studio Name'; // Replace with your anime details
</script>

<div class="card mb-2 bg-primary">
	<div class="row g-0">
		<!-- Add the badge inside the row -->
		<div class="badge bg-success">{`#${rankingNumber}`}</div>

		<div class="col-md-2">
			<img
				src="https://cdn.myanimelist.net/images/anime/1188/136926.jpg"
				class="img-fluid rounded-start"
				alt="..."
				style="width: 50px; height: 70px"
			/>
		</div>
		<div class="col-md-8">
			<div class="card-body" style="padding: 8px;">
				<h6 class="card-title text-white fw-bold mb-1">{animeTitle}</h6>
				<p class="card-text text-white"><small>{animeDetails}</small></p>
			</div>
		</div>
	</div>
</div>

<style>
	/* Your existing styles here */

	/* New badge styles */
	.badge {
		position: absolute;
		top: 8px;
		right: 6px;
		padding: 4px 8px;
		background-color: green;
		color: white;
		border-radius: 5px;
		font-size: 12px;
		z-index: 3; /* Make sure the badge appears above other elements */
		width: auto;
	}
</style>
