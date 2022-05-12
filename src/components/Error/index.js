import { ErrorMessage } from "./styled"

const Error = ({ message }) => (
  <ErrorMessage className="error">{message}</ErrorMessage>
)

export default Error