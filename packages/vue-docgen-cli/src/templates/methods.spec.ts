import methods from './methods'

describe('methods', () => {
	it('escapes pipe characters in the return type and description', () => {
		const md = methods([
			{
				name: 'resolve',
				description: '',
				returns: { type: { name: 'string | number' }, description: 'a | b' }
			}
		] as any)
		// The params table escapes pipes through mdclean; the return table must do the same,
		// otherwise a union type splits the row into extra cells and the table loses data.
		expect(md).toContain('| string \\| number | a \\| b |')
	})

	it('escapes pipe characters in the params table', () => {
		const md = methods([
			{
				name: 'resolve',
				description: '',
				params: [{ name: 'value', type: { name: 'string | number' }, description: '' }]
			}
		] as any)
		expect(md).toContain('| value | string \\| number |')
	})
})
