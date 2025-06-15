import React from "react"

interface PrimaryButtonProps{
	buttonTextP: string; // Текст, отображаемый на кнопке
	onClickP: () => void; // Функция, вызываемая при клике на кнопку
	disabledP: boolean; // Флаг, указывающий, отключена ли кнопка
	isSmallP?: boolean; 
}
// Компонент кнопки с основным стилем 
const PrimaryButtonC: React.FC<PrimaryButtonProps> = 
	({
		buttonTextP,
		onClickP,
		disabledP,
		isSmallP
	}) => {
	const [disabled, setDisabled] = React.useState<boolean>(disabledP);

	return (
		<button className={"PrimaryButtonContainer" + (isSmallP ? " small": "")} disabled={disabled} onClick={onClickP}>
			<label className={"PrimaryButtonText" + (isSmallP ? " small": "")}>
				{buttonTextP}
			</label>
		</button>
	)
}

export default PrimaryButtonC