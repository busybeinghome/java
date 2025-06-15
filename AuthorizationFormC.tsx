import React from "react"

import TextInputC from "../TextInputs/TextInputC"

import PrimaryButtonC from "../Buttons/PrimaryButtonC"
import OutlinedButtonC from "../Buttons/OutlinedButtonC"
import { useAuth } from "../../../hooks/useAuth"


interface AuthorizationFormProps{
	onRegisterClickP : () => void,  // переход к форме регистрации
	onLoginClickP : () => void //обработка входа
}

const AuthorizationFormC: React.FC<AuthorizationFormProps> = 
	({
		onRegisterClickP
	}) => {
    // хранения значений email и password
	const [emailValue, setEmailValue] = React.useState<string>("");
	const [passwordValue, setPasswordValue] = React.useState<string>("");
	const {authorize} = useAuth()

	return (
		<div className="AuthorizationFormContainer">
			{/* Заголовок формы */}
			<h1 className="AuthorizationFormHeader">Вход в аккаунт</h1>
			{/* Основная часть формы */}
			<div className="AuthorizationForm">
				{/* Поле ввода email */}
				<TextInputC placeHolderP="" labelTextP="Электронная почта" disabledP={false} setParentValueFromInputP={setEmailValue}/>
				{/* Поле ввода пароля */}
				<TextInputC placeHolderP="" labelTextP="Пароль" disabledP={false} setParentValueFromInputP={setPasswordValue}/>
				{/* Контейнер с кнопками */}
				<div className="AuthorizationFormButtons">
					{/* Кнопка входа - вызывает функцию authorize с email и паролем */}
					<PrimaryButtonC disabledP={false} onClickP={() => authorize(emailValue,passwordValue)} buttonTextP="Войти"/>
					{/* Кнопка перехода к регистрации */}
					<OutlinedButtonC disabledP={false} onClickP={onRegisterClickP} buttonTextP="Регистрация"/>
				</div>
			</div>
		</div>)

}

export default AuthorizationFormC
