import PropTypes from "prop-types";
import { CenteredContainer, Label, Input } from "./Filter.styled";

export const Filter = ({ input }) => {
    return <CenteredContainer>
        <Label>Find contacts by name</Label>
        <Input name="name" onChange={input} placeholder="Name"></Input>
    </CenteredContainer>
}
Filter.propTypes = {
    input: PropTypes.func
}