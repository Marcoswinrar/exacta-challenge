import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline, MdMale, MdFemale } from 'react-icons/md'
import { ActionIconStyle } from '../../config/styles'

const GeneroIconStyle = css`
  margin-top: 6px;
`

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e7e5d8;
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 10px;

  div {
    width: 250px;
  }

  span {
    font-weight: bolder;
    text-transform: uppercase; 
  }

  text-align: center;

  ${media.lessThan("1160px")`
    flex-direction: column;

    .column__direction--item {
      width: 100%;
      text-align: justify;
      flex-direction: row;
    }

  `}

  .column__direction--item {
    display: flex;
    flex-direction: column;
  }

`
export const NomeUsuario = styled.div``

export const NumeroRg = styled.div``

export const DataEmissao = styled.div``

export const OrgaoEmissor = styled.div``

export const Genero = styled.div``

export const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 

  svg: first-child {
    margin-right: 8px;
  }
`

export const EditAction = styled(MdOutlineModeEditOutline)`
  ${ActionIconStyle}
`

export const DeleteAction = styled(MdOutlineDeleteOutline)`
  ${ActionIconStyle}
  background-color: crimson;
`

export const MaleIcon = styled(MdMale)`
  ${ActionIconStyle}
  ${GeneroIconStyle}
  background-color: #74b9ff;
`
export const FemaleIcon = styled(MdFemale)`
  ${ActionIconStyle}
  ${GeneroIconStyle}
  background-color: pink; 
`