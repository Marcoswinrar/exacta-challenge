import * as S from './styled'

const Select = ({ data, onChange, label }) => (
  <S.SelectWrapper>
    <S.Label>{label}</S.Label>
    <S.Select onChange={(e) => onChange(e.target.value)}>
      {data && data.map((d, index) => (
        <S.Option
          key={index}
          value={d.value}>
          {d.label}
        </S.Option>
      ))}
    </S.Select>
  </S.SelectWrapper>
)

export default Select