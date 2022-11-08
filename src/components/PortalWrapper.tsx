import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface IPortalWrapperProps {
	children: ReactNode
	wrapperId: string
}

function PortalWrapper({ children, wrapperId }: IPortalWrapperProps) {
	return createPortal(children, document.getElementById(wrapperId))
}
export default PortalWrapper
