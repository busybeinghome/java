import React from "react";

interface TextInputAreaProps{
	placeHolderP: string;        // Текст 
    labelTextP: string;         // Текст для лейблом
    disabledP: boolean;         // Флаг, указывающий, заблокирован ли ввод
    inputTextP?: string;        // Начальное значение текста
    setParentValueFromInput: (inputValue: string) => void 
}
// текстовое поле ввода с лейблом
const TextInputAreaC: React.FC<TextInputAreaProps> = 
	({
		placeHolderP,
		labelTextP,
		disabledP,
		inputTextP,
		setParentValueFromInput
	}) => {
	// Состояние для хранения текущего текста в поле ввода
	const [inputText, setInputText] = React.useState<string>(inputTextP === undefined ? "" : inputTextP);
	const [disabled, setDisabled] = React.useState<boolean>(disabledP);
	const [invalid, setInvalid] = React.useState<boolean>(false);
    // Обработчик изменения текста в поле ввода
	const changeInputText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(event.target.value); // Обновляем локальное состояние
		setParentValueFromInput(event.target.value);
	};

	return(
		// Основной контейнер
		<div className={"TextInputAreaContainer" + (disabled == true ? " Disabled" : "" )}>
			<div className="TextInputAreaHandler">
				{/* Label для текстового поля */}
				<label className="TextInputAreaLabel">{labelTextP}</label>
				{/* Само текстовое поле */}
				<textarea className="TextInputArea" placeholder={placeHolderP} value={inputText}
					onChange={changeInputText} onClick={() => setInvalid(false)} disabled={disabled}>
				</textarea>
			</div>
		</div>
	);
}

export default TextInputAreaC