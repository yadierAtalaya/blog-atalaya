import React, { useState, useEffect, useRef } from 'react'
import { SearchStyles } from './Search.styles'
import lens from 'assets/icons/lens.svg'
// ===========================|| Search ||=========================== //

const Search = ({ handleSearch, active, handleSubmit }) => {
	const [term, setTerm] = useState('')
	const termInputRef = useRef(null)
	useEffect(() => {
		if (termInputRef.current) {
			termInputRef.current.focus()
		}
	}, [])
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleSubmit(term)
		}
	}
	const handleChange = (event) => {
		setTerm(event.target.value)
	}
	return (
		<>
			{active ? (
				<SearchStyles>
					<input
						ref={termInputRef}
						type='text'
						className='term'
						placeholder='Búsqueda personalizada'
						onKeyDown={handleKeyDown}
						value={term}
						onChange={handleChange}
					/>
					<span onClick={() => handleSubmit(term)}>
						<img width='20px' src={lens} alt='' />
					</span>
				</SearchStyles>
			) : (
				<SearchStyles onClick={handleSearch}>
					<p className='title'>Búsqueda personalizada</p>
					<span className='linea'>|</span>
					<img width='20px' src={lens} alt='' />
				</SearchStyles>
			)}
		</>
	)
}
export default Search
