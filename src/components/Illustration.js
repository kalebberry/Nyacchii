import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Illustration = ({ characterArt, backgroundArt }) => {
	let character = characterArt[0].fields.assets;
	let background = backgroundArt[0].fields.assets;

	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	}

	return (
		<div>
			<div className='pricing__content container'>
				<div className='pricing__example'>
					<div className='pricing__gallery'>
						<img onClick={() => openLightboxOnSlide(1)} src={character[0].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(2)} src={character[1].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(3)} src={character[2].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(4)} src={character[3].fields.file.url} />
					</div>
					<div className='pricing__gallery'>
						<img onClick={() => openLightboxOnSlide(5)} src={background[0].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(6)} src={background[1].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(7)} src={background[2].fields.file.url} />
						<img onClick={() => openLightboxOnSlide(8)} src={background[3].fields.file.url} />
					</div>
					<FsLightbox
						toggler={lightboxController.toggler}
						sources={[
							character[0].fields.file.url,
							character[1].fields.file.url,
							character[2].fields.file.url,
							character[3].fields.file.url,
							background[0].fields.file.url,
							background[1].fields.file.url,
							background[2].fields.file.url,
							background[3].fields.file.url,
						]}
						slide={lightboxController.slide}
					/>
				</div>
				<div className='pricing__details'>
					<div className='pricing__content flow'>
						<h4 className='price__subtitle accent-lightgray'>
							Characters<span className='accent'>.</span>
						</h4>
						<ul className='price'>
							<li>
								<h5 className='accent openSansRegular'>
									<span style={{ color: '#fafafa' }} className='openSansLight'>
										Headshot:{' '}
									</span>
									$60 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent openSansRegular'>
									<span style={{ color: '#fafafa' }} className='openSansLight'>
										Half Body:{' '}
									</span>
									$90 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent openSansRegular'>
									<span style={{ color: '#fafafa' }} className='openSansLight'>
										Full Body:{' '}
									</span>
									$120 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
						</ul>

						<div>
							<ul className='pricing__info'>
								<li>
									<p>
										Size: <span className='accent-lightgray'>1000px</span>
									</p>
								</li>
								<li>
									<p>
										Resolution: <span className='accent-lightgray'>72ppi</span>
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='pricing__content flow'>
						<h4 className='accent-lightgray'>
							Backgrounds<span className='accent'>.</span>
						</h4>
						<ul className='price'>
							<li>
								<h5 className='accent openSansRegular'>
									<span style={{ color: '#fafafa' }} className='openSansLight'>
										Simple:{' '}
									</span>
									$100 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent openSansRegular'>
									<span style={{ color: '#fafafa' }} className='openSansLight'>
										Complex:{' '}
									</span>
									$300 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
						</ul>
						<ul className='pricing__info'>
							<li>
								<p>
									Size: <span className='accent-lightgray'>1000px</span>
								</p>
							</li>
							<li>
								<p>
									Resolution: <span className='accent-lightgray'>72ppi</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Illustration;
