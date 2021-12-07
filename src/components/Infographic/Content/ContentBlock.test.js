import React from 'react';
import { render } from '@testing-library/react';
import ContentBlock from './ContentBlock';
import AbcIcon from '@mui/icons-material/Abc';

describe('ContentBlock', () => {
    let element;
    let children = 'children';

    let sources = {
        sourcePrefix: 'source-sourcePrefix',
        sourceContent: [
            {
                name: 'source-name',
                link: 'source-link',
            },
        ],
    };

    let list = {
        items: [
            {
                name: 'list-name',
                description: 'list-description',
            },
        ],
    };

    beforeEach(() => {
        const icon = <img alt='icon' src={AbcIcon} />;
        element = render(
            <ContentBlock
                header='header'
                text='text'
                icon={icon}
                list={list}
                sources={sources}
            >
                {children}
            </ContentBlock>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders header text', () => {
        expect(element.getByTestId('content-block-header')).toBeTruthy();
    });

    it('renders card', () => {
        expect(element.getByTestId('content-block-card')).toBeTruthy();
    });

    it('renders card content', () => {
        expect(element.getByTestId('content-block-card-content')).toBeTruthy();
    });

    it('renders icon', () => {
        expect(element.getByTestId('content-block-icon')).toBeTruthy();
    });

    it('renders card text', () => {
        expect(element.getByTestId('content-block-text')).toBeTruthy();
    });

    it('renders list', () => {
        expect(element.getByText('list-name')).toBeTruthy();
    });

    it('renders children', () => {
        expect(element.getByText(children)).toBeTruthy();
    });

    it('renders sources', () => {
        expect(element.getByTestId('content-block-sources')).toBeTruthy();
    });
});
