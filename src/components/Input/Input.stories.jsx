import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = {
    args: {
     
    },
}

export const Testpasswordtype = {
    args: {
        type: "password"
    },
}

export const DisabledField = {
  args: {
    placeholder: 'Kan inte ändras',
    type: 'text',
    disabled: true,
    onChange: () => {},
  },
};