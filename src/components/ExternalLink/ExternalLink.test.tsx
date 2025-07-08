import { fireEvent, render } from '@testing-library/react-native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';
import { ExternalLink } from './ExternalLink';

jest.mock('expo-web-browser', () => ({ openBrowserAsync: jest.fn() }));
jest.mock('expo-router', () => ({ Link: 'Text' }));

describe('ExternalLink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children', () => {
    const { getByText } = render(<ExternalLink href="https://example.com">Test Link</ExternalLink>);
    expect(getByText('Test Link')).toBeTruthy();
  });

  it('calls openBrowserAsync on press (native)', async () => {
    const originalOS = Platform.OS;
    // @ts-ignore
    Platform.OS = 'ios';
    const openBrowserAsyncMock = jest
      .spyOn(WebBrowser, 'openBrowserAsync')
      .mockResolvedValueOnce({} as any);
    const { getByText } = render(<ExternalLink href="https://example.com">Test Link</ExternalLink>);
    const event = { preventDefault: jest.fn() };
    fireEvent(getByText('Test Link'), 'press', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(openBrowserAsyncMock).toHaveBeenCalledWith('https://example.com');
    // @ts-ignore
    Platform.OS = originalOS;
  });
});
