<script lang="ts">
	export let ranking: number = 1; // Replace with the actual ranking number
	export let title: string = 'Anime Title'; // Replace with your anime title
	export let studio: string = 'Studio Name'; // Replace with your anime details
	export let image: string = 'https://cdn.myanimelist.net/images/anime/1188/136926.jpg';
</script>

<div class="card mb-2 bg-primary">
	<div class="row g-0">
		<!-- Add the badge inside the row -->
		<slot name="popular_anime_all_time_ranking">
			<!-- optional fallback -->
			<div class="badge bg-success">
				#{ranking}
			</div>
		</slot>

		<slot name="popular_anime_all_time_img">
			<!-- optional fallback -->
			<div class="col-md-2">
				<img
					src={image}
					class="img-fluid rounded-start"
					alt="..."
					style="width: 50px; height: 70px"
				/>
			</div>
		</slot>

		<slot name="popular_anime_all_time_title">
			<div class="col-md-8">
				<div class="card-body" style="padding: 8px;">
					<h6 class="card-title text-white fw-bold mb-1">
						<small>{title}</small>
					</h6>
					<p class="card-text text-white"><small>{studio}</small></p>
				</div>
			</div>
		</slot>
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
		width: 50px;
	}
</style>
