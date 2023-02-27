import {FormControl, FormHelperText, FormLabel, Input} from '@chakra-ui/react'
import {Control, useController} from "react-hook-form";

interface Props {
    control: Control,
    label: 'string',
    name: 'string',
    type: 'string',
}

const LabeledInput = ({control, label, name, type}: Props): JSX.Element => {
    const {field, fieldState: {error}} = useController({name, control})

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input type={type} {...field} />
            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    )
}

export default LabeledInput
