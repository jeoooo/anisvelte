<script>
	import '../app.scss';
</script>

<header>
	<nav class="navbar navbar-expand-lg bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#test">
				<img
					src="https://store-images.s-microsoft.com/image/apps.17083.9007199266506523.adab9a45-6875-4ea0-b145-00abf7f7d397.abfcc7db-df11-4314-a62f-a302f0c4a286"
					height="46"
					alt="MAL logo"
				/>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#anime"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Anime</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#anime-search">Anime Search</a></li>
							<li><a class="dropdown-item" href="#top-anime">Top Anime</a></li>
							<li><a class="dropdown-item" href="#seasonal-anime">Seasonal Anime</a></li>
							<li><a class="dropdown-item" href="#videos">Videos</a></li>
							<li><a class="dropdown-item" href="#anime-reviews">Reviews</a></li>
							<li><a class="dropdown-item" href="#anime-recommendations">Recommendations</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#manga"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Manga</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#manga-search">Manga Search</a></li>
							<li><a class="dropdown-item" href="#top-manga">Top Manga</a></li>
							<li><a class="dropdown-item" href="#manga-store">Manga Store</a></li>
							<li><a class="dropdown-item" href="#manga-reviews">Reviews</a></li>
							<li><a class="dropdown-item" href="#manga-recommendations">Recommendations</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#community"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Community</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#interest-stacks">Interest Stacks</a></li>
							<li><a class="dropdown-item" href="#forums">Forums</a></li>
							<li><a class="dropdown-item" href="#clubs">Clubs</a></li>
							<li><a class="dropdown-item" href="#blogs">Blogs</a></li>
							<li><a class="dropdown-item" href="#users">Users</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#industry"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Industry</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#news">News</a></li>
							<li><a class="dropdown-item" href="#featured-articles">Featured Articles</a></li>
							<li><a class="dropdown-item" href="#people">People</a></li>
							<li><a class="dropdown-item" href="#characters">Characters</a></li>
							<li><a class="dropdown-item" href="#companies">Companies</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#watch"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Watch</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#episode-videos">Episode Videos</a></li>
							<li><a class="dropdown-item" href="#anime-trailers">Anime Trailers</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#read"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Read</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#manga-store">Manga Store</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#help"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">Help</a
						>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#about">About</a></li>
							<li><a class="dropdown-item" href="#support">Support</a></li>
							<li><a class="dropdown-item" href="#advertising">Advertising</a></li>
							<li><a class="dropdown-item" href="#faq">FAQ</a></li>
							<li><a class="dropdown-item" href="#report">Report</a></li>
							<li><a class="dropdown-item" href="#staff">Staff</a></li>
						</ul>
					</li>
				</ul>

				<div class="dropdown" style="margin-right: 6px;">
					<button
						class="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						style="width: 100px;">All</button
					>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#test">All</a></li>
						<li><a class="dropdown-item" href="#test">Anime</a></li>
						<li><a class="dropdown-item" href="#test">Manga</a></li>
						<li><a class="dropdown-item" href="#test">Characters</a></li>
						<li><a class="dropdown-item" href="#test">People</a></li>
						<li><a class="dropdown-item" href="#test">Companies</a></li>
						<li><a class="dropdown-item" href="#test">Manga Store</a></li>
						<li><a class="dropdown-item" href="#test">News</a></li>
						<li><a class="dropdown-item" href="#test">Featured Articles</a></li>
						<li><a class="dropdown-item" href="#test">Forum</a></li>
						<li><a class="dropdown-item" href="#test">Clubs</a></li>
						<li><a class="dropdown-item" href="#test">Users</a></li>
					</ul>
				</div>

				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search Anime, Manga and More..."
						aria-label="Search"
						style="width: 300px;"
					/>
					<button class="btn btn-secondary" type="submit" style="margin-right: 20px;">
						<i class="bi bi-search" />
					</button>
				</form>
				<button
					type="button"
					class="btn btn-secondary"
					data-svelte-h="svelte-1q4xhlk"
					style="margin-right: 10px; width: 100px"
					>Login
				</button>
				<button type="button" class="btn btn-light" style="margin-right: 60px; width: 100px;"
					>Sign Up</button
				>
			</div>
		</div>
	</nav>
</header>
<slot />

<footer class="py-3 my-4 bg-primary border-bottom pb-3 mb-3">
	<ul class="nav justify-content-center pb-3 mb-3">
		<li class="nav-item"><a href="#test" class="nav-link px-2 text-white">Home</a></li>
		<li class="nav-item">
			<a href="#test" class="nav-link px-2 text-white">Features</a>
		</li>
		<li class="nav-item">
			<a href="#test" class="nav-link px-2 text-white">Pricing</a>
		</li>
		<li class="nav-item"><a href="#test" class="nav-link px-2 text-white">FAQs</a></li>
		<li class="nav-item"><a href="#test" class="nav-link px-2 text-white">About</a></li>
	</ul>

	<p class="text-center text-white">
		MyAnimeList.net is a property of MyAnimeList Co.,Ltd. ©2023 All Rights Reserved.
	</p>

	<div class="col-md-4 d-flex align-items-center justify-content-between">
		<div class="ms-3">
			<img
				src="https://store-images.s-microsoft.com/image/apps.17083.9007199266506523.adab9a45-6875-4ea0-b145-00abf7f7d397.abfcc7db-df11-4314-a62f-a302f0c4a286"
				height="66"
				alt="MAL logo"
				style="margin-left: 100%;"
			/>
		</div>
		<ul
			class="nav col-md-8 justify-content-end list-unstyled d-flex me-3"
			style="margin-left: 170%;"
		>
			<li class="ms-3">
				<a class="text-body-secondary" href="#test"><i class="bi bi-facebook" /></a>
			</li>
			<li class="ms-3">
				<a class="text-body-secondary" href="#test"><i class="bi bi-twitter" /></a>
			</li>
			<li class="ms-3">
				<a class="text-body-secondary" href="#test"><i class="bi bi-instagram" /></a>
			</li>
			<li class="ms-3">
				<a class="text-body-secondary" href="#test"><i class="bi bi-discord" /></a>
			</li>
		</ul>
	</div>
</footer>
