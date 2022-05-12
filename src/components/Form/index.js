import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, InputLabel } from '../Input'
import Error from '../Error'
import InputMask from 'react-input-mask'
import { nomeValidator, rgValidator, selectValidator, dateValidator } from '../../utils/validator'
import { generoData, getValues, orgaoEmissorData } from '../../utils/mock'
import * as S from './styled'

const Form = ({ children, onSubmit, initialValues }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitSuccessful }
  } = useForm({ defaultValues: initialValues })

  useEffect(() => {
    if (isSubmitSuccessful) {
      setValue("NumeroRg", "")
      setValue("DataEmissao", "")

      reset({
        ...getValues()
      })
    }
  }, [isSubmitSuccessful, reset, setValue])

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.InputContainer>
          <InputLabel htmlFor='Nome'>Nome:</InputLabel>
          <Input
            id="Nome"
            className={errors.Nome && 'invalid'}
            {...register("Nome", { required: true, validate: (value) => nomeValidator(value) })}
          />
          {errors.Nome && errors.Nome.type === 'required' && <Error message={"Nome é Obrigatório"} />}
          {errors.Nome && <Error message={"Nome Inválido"} />}
        </S.InputContainer>
        <S.InputContainer>
          <InputLabel htmlFor="NumeroRg">Numero do RG:</InputLabel>
          <Controller
            name="NumeroRg"
            control={control}
            render={({ field }) => (
              <InputMask
                id={"NumeroRG"}
                className={errors.NumeroRg && 'invalid'}
                mask={"99.999.999-9"}
                value={field.value ?? ""}
                inputRef={field.ref}
                onChange={e => field.onChange(e)}
              />
            )}
            rules={{ required: true, validate: (value) => rgValidator(value) }}
          />
          {errors.NumeroRg && <Error message={"Formato de RG Inválido"} />}
        </S.InputContainer>
        <S.InputContainer>
          <InputLabel htmlFor='DataEmissao'>Data Emissão:</InputLabel>
          <Controller
            name="DataEmissao"
            control={control}
            render={({ field }) => (
              <InputMask
                className={errors.DataEmissao && 'invalid'}
                mask={"99/99/9999"}
                value={field.value ?? ""}
                inputRef={field.ref}
                onChange={e => field.onChange(e)}
              />
            )}
            rules={{ required: true, validate: (value) => dateValidator(value) }}
          />
          {errors.DataEmissao && <Error message={"Formato de Data inválido"} />}
        </S.InputContainer>
        <S.InputContainer>
          <InputLabel htmlFor='OrgaoEmissor'>Orgão Emissor:</InputLabel>
          <select
            className={errors.OrgaoEmissor && 'invalid'}
            {...register("OrgaoEmissor", { required: true, validate: (value) => selectValidator(value) })}>
            {orgaoEmissorData.map((om, index) => (
              <option
                key={index}
                value={om.value}>
                {om.label}
              </option>
            ))}
          </select>
          {errors.OrgaoEmissor && <Error message={"Orgão Emissor é Obrigatório"} />}
        </S.InputContainer>
        <S.InputContainer>
          <InputLabel htmlFor="Genero">Gênero:</InputLabel>
          <select
            className={errors.Genero && 'invalid'}
            {...register("Genero", { required: true, validate: (value) => selectValidator(value) })}>
            {generoData.map((genero, index) => (
              <option
                key={index}
                value={genero.value}>
                {genero.label}
              </option>
            ))}
          </select>
          {errors.Genero && <Error message={"Gênero é Obrigatório"} />}
        </S.InputContainer>
      </S.Container>
      {children}
    </S.Form >
  )

}

export default Form
