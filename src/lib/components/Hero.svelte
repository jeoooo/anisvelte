<div class="container mt-4 mb-4">
	<div class="hero">
		<div class="hero-text p-2" style="max-height: 250px;">
			<div class="heading">
				<h3 class="fw-bolder text-white p-0">
					Embark on a Journey into the World of Anime and Manga with Weebcyclopedia!
				</h3>
			</div>
			<div class="subheading">
				<p class="text-white">
					Dive into the captivating world of anime and manga with Weebcyclopedia - your ultimate
					guide to all things otaku! Explore iconic series, uncover hidden gems, and immerse
					yourself in the rich tapestry of Japanese animation and comics. Join us on this epic
					journey as we celebrate the magic, characters, and stories that have enchanted
					generations. Discover the enchanting realm of anime and manga with Weebcyclopedia. Your
					go-to source for in-depth articles, character analyses, and more. Let's explore together!
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'hero';
		border-radius: 5px;
		background-image: url(https://cdn.myanimelist.net/images/top_signup/bg.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.hero {
		display: grid;
		grid-template-columns: 1fr 1.2fr 0.8fr;
		grid-template-rows: 0.3fr 2.3fr 0.4fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'. . .'
			'hero-text hero-text .'
			'. . .';
		grid-area: hero;
	}

	.hero-text {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'heading heading heading'
			'heading heading heading'
			'subheading subheading subheading';
		grid-area: hero-text;
	}

	.heading {
		grid-area: heading;
	}

	.subheading {
		grid-area: subheading;
	}
</style>
