import { css } from 'styled-components'

export const colors = css`
  :root {
    --primary: rgba(15, 33, 111, 1);
    --primary-opacity: rgba(15, 33, 111, 0.8);
    --secondary-orange: rgba(229, 92, 30, 1);
    --secondary: rgba(231, 101, 30, 1);
    --secondary-light: rgba(243, 166, 28, 1):
    --dark-gray: rgba(112, 112, 112, 1);
    --black: rgba(2, 6, 26, 1);
    --black-opacity: rgba(2, 6, 26, 0.9);
    --white: rgba(255, 255, 255, 1);
	--sky: #0f216fcc;
	--secondary-gray: #707070;
	--light-grey:  #707070;
	--primary-grey: #DDDDDD;
  }
`

export const typography = css`
	/* font Sizes */
	:root {
		font-size: 10px;
		--h1: 3.5rem;
		--h2: 2.3rem;
		--h3: 1.875rem;
		--h4: 1.5rem;
		--h5: 1.125rem;
		--s-medium: 1rem;
		--s-normal: 0.875rem;
		--s-small: 0.75rem;
	}
	/* font weights */
	:root {
		--bold: 700;
		--semi: 600;
		--medium: 500;
		--regular: 400;
		--light: 300;
	}

	h1 {
		font-size: var(--h1);
		font-weight: var(--bold);
	}
	h2 {
		font-size: var(--h2);
		font-weight: var(--bold);
	}
	h3 {
		font-size: var(--h3);
		font-weight: var(--semi);
	}
	h4 {
		font-size: var(--h4);
		font-weight: var(--semi);
	}
	h5 {
		font-size: var(--h5);
		font-weight: var(--normal);
	}
`
export const spacing = css`
	:root {
		--m-1: 1rem;
		--m-2: 2rem;
		--m-3: 3rem;
	}
`
