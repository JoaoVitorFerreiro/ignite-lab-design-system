import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    args : {
        children: (
        [    
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='joao@example.com'></TextInput.Input>
        ]
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
           }
    },
} as Meta<TextInputRootProps>;

export const Default : StoryObj<TextInputRootProps> = {};

export const WithoutIcon : StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder='joao@example.com'></TextInput.Input>
    }
};

