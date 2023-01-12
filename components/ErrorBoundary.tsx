import React, { Component, ErrorInfo } from 'react'

type Props = {
	children?: React.ReactNode
}

type State = {
	hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(): State {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
