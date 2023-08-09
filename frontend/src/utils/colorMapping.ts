const colorNameToClassMapping = {
	Ocean: 'bg-blue-400',
	Blue: 'bg-blue-600',
	Purple: 'bg-purple-600',
	Red: 'bg-red-500',
	Orange: 'bg-orange-500',
	Yellow: 'bg-yellow-500',
	Green: 'bg-green-500',
	Forest: 'bg-green-600',
	Slate: 'bg-gray-800',
	Silver: 'bg-gray-500',
}

function colorMapping(name: string) {
	return colorNameToClassMapping[name as keyof typeof colorNameToClassMapping] || 'bg-gray-500'
}

export { colorNameToClassMapping, colorMapping }
