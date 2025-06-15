import React from "react"

interface OutlinedButtonProps{
	buttonTextP: string; // Текст, отображаемый на кнопке
	onClickP: () => void; // Функция, вызываемая при клике на кнопку
	disabledP: boolean; // Флаг, указывающий, активна ли кнопка
}

// Компонент контурной кнопки
const OutlinedButtonC: React.FC<OutlinedButtonProps> = 
	({
		buttonTextP,    // Получаем текст кнопки
        onClickP,       // Получаем обработчик клика 
        disabledP      // Получаем состояние
	}) => {
	const [disabled, setDisabled] = React.useState<boolean>(disabledP);

	return (
		<button id="OutlinedButtonContainer" className="OutlinedButtonContainer" disabled={disabled} onClick={onClickP}>
			{/* Текст кнопки, стилизованный через класс OutlinedButtonText */}
			<label className="OutlinedButtonText">
				{buttonTextP}
			</label>
		</button>
	)
}

export default OutlinedButtonC