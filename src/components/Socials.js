import React from 'react';
import './Socials.scss';

function Socials() {
	return (
		<>
			<div class='socials'>
				<ul>
					<li class='linkedin'>
						<a href='https://www.linkedin.com/in/grant-gonzalez-165117205/' target='_blank' rel='noreferrer' class='linkedin-link'>
							<span class='socials-text'>LinkedIn</span>
							<img src='assets/icons/icons8-linkedin-circled.gif' alt='LinkedIn' loading='lazy' class='socials-img' />
						</a>
					</li>
					<li class='github'>
						<a href='https://github.com/grantgonzalez14' target='_blank' rel='noreferrer' class='github-link'>
							<span class='socials-text'>Github</span>
							<img src='assets/icons/icons8-github.gif' alt='GitHub' loading='lazy' class='socials-img' />
						</a>
					</li>
					<li class='email'>
						<a href='/contact' class='email-link'>
							<span class='socials-text'>Email</span>
							<img src='assets/icons/icons8-secured-letter.gif' alt='Email' loading='lazy' class='socials-img-email' />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Socials;