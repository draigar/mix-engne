import React from 'react';
import { createAvatar } from '@dicebear/core';
import { loreleiNeutral } from '@dicebear/collection';
import { notification } from 'antd';

export const functions = {
    userImage(name: string) {
        const avatar = createAvatar(loreleiNeutral, {
            seed: name,
            radius: 0,
            backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf']
        });
        return avatar.toDataUriSync()
    },
    generateRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    displayErrorMessages(messages: string | string[], title: string, type: 'warning' | 'error'): void {
        const messagesArray = Array.isArray(messages) ? messages : [messages];

        const errorMessage = messagesArray.map((message, index) => (
            message + `\n`
        ));
        notification.error({
            type: type,
            message: title,
            description: errorMessage,
        });
    }
}