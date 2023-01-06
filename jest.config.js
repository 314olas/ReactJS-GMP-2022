module.exports = {
	roots: ['<rootDir>/__tests__'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {}]
	},
	clearMocks: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__tests__/moks/fileMoks.js',
		'\\.(scss)$': '<rootDir>/__tests__/moks/styleMoks.js'
	},
	coverageDirectory: '<rootDir>/coverage',
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js']
}
