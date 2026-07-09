<template>
	<main class="sandbox">
		<!-- HeadingMain -->
		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">HeadingMain — default (yellow dividers)</h3>
			<HeadingMain text="WELCOME TO/nSEND IT/nSKATEPARK" />
		</section>

		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">HeadingMain — red dividers</h3>
			<HeadingMain text="PRIVATE/nHIRE" color="red" />
		</section>

		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">HeadingMain — blue dividers</h3>
			<HeadingMain text="COACHING/nAVAILABLE" color="blue" />
		</section>

		<!-- HeadingSection -->
		<section class="sandbox__section">
			<h3 class="sandbox__label">HeadingSection — yellow (default)</h3>
			<HeadingSection text="PRIVATE HIRE" />
		</section>

		<section class="sandbox__section">
			<h3 class="sandbox__label">HeadingSection — red</h3>
			<HeadingSection text="COACHING" color="red" />
		</section>

		<section class="sandbox__section">
			<h3 class="sandbox__label">HeadingSection — blue</h3>
			<HeadingSection text="DROP IN" color="blue" />
		</section>

		<section class="sandbox__section">
			<h3 class="sandbox__label">HeadingSection — green</h3>
			<HeadingSection text="BOOK NOW" color="green" />
		</section>

		<section class="sandbox__section">
			<h3 class="sandbox__label">HeadingSection — with slot content</h3>
			<HeadingSection color="yellow">
				SLOT CONTENT
			</HeadingSection>
		</section>

		<!-- BorderPattern -->
		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">BorderPattern — around a section (default 28px)</h3>
			<BorderPattern>
				<div class="sandbox__bordered-content">
					<p>This content is wrapped with the leaflet-style geometric border.</p>
				</div>
			</BorderPattern>
		</section>

		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">BorderPattern — thicker (40px)</h3>
			<BorderPattern :thickness="40">
				<article class="sandbox__bordered-content">
					<HeadingSection text="PRIVATE HIRE" />
					<p>Birthday parties, special events or just wanting to treat the kids?</p>
				</article>
			</BorderPattern>
		</section>

		<section class="sandbox__section sandbox__section--dark">
			<h3 class="sandbox__label">BorderPattern — thin (16px)</h3>
			<BorderPattern :thickness="16">
				<div class="sandbox__bordered-content">
					<p>A thinner border for subtle accents.</p>
				</div>
			</BorderPattern>
		</section>
	</main>
</template>

<style scoped>
.sandbox {
	margin: 0 0 auto;
	padding: 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 767px) {
		margin-top: 6rem;
	}
}

.sandbox__section {
	padding: 2rem;
	border-radius: 0.5rem;
	border: 1px solid #333;
}

.sandbox__section--dark {
	background-color: #1a1a1a;
}

.sandbox__label {
	font-size: 0.875rem;
	font-weight: 600;
	color: #999;
	margin-bottom: 1rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.sandbox__bordered-content {
	padding: 2rem;
	color: white;
}
</style>
