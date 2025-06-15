import React from "react"

import TextInputC from "../TextInputs/TextInputC"

import { Alert, AlertType } from "../../../models/Alert/Alert"

import PrimaryButtonC from "../Buttons/PrimaryButtonC"
import OutlinedButtonC from "../Buttons/OutlinedButtonC"

import RequestHandler from "../../../RequestHandler"
import { useAuth } from "../../../hooks/useAuth"
import { useAlert } from "../../../hooks/useAlert"

interface RegistrationFormProps{
	onLoginClickP : () => void //переход к форме входа
	onRegisterClickP : () => void, //обработка регистрации
}

const RegistrationFormC: React.FC<RegistrationFormProps> = 
	({
		onLoginClickP
	}) => {
    // Состояния для хранения значений email и пароля
	const [emailValue, setEmailValue] = React.useState<string>("");
	const [passwordValue, setPasswordValue] = React.useState<string>("");
	const { registrate, setAsUnauthorized } = useAuth();
	const {addAlert} = useAlert();
    // форма регистрации
	return (
		<div className="RegistrationFormContainer">
			{/* Заголовок формы */}
			<h1 className="RegistrationFormHeader">Регистрация</h1>
			{/* Основной блок формы */}
			<div className="RegistrationForm">
				{/* Поле ввода email */}
				<TextInputC placeHolderP="" labelTextP="Электронная почта" disabledP={false} setParentValueFromInputP={setEmailValue}/>
				{/* Поле ввода пароля */}
				 <TextInputC placeHolderP="" labelTextP="Пароль" disabledP={false} setParentValueFromInputP={setPasswordValue}/>
				 {/* Блок кнопок */}
				 <div className="RegistrationFormButtons">
					{/* Основная кнопка для регистрации */}
					{/* Вторичная кнопка для перехода к форме входа */}
					<PrimaryButtonC disabledP={false} onClickP={() => registrate(emailValue, passwordValue)} buttonTextP="Зарегестрироваться"/>
					<OutlinedButtonC disabledP={false} onClickP={onLoginClickP} buttonTextP="Войти"/>
				</div>
			</div>
		</div>)

}

export default RegistrationFormC
