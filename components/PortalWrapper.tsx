import React, { ReactNode, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface IPortalWrapperProps {
	children: ReactNode
	wrapperId: string
}

function PortalWrapper({ children, wrapperId }: IPortalWrapperProps) {
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, [wrapperId]);

	return mount ? createPortal(children, document.getElementById(wrapperId)) : null
}
export default PortalWrapper
