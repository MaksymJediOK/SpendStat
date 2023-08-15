const colorNameToClassMapping = {
	Ocean: 'bg-blue-400:#1d4ed8',
	Blue: 'bg-blue-600:#2563eb',
	Purple: 'bg-purple-600:#7c3aed',
	Red: 'bg-red-500:#ef4444',
	Orange: 'bg-orange-500:#f59e0b',
	Yellow: 'bg-yellow-500:#fbbf24',
	Green: 'bg-green-500:#10b981',
	Forest: 'bg-green-600:#047857',
	Slate: 'bg-gray-800:#1f2937',
	Silver: 'bg-gray-500:#6b7280',
}

function colorMapping(name: string) {
	const colorValue =
		colorNameToClassMapping[name as keyof typeof colorNameToClassMapping] || 'bg-gray-500'
	return colorValue.split(':')
}

export { colorNameToClassMapping, colorMapping }
