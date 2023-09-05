<script lang="ts">
	export let latest_episode_anime_title = 'Latest Anime Title';
	export let latest_episode_anime_img = 'https://cdn.myanimelist.net/images/anime/1384/136408.jpg';
	export let latest_episode_anime_episode = 'Episode #';
</script>

<div class="card-container">
	<div class="card">
		<slot name="latest_episode_anime_img">
			<!-- optional fallback -->
			<img src={latest_episode_anime_img} class="card-img" alt={latest_episode_anime_title} />
		</slot>

		<div class="gradient-overlay">
			<slot name="latest_episode_anime_title">
				<div class="card-title-overlay d-flex flex-column justify-content-end">
					<h6 class="card-title">
						{latest_episode_anime_title}
					</h6>
				</div>
			</slot>

			<slot name="latest_episode_anime_episode">
				<div class="badge bg-success" style="position: absolute; top: 8px; left: 6px;">
					{latest_episode_anime_episode}
				</div>
			</slot>
		</div>
	</div>
</div>

<style>
	.card-container {
		width: 187.5px;
		height: 260.4px;
		margin: 4px;
	}

	.card {
		position: relative;
		transition: transform 0.3s;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		overflow: hidden;
	}

	.card:hover {
		transform: scale(1.05);
	}

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, transparent, black);
		opacity: 0.7;
		z-index: 1;
		border-radius: 10px;
	}

	.card-img {
		position: relative;
		z-index: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	.card-title-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	.card-title {
		opacity: 1;
		transition: opacity 0.3s;
		padding: 0px;
		padding-left: 10px;
		padding-bottom: 4px;
		border-radius: 0 0 15px 15px;
		color: white;
	}

	.card:hover .card-title {
		opacity: 1;
	}
</style>
