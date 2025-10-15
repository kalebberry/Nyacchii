import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Nav from '../../styles/modules/nav.module.scss';
import Logo from '../../img/logo.svg';
import Image from 'next/image';

const Navigation = () => {
	const buttonRef = useRef();
	const navRef = useRef();
	const router = useRouter();

	useEffect(() => {
		buttonRef.current.addEventListener('click', toggle);
	}, []);

	function toggle(event) {
		const visibilty = navRef.current.getAttribute('data-visible');
		if (visibilty === 'false') {
			navRef.current.setAttribute('data-visible', true);
			buttonRef.current.setAttribute('aria-expanded', true);
		} else {
			navRef.current.setAttribute('data-visible', false);
			buttonRef.current.setAttribute('aria-expanded', false);
		}
	}
	return (
		<section className='navigation'>
			<div className='navigation-container'>
				<div className={`${Nav.Logo}`}>
					<Link href='/'>
						<Image src={Logo} />
					</Link>
				</div>

				<button
					className={`${Nav.mobile_nav_toggle}`}
					aria-controls='primary_navigation'
					ref={buttonRef}
					aria-expanded='false'>
					<span className={`${Nav.sr_only}`}>menu</span>
				</button>

				<nav>
					<ul
						id='primary_navigation'
						data-visible='false'
						ref={navRef}
						className={`${Nav.primary_navigation}`}>
						<li>
							<Link className={router.pathname == '/' ? `${Nav.active}` : ''} href='/'>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={router.pathname == '/commission' ? `${Nav.active}` : ''}
								href='/commission'>
								Commission
							</Link>
						</li>
						<li>
							<Link
								className={router.pathname == '/portfolio' ? `${Nav.active}` : ''}
								href='/portfolio'>
								Portfolio
							</Link>
						</li>
						<li>
							<Link className={router.pathname == '/shop' ? `${Nav.active}` : ''} href='/shop'>
								Shop
							</Link>
						</li>
						<li>
							<Link
								className={router.pathname == '/contact' ? `${Nav.active}` : ''}
								href='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default Navigation;
