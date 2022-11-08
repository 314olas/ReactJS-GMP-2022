import React from 'react'
import '../styles/components/modal.scss'
import Close from './Icons/Close'
import PortalWrapper from './PortalWrapper'

interface IModalProps {
	additionalClass?: string
	position?: string
	children: React.ReactElement
	isOpen: boolean
	portalId?: string
	toggleOpen: (value: boolean) => void
}
export default function Modal({
	children,
	additionalClass,
	position = 'center',
	isOpen,
	portalId = '',
	toggleOpen
}: IModalProps) {
	const modalTemplate = (
		<>
			{isOpen && (
				<>
					<div
						className={['modal', additionalClass, position, isOpen ? 'open' : ''].join(
							' '
						)}
						aria-modal='true'
						role='dialog'
					>
						<div className={['modal__dialog', position].join(' ')}>
							<div className='modal__content'>
								<button
									type='button'
									className='modal__close-btn'
									onClick={() => toggleOpen(false)}
									aria-label='Close'
								>
									<Close className='close-icon' />
								</button>
								{children}
							</div>
						</div>

						<button
							type='button'
							className='modal-backdrop'
							aria-label='Close'
							onClick={() => toggleOpen(false)}
						></button>
					</div>
				</>
			)}
		</>
	)

	return portalId
		? PortalWrapper({ children: modalTemplate, wrapperId: portalId })
		: modalTemplate
}
