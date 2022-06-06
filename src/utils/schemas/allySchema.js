import * as yup from 'yup'

export const allySchema = yup.object({
	name: yup
		.string()
		.trim('Aliado no puede incluir espacios iniciales y finales')
		.min(3, 'Aliado debe tener al menos 3 caracteres')
		.max(255, 'Aliado no puede exceder los 255 caracteres')
		.required('Aliado es requerido'),
	url: yup
		.string()
		.trim('Url no puede incluir espacios iniciales y finales')
		.min(3, 'Url debe tener al menos 3 caracteres'),
	image: yup
		.string()
		.trim('Imagen no puede incluir espacios iniciales y finales')
		.min(3, 'Imagen debe tener al menos 3 caracteres'),
	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida')
})
