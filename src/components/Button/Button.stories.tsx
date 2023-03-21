import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Button from '.'

export default {
    title: 'components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Ola</Button>