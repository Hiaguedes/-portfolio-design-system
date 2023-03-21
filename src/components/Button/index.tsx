import React, { FC, HTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
    children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return(
        <S.ButtonBase {...rest}>
            {children}
        </S.ButtonBase>
    )
}

export default Button